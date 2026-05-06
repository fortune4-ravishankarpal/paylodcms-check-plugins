import { env } from '@/lib/env'
import { Payload } from 'payload'
import { isDuplicateError } from '../lib/is-duplicate-error'

export async function seedAdmin(payload: Payload) {
  try {
    // 1. Ensure a default tenant exists
    let defaultTenant = await payload.find({
      collection: 'tenants',
      where: {
        slug: { equals: 'default' },
      },
      limit: 1,
    })

    let tenantId
    if (defaultTenant.docs.length === 0) {
      const newTenant = await payload.create({
        collection: 'tenants',
        data: {
          name: 'Default Tenant',
          slug: 'default',
          domains: [{ domain: 'localhost' }],
        },
      })
      tenantId = newTenant.id
      payload.logger.info('Default tenant created')
    } else {
      tenantId = defaultTenant.docs[0].id
    }

    // 2. Create admin user with tenant assignment
    const response = await payload.create({
      collection: 'users',
      data: {
        email: env.CMS_SEED_ADMIN_EMAIL,
        password: env.CMS_SEED_ADMIN_PASSWORD,
        name: 'Admin',
        tenants: [
          {
            tenant: tenantId,
          },
        ],
      },
    })
    payload.logger.info('Admin user created')
  } catch (error) {
    if (isDuplicateError(error, 'email')) {
      payload.logger.info('Admin user already exists')
    } else {
      payload.logger.error('Error seeding admin user')
      console.error(error)
    }
  }
}
