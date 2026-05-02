import { nestedDocsPlugin } from '@payloadcms/plugin-nested-docs'
import { searchPlugin } from '@payloadcms/plugin-search'
import { Plugin } from 'payload'
import { searchFields } from '@/search/fieldOverrides'
import { beforeSyncWithSearch } from '@/search/beforeSync'

import { isAdmin, checkIsAdmin } from '@/access/isAdmin'
import { seoPluginConfig } from './seo'
import { formBuilderPluginConfig } from './form-builder'
import { gatekeeperPluginConfig } from './getKeeper'
import { translatorConfig } from './translator'
import { redirectsConfig } from './redirect'
import { auditFieldsConfig } from './audit'
// import { shadcnUiConfig } from './shadcn-ui'

export const plugins: Plugin[] = [
  redirectsConfig,
  translatorConfig,
  auditFieldsConfig,
  gatekeeperPluginConfig,
  nestedDocsPlugin({
    collections: ['categories'],
    generateURL: (docs) => docs.reduce((url, doc) => `${url}/${doc.slug}`, ''),
  }),
  // shadcnUiConfig,
  seoPluginConfig,
  formBuilderPluginConfig,
  searchPlugin({
    collections: ['posts'],
    beforeSync: beforeSyncWithSearch,
    searchOverrides: {
      access: {
        read: isAdmin,
        update: isAdmin,
        delete: isAdmin,
        create: isAdmin,
      },
      admin: {
        hidden: ({ user }) => !checkIsAdmin(user),
      },
      fields: ({ defaultFields }) => {
        return [...defaultFields, ...searchFields]
      },
    },
  }),
]
