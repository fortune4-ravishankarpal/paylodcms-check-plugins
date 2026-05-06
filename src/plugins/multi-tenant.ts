import { multiTenantPlugin } from '@payloadcms/plugin-multi-tenant'
import { checkIsAdmin, checkIsSuperAdmin } from '@/access/isAdmin'

export const multiTenantConfig = multiTenantPlugin({
  collections: {
    pages: {},
    posts: {},
  },
  tenantField: {
    access: {
      read: () => true,
      update: ({ req }) => checkIsSuperAdmin(req?.user || null),
    },
  },
  userHasAccessToAllTenants: (user) => checkIsSuperAdmin(user),
})
