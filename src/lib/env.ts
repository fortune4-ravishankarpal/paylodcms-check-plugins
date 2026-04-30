import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'
let isProduction = process.env.NODE_ENV ? process.env.NODE_ENV === 'production' : false
export const env = createEnv({
  server: {
    // Core
    PAYLOAD_SECRET: z.string().min(1),
    DATABASE_URL: z.string().min(1),
    // MONGO_URL: z.string().min(1),

    // App / Meta (server-only usage)
    COMPANY_NAME: z.string().min(1),
    SITE_NAME: z.string().min(1),
    TWITTER_CREATOR: z.string().min(1),
    TWITTER_SITE: z.string().min(1),

    // Payload / Next
    PAYLOAD_PUBLIC_SERVER_URL: z.string().min(1),
    PREVIEW_SECRET: z.string().min(1),

    // Stripe
    // STRIPE_SECRET_KEY: z.string().min(1),
    // STRIPE_WEBHOOKS_SIGNING_SECRET: z.string().min(1),

    // SMTP
    SMTP_USER: z.string().min(1),
    SMTP_PASS: z.string().min(1),
    SMTP_HOST: z.string().min(1),
    FROM_EMAIL: z.string().min(1),
    SUPPORT_EMAIL: z.string().min(1),
    SALES_EMAIL: z.string().min(1),

    // Razorpay
    // RAZORPAY_KEY_ID: z.string().min(1),
    // RAZORPAY_KEY_SECRET: z.string().min(1),
    // RAZORPAY_WEBHOOK_SECRET: z.string().min(1),
    // RAZORPAY_WEBHOOK_URL: z.string().min(1),

    // S3
    // S3_BUCKET: z.string().min(1),
    // S3_REGION: z.string().min(1),
    // S3_URL: z.string().min(1),

    CMS_SEED_ADMIN_EMAIL: z.email(),
    CMS_SEED_ADMIN_PASSWORD: z.string().min(1),
    isDevelopment: z.boolean().default(!isProduction),

    // ENCRYPTION_KEY: z.string().min(1),
  },

  client: {
    NEXT_PUBLIC_SERVER_URL: z.string().min(1),
    // NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string().min(1),
  },

  runtimeEnv: {
    // Server
    PAYLOAD_SECRET: process.env.PAYLOAD_SECRET,
    DATABASE_URL: process.env.DATABASE_URL,
    // MONGO_URL: process.env.MONGO_URL,
    COMPANY_NAME: process.env.COMPANY_NAME,
    SITE_NAME: process.env.SITE_NAME,
    TWITTER_CREATOR: process.env.TWITTER_CREATOR,
    TWITTER_SITE: process.env.TWITTER_SITE,
    PAYLOAD_PUBLIC_SERVER_URL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
    PREVIEW_SECRET: process.env.PREVIEW_SECRET,

    // STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    // STRIPE_WEBHOOKS_SIGNING_SECRET: process.env.STRIPE_WEBHOOKS_SIGNING_SECRET,

    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASS: process.env.SMTP_PASS,
    SMTP_HOST: process.env.SMTP_HOST,
    FROM_EMAIL: process.env.FROM_EMAIL,
    SUPPORT_EMAIL: process.env.SUPPORT_EMAIL,
    SALES_EMAIL: process.env.SALES_EMAIL,

    // RAZORPAY_KEY_ID: process.env.RAZORPAY_KEY_ID,
    // RAZORPAY_KEY_SECRET: process.env.RAZORPAY_KEY_SECRET,
    // RAZORPAY_WEBHOOK_SECRET: process.env.RAZORPAY_WEBHOOK_SECRET,
    // RAZORPAY_WEBHOOK_URL: process.env.RAZORPAY_WEBHOOK_URL,

    // S3_BUCKET: process.env.S3_BUCKET,
    // S3_REGION: process.env.S3_REGION,
    // S3_URL: process.env.S3_URL,

    // Client
    NEXT_PUBLIC_SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
    // NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,

    CMS_SEED_ADMIN_EMAIL: process.env.CMS_SEED_ADMIN_EMAIL,
    CMS_SEED_ADMIN_PASSWORD: process.env.CMS_SEED_ADMIN_PASSWORD,

    isDevelopment: process.env.NODE_ENV === 'development',

    // ENCRYPTION_KEY: process.env.ENCRYPTION_KEY,
  },
  //@ts-ignore
  onValidationError(error) {
    const errorMessage = error
      .map((issue) => `  - ${issue.path?.join('.') ?? 'unknown'}: ${issue.message}`)
      .join('\n')

    console.error(`❌Please check the environment variables:\n${errorMessage}`)
  },
})
