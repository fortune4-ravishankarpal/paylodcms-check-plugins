import type { CollectionConfig } from 'payload'
import { Country } from 'country-state-city'
import { authenticated } from '@/access/authenticated'
import { isSuperAdmin } from '@/access/isAdmin'

const countryOptions = Country.getAllCountries().map((country) => ({
  label: country.name,
  value: country.isoCode.toLowerCase(),
}))

export const Tenants: CollectionConfig = {
  slug: 'tenants',
  admin: {
    group: 'System',
    useAsTitle: 'name',
    hidden: ({ user }) => !isSuperAdmin(user),
  },
  access: {
    create: ({ req: { user } }) => isSuperAdmin(user),
    delete: ({ req: { user } }) => isSuperAdmin(user),
    read: authenticated,
    update: ({ req: { user } }) => isSuperAdmin(user),
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'Used for internal identification',
      },
    },
    {
      name: 'countries',
      type: 'array',
      fields: [
        {
          name: 'code',
          type: 'select',
          options: countryOptions,
          required: true,
        },
      ],
    },
  ],
}
