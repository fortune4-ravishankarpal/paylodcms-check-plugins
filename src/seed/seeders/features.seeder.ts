import { FeaturesSlugs } from '../../collections/Features/constant'
import type { Payload } from 'payload'

export const seedFeatures = async (payload: Payload) => {
  const features = [
    {
      title: 'Tender bidding support',
      featurecode: 'tender-bidding',
      feature_map_code: FeaturesSlugs.bid_assistance,
      base_price: 7000,
      min_price: 6000,
      description:
        'Professional support for preparing and submitting tender bids. Includes assistance for up to 7 tenders with complete document preparation, compliance checks, and submission guidance.',
    },
    {
      title: 'Portal Registration',
      featurecode: 'portal-registration',
      feature_map_code: FeaturesSlugs.portal_registration,
      base_price: 3000,
      min_price: 2500,
      description:
        'Get complete assistance for Government e-Marketplace (GeM) registration including document support, profile setup, and portal guidance.',
    },
    {
      title: 'Competitor tracking',
      featurecode: 'competitor',
      feature_map_code: FeaturesSlugs.competitor_tracking,
      base_price: 1500,
      min_price: 1200,
      description:
        "Monitor companies bidding in similar tenders and analyze competitor participation and patterns.",
    },
    {
      title: 'Distributor access',
      featurecode: 'distributor',
      feature_map_code: FeaturesSlugs.distributor_access,
      base_price: 4000,
      min_price: 3500,
      description:
        'Access and connect with up to 10 verified distributors/vendors across India for your tender requirements.',
    },
    {
      title: 'Email alerts',
      featurecode: 'email-alert',
      feature_map_code: FeaturesSlugs.email_alerts,
      base_price: 1000,
      min_price: 800,
      description:
        'Set up to 3 customized email alerts based on categories, keywords, or regions to stay updated on new tenders.',
    },
    {
      title: 'Tender Result',
      featurecode: 'contract-award',
      feature_map_code: FeaturesSlugs.tender_result,
      base_price: 2000,
      min_price: 1500,
      description:
        'View details of awarded tenders including winning companies and bid amounts to analyze market trends.',
    },
    {
      title: 'Archive tenders',
      featurecode: 'archive-tender',
      feature_map_code: FeaturesSlugs.archive_tenders,
      base_price: 1000,
      min_price: 800,
      description:
        'Access historical and closed tenders for reference, pricing analysis, and future preparation.',
    },
    {
      title: 'Live tenders',
      featurecode: 'live-tender',
      feature_map_code: FeaturesSlugs.tender_alerts,
      base_price: 6000,
      min_price: 5000,
      description:
        'View active tenders across Pan India with real-time updates on newly published opportunities.',
    },
    {
      title: 'Catalogue Creation',
      featurecode: 'catalogue-creation',
      feature_map_code: FeaturesSlugs.catalogue_creation,
      base_price: 2000,
      min_price: 1500,
      description: 'Professional assistance in creating and managing your product catalogue on various portals.',
    },
    {
      title: 'Dedicated Account Manager',
      featurecode: 'account-manager',
      // feature_map_code: FeaturesSlugs.dedicated_account_manager,
      base_price: 5000,
      min_price: 4000,
      description: 'Get a dedicated account manager to assist you with all your tender-related queries and support.',
    },
  ]

  for (const feature of features) {
    const exists = await payload.find({
      collection: 'features',
      where: { title: { equals: feature.title } },
      limit: 1,
    })

    if (!exists.docs.length) {
      await payload.create({
        collection: 'features',
        data: feature as any,
      })
    } else {
      // Update existing feature with new fields if they are missing
      const existingDoc = exists.docs[0]
      await payload.update({
        collection: 'features',
        id: existingDoc.id,
        data: feature as any,
      })
    }
  }

  payload.logger.info('Features seeded successfully')
}

