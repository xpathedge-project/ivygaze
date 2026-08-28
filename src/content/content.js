// ---------------------------------------------------------------------------
// Region-aware copy for the whole site.
//
// Everything a visitor reads that differs between the US and the Nigerian
// market lives here, keyed by region code. The two blocks are deliberately the
// same shape so a component can just read CONTENT[region].<path> and never care
// which market is active — the layout, spacing and styling are identical either
// way, only the words change.
//
// To add a new regional string: add it to BOTH `us` and `ng`, then read it with
// the useContent() hook (src/context/RegionContext.jsx).
// ---------------------------------------------------------------------------

import cardPropertyCare from "../assets/images/services/property-care.png";
import cardPropertyCare2 from "../assets/images/services/propcare.jpg";
import cardFacility from "../assets/images/services/facility-management.png";
import cardFacility2 from "../assets/images/services/facmanage.jpg";
import cardEnvironmental from "../assets/images/services/environmental-services.png";
import cardEnvironmental2 from "../assets/images/services/envservice.jpg";
import cardWaste from "../assets/images/services/waste-management.png";
import cardGrounds from "../assets/images/services/grounds-maintenance.png";
import cardGrounds2 from "../assets/images/services/grndmntnce.jpg";
import cardWorkforce from "../assets/images/services/workforce-solutions.png";
import cardWorkforce2 from "../assets/images/services/wrkfrce.jpg";

import subPropertyCare1 from "../assets/images/subservices/property-care-1.png";
import subPropertyCare2 from "../assets/images/subservices/property-care-2.png";
import subFacility1 from "../assets/images/subservices/facility-management-1.png";
import subFacility2 from "../assets/images/subservices/facility-management-2.png";
import subEnvironmental1 from "../assets/images/subservices/environmental-services-1.png";
import subEnvironmental2 from "../assets/images/subservices/environmental-services-2.png";
import subWaste1 from "../assets/images/subservices/waste-management-1.png";
import subWaste2 from "../assets/images/subservices/waste-management-2.png";
import subGrounds1 from "../assets/images/subservices/grounds-maintenance-1.png";
import subGrounds2 from "../assets/images/subservices/grounds-maintenance-2.png";

// "Our work" carousel on /portfolio. The client ships these as s<slide>i<image>
// — one carousel so far (s1), eleven frames, all 2000x1000.
import s1i1 from "../assets/images/portfolio/s1i1.jpg";
import s1i2 from "../assets/images/portfolio/s1i2.jpg";
import s1i3 from "../assets/images/portfolio/s1i3.jpg";
import s1i4 from "../assets/images/portfolio/s1i4.jpg";
import s1i5 from "../assets/images/portfolio/s1i5.jpg";
import s1i6 from "../assets/images/portfolio/s1i6.jpg";
import s1i7 from "../assets/images/portfolio/s1i7.jpg";
import s1i8 from "../assets/images/portfolio/s1i8.jpg";
import s1i9 from "../assets/images/portfolio/s1i9.jpg";
import s1i10 from "../assets/images/portfolio/s1i10.jpg";
import s1i11 from "../assets/images/portfolio/s1i11.jpg";

// Case-study carousels, one folder per project.
import dallas1 from "../assets/images/dallas/CITY OF DALLAS CAROUSEL (1).jpg";
import dallas2 from "../assets/images/dallas/CITY OF DALLAS CAROUSEL (2).jpg";
import midlandBefore from "../assets/images/midland/Before Project Carousel.jpeg";
import midlandAfter from "../assets/images/midland/After Project Carousel.jpeg";
import midlandCover from "../assets/images/midland/City of midland Before 1 (cover Image).jfif";

// Slugs, order and imagery are the same in both markets, so they live outside
// the region blocks. SERVICE_ORDER drives the six-card grid on /services.
export const SERVICE_ORDER = [
  "property-care",
  "facility-management",
  "environmental-services",
  "waste-management",
  "grounds-maintenance",
  "workforce-solutions",
];

export const SERVICE_MEDIA = {
  "property-care": {
    card: cardPropertyCare2,
    cardAlt: "Freshly cleaned bedroom in a maintained residence",
    gallery: [subPropertyCare1, subPropertyCare2],
  },
  "facility-management": {
    card: cardFacility2,
    cardAlt: "Facility manager reviewing a site inspection on a tablet",
    gallery: [subFacility1, subFacility2],
  },
  "environmental-services": {
    card: cardEnvironmental2,
    cardAlt: "Grounds crew bagging garden waste",
    gallery: [subEnvironmental1, subEnvironmental2],
  },
  "waste-management": {
    card: cardWaste,
    cardAlt: "Sorted recycling bins ready for collection",
    gallery: [subWaste1, subWaste2],
  },
  "grounds-maintenance": {
    card: cardGrounds2,
    cardAlt: "Landscaped grounds along a property boundary",
    gallery: [subGrounds1, subGrounds2],
  },
  "workforce-solutions": {
    card: cardWorkforce2,
    cardAlt: "Site crew in safety gear working together",
    gallery: [subFacility1, subGrounds1],
  },
};

// ---------------------------------------------------------------------------
// Portfolio — the "Project" entry in the navbar. Case studies are the same in
// both markets (they are a record of work done, not a regional offer), so this
// sits outside the region blocks.
//
// /portfolio shows the "Our work" carousel, then one feature band (copy beside
// the site video). /portfolio/:slug is the case-study subpage, which — as the
// Figma frame does — lists every project in order: title, prose, carousel.
// ---------------------------------------------------------------------------
export const PORTFOLIO = {
  heroHeading: "Properties we've protected",
  heroBody:
    "From government facilities to diaspora homes, we've earned trust across markets.",
  workHeading: "Our work",
  workBody:
    "Explore a selection of projects that reflect our commitment to quality, reliability, and long-term property care.",

  // Top-of-page carousel on /portfolio.
  gallery: [
    {
      src: s1i1,
      alt: "Open-plan kitchen and dining room of a residence prepared for handover",
    },
    {
      src: s1i2,
      alt: "Living room with a cleaned sectional, rug and styled coffee table",
    },
    {
      src: s1i3,
      alt: "Kitchen and double-height living area after a turnover clean",
    },
    {
      src: s1i4,
      alt: "Crew member in protective coveralls loading a roll-off dumpster",
    },
    {
      src: s1i5,
      alt: "Crew in protective suits clearing debris from a gutted room",
    },
    {
      src: s1i6,
      alt: "Crew bagging clutter during a heavy-duty property cleanout",
    },
    {
      src: s1i7,
      alt: "Brick single-storey home with a freshly mowed front lawn",
    },
    {
      src: s1i8,
      alt: "Cleared back yard with the fence line and overgrowth cut back",
    },
    {
      src: s1i9,
      alt: "Ivy Gaze crew briefing in a training room before a shift",
    },
    {
      src: s1i10,
      alt: "Upstairs lounge with vacuumed carpet and dressed furniture",
    },
    {
      src: s1i11,
      alt: "Commercial vacuums staged in storage beside a property being secured",
    },
  ],

  // The feature band on /portfolio. The client will supply a .mov/.mp4 to drop
  // in here; until then `youtubeId` drives a click-to-play embed and `poster`
  // is what the white play button sits on top of.
  // TODO(client): replace `youtubeId` with `src: '/media/<file>.mp4'` once the
  // real footage lands — VideoPanel prefers `src` when it is present.
  video: {
    youtubeId: "aqz-KE-bpKQ",
    poster: s1i4,
    posterAlt: "Ivy Gaze crew loading a roll-off dumpster on a job site",
    title: "Ivy Gaze on site",
  },

  projects: [
    {
      slug: "city-of-dallas",
      // Slide ratio of this project's carousel in the Figma frame (1280x720).
      galleryAspect: "aspect-video",
      title:
        "City of Dallas – Full Janitorial Services and Facilities Maintenance",
      facts: [
        [
          "Project Type",
          "Full Janitorial Services, Facilities Maintenance, Cleaning Support, and Waste Handling",
        ],
        ["Client", "City of Dallas / Dallas Water Utilities"],
      ],
      sections: [
        {
          heading: "Challenge",
          body: "The City of Dallas required dependable janitorial and facilities maintenance support for active municipal work environments. The scope required consistent cleaning, proper waste handling, attention to detail, schedule adherence, and the ability to maintain clean, safe, and functional spaces without interrupting daily operations.",
        },
        {
          heading: "Solution",
          body: "Ivy Gaze LLC provided full janitorial services and facilities maintenance support tailored to the needs of the City of Dallas. Our team performed routine cleaning, trash collection, waste handling, restroom and common-area maintenance, surface cleaning, and general upkeep of assigned areas. We focused on dependable staffing, quality control, safety awareness, and responsive communication to ensure the facilities remained clean, organized, and operational.",
        },
        {
          heading: "Outcome",
          body: "The project supported a cleaner, safer, and more professional municipal work environment. Ivy Gaze LLC demonstrated its ability to deliver reliable full-service janitorial and maintenance support for a public-sector client while maintaining professionalism, consistency, and compliance with required service standards.",
        },
      ],
      gallery: [
        {
          src: dallas1,
          alt: "Kitchen and dining area of a City of Dallas facility after service",
        },
        {
          src: dallas2,
          alt: "Multi-purpose hall being cleared and cleaned by the Ivy Gaze crew",
        },
      ],
    },
    {
      slug: "city-of-midland",
      // The Midland frame is the taller of the two (1280x863).
      galleryAspect: "aspect-[1280/863]",
      title:
        "City of Midland – Mowing, Landscape Maintenance, Tree Removal, Debris Removal, and Trash Removal",
      facts: [
        [
          "Project Type",
          "Mowing, Landscape Maintenance, Tree Removal, Debris Removal, and Trash Removal",
        ],
        ["Client", "City of Midland"],
      ],
      sections: [
        {
          heading: "Challenge",
          body: "The City of Midland required reliable exterior maintenance and grounds support to help preserve clean, safe, and presentable public spaces. The work involved multiple service areas, including mowing, landscape maintenance, tree removal, debris removal, trash removal, and general outdoor site upkeep. The project required consistency, safety awareness, proper field execution, and timely service delivery.",
        },
        {
          heading: "Solution",
          body: "Ivy Gaze LLC provided structured grounds maintenance and outdoor service support for the City of Midland. Our team performed mowing, landscape maintenance, tree and debris removal, trash removal, and related site maintenance activities in accordance with the project scope. We prioritized route discipline, proper equipment use, safe work practices, and attention to detail to ensure public areas were properly maintained.",
        },
        {
          heading: "Outcome",
          body: "The project helped improve the cleanliness, appearance, and safety of public-facing outdoor spaces. Ivy Gaze LLC successfully supported municipal grounds maintenance needs through dependable service delivery, consistent field performance, and professional project execution.",
        },
      ],
      gallery: [
        {
          src: midlandCover,
          alt: "Roadside verge in Midland before the grounds crew arrived",
        },
        {
          src: midlandBefore,
          alt: "Overgrown public lot in Midland ahead of mowing and debris removal",
        },
        {
          src: midlandAfter,
          alt: "The same Midland lot cleared, mown and free of debris",
        },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// SHARED COPY (BOTH MARKETS)
//
// Everything below is marked "SHARED COPY (BOTH MARKETS)" in the content deck
// (Ivy Gaze LLC — Website Content, Service Architecture & USA–Nigeria
// Localization, v4, August 2026). Anything the deck splits into a UNITED
// STATES VERSION and a NIGERIA VERSION lives in CONTENT[region] instead.
// ---------------------------------------------------------------------------

// Deck §1.5 — the one-line descriptor that sits under the logo in the footer.
export const BRAND = {
  slogan: "Protecting Properties. Preserving Value. Delivering Peace of Mind.",
  descriptor:
    "Integrated facility management and waste management solutions across the United States and Nigeria.",
};

// Deck §2.4 — "More Than a Service Provider. A Long-Term Partner."
export const WHY_IVY_GAZE = {
  heading: "More Than a Service Provider. A Long-Term Partner.",
  body: "Ivy Gaze was founded on a simple but powerful belief: people deserve peace of mind knowing that the places they live, work, invest in and care about are professionally maintained, protected and managed. We do not see our work as a list of tasks. We are not simply maintaining properties; we are protecting investments. We are not simply managing facilities; we are enabling productivity. We are not simply cleaning environments; we are improving lives.",
  cards: [
    {
      title: "Reliability you can schedule around",
      body: "Programs are built to your operating hours, occupancy and access requirements then delivered on that schedule, with a named supervisor accountable for the result.",
    },
    {
      title: "Quality that is checked, not assumed",
      body: "Documented protocols, supervisor inspections and structured reporting after service. You are not asked to take our word for the standard; you are shown it.",
    },
    {
      title: "Preventive, not reactive",
      body: "Scheduled inspections and condition reporting catch small issues while they are still small; the difference between a maintenance line item and a capital expense.",
    },
    {
      title: "Responsible operations",
      body: "What leaves your property matters as much as what happens on it. Our waste division exists because material handled properly is a resource, not a cost.",
    },
  ],
};

// Deck §2.7 — "Where Technology Meets Property Care".
export const TECHNOLOGY = {
  heading: "Where Technology Meets Property Care",
  body: "Ivy Gaze uses technology to give clients visibility and control. Digital inspections and structured reporting remove the guesswork. Field teams are tracked and accountable. Service history is recorded, not remembered. Whether you are down the corridor or on another continent, you should always know the condition of your property and what was done to it.",
  cards: [
    {
      title: "Digital inspections and reporting",
      body: "Structured condition reports delivered after every visit.",
    },
    {
      title: "GPS-tracked teams",
      body: "Real-time accountability for every field team on your property.",
    },
    {
      title: "Client dashboards",
      body: "Summaries of property condition and service performance.",
    },
    {
      title: "Smart property service integrations",
      body: "Coordination across every active Ivy Gaze service line on your site.",
    },
    {
      title: "Client portal",
      body: "A secure hub for service tracking, communication and full service history.",
    },
  ],
};

// Deck §3.4 — "The Values We Work By".
export const VALUES = [
  {
    name: "Excellence",
    body: "Pursuing the highest standards in every service, process and interaction.",
  },
  {
    name: "Integrity",
    body: "Acting honestly, ethically and transparently, trust earned through consistency.",
  },
  {
    name: "Ownership",
    body: "Taking responsibility for actions, decisions and results, and solving problems proactively.",
  },
  {
    name: "Reliability",
    body: "Consistently providing dependable services and maintaining client-trusted standards.",
  },
  {
    name: "Innovation",
    body: "Embracing technology, modern systems and new ideas that improve efficiency.",
  },
  {
    name: "Customer Care",
    body: "Placing clients at the center of every decision and service experience.",
  },
];

// Deck §3.5 — the brand promise, and what it commits us to.
export const BRAND_PROMISE = {
  heading: "Protecting Properties. Preserving Value. Delivering Peace of Mind.",
  intro:
    "This promise guides every service, every decision and every client interaction:",
  items: [
    "Protect the properties entrusted to us",
    "Preserve the value of our clients' investments",
    "Deliver professional and reliable service",
    "Innovate through technology to improve transparency",
    "Respond quickly and effectively to client needs",
    "Handle what leaves a property as responsibly as what happens on it",
    "Continuously improve our systems and performance",
  ],
};

// Deck §3.6 — "How We Want Every Client to Feel".
export const CLIENT_EXPERIENCE = {
  heading: "How We Want Every Client to Feel",
  rows: [
    [
      "At Peace",
      "Knowing Ivy Gaze is protecting what matters most.",
      "Scheduled delivery, supervision, and a named point of contact.",
    ],
    [
      "Valued",
      "Experiencing professionalism and respect.",
      "Trained, uniformed, background-checked personnel and courteous conduct on site.",
    ],
    [
      "Informed",
      "Receiving clear communication and reporting.",
      "Structured reports after service and no surprises on scope or schedule.",
    ],
    [
      "Supported",
      "Having responsive access to our team.",
      "Defined response times and an escalation path that works.",
    ],
    [
      "Confident",
      "Knowing their environment is professionally managed.",
      "Documented standards, quality checks and corrective action when something falls short.",
    ],
  ],
};

// Deck §5.5 — "The Standard Is Not the Promise. The Standard Is the System."
export const QUALITY_SYSTEM = {
  heading: "The Standard Is Not the Promise. The Standard Is the System.",
  steps: [
    {
      title: "Assessment",
      body: "We walk the property, understand how it is used, and identify the pressure points before we quote.",
    },
    {
      title: "Scope and schedule",
      body: "A written scope of work, task frequencies and a schedule built around your operating hours and access requirements.",
    },
    {
      title: "Trained, supervised teams",
      body: "Background-checked personnel, trained on your site's specific protocols, in uniform, with a named supervisor.",
    },
    {
      title: "Quality checks",
      body: "Scheduled supervisor inspections against the documented scope, not a spot check when someone complains.",
    },
    {
      title: "Reporting",
      body: "A structured report after service or on an agreed cycle, with photographic evidence where useful.",
    },
    {
      title: "Corrective action",
      body: "When something falls short, it is logged, corrected and confirmed back to you. Repeated issues change the program, not just the shift.",
    },
  ],
};

// Deck §3.7 — "One Brand. Two Markets. Locally Delivered." Shown in full in
// both markets: the point of the section is that a visitor can see the other
// market deliberately rather than by accident.
export const MARKETS = {
  tagline: "Global",
  heading: "One Brand. Two Markets. Locally Delivered.",
  body: "Ivy Gaze operates in the United States and in Nigeria. The brand promise, the standards and the accountability are identical. What each market offers, and how far each division has been developed there, is specific to that market, and we publish only what is real in each.",
  cards: [
    {
      region: "us",
      title: "United States",
      text: "A certified, compliant facility services partner for government, healthcare, education, commercial and residential clients, headquartered in Arlington, Texas.",
    },
    {
      region: "ng",
      title: "Nigeria",
      text: "Integrated facility management for corporate organizations, estates, developers and institutions, alongside an environmental waste management platform in active development.",
    },
  ],
};

// Deck §16.2 (US) and §16b.2 (Nigeria) — what each market actually offers.
// Kept side by side deliberately: this is the section that shows a visitor the
// other market's capability without pretending it is available in theirs.
export const COVERAGE = {
  tagline: "Coverage",
  heading: "Where we serve",
  body: "One brand, two markets. Select a region to see what each one offers today.",
  columns: [
    {
      region: "us",
      regionName: "United States",
      stats: [
        ["Headquarters", "Arlington, Texas"],
        ["Service Coverage", "DFW Metroplex & Wider Texas"],
      ],
      items: [
        "Janitorial & Commercial Cleaning",
        "Day Porter & Post-Construction Cleaning",
        "Apartment & Property Turn Services",
        "Property Inspections & Condition Reporting",
        "Integrated Facility Management Programs",
        "Grounds & Landscape Maintenance",
        "Workforce Solutions",
        "Commercial Waste & Recycling Coordination",
      ],
    },
    {
      region: "ng",
      regionName: "Nigeria",
      stats: [
        ["Primary Market", "Lagos & Abuja"],
        ["Waste Division", "In Active Development"],
      ],
      items: [
        "Integrated Facility Management Programs",
        "Janitorial, Estate & Residential Cleaning",
        "Fumigation & Pest Control",
        "Vacant Property Monitoring & Diaspora Property Care",
        "Grounds, Compound & Landscape Maintenance",
        "Workforce Solutions",
        "Organic Waste Management & Commercial Waste Solutions",
        "Organic Waste Recycling & Composting (in development)",
      ],
    },
  ],
};

// Deck §17.9 — "What happens next". Five steps, same in both markets.
export const TIMELINE = [
  {
    icon: "note",
    when: "Step 1",
    title: "Your inquiry",
    body: "We review your request and confirm the details within 24 business hours.",
  },
  {
    icon: "map",
    when: "Step 2",
    title: "Assessment",
    body: "We assess the property, facility or waste stream, on site wherever practical.",
  },
  {
    icon: "note",
    when: "Step 3",
    title: "Proposal",
    body: "You receive a written scope, schedule and price, built around what we found.",
  },
  {
    icon: "calendar",
    when: "Step 4",
    title: "Delivery",
    body: "The program starts, with a named supervisor and an agreed inspection schedule.",
  },
  {
    icon: "call",
    when: "Step 5",
    title: "Report & review",
    body: "You receive reporting on the agreed cycle, and the program is reviewed and adjusted as your needs change.",
  },
];

export const FAQS = [
  {
    q: "How quickly will you respond?",
    a: "We respond to every inquiry within one business day. A member of the team confirms the details, answers your questions and agrees the next step with you — usually an assessment of the property, facility or waste stream.",
  },
  {
    q: "What is the difference between your two divisions?",
    a: "Facility Management covers the built environment: cleaning and janitorial programs, inspections and condition reporting, property turns, maintenance coordination, grounds care and on-site personnel. Waste Management covers what that environment produces: bin systems, collection, separation, recycling and — in Nigeria — organic recovery. Many clients need both, and one supervisor is accountable for both.",
  },
  {
    q: "Do you offer the same services in the United States and Nigeria?",
    a: "No, and we say so plainly. The brand promise, the standards and the accountability are identical, but each market offers what it can actually deliver today. Facility Management is fully active in both. Waste Management in the US is recycling and collection coordination inside a facility program; in Nigeria it is a broader environmental platform, parts of which are still in development and labelled as such.",
  },
  {
    q: "How do I know the standard is being held?",
    a: "Every program runs on a written scope with defined task frequencies, delivered by trained, background-checked personnel under a named supervisor. Supervisors inspect against that written scope on a schedule, and you receive a structured report after service or on an agreed cycle. When something falls short it is logged, corrected and confirmed back to you.",
  },
  {
    q: "Can you look after a property I cannot visit?",
    a: "Yes. Scheduled inspections, vacant property monitoring and diaspora property care exist for exactly that. You receive timestamped photographs and a written condition report after every visit, so an owner in another country gets the same evidence, on the same day, as one down the road.",
  },
  {
    q: "Are you licensed and insured?",
    a: "In the United States, Ivy Gaze is fully licensed and insured and is a certified Women-Owned, Minority-Owned and HUB-Certified small business in Texas, qualified to serve government and institutional clients under diversity procurement programs. In Nigeria we operate to the same service standards, and registrations, permits and environmental approvals are obtained before the service that requires them is offered.",
  },
];

// Deck §2.3 / §4.2 — the two divisions. The whole content deck is built on the
// point that Ivy Gaze is not a cleaning company with extras: it is one brand
// running two disciplines. Every service line belongs to one of them.
export const DIVISIONS = {
  facility: {
    name: "Facility Management",
    tagline: "Clean Spaces. Safe Spaces. Ready Spaces.",
  },
  waste: {
    name: "Waste Management",
    tagline: "Turning Waste Into Resources.",
  },
};

export const SERVICE_DIVISION = {
  "property-care": "facility",
  "facility-management": "facility",
  "environmental-services": "facility",
  "grounds-maintenance": "facility",
  "workforce-solutions": "facility",
  "waste-management": "waste",
};

// Deck §3.1–§3.3 — the About page story, identical in both markets.
export const ABOUT = {
  heroHeading: "Built on Trust. Driven by Standards. Defined by Peace of Mind.",
  heroBody:
    "Ivy Gaze protects the places people depend on and takes responsibility for what those places produce: two divisions, one standard, across two countries.",
  storyHeading: "The Ivy Gaze Story",
  story: [
    "Ivy Gaze was founded on a simple but powerful belief: people deserve peace of mind knowing that the places they live, work, invest in and care about are professionally maintained, protected and managed.",
    "We do not see our work as a list of tasks; we see it as a responsibility. We are not simply maintaining properties; we are protecting investments. We are not simply managing facilities; we are enabling productivity. We are not simply cleaning environments; we are improving lives.",
    "That responsibility does not stop at the door. Every building produces material, and how that material is handled decides whether it becomes a cost, a nuisance and an environmental problem, or a resource returned to productive use. That question is significant enough to deserve its own business, its own expertise and its own investment. So Ivy Gaze is built as two divisions rather than one service list.",
    "Both divisions operate to the same standard, under the same brand, with the same accountability. What differs between our markets is what we currently offer and how far each capability has been developed, and we say so plainly.",
  ],
  mission:
    "To protect and enhance the spaces people depend on by delivering integrated facility management, environmental and waste management services and operational support: through skilled professionals, intelligent systems and unwavering service excellence.",
  vision:
    "To be the world's most trusted partner in facility and environmental management, setting new standards through innovation, sustainability and operational excellence, while preserving assets, improving environments and strengthening communities. By 2035, Ivy Gaze aims to be recognized as one of the most trusted and respected facility management and environmental services companies operating across multiple countries.",
  // Deck §3.9 / §3.10 — both sections are blocked on client-supplied material.
  // TODO(client): team photos and biographies (Founder/CEO, Operations Lead US,
  // Client Relations Lead US, Country Lead Nigeria, Waste Management Lead), and
  // partner logos with permission to display them, tagged by market.
};

// Deck §2.9 / §15.4 — retained from the deck as placeholders.
// TODO(client): every testimonial needs written approval of the exact wording,
// the name and the title before publication, and must be tagged by country and
// division so it only appears where it is relevant. Until then the attributions
// stay bracketed rather than being filled with invented names.
export const TESTIMONIALS = {
  heading: "Proven Results. Real Properties. Measurable Outcomes.",
  body: "What we were asked to solve, what we did, and what changed as a result.",
  items: [
    {
      quote:
        "Ivy Gaze brought a level of structure to our facility we didn't have before: inspections, reports, real accountability. We always know where things stand.",
      name: "Sarah Chen",
      role: "Office Manager",
    },
    {
      quote:
        "As a property manager overseeing multiple units, I need a partner I can trust without micromanaging. Ivy Gaze delivers, and the reporting means I never have to chase them for updates.",
      name: "Ade Adeyemi",
      role: "Property Manager",
    },
    {
      quote:
        "Living abroad, I needed someone I could trust completely with my property back home. Ivy Gaze's reporting keeps me informed every step of the way, I don't have to worry.",
      name: "Maria Rodriguez",
      role: "Diaspora Property Owner",
    },
  ],
};

// ---------------------------------------------------------------------------
// REGION-SPLIT COPY
//
// Every string the content deck marks UNITED STATES VERSION or NIGERIA VERSION.
// The two blocks are the same shape so a component reads CONTENT[region].<path>
// and never cares which market is active — only the words change.
//
// The deck is emphatic on one point: publish only what is real in each market.
// Services the deck marks "Confirm" are left out of the lists below rather than
// launched as active, and Nigeria's developing waste capability is labelled.
// ---------------------------------------------------------------------------

export const CONTENT = {
  // =========================================================================
  // UNITED STATES
  // =========================================================================
  us: {
    regionName: "United States",

    // Deck §1.4 — the CTA pair used at the bottom of most pages.
    ctas: {
      primary: "Request a Quote",
      secondary: "Schedule a Walkthrough",
    },

    // Deck §2.1
    hero: {
      heading:
        "Protecting Properties. Preserving Value. Delivering Peace of Mind.",
      body: "Ivy Gaze is an integrated facility management and waste management partner for commercial, government, institutional and residential properties across the United States. One accountable team, structured reporting, and standards that hold up under inspection.",
    },

    // Deck §2.2 — trust bar, directly below the hero.
    trustBar: [
      "Certified Women-Owned, Minority-Owned & HUB-Certified Small Business (Texas)",
      "Licensed and Insured · Background-Checked, Trained Personnel",
      "Serving Government, Healthcare, Education, Commercial & Residential Properties",
      "Technology-Enabled Inspections, Reporting & Quality Assurance",
      "Two Divisions Under One Accountable Brand",
    ],

    // Deck §2.3 — the two divisions as primary gateways.
    divisions: {
      heading: "One Company. Two Divisions. One Standard.",
      body: "Ivy Gaze operates across two connected but independent disciplines keeping the built environment functional and presentable, and managing what that environment produces responsibly.",
      cards: [
        {
          key: "facility",
          title: "Facility Management",
          tagline: "Clean Spaces. Safe Spaces. Ready Spaces.",
          body: "Janitorial and commercial cleaning, day porter coverage, post-construction cleanup, property turns, floor care, grounds and facility support: delivered on a schedule, supervised, documented and reported.",
          link: "Explore Facility Management",
        },
        {
          key: "waste",
          title: "Waste Management",
          tagline: "Turning Waste Into Resources.",
          // The deck is explicit: describe coordination only in the US. Do not
          // imply collection or hauling capability we do not hold here, and do
          // not copy Nigeria's developing waste platform into this market.
          body: "Waste and recycling coordination for the facilities we manage: bin management, collection scheduling, recycling program setup and diversion reporting.",
          link: "Explore Waste Management",
        },
      ],
    },

    homeServices: {
      body: "Ivy Gaze operates across two connected but independent disciplines keeping the built environment functional and presentable, and managing what that environment produces responsibly.",
    },

    // Deck §2.6 — selected service highlights for this market.
    serviceHighlights: [
      "Janitorial & Commercial Cleaning",
      "Day Porter Services",
      "Post-Construction Cleaning",
      "Apartment & Property Turn Services",
      "Floor Care & Polishing",
      "Grounds & Landscape Maintenance",
    ],

    // Deck §2.5
    industries: [
      "Government & Municipal",
      "Healthcare",
      "Schools & Universities",
      "Corporate Offices",
      "Commercial & Multi-Site Facilities",
      "Apartment & Residential Communities",
      "Construction & Real Estate",
      "Hospitality",
    ],

    // Deck §2.8
    sustainability: {
      heading: "Sustainable Solutions. Green Future.",
      body: "Responsible operations are part of how we work: efficient use of materials, sensible product selection, waste separated properly and recycling programs that actually get used. Where a client wants to improve diversion on their site, we build it into the program.",
      link: "Our environmental commitment",
    },

    // Deck §1.4 / §2.10
    closingCta: {
      heading: "When Ivy Gaze Is Handling It, You Don't Have to Worry.",
      body: "Tell us about your property and we will put a scope and a price in front of you. No obligation, no pressure, just a clear proposal.",
    },

    // TODO(client): the deck carries no figures for this section. These three
    // are client-supplied and unverified — §14.6 asks that only verified
    // indicators be published, so confirm or replace them before launch.
    stats: {
      heading: "Numbers that speak for themselves",
      body: "Ivy Gaze is an integrated facility management and waste management partner serving commercial, government, institutional and residential properties across the United States, headquartered in Arlington, Texas.",
      items: [
        {
          label: "Properties protected",
          value: "100+",
          note: "Across Texas and the DFW metroplex.",
        },
        {
          label: "Years in operation",
          value: "7+",
          note: "Trusted by government, corporate, residential and diaspora clients.",
        },
        {
          label: "Client retention rate",
          value: "97%",
          note: "Long-term partnerships built on performance.",
        },
      ],
    },

    // Deck §3.8 — certifications and standards.
    certifications: {
      heading: "Certified. Compliant. Trusted.",
      body: "In the United States, Ivy Gaze is a certified Women-Owned, Minority-Owned and HUB-Certified small business: fully licensed, insured and qualified to serve government and institutional clients under diversity procurement programs. Our personnel are background-checked, trained and held to a single accountable standard.",
      items: [
        "Women-Owned Business Certified (US)",
        "Minority-Owned Business Certified (US)",
        "HUB-Certified Small Business (Texas)",
        "Fully Licensed & Insured",
        "Background-Checked, Trained Personnel",
      ],
    },

    // Deck §13.4 — the diaspora client type reads differently in each market.
    clientTypes: [
      {
        title: "Government & Corporate",
        text: "Procurement officers, facility supervisors and office managers who need a compliant, reliable, accountable vendor, and evidence they chose one.",
      },
      {
        title: "Property & Real Estate",
        text: "Property managers, developers, agents and estate boards who need a dependable partner for turnovers, common areas, maintenance and day-to-day operations.",
      },
      {
        title: "Residential",
        text: "Homeowners, families and residents who want consistent, trustworthy care for the place they call home, from people they are comfortable letting in.",
      },
      {
        title: "Diaspora Property Owners",
        text: "Clients in the United States with property in Nigeria, who need professional oversight and honest reporting rather than a favor from a relative.",
      },
    ],

    // Deck §4
    servicesPage: {
      heroHeading: "Two Divisions. One Accountable Partner.",
      heroBody:
        "Ivy Gaze delivers facility services that keep your property clean, functional and inspection-ready and handles the waste and recycling side of that property with the same discipline. Choose the division you need.",
      tagline: "Services",
      heading: "Not sure which you need?",
      body: "Many clients need both. A facility program and a waste program on the same site are easier to run when one partner is accountable for both: one supervisor, one report, one point of contact.",
      featureHeading: "Clean Spaces. Safe Spaces. Ready Spaces.",
      featureBody:
        "Property and facility-focused services that keep buildings, workplaces, estates and managed environments clean, functional, safe and presentable: delivered on schedule, supervised, and reported.",
    },

    // Deck §4.4 / §4.5
    servicesCta: {
      heading: "Explore the Division You Need",
      body: [
        "Or tell us about the site and we will recommend the right combination.",
        "When something goes wrong, we move. Flooding, leaks, storm damage, a failed system, a site that has to be presentable in the morning: Ivy Gaze mobilises on short notice, assesses the situation, coordinates the response and documents every step.",
      ],
    },

    // Deck §5–§12. One entry per service group; `name` doubles as the tab label
    // on the home page and the card title on /services. Services the deck marks
    // "Confirm" for this market are deliberately absent from these lists.
    services: {
      "property-care": {
        name: "Property Care",
        cardBody:
          "Inspections, condition reporting, property turns, vacant property monitoring and care for owners who cannot be on site.",
        pageHeading:
          "Property Care That Protects What You Can't Always Be There to Watch",
        pageIntro:
          "Whether your property is across town or across an ocean, Ivy Gaze provides the oversight, reporting and hands-on care that protect its value.",
        bodyHeading: "Property Care",
        body: "Property Care is the foundation of the Ivy Gaze promise. Regular inspections, structured condition reporting and proactive maintenance coordination catch small issues before they become expensive ones. For owners who cannot be on site, including our growing base of diaspora clients in the United States with real estate in Nigeria, digital reporting means you always know exactly how your property is doing, and you can prove it.",
        sections: [
          {
            heading: "Services in This Group",
            items: [
              "Property Inspections & Condition Reporting",
              "Apartment & Property Turn Services",
              "Diaspora Property Care — inquiry handled in the US, service delivered in Nigeria",
            ],
          },
          {
            heading: "Who This Is For",
            items: [
              "Property owners and investors managing assets they do not visit often",
              "Managing agents and portfolio managers who need documented evidence of condition",
              "Landlords between tenancies and before handover",
              "Apartment communities working to a lease calendar",
              "Owners preparing to let, sell or renovate",
            ],
          },
          {
            heading: "In the United States",
            body: "Inspection scopes can be aligned to lender, insurer or HOA requirements, and to turn and make-ready standards for apartment communities. Our personnel are background-checked and insured, and reports are formatted for property management systems.",
          },
        ],
      },

      "facility-management": {
        name: "Facility Operations & Maintenance",
        cardBody:
          "Integrated facility programs, vendor coordination, preventive and planned maintenance, compliance monitoring and performance reporting.",
        pageHeading:
          "Facility Operations Built for People Who Have Other Jobs to Do",
        pageIntro:
          "Ivy Gaze coordinates the vendors, runs the maintenance schedule, monitors compliance and reports on all of it, so facility oversight stops consuming your week.",
        bodyHeading: "Facility Operations & Maintenance",
        body: "A property that is not maintained does not fail all at once. It slips: a floor that dulls, a restroom that runs short at the worst hour, a facade that no longer says what the organization wants it to say, a small leak that becomes a ceiling. By the time it is visible to everyone, it is expensive. Ivy Gaze exists to prevent that slide. We build a program around how your property is actually used, its hours, its footfall, its access rules and its pressure points, then deliver it on schedule with supervision, documented quality checks and reporting you can read in two minutes.",
        sections: [
          {
            heading: "Services in This Group",
            items: [
              "Integrated Facility Management Programs",
              "Vendor coordination and oversight",
              "Preventive and planned maintenance scheduling",
              "Compliance monitoring and performance reporting",
            ],
          },
          {
            heading: "In the United States",
            body: "For US clients, that means meeting the standards your procurement, compliance and inspection processes require, and being able to evidence it. Our teams are trained, background-checked, insured and supervised, and our reporting is built to survive an audit.",
          },
          {
            heading: "Who This Is For",
            items: [
              "Government agencies and municipal facilities",
              "Corporate offices and multi-site commercial facilities",
              "Healthcare facilities, schools and universities",
              "Property managers and apartment communities",
              "Hospitality operators, retail and mixed-use properties",
            ],
          },
        ],
      },

      "environmental-services": {
        name: "Cleaning & Environmental Services",
        cardBody:
          "Janitorial and commercial cleaning, office and workplace cleaning, day porter coverage, post-construction cleaning, deep cleaning and disinfection, floor care and window cleaning.",
        pageHeading: "Cleaning Delivered as a Program, Not a Visit",
        pageIntro:
          "Documented protocols, trained teams, supervisor checks and reporting after service, the difference between a cleaner turning up and a facility being maintained.",
        bodyHeading: "Cleaning & Environmental Services",
        body: "Cleanliness is the most visible part of how a property is managed and the fastest thing to slip. Ivy Gaze builds cleaning programs around how a space is actually used, its hours, its footfall, its access rules and its pressure points, and then holds the standard with supervision and reporting rather than hope. Every program is one part of a larger service relationship: the same team protecting your property's condition can run your grounds, your pest control and your waste program under one accountable plan.",
        sections: [
          {
            heading: "Services in This Group",
            items: [
              "Janitorial & Commercial Cleaning",
              "Office & Workplace Cleaning",
              "Day Porter Services",
              "Post-Construction Cleaning",
              "Deep Cleaning & Disinfection",
              "Floor Care & Polishing",
              "Window & Glass Cleaning — interior and reachable exterior",
            ],
          },
          {
            heading: "How the Standard Is Held",
            items: [
              "A written scope of work with defined task frequencies, agreed before we start rather than assumed",
              "Site-specific induction for every team member, including access, security and safety protocols",
              "Scheduled supervisor inspections against that written scope",
              "A service report on the agreed cycle, including anything found and anything corrected",
              "A logged corrective-action process, with repeat issues escalated into a program change",
            ],
          },
        ],
      },

      "waste-management": {
        name: "Waste Management",
        cardBody:
          "Waste and recycling coordination for the facilities we serve: bin systems, collection scheduling, recycling program design and diversion reporting.",
        pageHeading: "Waste and Recycling, Managed Like Part of the Facility",
        pageIntro:
          "Bin systems that work, collections that happen, recycling that people actually use, and reporting that shows what was diverted.",
        bodyHeading:
          "The Part of Facility Management Everyone Forgets Until It Fails",
        body: "Waste is the service nobody thinks about until the bins overflow, a collection is missed, or a recycling audit shows that everything went to landfill anyway. It is also one of the few areas of facility spend where doing it better usually costs less. Ivy Gaze manages waste as part of the facility program: right containers in the right places, collection scheduled around how the building actually fills up, recycling streams set up so they are easy to use correctly, and reporting that tells you what was generated and what was diverted.",
        sections: [
          {
            heading: "What This Division Covers",
            items: [
              "Commercial Waste & Recycling Coordination — container systems, collection scheduling and hauler management for the facilities we serve",
              "Recycling Program Design & Management — stream setup, signage, placement, staff guidance and contamination reduction",
              "Waste Diversion Reporting — what was generated, what was diverted, and what that means for your sustainability reporting",
            ],
          },
          {
            heading: "Who This Is For",
            items: [
              "Commercial and multi-tenant properties",
              "Government and institutional facilities",
              "Schools, universities and healthcare facilities",
              "Retail and hospitality operators",
              "Property managers with sustainability reporting obligations",
            ],
          },
          {
            heading: "Why It Matters",
            body: "Poor waste practice costs more than the collection fee. It costs pest problems, odour complaints, blocked drainage, damaged relationships with neighbours and, increasingly, the ability to answer questions from clients, funders and regulators about environmental performance. Good waste practice reverses each of those, and puts useful material back to work instead of burying it.",
          },
        ],
      },

      "grounds-maintenance": {
        name: "Grounds & Landscape Maintenance",
        cardBody:
          "Lawn care, landscaping, seasonal cleanup and exterior grounds maintenance for commercial, government and residential properties.",
        pageHeading: "First Impressions Start at the Curb",
        pageIntro:
          "Ivy Gaze keeps the outside of your property as well cared for as the inside: on a schedule, with the same supervision and reporting.",
        bodyHeading: "Grounds & Landscape Maintenance",
        body: "Grounds are the first thing every visitor, tenant, inspector and prospective buyer sees, and the part of a property most likely to be maintained by whoever is available. Overgrowth is not only untidy: it blocks drainage, hides hazards, damages surfaces, encourages pests and, on a boundary, invites encroachment. A season of neglect takes far more than a season to reverse.",
        sections: [
          {
            heading: "Typical Activities",
            items: [
              "Lawn mowing, edging and trimming",
              "Shrub, hedge and tree pruning within safe working limits",
              "Flower bed maintenance and seasonal planting",
              "Weed control across beds, paving and boundaries",
              "Mulching and ground cover maintenance",
              "Irrigation inspection, coordination and fault reporting",
              "Seasonal cleanup — leaf removal, and snow and ice management in applicable US markets",
            ],
          },
        ],
      },

      "workforce-solutions": {
        name: "Workforce Solutions",
        cardBody:
          "Dedicated on-site personnel, site supervisors and outsourced operational staffing, held to the same accountability standard as every other service.",
        pageHeading: "The People Behind Every Property We Protect",
        pageIntro:
          "When you need reliable, trained personnel on site, Ivy Gaze provides staffing held to the same accountability standard as every other service we deliver.",
        bodyHeading: "Workforce Solutions",
        body: "Hiring and holding good operational staff is a job in itself. You recruit, you vet, you train, you manage attendance, you cover absence, you handle payroll and compliance, and when someone leaves, you do all of it again. Meanwhile the site still has to be staffed today. Ivy Gaze takes that whole cycle. You get a person on site who is trained, vetted, supervised and covered when they are absent, and you deal with one company rather than an employment problem.",
        sections: [
          {
            heading: "What We Do on Site",
            items: [
              "Dedicated on-site facility personnel",
              "Operational support staff for cleaning, portering and facility duties",
              "Site supervisors and team leads",
              "Outsourced operational staffing for recurring roles",
              "Background screening and role-specific vetting",
              "Performance reporting and supervisor oversight",
            ],
          },
          {
            heading: "Who This Is For",
            items: [
              "Government agencies and municipal facilities",
              "Corporate offices and multi-site commercial facilities",
              "Property managers scaling operations across sites",
              "General contractors needing supervised operational crews",
            ],
          },
        ],
      },
    },

    // Deck §17.1, §17.7 and §16.6
    contact: {
      tagline: "Request a quote",
      heading: "Tell Us About Your Property, We'll Take It From There",
      bodyLead:
        "Choose the division, tell us about the site, and we will confirm your request within ",
      bodyHighlight: "24 business hours",
      submitLabel: "Submit Request",
      confirmHeading: "Request Received",
      confirmBody:
        "Thank you. Your request has been received. A member of the Ivy Gaze team will contact you within 24 business hours to confirm the next steps.",
      talkFirst:
        "Call 682-250-0650 or email info@ivygaze.com and we will connect you with the right team.",
      hoursHeading: "Business Hours",
      hoursLines: ["Monday – Friday :", "8:00 AM – 5:00 PM (CT)"],
      hoursNote: "We respond to all inquiries within one business day.",
      hoursFinePrint:
        "Requests submitted outside business hours will be reviewed on the next business day.",
      methods: [
        {
          icon: "mail",
          title: "Email",
          body: "Reach out anytime with questions or service requests.",
          link: "info@ivygaze.com",
          href: "mailto:info@ivygaze.com",
        },
        {
          icon: "whatsapp",
          title: "Live chat",
          body: "Connect with our team instantly during business hours.",
          link: "Start new chat",
          href: "#",
        },
        {
          icon: "call",
          title: "Phone",
          body: "Speak directly with someone who can help right away.",
          link: "682-250-0650",
          href: "tel:+16822500650",
        },
        {
          icon: "pin",
          title: "Office",
          body: "Visit us or send mail to our main office location.",
          link: "110 W Randol Mill Rd, Suite 240, Arlington, TX 76011",
          href: "https://maps.google.com/?q=110+W+Randol+Mill+Rd+Suite+240+Arlington+TX+76011",
        },
      ],
    },
  },

  // =========================================================================
  // NIGERIA
  // =========================================================================
  ng: {
    regionName: "Nigeria",

    // Deck §1.4
    ctas: {
      primary: "Request a Facility Assessment",
      secondary: "Discuss Waste Solutions",
    },

    // Deck §2.1
    hero: {
      heading:
        "Protecting Properties. Preserving Value. Delivering Peace of Mind.",
      body: "Ivy Gaze brings two capabilities under one brand in Nigeria: facility management that keeps corporate properties, estates and institutions running to standard, and an environmental waste management platform built to recover value from materials that would otherwise be lost to disposal.",
    },

    // Deck §2.2
    trustBar: [
      "Two Divisions Under One Accountable Brand: Facility Management & Waste Management",
      "Serving Corporate Organizations, Estates, Institutions, Hospitality & Property Owners",
      "Structured Inspections, Reporting & Supervision on Every Engagement",
      "Trained, Supervised, Background-Checked Personnel",
      "Building Nigeria's Organic Waste Recovery Capability",
    ],

    // Deck §2.3
    divisions: {
      heading: "One Company. Two Divisions. One Standard.",
      body: "Ivy Gaze operates across two connected but independent disciplines keeping the built environment functional and presentable, and managing what that environment produces responsibly.",
      cards: [
        {
          key: "facility",
          title: "Facility Management",
          tagline: "Clean Spaces. Safe Spaces. Ready Spaces.",
          body: "Integrated facility management for corporate properties, estates, institutions and developments: cleaning and janitorial programs, property inspections, fumigation and pest control, grounds care, vendor coordination and on-site personnel.",
          link: "Explore Facility Management",
        },
        {
          key: "waste",
          title: "Waste Management",
          tagline: "Turning Waste Into Resources.",
          body: "An environmental services platform built around responsible waste handling, diversion from disposal, organic waste recovery, composting and the return of useful materials to productive use.",
          link: "Explore Waste Management",
        },
      ],
    },

    homeServices: {
      body: "Ivy Gaze operates across two connected but independent disciplines keeping the built environment functional and presentable, and managing what that environment produces responsibly.",
    },

    // Deck §2.6
    serviceHighlights: [
      "Integrated Facility Management Programs",
      "Janitorial & Commercial Cleaning",
      "Fumigation & Pest Control",
      "Property Inspections & Vacant Property Monitoring",
      "Organic Waste Management",
      "Commercial Waste Solutions",
    ],

    // Deck §2.5
    industries: [
      "Corporate Organizations",
      "Estates & Residential Developments",
      "Property Developers & Managers",
      "Institutions & Schools",
      "Hospitality",
      "Markets & Food Businesses",
      "Farms & Agricultural Operations",
      "Diaspora Property Owners",
    ],

    // Deck §2.8
    sustainability: {
      heading: "Sustainable Solutions. Green Future.",
      body: "Nigeria generates enormous volumes of organic material that end up mixed with general waste and lost to disposal, while farms and soils go without the resources that material could become. Ivy Gaze is building the systems to recover suitable organic materials, process them responsibly and return their value to the economy.",
      link: "Our environmental commitment",
    },

    // Deck §1.4 / §2.10
    closingCta: {
      heading: "When Ivy Gaze Is Handling It, You Don't Have to Worry.",
      body: "Let us assess your facility, your estate or your waste stream and come back to you with a practical plan and a clear scope of work.",
    },

    // TODO(client): as with the US block, these three figures are not in the
    // content deck and are unverified. §14.6 asks that only verified indicators
    // be published — confirm or replace before launch.
    stats: {
      heading: "Numbers that speak for themselves",
      body: "Ivy Gaze delivers integrated facility management for corporate organizations, estates, developers and institutions across Nigeria, alongside an environmental waste management platform in active development.",
      items: [
        {
          label: "Properties protected",
          value: "100+",
          note: "Across Lagos, Abuja and expanding nationwide.",
        },
        {
          label: "Years in operation",
          value: "7+",
          note: "Trusted by estates, developers, institutions and diaspora clients.",
        },
        {
          label: "Client retention rate",
          value: "97%",
          note: "Long-term partnerships built on performance.",
        },
      ],
    },

    // Deck §3.8 / §16b.5. The deck is explicit that Nigerian credentials must
    // not be published until the registrations and permits are formally in
    // hand, so the bracketed lines below are deliberately left as placeholders.
    // TODO(client): supply company registration details, waste handling and
    // transport permits, environmental approvals, and fumigation licensing —
    // and only then replace the bracketed items.
    certifications: {
      heading: "Standards We Hold Ourselves To",
      body: "Ivy Gaze Nigeria operates to the same service standards as our US business: documented protocols, supervised delivery, trained and background-checked personnel, and reporting after service. Registrations, permits and environmental approvals relevant to each service are obtained before that service is offered.",
      items: [
        "Trained, supervised and background-checked personnel",
        "Documented service protocols and quality checks",
        "Structured reporting on every engagement",
        // "[Company registration details, to be supplied by client]",
        // "[Environmental and waste-handling permits, to be added only once formally secured]",
      ],
    },

    // Deck §13.4
    clientTypes: [
      {
        title: "Government & Corporate",
        text: "Procurement officers, facility supervisors and office managers who need a compliant, reliable, accountable vendor, and evidence they chose one.",
      },
      {
        title: "Property & Real Estate",
        text: "Property managers, developers, agents and estate boards who need a dependable partner for turnovers, common areas, maintenance and day-to-day operations.",
      },
      {
        title: "Waste Generators",
        text: "Markets, food businesses, processors, farms and institutions producing material that should be recovered rather than buried.",
      },
      {
        title: "Diaspora Property Owners",
        text: "Individuals living abroad, particularly across the US–Nigeria corridor, who need a trusted, reporting-driven partner to protect property they cannot personally check on.",
      },
    ],

    // Deck §4
    servicesPage: {
      heroHeading: "Two Divisions. One Accountable Partner.",
      heroBody:
        "Ivy Gaze operates two divisions in Nigeria: facility management for properties, estates and institutions, and an environmental waste management platform focused on recovery, recycling and resource creation. Choose the division you need.",
      tagline: "Services",
      heading: "Not sure which you need?",
      body: "Many clients need both. A facility program and a waste program on the same site are easier to run when one partner is accountable for both: one supervisor, one report, one point of contact.",
      featureHeading: "Clean Spaces. Safe Spaces. Ready Spaces.",
      featureBody:
        "Property and facility-focused services that keep buildings, workplaces, estates and managed environments clean, functional, safe and presentable: delivered on schedule, supervised, and reported.",
    },

    // Deck §4.4 / §4.5
    servicesCta: {
      heading: "Explore the Division You Need",
      body: [
        "Or tell us about the facility or the waste stream and we will recommend the right approach.",
        "When something goes wrong, we move. Flooding, leaks, storm damage, a failed system, a site that has to be presentable in the morning: Ivy Gaze mobilises on short notice, assesses the situation, coordinates the response and documents every step.",
      ],
    },

    services: {
      "property-care": {
        name: "Property Care",
        cardBody:
          "Inspections, condition reporting, vacant property monitoring and diaspora property care for owners who cannot be on site.",
        pageHeading:
          "Property Care That Protects What You Can't Always Be There to Watch",
        pageIntro:
          "Whether your property is across Lagos or across an ocean, Ivy Gaze provides the oversight, reporting and hands-on care that protect its value.",
        bodyHeading: "Property Care",
        body: "Property Care is the foundation of the Ivy Gaze promise. Regular inspections, structured condition reporting and proactive maintenance coordination catch small issues before they become expensive ones. A vacant property has no one to notice the leak, the encroachment or the material walking off site, and an owner abroad has no way to check. Scheduled, documented presence replaces that with evidence.",
        sections: [
          {
            heading: "Services in This Group",
            items: [
              "Property Inspections & Condition Reporting",
              "Vacant Property Monitoring",
              "Diaspora Property Care",
            ],
          },
          {
            heading: "Who This Is For",
            items: [
              "Owners abroad with property in Nigeria",
              "Investors holding land or buildings pending development or sale",
              "Developers with completed but unsold or untenanted units",
              "Estates managing unoccupied properties on behalf of owners",
              "Executors and families managing property during probate or transition",
            ],
          },
          {
            heading: "In Nigeria",
            body: "Inspections are particularly valuable for estates and for owners abroad. Reports are delivered digitally so an owner in another country receives the same evidence, on the same day, as one in Lagos. Visits are logged with time and location, every report follows the same checklist so two visits can be compared directly, and anything urgent reaches you by phone or message the same day rather than in the next scheduled report.",
          },
        ],
      },

      "facility-management": {
        name: "Facility Operations & Maintenance",
        cardBody:
          "Integrated facility programs, vendor coordination, preventive and planned maintenance, and minor remedial property support.",
        pageHeading:
          "Facility Operations Built for People Who Have Other Jobs to Do",
        pageIntro:
          "Ivy Gaze coordinates the vendors, runs the maintenance schedule, monitors compliance and reports on all of it, so facility oversight stops consuming your week.",
        bodyHeading: "Facility Operations & Maintenance",
        body: "A property that is not maintained does not fail all at once. It slips: a floor that dulls, a restroom that runs short at the worst hour, a facade that no longer says what the organization wants it to say, a small leak that becomes a ceiling. By the time it is visible to everyone, it is expensive. Ivy Gaze exists to prevent that slide. We build a program around how your property is actually used, its hours, its footfall, its access rules and its pressure points, then deliver it on schedule with supervision, documented quality checks and reporting you can read in two minutes.",
        sections: [
          {
            heading: "Services in This Group",
            items: [
              "Integrated Facility Management Programs",
              "Minor & Remedial Property Support",
              "Vendor coordination and oversight",
              "Preventive and planned maintenance scheduling",
            ],
          },
          {
            heading: "In Nigeria",
            body: "For Nigerian clients, that means dependable delivery in an environment where dependability is the differentiator: teams that arrive, supervisors who check, materials that are available, and a company that reports honestly when something needs attention.",
          },
          {
            heading: "Who This Is For",
            items: [
              "Corporate organizations and head offices",
              "Estates, gated communities and residential developments",
              "Property developers, owners and managing agents",
              "Institutions, schools and healthcare facilities",
              "Hospitality and serviced properties",
              "Banks, telecoms and multi-branch operations",
            ],
          },
        ],
      },

      "environmental-services": {
        name: "Cleaning & Environmental Services",
        cardBody:
          "Janitorial and commercial cleaning, estate and residential cleaning, day porter coverage, post-construction cleaning, deep cleaning, floor care, and fumigation and pest control.",
        pageHeading: "Cleaning Delivered as a Program, Not a Visit",
        pageIntro:
          "Documented protocols, trained teams, supervisor checks and reporting after service, the difference between a cleaner turning up and a facility being maintained.",
        bodyHeading: "Cleaning & Environmental Services",
        body: "Cleanliness is the most visible part of how a property is managed and the fastest thing to slip. Ivy Gaze builds cleaning programs around how a space is actually used, its hours, its footfall, its access rules and its pressure points, and then holds the standard with supervision and reporting rather than hope. Every program is one part of a larger service relationship: the same team protecting your property's condition can run your grounds, your pest control and your waste program under one accountable plan.",
        sections: [
          {
            heading: "Services in This Group",
            items: [
              "Janitorial & Commercial Cleaning",
              "Estate & Residential Cleaning",
              "Day Porter Services",
              "Post-Construction Cleaning",
              "Deep Cleaning & Disinfection",
              "Floor Care & Polishing",
              "Fumigation & Pest Control — subject to licensing confirmation",
            ],
          },
          {
            heading: "How the Standard Is Held",
            items: [
              "A written scope of work with defined task frequencies, agreed before we start rather than assumed",
              "Site-specific induction for every team member, including access, security and safety protocols",
              "Scheduled supervisor inspections against that written scope",
              "A service report on the agreed cycle, including anything found and anything corrected",
              "A logged corrective-action process, with repeat issues escalated into a program change",
            ],
          },
        ],
      },

      "waste-management": {
        name: "Waste Management",
        cardBody:
          "An environmental platform built around responsible waste handling, diversion from disposal, material recovery, organic waste processing and the conversion of waste into useful resources.",
        pageHeading: "Turning Waste Into Resources",
        pageIntro:
          "Ivy Gaze is building an environmental platform around responsible waste handling, diversion from disposal, material recovery and organic waste processing, because most of what Nigeria throws away still has value in it.",
        bodyHeading:
          "Most of What We Throw Away Is Not Waste. It Is Material in the Wrong Place.",
        body: "Every day, enormous volumes of fruit and vegetable matter, market residue, food-business waste, agricultural residue and green waste are mixed into general waste and lost to disposal. At the same time, farms and soils go without the organic resources that same material could have become. The value is destroyed twice: once when it is buried, and again when someone has to buy an imported substitute for what it should have produced. Ivy Gaze Waste Management exists to close that gap.",
        sections: [
          {
            heading: "What This Division Covers",
            items: [
              "Organic Waste Management — responsible handling and diversion of suitable biodegradable materials",
              "Commercial Waste Solutions — customized waste programs for businesses, estates, institutions and commercial facilities",
              "Agricultural & Green Waste Solutions — management and beneficial use of plant residues, landscape materials and agricultural organic residues",
              "Resource Recovery & Circular Economy — keeping useful materials in productive use instead of treating everything discarded as waste",
              "Environmental Sustainability Programs — partnerships, education and institutional programs supporting waste reduction and diversion",
              "Organic Waste Recycling & Composting — in development",
              "Recycling & Material Recovery — in development",
              "Future Resource-Conversion Solutions — in development, not currently offered",
            ],
          },
          {
            heading: "Where We Are Honest",
            body: "This platform is being built. Components of it are in planning, development or permitting. Where a service is not yet operational, it says so on the page. We do not publish processing capacities we have not achieved, we do not describe planned technologies as current services, and we do not claim approvals, certifications or partnerships until they are formally secured.",
          },
          {
            heading: "Who This Is For",
            items: [
              "Markets and market associations",
              "Food businesses, restaurants, hotels and processors",
              "Farms and agricultural operations",
              "Estates, gated communities and residential developments",
              "Corporate organizations and institutions",
              "Schools and universities",
              "Environmental, agricultural and development partners",
            ],
          },
        ],
      },

      "grounds-maintenance": {
        name: "Grounds & Landscape Maintenance",
        cardBody:
          "Landscaping, lawn care, compound maintenance and exterior grounds care for estates, corporate properties and institutions.",
        pageHeading: "First Impressions Start at the Curb",
        pageIntro:
          "Ivy Gaze keeps the outside of your property as well cared for as the inside: on a schedule, with the same supervision and reporting.",
        bodyHeading: "Grounds & Landscape Maintenance",
        body: "Grounds are the first thing every visitor, tenant, inspector and prospective buyer sees, and the part of a property most likely to be maintained by whoever is available. Overgrowth is not only untidy: it blocks drainage, hides hazards, damages surfaces, encourages pests and, on a boundary, invites encroachment. A season of neglect takes far more than a season to reverse.",
        sections: [
          {
            heading: "Typical Activities",
            items: [
              "Lawn mowing, edging and trimming",
              "Shrub, hedge and tree pruning within safe working limits",
              "Flower bed maintenance and seasonal planting",
              "Weed control across beds, paving and boundaries",
              "Mulching and ground cover maintenance",
              "Irrigation inspection, coordination and fault reporting",
              "Estate and compound grounds care",
            ],
          },
        ],
      },

      "workforce-solutions": {
        name: "Workforce Solutions",
        cardBody:
          "Trained, supervised on-site personnel for corporate facilities, estates and institutions: staffing, supervision and workforce outsourcing.",
        pageHeading: "The People Behind Every Property We Protect",
        pageIntro:
          "When you need reliable, trained personnel on site, Ivy Gaze provides staffing held to the same accountability standard as every other service we deliver.",
        bodyHeading: "Workforce Solutions",
        body: "Hiring and holding good operational staff is a job in itself. You recruit, you vet, you train, you manage attendance, you cover absence, you handle payroll and compliance, and when someone leaves, you do all of it again. Meanwhile the site still has to be staffed today. Ivy Gaze takes that whole cycle. You get a person on site who is trained, vetted, supervised and covered when they are absent, and you deal with one company rather than an employment problem.",
        sections: [
          {
            heading: "What We Do on Site",
            items: [
              "Dedicated on-site facility personnel",
              "Operational support staff for cleaning, portering and facility duties",
              "Site supervisors and team leads",
              "Estate and compound support staffing",
              "Background screening and role-specific vetting",
              "Performance reporting and supervisor oversight",
            ],
          },
          {
            heading: "Who This Is For",
            items: [
              "Corporate organizations and head offices",
              "Estates, developers and managing agents",
              "Institutions, schools and healthcare facilities",
              "Property managers scaling operations across sites",
            ],
          },
        ],
      },
    },

    // Deck §17.1, §17.7 and §16b.7.
    // TODO(client): the Nigeria office address and business hours are still
    // marked "to be confirmed" in the deck. The hours below are the deck's own
    // recommendation, not a confirmed answer, and the office line is a city
    // rather than a street address for the same reason.
    contact: {
      tagline: "Request a facility assessment",
      heading: "Tell Us What You Need, We'll Take It From There",
      bodyLead:
        "Choose the division, tell us about the property or the waste stream, and we will confirm your request within ",
      bodyHighlight: "24 business hours",
      submitLabel: "Submit Request",
      confirmHeading: "Request Received",
      confirmBody:
        "Thank you. Your request has been received. A member of the Ivy Gaze team will contact you within 24 business hours to confirm the next steps.",
      talkFirst:
        "Call +234 911 309 0000 or email dadeloye@ivygaze.com and we will connect you with the right team.",
      hoursHeading: "Business Hours",
      hoursLines: ["Monday – Friday :", "9:00 AM – 5:00 PM (WAT)"],
      hoursNote: "We respond to all inquiries within one business day.",
      hoursFinePrint:
        "Requests submitted outside business hours will be reviewed on the next business day.",
      methods: [
        {
          icon: "mail",
          title: "Email",
          body: "Reach out anytime with questions or service requests.",
          link: "dadeloye@ivygaze.com",
          href: "mailto:dadeloye@ivygaze.com",
        },
        {
          icon: "whatsapp",
          title: "Live chat",
          body: "Connect with our team instantly during business hours.",
          link: "Start new chat",
          href: "#",
        },
        {
          icon: "call",
          title: "Phone",
          body: "Speak directly with someone who can help right away.",
          link: "+234 911 309 0000",
          href: "tel:+2349113090000",
        },
        {
          icon: "pin",
          title: "Office",
          body: "Visit us or send mail to our main office location.",
          link: "Lagos, Nigeria",
          href: "#",
        },
      ],
    },
  },
};

// Deck §17.2 — the form must capture the division, because a facility inquiry
// and a waste inquiry are different sales conversations and route to different
// teams. Shown in both markets.
export const DIVISION_OPTIONS = [
  "Facility Management",
  "Waste Management",
  "Both",
  "Not sure, help me choose",
];
