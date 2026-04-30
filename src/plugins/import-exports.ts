import { importExportPlugin } from '@payloadcms/plugin-import-export'

export const importExportPluginConfig = importExportPlugin({
  collections: [
    {
      slug: 'document-categories',
      import: {
        disableJobsQueue: true,
      },
    },
    {
      slug: 'articles',
      import: {
        disableJobsQueue: true,
      },
    },
    {
      slug: 'document-sub-categories',
      import: {
        disableJobsQueue: true,
      },
    },
    {
      slug: 'media',
      import: {
        disableJobsQueue: true,
      },
    },
    {
      slug: 'states',
      import: {
        disableJobsQueue: true,
      },
    },
    {
      slug: 'users',
      import: {
        disableJobsQueue: true,
      },
    },
    {
      slug: 'faq',
      import: {
        disableJobsQueue: true,
      },
    },
    {
      slug: 'business',
      import: {
        disableJobsQueue: true,
      },
    },
    {
      slug: 'wishlist',
      import: {
        disableJobsQueue: true,
      },
    },
    {
      slug: 'emailTemplate',
      import: {
        disableJobsQueue: true,
      },
    },
    {
      slug: 'portalRegistration',
      import: {
        disableJobsQueue: true,
      },
    },
    {
      slug: 'MyKeywordPlanner',
      import: {
        disableJobsQueue: true,
      },
    },
    {
      slug: 'leadEnquiry',
      import: {
        disableJobsQueue: true,
      },
    },
    {
      slug: 'assign_tenders',
      import: {
        disableJobsQueue: true,
      },
    },
    {
      slug: 'one-time-subscription',
      import: {
        disableJobsQueue: true,
      },
    },
    {
      slug: 'static-page-seo',
      import: {
        disableJobsQueue: true,
      },
    },
    {
      slug: 'products',
      import: {
        disableJobsQueue: true,
      },
    },
    {
      slug: 'features',
      import: {
        disableJobsQueue: true,
      },
    },
    {
      slug: 'product-features',
      import: {
        disableJobsQueue: true,
      },
    },
  ],
})
