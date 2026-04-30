import type { Payload } from 'payload'

export const seedHeader = async (payload: Payload) => {
  try {
    await payload.updateGlobal({
      slug: 'header',
      data: {
        navItems: [],
      },
    })

    await payload.updateGlobal({
      slug: 'header',
      data: {
        navItems: [
          {
            link: {
              type: 'custom',
              newTab: null,
              // url: '/competitor-analytics',
              url: '/live-tender',
              label: 'Live Tender',
            },
          },
          {
            link: {
              type: 'custom',
              newTab: null,
              url: '/portal-registrations',
              label: 'Portal Registration',
            },
          },
          {
            link: {
              type: 'custom',
              newTab: null,
              url: '/vendor-assessment',
              label: 'Vendor Assessment',
            },
          },
          {
            link: {
              type: 'custom',
              newTab: null,
              url: '/product-upload',
              label: 'Product Upload',
            },
          },
          {
            link: {
              type: 'custom',
              newTab: null,
              url: '/bid-assistance',
              label: 'Bid Assistance',
            },
          },
        ],
      },
    })
    payload.logger.info('header global seeded')
  } catch (error) {
    payload.logger.error(
      `header Failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
    )
  }
}
