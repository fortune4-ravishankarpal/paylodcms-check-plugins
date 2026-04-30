import type { Payload } from 'payload'

export const seedFilterSideBar = async (payload: Payload) => {
  try {
    // await payload.updateGlobal({
    //   slug: 'filter-sidebar',
    //   data: {
    //     filterTitles: [
    //       {
    //         filters: 'Categories',
    //         type: 'multi-select',
    //         search: '',
    //         subFilters: [
    //           { value: 'IT Hardware & Networking' },
    //           { value: 'Software & Digital Services' },
    //           { value: 'Electrical & Power Equipment' },
    //           { value: 'Healthcare & Medical Equipment' },
    //           { value: 'Manpower & Outsourcing Services' },
    //           { value: 'Civil Works' },
    //           { value: 'Transportation & Logistics' },
    //         ],
    //         selected: [],
    //       },
    //       {
    //         filters: 'Authority Ownership',
    //         type: 'multi-select',
    //         search: '',
    //         subFilters: [
    //           { value: 'Municipal Corporation' },
    //           { value: 'Public Works Department (PWD)' },
    //           { value: 'State Health Society' },
    //           { value: 'Education Department' },
    //           { value: 'Power Distribution Company' },
    //         ],
    //         selected: [],
    //       },
    //       {
    //         filters: 'Government Level',
    //         type: 'multi-select',
    //         search: '',
    //         subFilters: [
    //           { value: 'Central Government' },
    //           { value: 'State Government' },
    //           { value: 'Local / Urban Bodies' },
    //           { value: 'Semi-Government / Autonomous' },
    //         ],
    //         selected: [],
    //       },
    //       {
    //         filters: 'Bid Value Range',
    //         type: 'multi-select',
    //         search: '',
    //         subFilters: [
    //           { value: 'Below ₹10 Lakh' },
    //           { value: '₹10 Lakh – ₹50 Lakh' },
    //           { value: '₹50 Lakh – ₹1 Crore' },
    //           { value: '₹1 Crore – ₹10 Crore' },
    //           { value: 'Above ₹10 Crore' },
    //         ],
    //         selected: [],
    //       },
    //       {

    //         filters: 'Tender Status',
    //         type: 'multi-select',
    //         search: '',
    //         subFilters: [{ value: 'Active' }, { value: 'Awarded' }, { value: 'Cancelled' }],
    //         selected: [],
    //       },
    //       {
    //         filters: 'Bid Closing Date',
    //         type: 'multi-select',
    //         search: '',
    //         subFilters: [
    //           { value: 'Today' },
    //           { value: 'Next 3 Days' },
    //           { value: 'Next 7 Days' },
    //           { value: 'Next 15 Days' },
    //         ],
    //         selected: [],
    //       },
    //     ],
    //   },
    // })

    payload.logger.info('filter-sidebar is now from mongodb collection later to be remove')
  } catch (error) {
    console.log('Error in Filter-SideBar', error)
  }
}
