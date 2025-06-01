const successStories = [
  {
    id: 1,
    slug: "wrongful-beating-acquittal",
    title: "Wrongful Beating Accusation After New Year's Celebration",
    outcome: "Full Acquittal",
    excerpt: "Client wrongly identified in a brutal assault case was completely exonerated after our four-year investigation exposed flawed witness testimony.",
    featured: true,
    image: '/images/cases/Case1.jpg',
    alt: 'Client celebrating after wrongful accusation dismissal'
  },
  {
    id: 2,
    slug: "juvenile-deportation-case",
    title: "15-Year-Old Charged as Adult Facing Deportation",
    outcome: "Juvenile Court Transfer",
    excerpt: "Prevented deportation and adult sentencing for an undocumented teen by demonstrating the alleged gang connection was unfounded.",
    featured: true,
    image: '/images/cases/Case2.jpg',
    alt: 'Teen client avoiding deportation'
  },
  {
    id: 3,
    slug: "dui-injury-dismissal",
    title: "DUI with Great Bodily Injury Charges",
    outcome: "Complete Dismissal",
    excerpt: "Got charges dropped by proving prosecution couldn't establish our client was driving or that injuries met legal thresholds.",
    featured: false,
    image: '/images/cases/DUI-case.jpg',
    alt: "DUI case documents with dismissal stamp"
  },
  {
    id: 4,
    slug: "federal-dui-navy",
    title: "Federal DUI Threatening Military Career",
    outcome: "Probation Terminated",
    excerpt: "Secured early probation termination through First Offender Program, allowing client to fulfill his Navy enlistment.",
    featured: true,
    image: '/images/cases/Case3.jpg',
    alt: 'Client in Navy uniform after case resolution'
  },
  {
    id: 5,
    slug: "medical-marijuana-trial",
    title: "Medical Marijuana Trial For Father and Son",
    outcome: "Complete Acquittal",
    excerpt: "Won landmark medical marijuana case for father-son defendants after demonstrating compliance with state laws.",
    featured: true,
    image: '/images/cases/Case4alt.jpg',
    alt: "Defendants leaving court with attorneys"
  },
  {
    id: 6,
    slug: "teen-robbery-case",
    title: "17-Year-Old Facing 12 Years for Armed Robbery",
    outcome: "No Prison Time",
    excerpt: "Negotiated deal avoiding strike offenses and incarceration for teen client charged with gun-related robbery.",
    featured: false,
    image: '/images/cases/Teen-case.jpg',
    alt: "Young client with family outside courtroom"
  },
  {
    id: 7,
    slug: "robbery-jury-trial",
    title: "Two-Strike Defendant in Tenderloin Robbery Case",
    outcome: "Jury Acquittal",
    excerpt: "Won complete acquittal by convincing jury the incident was a disputed drug transaction rather than robbery.",
    featured: true,
    image: '/images/cases/Case5.jpg',
    alt: 'Jury deliberation scene'
  },
  {
    id: 8,
    slug: "meth-possession-case",
    title: "Felony Methamphetamine Possession for Sale",
    outcome: "Case Dismissed",
    excerpt: "Forced prosecution's drug expert to admit our client showed no signs of dealing, resulting in dismissal.",
    featured: false,
    image: '/images/cases/Drug-case.jpg',
    alt: "Judge dismissing drug charges"
  },
  {
    id: 9,
    slug: "white-collar-crime",
    title: "Federal Computer Fraud Charges",
    outcome: "Reduced to Misdemeanor",
    excerpt: "Negotiated reduction from felony to misdemeanor with no jail time in complex financial crime case.",
    featured: false,
    image: '/images/cases/White-collar.jpg',
    alt: "Attorney reviewing financial documents"
  },
  {
    id: 10,
    slug: "embezzlement-case",
    title: "30+ Felony Counts for City Embezzlement",
    outcome: "No Jail Time",
    excerpt: "Secured plea deal with home detention instead of prison for public employee accused of stealing $50k.",
    featured: false,
    image: '/images/cases/Embezzlement.jpg',
    alt: "Client walking out of federal courthouse"
  },
  {
    id: 11,
    slug: "maritime-manslaughter",
    title: "Boat Captain Charged in Crew Member's Death",
    outcome: "Case Dismissed",
    excerpt: "Got involuntary manslaughter charges dropped during jury selection after maritime expert testimony.",
    featured: true,
    image: '/images/cases/Case8.png',
    alt: "Maritime expert testifying in court"
  },
  {
    id: 12,
    slug: "police-battery-trial",
    title: "Police Officers Lied During Battery Trial",
    outcome: "Complete Acquittal",
    excerpt: "Proved officers fabricated battery charges against African American brothers in restaurant altercation.",
    featured: true,
    image: '/images/cases/Case6.jpg',
    alt: "Brothers celebrating with defense team"
  },
  {
    id: 13,
    slug: "kidnapping-defense",
    title: "Father of Two Saved From Life Sentence",
    outcome: "No Prison Time",
    excerpt: "Spared client life sentence after exposing inconsistencies in home invasion/kidnapping allegations.",
    featured: true,
    image: '/images/cases/Case7.jpg',
    alt: "Client reunited with young children"
  },
  {
    id: 14,
    slug: "police-brawl-case",
    title: "Felony Lynching Charges for Police Altercation",
    outcome: "Reduced to Misdemeanor",
    excerpt: "Turned potential prison sentence into probation by demonstrating police overreach in custody dispute.",
    featured: false,
    image: '/images/cases/Case8.jpg',
    alt: "Dismissed felony charges document"
  }
];

export const featuredStories = successStories.filter(story => story.featured);
export default successStories;

/**
 * const successStories = [
  {
    id: 1,
    slug: "wrongful-beating-acquittal",
    title: "Wrongful Beating Accusation After New Year's Celebration",
    outcome: "Full Acquittal",
    excerpt: "Client wrongly accused of a brutal beating was exonerated by a jury after our team exposed inconsistencies in witness testimony.",
    image: '/images/cases/Case1.jpg'
  },
  {
    id: 2,
    slug: "juvenile-deportation-case",
    title: "15-Year-Old Facing Adult Charges and Deportation",
    outcome: "Case Moved to Juvenile Court",
    excerpt: "Successfully argued for juvenile court jurisdiction, preserving our young client's future in the United States.",
    image: '/images/cases/Case2.jpg'
  },
  {
    id: 3,
    slug: "dui-injury-dismissal",
    title: "DUI With Serious Bodily Injury Charges",
    outcome: "Case Dismissed",
    excerpt: "Challenged prosecution's evidence chain, resulting in complete dismissal of all charges against our client.",
    image: '/images/cases/Case8.png'
  },
  {
    id: 4,
    slug: "federal-navy-case",
    title: "Federal DUI Threatening Military Career",
    outcome: "Probation Terminated",
    excerpt: "Negotiated special provisions allowing client to complete probation early and join the U.S. Navy as planned.",
    image: '/images/cases/Case3.jpg'
  },
  {
    id: 5,
    slug: "medical-marijuana-trial",
    title: "Medical Marijuana Cultivation Charges",
    outcome: "Complete Acquittal",
    excerpt: "Father and son cleared of all charges in precedent-setting medical marijuana defense case.",
    image: '/images/cases/Case4alt.jpg'
  },
  {
    id: 6,
    slug: "armed-robbery-teen",
    title: "Teenager Facing 12 Years for Armed Robbery",
    outcome: "No Prison Time",
    excerpt: "Negotiated alternative sentencing that kept young client out of prison and provided rehabilitation services.",
    image: '/images/cases/Case5.jpg'
  }
];

export default successStories;
 */