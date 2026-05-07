import type { CollectionConfig } from 'payload'
import { Country } from 'country-state-city'
import { authenticated } from '@/access/authenticated'
import { checkIsSuperAdmin, isSuperAdmin } from '@/access/isAdmin'

const countryOptions = Country.getAllCountries().map((country) => ({
  label: country.name,
  value: country.isoCode.toLowerCase(),
}))

export const Tenants: CollectionConfig = {
  slug: 'tenants',
  admin: {
    group: 'System',
    useAsTitle: 'name',
    // @ts-ignore
    hidden: ({ user }) => !checkIsSuperAdmin(user),
  },
  access: {
    create: ({ req: { user } }) => checkIsSuperAdmin(user),
    delete: ({ req: { user } }) => checkIsSuperAdmin(user),
    read: authenticated,
    update: ({ req: { user } }) => checkIsSuperAdmin(user),
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
