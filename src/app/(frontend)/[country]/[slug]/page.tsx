import type { Metadata } from 'next'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload, type RequiredDataFromCollectionSlug } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import { homeStatic } from '@/endpoints/seed/home-static'

import { RenderBlocks } from '@/blocks/RenderBlocks'
import { RenderHero } from '@/heros/RenderHero'
import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })

  const tenants = await payload.find({
    collection: 'tenants',
    limit: 1000,
    pagination: false,
  })

  const params = await Promise.all(
    tenants.docs.map(async (tenant) => {
      const countries = (tenant.countries as any[]) || []
      const pages = await payload.find({
        collection: 'pages',
        draft: false,
        limit: 1000,
        pagination: false,
        select: { slug: true },
        where: { tenant: { equals: tenant.id } },
      })

      return countries.flatMap((country) => {
        return pages.docs.map(({ slug }) => ({
          country: country.code,
          slug,
        }))
      })
    }),
  )

  return params.flat()
}

type Args = {
  params: Promise<{ country: string; slug: string }>
}

export default async function Page({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()

  const { country, slug } = await paramsPromise
  console.log('[ country/slug ] >', country, slug)
  const pageSlug = slug || 'home'

  let page: RequiredDataFromCollectionSlug<'pages'> | null = await queryPageBySlug({
    countryCode: country,
    slug: pageSlug,
  })

  // Remove this code once your website is seeded
  if (!page && pageSlug === 'home') {
    page = homeStatic
  }

  if (!page) {
    const url = '/' + pageSlug
    return <PayloadRedirects url={url} />
  }

  const { hero, layout } = page

  return (
    <article className="pt-16 pb-24">
      <PageClient />
      <PayloadRedirects disableNotFound url={`/${country}/${pageSlug}`} />

      {draft && <LivePreviewListener />}

      <RenderHero {...hero} />
      <RenderBlocks blocks={layout} />
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { country, slug } = await paramsPromise
  const pageSlug = slug || 'home'

  const page = await queryPageBySlug({ countryCode: country, slug: pageSlug })
  return generateMeta({ doc: page })
}

const queryPageBySlug = cache(
  async ({ countryCode, slug }: { countryCode: string; slug: string }) => {
    const { isEnabled: draft } = await draftMode()
    const payload = await getPayload({ config: configPromise })

    // 1. Find the tenant that has this country code
    const tenants = await payload.find({
      collection: 'tenants',
      where: {
        'countries.code': { equals: countryCode }
      },
      limit: 1,
    })

    const tenant = tenants.docs[0]
    if (!tenant) return null

    // 2. Find the page for this tenant
    const result = await payload.find({
      collection: 'pages',
      draft,
      limit: 1,
      pagination: false,
      overrideAccess: draft,
      where: {
        and: [
          { slug: { equals: slug } },
          { tenant: { equals: tenant.id } }
        ],
      },
    })

    return result.docs?.[0] || null
  },
)
