import { getPayload } from 'payload'
import config from '../payload.config'
import dotenv from 'dotenv'

dotenv.config()

const testScraper = async () => {
  const payload = await getPayload({ config })

  console.log('Creating test scan job...')
  const scanJob = await payload.create({
    collection: 'panch-pakshi-scan-jobs',
    data: {
      title: 'Test Scan Job - ' + new Date().toLocaleString(),
      geoNameId: 6619347,
      locationName: 'Test Location',
      pakshis: ['crow'],
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
      status: 'pending',
    },
  })

  console.log('Scan job created with ID:', scanJob.id)
  console.log('Scraper should be running in the background...')
  
  // Wait a bit to see if status changes
  setTimeout(async () => {
    const updatedJob = await payload.findByID({
      collection: 'panch-pakshi-scan-jobs',
      id: scanJob.id,
    })
    console.log('Current Job Status:', updatedJob.status)
    if (updatedJob.errorLog) {
      console.log('Error Log:', updatedJob.errorLog)
    }
  }, 10000)
}

testScraper().catch(console.error)
