import type { Metadata } from 'next'

import { RelatedPosts } from '@/blocks/RelatedPosts/Component'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import RichText from '@/components/RichText'

import type { Post } from '@/payload-types'

import { PostHero } from '@/heros/PostHero'
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
      const posts = await payload.find({
        collection: 'posts',
        draft: false,
        limit: 1000,
        pagination: false,
        select: { slug: true },
        where: { tenant: { equals: tenant.id } },
      })

      return countries.flatMap((country) => {
        return posts.docs.map(({ slug }) => ({
          country: country.code,
          slug,
        }))
      })
    }),
  )

  return params.flat()
}

type Args = {
  params: Promise<{
    country: string
    slug?: string
  }>
}

export default async function Post({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { country, slug = '' } = await paramsPromise
  // Decode to support slugs with special characters
  const decodedSlug = decodeURIComponent(slug)
  const url = '/posts/' + decodedSlug
  const post = await queryPostBySlug({
    countryCode: country,
    slug: decodedSlug,
  })

  if (!post) return <PayloadRedirects url={url} />

  return (
    <article className="pt-16 pb-16">
      <PageClient />

      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={`/${country}/posts/${decodedSlug}`} />

      {draft && <LivePreviewListener />}

      <PostHero post={post} />

      <div className="flex flex-col items-center gap-4 pt-8">
        <div className="container">
          <RichText className="max-w-[48rem] mx-auto" data={post.content} enableGutter={false} />
          {post.relatedPosts && post.relatedPosts.length > 0 && (
            <RelatedPosts
              className="mt-12 max-w-[52rem] lg:grid lg:grid-cols-subgrid col-start-1 col-span-3 grid-rows-[2fr]"
              docs={post.relatedPosts.filter((post) => typeof post === 'object')}
            />
          )}
        </div>
      </div>
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { country, slug = '' } = await paramsPromise
  // Decode to support slugs with special characters
  const decodedSlug = decodeURIComponent(slug)
  const post = await queryPostBySlug({ countryCode: country, slug: decodedSlug })

  return generateMeta({ doc: post })
}

const queryPostBySlug = cache(
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

    // 2. Find the post for this tenant
    const result = await payload.find({
      collection: 'posts',
      draft,
      limit: 1,
      overrideAccess: draft,
      pagination: false,
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
