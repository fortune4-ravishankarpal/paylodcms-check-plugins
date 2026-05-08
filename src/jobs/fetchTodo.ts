import { TaskConfig } from 'payload'

// In-memory variable to store the previous data for comparison
let previousData: any = null

export const FetchTodoTask: TaskConfig<'fetch-todo'> = {
  slug: 'fetch-todo',
  schedule: [
    {
      cron: '*/3 * * * *', // Run every 3 minutes
    },
  ],
  handler: async () => {
    try {
      console.log('Running fetch-todo job...')
      const response = await fetch('http://localhost:3005/posts')
      const json = await response.json()

      const currentDataString = JSON.stringify(json)
      const previousDataString = JSON.stringify(previousData)

      if (previousData === null) {
        console.log('Fetched Todo Data (Initial):', json)
      } else if (currentDataString !== previousDataString) {
        console.log('Data has CHANGED!', { previous: previousData, new: json })
      } else {
        console.log('Data has NOT changed.')
      }

      // Update previous data for the next run
      previousData = json

      return {
        output: { success: true, data: json, changed: currentDataString !== previousDataString },
      }
    } catch (error) {
      console.error('Error fetching todo:', error)
      return { output: { success: false } }
    }
  },
}
