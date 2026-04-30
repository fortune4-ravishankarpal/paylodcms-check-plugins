import type { Payload } from 'payload'

export const seedFooter = async (payload: Payload) => {
  try {
    await payload.updateGlobal({
      slug: 'footer',
      data: {
        columns: [],
      },
    })

    await payload.updateGlobal({
      slug: 'footer',
      data: {
        columns: [
          {
            title: 'COMPANY',
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/',
                  label: 'Home',
                  newTab: false,
                },
              },
              {
                link: {
                  type: 'custom',
                  url: '/about-us',
                  label: 'About Us',
                  newTab: false,
                },
              },

              {
                link: {
                  type: 'custom',
                  url: '/pricing',
                  label: 'Pricing',
                  newTab: false,
                },
              },
              {
                link: {
                  type: 'custom',
                  url: '#;',
                  label: 'Blogs',
                  newTab: false,
                },
              },
              {
                link: {
                  type: 'custom',
                  url: '/career',
                  label: 'Career',
                  newTab: false,
                },
              },
              {
                link: {
                  type: 'custom',
                  url: '/faq',
                  label: 'FAQ',
                  newTab: false,
                },
              },
              {
                link: {
                  type: 'custom',
                  url: '/get-in-touch',
                  label: 'Get in Touch',
                  newTab: false,
                },
              },
            ],
          },
          {
            title: 'SERVICE',
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/live-tender',
                  label: 'Live Tender',
                  newTab: false,
                },
              },
              {
                link: {
                  type: 'custom',
                  url: '/portal-registrations',
                  label: 'Portal Registration',
                  newTab: false,
                },
              },
              {
                link: {
                  type: 'custom',
                  url: '/vendor-assessment',
                  label: 'Vendor Assessment',
                  newTab: false,
                },
              },

              {
                link: {
                  type: 'custom',
                  url: '/product-upload',
                  label: 'Product Upload',
                  newTab: false,
                },
              },
              {
                link: {
                  type: 'custom',
                  url: '/bid-assistance',
                  label: 'Bid Assistance',
                  newTab: false,
                },
              },
              {
                link: {
                  type: 'custom',
                  url: '/competitors-analytics',
                  label: 'Competitors Analytics',
                  newTab: false,
                },
              },
              {
                link: {
                  type: 'custom',
                  url: '/distributor-management',
                  label: 'Distributor Management',
                  newTab: false,
                },
              },
              {
                link: {
                  type: 'custom',
                  url: '/oem-empanelment',
                  label: 'OEM Empanelment',
                  newTab: false,
                },
              },
              {
                link: {
                  type: 'custom',
                  url: '/boq',
                  label: 'BOQ',
                  newTab: false,
                },
              },
              {
                link: {
                  type: 'custom',
                  url: '/database-aggregator',
                  label: 'Database Aggregator',
                  newTab: false,
                },
              },
              {
                link: {
                  type: 'custom',
                  url: '/potential-partner',
                  label: 'Potential Partner',
                  newTab: false,
                },
              },
              {
                link: {
                  type: 'custom',
                  url: '/l1-comparison',
                  label: 'L1 Comparison',
                  newTab: false,
                },
              },
              {
                link: {
                  type: 'custom',
                  url: '/rfq-creation',
                  label: 'RFQ/RFP Creation',
                  newTab: false,
                },
              },
              {
                link: {
                  type: 'custom',
                  url: '/nit-creation',
                  label: 'NIT Creation',
                  newTab: false,
                },
              },
              {
                link: {
                  type: 'custom',
                  url: '/digital-solutions',
                  label: 'Digital Solutions',
                  newTab: false,
                },
              },
            ],
          },
          {
            title: 'VALUE ADDED SERVICE',
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/company-registration',
                  label: 'Company Registration',
                  newTab: false,
                },
              },
              {
                link: {
                  type: 'custom',
                  url: '/udyam-certificate',
                  label: 'UDYAM Certificate',
                  newTab: false,
                },
              },
              {
                link: {
                  type: 'custom',
                  url: '/iso-certificate',
                  label: 'ISO Certificate',
                  newTab: false,
                },
              },
              {
                link: {
                  type: 'custom',
                  url: '/bis-certificate',
                  label: 'BIS Certificate',
                  newTab: false,
                },
              },
              {
                link: {
                  type: 'custom',
                  url: '/cdsco',
                  label: 'CDSCO ',
                  newTab: false,
                },
              },
              {
                link: {
                  type: 'custom',
                  url: '/digital-signature',
                  label: 'Digital Signature',
                  newTab: false,
                },
              },
              {
                link: {
                  type: 'custom',
                  url: '/labour-license',
                  label: 'Labour License',
                  newTab: false,
                },
              },
              {
                link: {
                  type: 'custom',
                  url: '/electrical-license',
                  label: 'Electrical License',
                  newTab: false,
                },
              },
              {
                link: {
                  type: 'custom',
                  url: '/drug-license',
                  label: 'Drug License',
                  newTab: false,
                },
              },
              {
                link: {
                  type: 'custom',
                  url: '/peso-license',
                  label: 'PESO License',
                  newTab: false,
                },
              },
              {
                link: {
                  type: 'custom',
                  url: '/fssai-license',
                  label: 'FSSAI License',
                  newTab: false,
                },
              },
              {
                link: {
                  type: 'custom',
                  url: '/epf-certificate',
                  label: 'EPF Certificate',
                  newTab: false,
                },
              },
              {
                link: {
                  type: 'custom',
                  url: '/esic-certificate',
                  label: 'ESIC Certificate',
                  newTab: false,
                },
              },
              {
                link: {
                  type: 'custom',
                  url: '/trademark-services',
                  label: 'Trademark Services',
                  newTab: false
                }
              }
            ],
          },
        ],
      },
    })
    payload.logger.info('Footer global seeded')
  } catch (error) {
    payload.logger.error(
      `Footer Failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
    )
  }
}
