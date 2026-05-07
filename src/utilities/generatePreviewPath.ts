import { PreviewSearchParams } from '@/app/(frontend)/next/preview/route'
import { PayloadRequest, CollectionSlug } from 'payload'
import { Tenant } from '@/payload-types'

const collectionPrefixMap: Partial<Record<CollectionSlug, string>> = {
  posts: '/posts',
  pages: '',
}

type Props = {
  collection: keyof typeof collectionPrefixMap
  slug: string
  req: PayloadRequest
  tenant?: number | Tenant | null
}

export const generatePreviewPath = async ({ collection, slug, tenant, req }: Props) => {
  if (slug === undefined || slug === null) {
    return null
  }

  let countryCode = 'in' // Default fallback

  let resolvedTenant = tenant || (req as any).tenant
  if ((typeof resolvedTenant === 'number' || typeof resolvedTenant === 'string') && req.payload) {
    resolvedTenant = await req.payload.findByID({
      collection: 'tenants',
      id: resolvedTenant as any,
      depth: 0,
    })
  }

  if (
    resolvedTenant &&
    typeof resolvedTenant === 'object' &&
    resolvedTenant.countries &&
    resolvedTenant.countries.length > 0
  ) {
    countryCode = resolvedTenant.countries[0].code
  }

  // Encode to support slugs with special characters
  const encodedSlug = encodeURIComponent(slug)

  const encodedParams = new URLSearchParams({
    path: `/${countryCode}${collectionPrefixMap[collection]}/${encodedSlug}`,
    previewSecret: process.env.PREVIEW_SECRET || '',
  } satisfies PreviewSearchParams)

  const url = `/next/preview?${encodedParams.toString()}`

  return url
}
