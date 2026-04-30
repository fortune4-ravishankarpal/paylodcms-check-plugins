import type { Payload } from 'payload'

export const seedProductFeatures = async (payload: Payload) => {
  const featuresRes = await payload.find({
    collection: 'features',
    limit: 100,
  })

  // featureTitle -> featureID
  const featureTitleMap = new Map(featuresRes.docs.map((f) => [f.title, f.id]))

  const mappings = [
    // Live Tenders
    { title: 'Live tenders', label: 'Live tenders - Single State', count: 0, description: "Active tenders open for submission. Live tenders are currently active government tenders open for bidding. With this plan, you can view live tenders from Pan India, including newly published opportunities." },
    { title: 'Live tenders', label: 'Live tenders - Up to 3 States', count: 3, description: "Active tenders open for submission. Live tenders are currently active government tenders open for bidding. With this plan, you can view live tenders from Pan India, including newly published opportunities." },
    {
      title: 'Live tenders', label: 'Live tenders - Pan India', count: 1, description: "Active tenders open for submission. Live tenders are currently active government tenders open for bidding. With this plan, you can view live tenders from Pan India, including newly published opportunities."
    },

    // Portal Registration
    { title: 'Portal Registration', label: 'Portal Registration - 1', count: 1, describe: "Complete registration on up to one government or private procurement portals. Ensure accurate documentation and a smooth onboarding process to start bidding quickly." },
    { title: 'Portal Registration', label: 'Portal Registration - 3', count: 3, describe: "Complete registration on up to three government or private procurement portals. Ensure accurate documentation and a smooth onboarding process to start bidding quickly." },
    { title: 'Portal Registration', label: 'Portal Registration - 5', count: 5, describe: "Complete registration on up to five government or private procurement portals. Ensure accurate documentation and a smooth onboarding process to start bidding quickly." },



    // Tender Submission / Bidding Support
    { title: 'Tender bidding support', label: 'Tender submission - 5', count: 5, describe: "End-to-end support for preparing and submitting tenders accurately. We help ensure all documents and details are submitted before the deadline." },
    { title: 'Tender bidding support', label: 'Tender submission - 10', count: 10, describe: "End-to-end support for preparing and submitting tenders accurately. We help ensure all documents and details are submitted before the deadline." },
    {
      title: 'Tender bidding support', label: 'Tender submission - 15', count: 15, describe: "End-to-end support for preparing and submitting tenders accurately. We help ensure all documents and details are submitted before the deadline."
    },


    // Email Alerts
    { title: 'Email alerts', label: 'Email alerts - 1', count: 1, describe: "Multiple notification channels for opportunities. Set up one default distinct email alerts for different categories, regions, or keywords. Ensure you're always first to know about relevant opportunities." },
    { title: 'Email alerts', label: 'Email alerts - 2', count: 2, describe: "Multiple notification channels for opportunities. Set up two distinct email alerts for different categories, regions, or keywords. Ensure you're always first to know about relevant opportunities." },
    { title: 'Email alerts', label: 'Email alerts - 3', count: 3, describe: "Multiple notification channels for opportunities. Set up three distinct email alerts for different categories, regions, or keywords. Ensure you're always first to know about relevant opportunities." },

    // Distributor Access
    { title: 'Distributor access', label: 'Distributor access - NA', count: 0 },

    { title: 'Distributor access', label: 'Distributor access - 5', count: 5, describe: "Connect with up to 5 distributors/vendors. Access an extensive network of verified distributors and vendors across India. Build strategic partnerships for large-scale and multi-location tender requirements." },
    {
      title: 'Distributor access', label: 'Distributor access - 10', count: 10, describe: "Connect with up to 10 distributors/vendors. Access an extensive network of verified distributors and vendors across India. Build strategic partnerships for large-scale and multi-location tender requirements."
    },


    // Others
    { title: 'Catalogue Creation', label: 'Catalogue Creation - 1', count: 1, describe: "Professional creation of your product or service catalogue as per portal requirements. Ensures clear presentation, proper formatting, and higher visibility to buyers." },
    {
      title: 'Tender Result', label: 'Tender Result', count: 1, describe: "Track and receive updates on the outcome of submitted tenders. Stay informed about bid status, results, and next steps."
    },
    {
      title: 'Dedicated Account Manager', label: 'Dedicated Account Manager', count: 1, describe: "A dedicated expert to guide you throughout the tendering process. Get personalized support, quick responses, and strategic assistance."
    },
    { title: 'Archive tenders', label: 'Archive tenders', count: 1 },
    { title: 'Competitor tracking', label: 'Competitor tracking', count: 1 },
  ]

  for (const mapping of mappings) {
    const featureID = featureTitleMap.get(mapping.title)

    if (!featureID) {
      payload.logger.warn(`Feature not found: ${mapping.title}`)
      continue
    }

    // Check if already exists by label
    const exists = await payload.find({
      collection: 'product-features',
      where: {
        featureLabel: { equals: mapping.label },
      },
      limit: 1,
    })

    if (exists.docs.length) {
      // Update existing
      await payload.update({
        collection: 'product-features',
        id: exists.docs[0].id,
        data: {
          feature: featureID,
          count: mapping.count,
          description: mapping.description
        },
      })
      continue
    }

    // Create product-feature
    await payload.create({
      collection: 'product-features',
      data: {
        feature: featureID,
        featureLabel: mapping.label,
        count: mapping.count,
        description: mapping.description
      },
    })
  }
  payload.logger.info('Product-features seeded successfully.')
}
