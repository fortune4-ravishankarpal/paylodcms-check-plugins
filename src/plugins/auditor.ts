import { auditorPlugin } from 'payload-auditor'

export const auditorConfig = auditorPlugin({
  automation: {
    logCleanup: {
      cronTime: '* * * * *', // every minute
      queueName: 'john-doe-queue',
    },
  },
  collection: {
    trackCollections: [
      {
        slug: 'audit-demo',
        hooks: {
          afterChange: {
            update: {
              enabled: true,
            },
          },
        },
      },
    ],
  },
})
