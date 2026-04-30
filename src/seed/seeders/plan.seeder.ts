import type { Payload } from 'payload'
import { seedFeatures } from './features.seeder'
import { seedProductFeatures } from './product-features.seeder'

export const seedProducts = async (payload: Payload) => {
  try {
    // 1️⃣ Ensure base data exists
    await seedFeatures(payload)
    await seedProductFeatures(payload)

    // 2️⃣ Fetch all product-features 
    const productFeaturesRes = await payload.find({
      collection: 'product-features',
      limit: 100,
    })

    // Map featureLabel → ID
    const featureMap = new Map(
      productFeaturesRes.docs.map((pf) => [pf.featureLabel.trim().toLowerCase(), pf.id]),
    )

    const products = [
      {
        name: 'Premium Plan',
        code: 'premium',
        maxStates: 30,
        price: 30000,
        gstPercentage: 18,
        tagline: 'Best for enterprises & serious bidders with nationwide operations',
        features: [
          'Live tenders - Pan India',
          'Tender submission - 15',
          'Email alerts - 3',
          'Distributor access - 10',
          'Portal Registration - 5',
          'Catalogue Creation',
          'Tender Result',
          'Dedicated Account Manager',

        ],
      },
      {
        name: 'Standard Plan',
        code: 'standard',
        maxStates: 3,
        price: 20000,
        gstPercentage: 18,
        tagline: 'Best for organizations needing guided support & quick help',
        features: [
          'Live tenders - Up to 3 States',
          'Tender submission - 10',
          'Email alerts - 2',
          'Distributor access - 5',
          'Portal Registration - 3',
          'Catalogue Creation',
          'Tender Result',
          'Dedicated Account Manager',
        ],
      },
      {
        name: 'Basic Plan',
        code: 'basic',
        maxStates: 1,
        price: 10000,
        gstPercentage: 18,
        tagline: 'Ideal for startups & first-time bidders',
        features: [
          'Live tenders - Single State',
          'Tender submission - 5',
          'Email alerts - 1',
          "Distributor access - N/A",
          'Portal Registration - 1',
          'Catalogue Creation - 1',
          'Tender Result',
          'Dedicated Account Manager - N/A'
        ],
      },
    ]

    for (const productData of products) {
      // Convert feature names → product-feature IDs
      const featureIDs = productData.features
        .map((f) => featureMap.get(f.toLowerCase()))
        .filter(Boolean)

      // Check if product exists
      const existing = await payload.find({
        collection: 'products',
        where: { code: { equals: productData.code } },
        limit: 1,
      })

      const data = {
        name: productData.name,
        code: productData.code,
        maxStates: productData.maxStates,
        price: productData.price,
        gstPercentage: productData.gstPercentage,
        tagline: productData.tagline,
        features: featureIDs,
      }

      if (existing.docs.length) {
        await payload.update({
          collection: 'products',
          id: existing.docs[0].id,
          data,
        })
        continue
      }

      await payload.create({
        collection: 'products',
        data,
      })
    }

    payload.logger.info('Products seeding completed.')
  } catch (error: any) {
    payload.logger.error(' Failed to seed products', error)
  }
}
