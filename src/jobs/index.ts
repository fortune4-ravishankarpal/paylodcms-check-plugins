import { PayloadRequest } from 'payload'
import { FetchTodoTask } from './fetchTodo'

export const jobsConfig = {
  access: {
    run: ({ req }: { req: PayloadRequest }): boolean => {
      // Allow logged in users to execute this endpoint (default)
      if (req.user) return true

      const secret = process.env.CRON_SECRET
      if (!secret) return false

      // If there is no logged in user, then check
      // for the Vercel Cron secret to be present as an
      // Authorization header:
      const authHeader = req.headers.get('authorization')
      return authHeader === `Bearer ${secret}`
    },
  },
  tasks: [FetchTodoTask],
  autoRun: [
    {
      cron: '* * * * *', // Checks for jobs every minute
      queue: 'default', // Using the default queue
    },
  ],
}
