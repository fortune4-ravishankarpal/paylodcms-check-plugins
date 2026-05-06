// payload.config.ts
import { gatekeeperPlugin } from 'payload-gatekeeper'

export const gatekeeperPluginConfig = gatekeeperPlugin({
  // Minimal config - just enhance your admin collection
  collections: {
    users: {
      enhance: true,
      autoAssignFirstUser: true,
    },
  },
  // Exclude collections from permission system entirely
  excludeCollections: ['tenants'] // These use their own access control
})
