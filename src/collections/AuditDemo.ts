import type { CollectionConfig } from 'payload'
import { authenticated } from '../access/authenticated'
// Better Fields components
import { NumberField } from '@nouance/payload-better-fields-plugin/Number'
import { SlugField } from '@nouance/payload-better-fields-plugin/Slug'
import { TelephoneField } from '@nouance/payload-better-fields-plugin/Telephone'

export const AuditDemo: CollectionConfig = {
  slug: 'audit-demo',
  admin: {
    useAsTitle: 'name',
    group: 'Debug',
  },
  access: {
    create: authenticated,
    read: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    ...SlugField('name'),
    {
      name: 'description',
      type: 'textarea',
    },
    ...NumberField(
      {
        name: 'price',
        label: 'Price (with formatting)',
      },
      {
        prefix: '$ ',
        thousandSeparator: ',',
        decimalScale: 2,
        fixedDecimalScale: true,
      },
    ),
    ...TelephoneField({
      name: 'phone',
      label: 'Phone Number',
    }),
  ],
}
