import type { Payload } from 'payload'
import config from '../../payload.config'

export const indianStates = [
  { name: 'Andhra Pradesh', code: 'AP' },
  { name: 'Arunachal Pradesh', code: 'AR' },
  { name: 'Assam', code: 'AS' },
  { name: 'Bihar', code: 'BR' },
  { name: 'Chhattisgarh', code: 'CG' },
  { name: 'Goa', code: 'GA' },
  { name: 'Gujarat', code: 'GJ' },
  { name: 'Haryana', code: 'HR' },
  { name: 'Himachal Pradesh', code: 'HP' },
  { name: 'Jharkhand', code: 'JH' },
  { name: 'Karnataka', code: 'KA' },
  { name: 'Kerala', code: 'KL' },
  { name: 'Madhya Pradesh', code: 'MP' },
  { name: 'Maharashtra', code: 'MH' },
  { name: 'Manipur', code: 'MN' },
  { name: 'Meghalaya', code: 'ML' },
  { name: 'Mizoram', code: 'MZ' },
  { name: 'Nagaland', code: 'NL' },
  { name: 'Odisha', code: 'OD' },
  { name: 'Punjab', code: 'PB' },
  { name: 'Rajasthan', code: 'RJ' },
  { name: 'Sikkim', code: 'SK' },
  { name: 'Tamil Nadu', code: 'TN' },
  { name: 'Telangana', code: 'TS' },
  { name: 'Tripura', code: 'TR' },
  { name: 'Uttar Pradesh', code: 'UP' },
  { name: 'Uttarakhand', code: 'UK' },
  { name: 'West Bengal', code: 'WB' },

  // Union Territories
  { name: 'Delhi', code: 'DL' },
  { name: 'Chandigarh', code: 'CH' },
  { name: 'Puducherry', code: 'PY' },
  { name: 'Jammu & Kashmir', code: 'JK' },
  { name: 'Ladakh', code: 'LA' },
  { name: 'Andaman & Nicobar Islands', code: 'AN' },
  { name: 'Lakshadweep', code: 'LD' },
  { name: 'Dadra & Nagar Haveli and Daman & Diu', code: 'DN' },
]

export const seedStates = async (payload: Payload) => {
  try {
    await payload.init({ config })

    for (const state of indianStates) {
      await payload.create({
        collection: 'states',
        data: state,
      })
    }

    payload.logger.info('States global seeded')
  } catch (error) {
    payload.logger.error('header Failed')
  }
}
