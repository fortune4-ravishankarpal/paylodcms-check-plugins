import type { Payload } from 'payload'

export const seedFAQ = async (payload: Payload) => {
  const faqs = [
    {
      question: 'What is Tender Bharo Solutions?',
      answer:
        'Tender Bharo Solutions is a professional tender and bid consultancy service in India that helps businesses participate in government and PSU tenders by providing end-to-end support—from tender identification to successful bid submission.',
    },
    {
      question: 'What services does Tender Bharo Solutions provide?',
      answer: `Tender Bharo Solutions offers complete tendering support, including:
•	Government tender identification and monitoring
•	Eligibility and compliance assessment
•	Technical and financial bid preparation
•	Drafting of declarations, undertakings, and formats
•	EMD, Bank Guarantee, MSME/Startup exemption assistance
•	Tender submission on GeM, CPPP, IREPS, and State portals
•	Post-bid clarifications, result tracking, and PO support
`,
    },
    {
      question: 'Why should I choose Tender Bharo Solutions for tender consultancy?',
      answer: `Tender Bharo Solutions ensures:
•	Error-free and compliant bid submissions
•	Timely tender participation
•	Professional documentation support
•	Reduced internal workload
•	Higher qualification and success rate
`,
    },
    {
      question: 'Which government tender portals are covered by Tender Bharo Solutions?',
      answer: `We support bidding on all major procurement portals, including:
•	Government e-Marketplace (GeM)
•	Central Public Procurement Portal (CPPP)
•	Indian Railways e-Procurement System (IREPS)
•	State Government e-Tender portals (All States & UTs)
•	PSU portals (ONGC, NTPC, BHEL, etc.)
•	Defence and Research portals (DRDO, HAL, etc.)
`,
    },
    {
      question: 'Why is a minimum discount required on GeM product listings?',
      answer:
        'GeM mandates a minimum discount on Market Price (MP) to ensure competitive pricing, transparency, and cost savings for government buyers. Tender Bharo Solutions helps sellers comply with GeM pricing rules and avoid product rejection.',
    },
    {
      question: 'Does Tender Bharo Solutions help with MSME and Startup exemptions?',
      answer: `Yes. We assist eligible MSMEs and Startups in availing exemptions related to:
•	Earnest Money Deposit (EMD)
•	Turnover criteria
•	Past experience requirements
`,
    },
    {
      question: 'What is Startup Runway on GeM and how can Tender Bharo Solutions help?',
      answer: `Startup Runway is a GeM initiative that allows startups to participate in tenders with relaxed norms. Tender Bharo Solutions assists with:
•	Startup Runway registration
•	Document preparation for exemptions
•	Tender submission support on GeM and non-GeM portals
`,
    },
    {
      question: 'What is Vendor Assessment in government tenders?',
      answer:
        'Vendor Assessment is a verification process that evaluates a supplier’s capability, financial strength, and compliance before allowing participation in tenders.',
    },
    {
      question: 'What is OEM and Deemed OEM Vendor Assessment?',
      answer: `•	OEM Vendor Assessment confirms a company as a genuine manufacturer or authorized partner.
•	Deemed OEM Vendor Assessment allows non-manufacturers to participate in OEM-restricted tenders after assessment.
Tender Bharo Solutions provides end-to-end support for both.
`,
    },
    {
      question: 'How long does Vendor Assessment on GeM take?',
      answer:
        'Vendor Assessment on GeM typically takes 7–14 working days, depending on document completeness. In some cases, it may take up to 2–3 months.',
    },
    {
      question: 'What is Product and Service Uploading on GeM?',
      answer:
        'Product and Service Uploading is the process of listing products or services on GeM with specifications, pricing, GST details, and supporting documents.',
    },
    {
      question: 'Who can upload products or services on GeM?',
      answer:
        'Only registered and vendor-assessed GeM sellers or service providers can upload products or services.',
    },
    {
      question: 'How long does GeM product verification take?',
      answer:
        'Product uploading is instant, but GeM verification usually takes 3–7 working days before listings go live.',
    },
    {
      question: 'Can prices and product details be updated on GeM later?',
      answer:
        'Yes. Sellers can update pricing and details at any time. Certain updates may require re-verification.',
    },
    {
      question: 'How does Tender Bharo Solutions help with GeM product listing?',
      answer: `We assist with:
•	Listing preparation and compliance checks
•	Pricing and discount strategy
•	Uploading and approval follow-ups
•	Ensuring products/services go live successfully
`,
    },
    {
      question: 'What is the GeM Quadrant System?',
      answer:
        'The GeM Quadrant system categorizes sellers based on pricing competitiveness, quality, and performance to help buyers identify reliable vendors.',
    },
    {
      question: 'How can Tender Bharo Solutions improve my GeM Quadrant ranking?',
      answer:
        'We analyze your performance and help optimize listings, pricing, and documentation to improve quadrant placement.',
    },
    {
      question: 'What is tender submission on GeM?',
      answer:
        'Tender submission on GeM is the online process of submitting bids or quotations against government tenders.',
    },
    {
      question: 'Who is eligible to submit tenders on GeM?',
      answer: 'Only registered and vendor-assessed GeM sellers or service providers are eligible.',
    },
    {
      question: 'What is a GeM Reverse Auction?',
      answer:
        'A GeM Reverse Auction is an online bidding process where sellers compete by offering the lowest price to win the order.',
    },
    {
      question: 'How does Tender Bharo Solutions support GeM Reverse Auctions?',
      answer: `We assist with:
•	Identifying suitable reverse auction tenders
•	Pricing strategy guidance
•	Live auction monitoring
•	Compliance and documentation checks
`,
    },
    {
      question: 'What is a Work Order (WO) on GeM?',
      answer:
        'A Work Order is an official document issued by the buyer confirming acceptance of the bid, including quantity, price, and delivery schedule.',
    },
    {
      question: 'How long does invoice approval take on GeM?',
      answer:
        'Invoices are usually approved within 3–7 working days, subject to buyer verification.',
    },
    {
      question: 'Does Tender Bharo Solutions help with GeM invoice generation?',
      answer:
        'Yes. We assist with GST-compliant invoice generation, uploading, approval tracking, and payment follow-up.',
    },
    {
      question: 'What is a State e-Procurement Portal?',
      answer:
        'State e-Procurement portals are online platforms managed by State Governments for electronic tendering and procurement.',
    },
    {
      question: 'Is a Digital Signature Certificate (DSC) mandatory for e-tendering?',
      answer:
        'Yes. A Class III Digital Signature Certificate (DSC) is mandatory for registration and bid submission on most government portals.',
    },
    {
      question: 'Can one DSC be used across multiple tender portals?',
      answer:
        'Yes. A valid Class III DSC can be used across GeM, CPPP, IREPS, and State e-Procurement portals.',
    },
    {
      question: 'Does Tender Bharo Solutions assist with DSC procurement and setup?',
      answer:
        'Yes. We provide complete assistance for DSC procurement, installation, mapping, and troubleshooting.',
    },
    {
      question: 'Does Tender Bharo Solutions provide IREPS tender support?',
      answer:
        'Yes. We offer end-to-end IREPS consultancy including registration, tender search, bid preparation, submission, and compliance support.',
    },
    {
      question: 'How long does IREPS user ID generation take?',
      answer:
        'IREPS User ID and password are typically issued within 3–7 working days after successful verification.',
    },
  ]

  for (const faq of faqs) {
    const exists = await payload.find({
      collection: 'faq',
      where: { question: { equals: faq.question } },
      limit: 1,
    })

    if (!exists.docs.length) {
      await payload.create({
        collection: 'faq',
        data: {
          question: faq.question,
          answer: faq.answer,
        },
      })
      //   payload.logger.info(`Created feature: ${faq.question}`)
    }
  }

  payload.logger.info('FAQ seeded successfully')
}
