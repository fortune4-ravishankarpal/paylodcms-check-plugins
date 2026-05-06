import type { Metadata } from 'next/types'

import { CollectionArchive } from '@/components/CollectionArchive'
import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'

export const dynamic = 'force-dynamic'

type Args = {
  params: Promise<{
    country: string
  }>
}

export default async function Page({ params: paramsPromise }: Args) {
  const { country } = await paramsPromise
  const payload = await getPayload({ config: configPromise })

  // 1. Find the tenant that has this country code
  const tenants = await payload.find({
    collection: 'tenants',
    where: {
      'countries.code': { equals: country }
    },
    limit: 1,
  })

  const tenant = tenants.docs[0]
  if (!tenant) {
      return <div>Tenant not found for country: {country}</div>
  }

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 12,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
    },
    where: {
      tenant: { equals: tenant.id }
    },
  })

  return (
    <div className="pt-24 pb-24">
      <PageClient />
      <div className="container mb-16">
        <div className="prose dark:prose-invert max-w-none">
          <h1>Posts</h1>
        </div>
      </div>

      <div className="container mb-8">
        <PageRange
          collection="posts"
          currentPage={posts.page}
          limit={12}
          totalDocs={posts.totalDocs}
        />
      </div>

      <CollectionArchive posts={posts.docs} />

      <div className="container">
        {posts.totalPages > 1 && posts.page && (
          <Pagination page={posts.page} totalPages={posts.totalPages} />
        )}
      </div>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Payload Website Template Posts`,
  }
}
