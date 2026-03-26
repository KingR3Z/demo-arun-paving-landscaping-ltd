export const client = {
  // Business Details
  name: "Arun Paving & Landscaping Ltd",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Bognor Regis.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "01903 869857",
  email: "",
  website: "",

  // Location
  address: "Bognor Regis",
  city: "Bognor Regis",
  county: "",
  postcode: "",
  basedIn: "Bognor Regis",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5.0",
  reviewCount: "7",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Zahraa A.", rating: 5, text: "Responsive, professional, excellent finish. Patio and pathway done exactly as agreed. No issues at all.", date: "a day ago" },
    { name: "Younes Zerouk", rating: 5, text: "Had a large natural stone patio, pergola base, fire pit surround and new lawn all done as part of a single project. Biggest spend we've ever made on the house outside of the purchase itself. Was nervous about committing to that level of investment with a company we hadn't used before but every stage of the process built confidence. The initial consultation was thorough, the quote was itemised and transparent, the team kept us updated daily and the result is beyond what we pictured when we started. We've already had a summer of using it and it's changed our whole relationship with the house. Some things are worth the investment and this absolutely was.", date: "4 days ago" },
    { name: "CAITANO DE MELO", rating: 5, text: "Used them to relay a patio that a previous company had done badly. Uneven slabs, terrible drainage, whole thing needed lifting and starting again. They didn't oversell it or make it more complicated than it was. Came in, stripped it back, did it properly. Sometimes you just need someone to fix someone else's mess without the drama and that's exactly what happened.", date: "5 days ago", badge: "Local Guide" },
    { name: "Christopher Dolan", rating: 5, text: "Perfect job. Driveway looks incredible and they were done in two days. No complaints whatsoever.", date: "5 days ago" },
    { name: "Emma sharker", rating: 5, text: "Had three quotes. One never showed up, one was vague and non-committal about timelines. This company came out, measured properly, explained exactly what the job involved and had a detailed written quote back to us within 24 hours. Before a single slab was laid I already trusted them more than the others. That instinct turned out to be completely right.", date: "6 days ago" },
    { name: "Lola Gracie", rating: 5, text: "Just moved into a new build and the garden was basically a mud pit with a strip of cheap turf that was already dying. Wanted it done properly from the start rather than bodging it ourselves. They came in, cleared everything, laid proper sub base for the patio area and used a natural stone that ties in beautifully with the house brickwork. First time having outdoor space we actually own and it feels amazing to have got it right first time.", date: "a week ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Arun Paving & Landscaping Ltd | Landscaper in Bognor Regis",
    description: "Professional landscaper in Bognor Regis. 5.0-star rated on Google. Call for a free quote.",
  },
};
