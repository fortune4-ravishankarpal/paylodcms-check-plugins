import type { Payload } from 'payload'

export const seedCustomPlan = async (payload: Payload) => {
  payload.logger.info("--- skip custom seed ")
  return null
  payload.logger.info('--- Seeding Custom Plan Master ---')


  const existingPlan = await payload.find({
    collection: 'custom-plan-master',
    where: {
      slug: {
        equals: 'main',
      },
    },
  })

  const featuresRes = await payload.find({
    collection: 'features',
    limit: 100,
  })
  const features = featuresRes.docs

  const findFeatureId = (name: string) => {
    // Exact match by title
    let found = features.find((f: any) => f.title === name)
    if (found) return found.id

    // Partial match or known mappings
    if (name.includes('GeM Registration'))
      return features.find((f: any) => f.title === 'Portal Registration')?.id
    if (name.includes('Tender Search')) return features.find((f: any) => f.title === 'Live tenders')?.id
    if (name.includes('Tender Alert')) return features.find((f: any) => f.title === 'Email alerts')?.id
    if (name.includes('Account Manager'))
      return features.find((f: any) => f.title === 'Dedicated Account Manager')?.id
    if (name.includes('Catalogue Creation'))
      return features.find((f: any) => f.title === 'Catalogue Creation')?.id
    if (name.includes('Tender Participation'))
      return features.find((f: any) => f.title === 'Tender bidding support')?.id

    return null
  }

  const serviceMappings = [
    { name: 'GeM Registration', price: 1499 },
    { name: 'Category Identification Session with expert', price: 1999 },
    { name: 'Catalogue Creation', price: 499 },
    { name: 'Products Tender Participation', price: 2499 },
    { name: 'Business Report Automation', price: 999 },
    { name: 'Tender Search Portal and Download', price: 799 },
    { name: 'TRADE MARK', price: 5999 },
    { name: 'Vendor Assessment', price: 3499 },
    { name: 'CONNECT CATALYST', price: 1499 },
    { name: 'Tender Alert Access', price: 699 },
    { name: 'Tender Analytics Dashboard', price: 1299 },
    { name: 'Tender Order Dashboard', price: 1199 },
    { name: 'Feature Project Access', price: 999 },
  ]

  const services = serviceMappings
    .map((s) => {
      const featureId = findFeatureId(s.name)
      if (!featureId) {
        payload.logger.warn(`Could not find feature for service: ${s.name}`)
        return null
      }
      return {
        feature: featureId,
        pricePerService: s.price,
      }
    })
    .filter(Boolean)

  if (existingPlan.docs.length > 0) {
    await payload.update({
      collection: 'custom-plan-master',
      id: existingPlan.docs[0].id,
      data: {
        services: services as any,
      },
    })
  } else {
    await payload.create({
      collection: 'custom-plan-master',
      data: {
        planName: 'Main Custom Plan',
        slug: 'main',
        services: services as any,
      },
    })
  }

  payload.logger.info('Custom Plan Master seeded successfully.')
}
