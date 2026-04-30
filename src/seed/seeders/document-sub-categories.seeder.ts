import type { Payload } from 'payload'

export const seedDocumentSubCategories = async (payload: Payload): Promise<void> => {
  console.log('Seeding document subcategories...')

  // First, fetch all categories to get their IDs
  const categories = await payload.find({
    collection: 'document-categories',
    limit: 100,
  })

  const categoryMap = new Map(categories.docs.map((cat) => [cat.slug, cat.id]))

  const subcategories = [
    {
      name: 'Certificate of Incorporation',
      slug: 'certificate-of-incorporation',
      category: 'company-registration-documents',
      discription:'Upload certificate of incorporation issued by ROC.'
    },
    {
      name: 'Memorandum of Association (MOA)',
      slug: 'moa',
      category: 'company-registration-documents',
    },
    {
      name: 'Articles of Association (AOA)',
      slug: 'aoa',
      category: 'company-registration-documents',
    },
    {
      name: 'Company Registration Certificate',
      slug: 'company-registration-certificate',
      category: 'company-registration-documents',
    },
    {
      name: 'Partnership Deed',
      slug: 'partnership-deed',
      category: 'company-registration-documents',
    },

    {
      name: 'GST Registration Certificate',
      slug: 'gst-registration-certificate',
      category: 'tax-compliance-documents',
    },
    { name: 'Latest GST Return', slug: 'latest-gst-return', category: 'tax-compliance-documents' },
    { name: 'PAN Card', slug: 'pan-card', category: 'tax-compliance-documents' },
    { name: 'TAN Certificate', slug: 'tan-certificate', category: 'tax-compliance-documents' },
    {
      name: 'Professional Tax Certificate',
      slug: 'professional-tax-certificate',
      category: 'tax-compliance-documents',
    },

    {
      name: 'Audited Balance Sheet – Year 1',
      slug: 'balance-sheet-y1',
      category: 'financial-documents',
    },
    {
      name: 'Audited Balance Sheet – Year 2',
      slug: 'balance-sheet-y2',
      category: 'financial-documents',
    },
    {
      name: 'Audited Balance Sheet – Year 3',
      slug: 'balance-sheet-y3',
      category: 'financial-documents',
    },
    {
      name: 'Audited Balance Sheet – Year 4',
      slug: 'balance-sheet-y4',
      category: 'financial-documents',
    },
    {
      name: 'Audited Balance Sheet – Year 5',
      slug: 'balance-sheet-y5',
      category: 'financial-documents',
    },
    {
      name: 'Profit & Loss Statement',
      slug: 'profit-loss-statement',
      category: 'financial-documents',
    },
    { name: 'Turnover Certificate', slug: 'turnover-certificate', category: 'financial-documents' },
    { name: 'CA Certificate', slug: 'ca-certificate', category: 'financial-documents' },
    {
      name: 'Net Worth Certificate',
      slug: 'net-worth-certificate',
      category: 'financial-documents',
    },
    {
      name: 'Income Tax Returns (ITR)',
      slug: 'income-tax-returns',
      category: 'financial-documents',
    },

    {
      name: 'Authorization Letter',
      slug: 'authorization-letter',
      category: 'authorized-signatory-documents',
    },
    {
      name: 'Board Resolution / Power of Attorney',
      slug: 'board-resolution-poa',
      category: 'authorized-signatory-documents',
    },
    {
      name: 'Signatory PAN Card',
      slug: 'signatory-pan-card',
      category: 'authorized-signatory-documents',
    },
    {
      name: 'Signatory Aadhaar / ID Proof',
      slug: 'signatory-id-proof',
      category: 'authorized-signatory-documents',
    },

    { name: 'Bank Account Details', slug: 'bank-account-details', category: 'bank-details' },
    { name: 'Cancelled Cheque', slug: 'cancelled-cheque', category: 'bank-details' },
    { name: 'Latest Bank Statement', slug: 'latest-bank-statement', category: 'bank-details' },

    {
      name: 'Purchase Orders',
      slug: 'purchase-orders',
      category: 'experience-work-proof-documents',
    },
    {
      name: 'Tenders Awarded Documents',
      slug: 'tenders-awarded-documents',
      category: 'experience-work-proof-documents',
    },
    {
      name: 'Work Completion Certificates',
      slug: 'work-completion-certificates',
      category: 'experience-work-proof-documents',
    },
    {
      name: 'Experience Certificates',
      slug: 'experience-certificates',
      category: 'experience-work-proof-documents',
    },

    {
      name: 'Awards & Recognition Certificates',
      slug: 'awards-recognition-certificates',
      category: 'awards-recommendations',
    },
    {
      name: 'Performance / Recommendation Letters',
      slug: 'recommendation-letters',
      category: 'awards-recommendations',
    },

    { name: 'Undertaking', slug: 'undertaking', category: 'legal-declaration-documents' },
    { name: 'Affidavit', slug: 'affidavit', category: 'legal-declaration-documents' },
    { name: 'Self Declaration', slug: 'self-declaration', category: 'legal-declaration-documents' },
  ]

  for (const subcat of subcategories) {
    const categoryId = categoryMap.get(subcat.category)

    if (!categoryId) {
      console.log(`Category not found for slug: ${subcat.category}, skipping ${subcat.name}`)
      continue
    }

    const existing = await payload.find({
      collection: 'document-sub-categories',
      where: {
        slug: {
          equals: subcat.slug,
        },
      },
      limit: 1,
    })

    if (existing.docs.length === 0) {
      await payload.create({
        collection: 'document-sub-categories',
        data: {
          name: subcat.name,
          slug: subcat.slug,
          category: categoryId,
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
      })
      // console.log(`Created subcategory: ${subcat.name}`)
    } else {
      payload.logger.info(`Subcategory already exists: ${subcat.name}`)
    }
  }

  payload.logger.info('Document subcategories seeded successfully!')
}
