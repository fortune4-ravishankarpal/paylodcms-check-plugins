# Multi-Tenant Plugin Integration Guide

This project now uses the `@payloadcms/plugin-multi-tenant` plugin to support multiple tenants (e.g., different organizations or sub-sites) within a single Payload CMS instance.

## Overview

- **Tenants Collection**: A new collection named `Tenants` has been created. Each tenant can have its own name, domains, and a unique slug.
- **Enabled Collections**: The following collections are currently configured for multi-tenancy:
  - `Pages`
  - `Posts`
- **Automatic Fields**: The plugin automatically adds a `tenant` field to the enabled collections.

## How to Use

### 1. Create a Tenant
Go to the **Tenants** collection in the Admin UI and create your first tenant.
- **Name**: e.g., "Main Site"
- **Slug**: e.g., "main"
- **Domains**: Add the domains that should map to this tenant (e.g., `localhost`, `example.com`).

### 2. Assign Content to Tenants
When creating or editing a **Page** or **Post**, you will see a new **Tenant** field. Select the tenant that the content belongs to.

### 3. User Access
- **Admin Users**: Can see and manage content across all tenants.
- **Tenant-specific Users**: (Optional) You can further configure the `Users` collection to restrict users to specific tenants. Currently, the setup allows admins full access.

## Technical Details

### Configuration File
The plugin configuration is located at `src/plugins/multi-tenant.ts`. You can add more collections to the `collections` object if you want them to be multi-tenant.

```typescript
export const multiTenantConfig: Plugin = multiTenantPlugin({
  collections: {
    pages: true,
    posts: true,
    // Add more collections here
  },
  // ...
})
```

### Access Control
Access control is handled via the `userHasAccessToAllTenants` function in the config, which currently uses the `checkIsAdmin` utility.

## Next Steps
- If you need to restrict users to specific tenants, you should enable multi-tenancy for the `Users` collection as well.
- Update your frontend to filter content based on the current tenant (usually determined by the request domain).
