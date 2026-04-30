import { ecommercePlugin } from '@payloadcms/plugin-ecommerce'
import { stripeAdapter } from '@payloadcms/plugin-ecommerce/payments/stripe'
import { adminOnlyFieldAccess } from '@/access/adminOnlyFieldAccess'
import { adminOrPublishedStatus } from '@/access/adminOrPublishedStatus'
import { customerOnlyFieldAccess } from '@/access/customerOnlyFieldAccess'
import { isAdmin } from '@/access/isAdmin'
import { isDocumentOwner } from '@/access/isDocumentOwner'
import { ProductsCollection } from '@/collections/Products'
import { AddressesCollection } from '@/collections/addresses'
import { OrdersCollection } from '@/collections/orders'
import { env } from '@/lib/env'

export const ecommercePluginConfig = ecommercePlugin({
  access: {
    adminOnlyFieldAccess,
    adminOrPublishedStatus,
    customerOnlyFieldAccess,
    isAdmin,
    isDocumentOwner,
  },
  customers: {
    slug: 'users',
  },
  payments: {
    paymentMethods: [
      stripeAdapter({
        secretKey: env.STRIPE_SECRET_KEY!,
        publishableKey: env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
        webhookSecret: env.STRIPE_WEBHOOKS_SIGNING_SECRET!,
      }),
    ],
  },
  products: {
    productsCollectionOverride: ProductsCollection,
  },
  orders: {
    ordersCollectionOverride: OrdersCollection,
  },
  addresses: {
    addressesCollectionOverride: AddressesCollection,
  },
})
