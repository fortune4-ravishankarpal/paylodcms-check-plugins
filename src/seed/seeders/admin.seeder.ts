import { env } from '@/lib/env'
import { Payload } from 'payload'
import { isDuplicateError } from '../lib/is-duplicate-error'

export async function seedAdmin(payload: Payload) {
  try {
    const response = await payload.create({
      collection: 'users',
      data: {
        email: env.CMS_SEED_ADMIN_EMAIL,
        password: env.CMS_SEED_ADMIN_PASSWORD,
        // name: 'Admin',
      },
    })
    payload.logger.info('Admin user created')
  } catch (error) {
    if (isDuplicateError(error, 'email')) {
      payload.logger.info('Admin user already exists')
    } else {
      payload.logger.error('Error seeding admin user')
    }
  }
}
