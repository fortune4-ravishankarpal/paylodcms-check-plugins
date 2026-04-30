import type { Payload } from 'payload'

export const seedDocumentCategories = async (payload: Payload): Promise<void> => {
  const categories = [
    { name: 'Company Registration Documents', slug: 'company-registration-documents' },
    { name: 'Tax & Compliance Documents', slug: 'tax-compliance-documents' },
    { name: 'Financial Documents', slug: 'financial-documents' },
    { name: 'Authorized Signatory Documents', slug: 'authorized-signatory-documents' },
    { name: 'Bank Details', slug: 'bank-details' },
    { name: 'Experience & Work Proof Documents', slug: 'experience-work-proof-documents' },
    { name: 'Awards & Recommendations', slug: 'awards-recommendations' },
    { name: 'Legal & Declaration Documents', slug: 'legal-declaration-documents' },
  ]

  for (const category of categories) {
    const existing = await payload.find({
      collection: 'document-categories',
      where: { slug: { equals: category.slug } },
      limit: 1,
    })

    if (!existing.docs.length) {
      await payload.create({
        collection: 'document-categories',
        data: category,
      })
    }
  }
}
