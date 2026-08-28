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
    { src: s1i1, alt: "Open-plan kitchen and dining room of a residence prepared for handover" },
    { src: s1i2, alt: "Living room with a cleaned sectional, rug and styled coffee table" },
    { src: s1i3, alt: "Kitchen and double-height living area after a turnover clean" },
    { src: s1i4, alt: "Crew member in protective coveralls loading a roll-off dumpster" },
    { src: s1i5, alt: "Crew in protective suits clearing debris from a gutted room" },
    { src: s1i6, alt: "Crew bagging clutter during a heavy-duty property cleanout" },
    { src: s1i7, alt: "Brick single-storey home with a freshly mowed front lawn" },
    { src: s1i8, alt: "Cleared back yard with the fence line and overgrowth cut back" },
    { src: s1i9, alt: "Ivy Gaze crew briefing in a training room before a shift" },
    { src: s1i10, alt: "Upstairs lounge with vacuumed carpet and dressed furniture" },
    { src: s1i11, alt: "Commercial vacuums staged in storage beside a property being secured" },
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

// Shared across both markets — "Where we serve" shows the two side by side, so
// it is intentionally not region-switched.
//
// Each entry renders as one block: a panel of headline facts on the left and
// the service-line checklist on the right. The Figma frame stacks the two
// blocks vertically and shows exactly two facts per market, so `stats` is
// deliberately a pair — the service-line count that used to sit here is left
// out because the list beside it already states it.
export const COVERAGE = {
  tagline: "Coverage",
  heading: "Where we serve",
  body: "Select a region to see our service areas and capabilities.",
  columns: [
    {
      region: "us",
      regionName: "United States",
      stats: [
        ["Primary Market", "Texas"],
        ["Service Coverage", "DFW & Surrounding Areas"],
      ],
      items: [
        "Janitorial & Commercial Cleaning",
        "Property Care",
        "Facility Support Services",
        "Ground & Landscape Maintenance",
        "Turnover & Specialty Cleaning",
        "Municipal & Commercial Contracts",
      ],
    },
    {
      region: "ng",
      regionName: "Nigeria",
      stats: [
        ["Initial Market", "Lagos & Ogun"],
        ["Expansion", "Nation Wide"],
      ],
      items: [
        "Facility & Property Care",
        "Grounds Maintenance",
        "Organic Waste Management",
        "Organic Waste Recycling & Composting",
        "Environmental & Sustainability  Services",
      ],
    },
  ],
};

// The four process cards on the contact page. Same in both markets.
export const TIMELINE = [
  {
    icon: "call",
    when: "Hour 1",
    title: "We reach out",
    body: "Our team calls within 24 business hours to confirm details and answer questions about your property.",
  },
  {
    icon: "calendar",
    when: "Day 2",
    title: "We schedule",
    body: "We coordinate the appointment time that works best for you and confirm access details.",
  },
  {
    icon: "map",
    when: "Day 3",
    title: "We deliver",
    body: "Our GPS-tracked team arrives on time and completes the work to our standards.",
  },
  {
    icon: "note",
    when: "Day 4",
    title: "We follow up",
    body: "You receive digital documentation and we confirm everything met your expectations.",
  },
];

export const FAQS = [
  {
    q: "How quickly can you respond?",
    a: "We respond to all booking requests within 24 business hours. Our team will contact you to confirm details, answer questions, and schedule your service at a time that works for you.",
  },
  {
    q: "Do you serve both US and Nigeria?",
    a: "Yes. We operate across the United States and Nigeria. If you're managing property abroad, we provide digital inspections and real-time reporting so you can monitor everything remotely.",
  },
  {
    q: "What services are included?",
    a: "We offer six service lines: property care, facility management, environmental services, waste management, grounds maintenance, and workforce solutions. Each service includes specific deliverables outlined during your consultation.",
  },
  {
    q: "Can I book multiple services?",
    a: "Absolutely. One of our core strengths is coordinating multiple services under one accountable partner. You'll have a single point of contact for all your property care needs.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. Ivy Gaze is fully licensed and insured in all markets we serve. We're also Women-Owned, Minority-Owned, and HUB-Certified in the United States.",
  },
];

// ---------------------------------------------------------------------------

export const CONTENT = {
  // =========================================================================
  // UNITED STATES
  // =========================================================================
  us: {
    regionName: "United States",

    hero: {
      heading:
        "Protecting properties. Preserving value. Delivering peace of mind.",
      body: "One partner for all your property needs across Texas and the DFW metroplex. Six integrated services, one accountable team.",
    },

    homeServices: {
      body: "Property care, facility management, environmental services, waste management, grounds maintenance, and workforce solutions — licensed, insured, and HUB-Certified for US procurement.",
    },

    stats: {
      body: "Ivy Gaze is an integrated property care, facility management, and environmental services partner serving property owners, businesses, institutions, and government agencies across the United States.",
      items: [
        {
          label: "Properties protected",
          value: "100+",
          note: "Across Texas and the DFW metroplex.",
        },
        {
          label: "Years in operation",
          value: "7+",
          note: "Trusted by Government, Corporate, Residential & Diaspora Clients",
        },
        {
          label: "Client retention rate",
          value: "97%",
          note: "Long-term partnerships built on performance.",
        },
      ],
    },

    servicesPage: {
      heroHeading: "Six Services. One Accountable Partner.",
      heroBody:
        "Ivy Gaze brings structure, technology, and professionalism to every service line - so you never have to manage multiple vendors to protect a single property.",
      tagline: "Services",
      heading: "What we do for you",
      body: "Each service operates with the same rigor and accountability. Pick what you need. We handle the rest.",
      featureHeading:
        "Property Care That Protects What You Can’t Always Be There to Watch",
      featureBody:
        "Whether your property is across town or across an ocean, Ivy Gaze provides the oversight, reporting, and hands-on care that protects its value.",
    },

    servicesCta: {
      heading: "Ready to protect your property?",
      body: [
        "Let us handle the details. You get the peace of mind.",
        "When urgent property situations arise — flooding, leaks, storm damage, or other emergencies — Ivy Gaze responds quickly. Our teams are equipped to mobilize on short notice, assess the situation, coordinate",
      ],
    },

    services: {
      "property-care": {
        name: "Property Care",
        cardBody:
          "Inspections, oversight, condition reporting, maintenance coordination, diaspora property management, full property management services (tenant vetting, lease administration, and vacancy management), Airbnb & short-let support, and asset preservation.",
        pageHeading:
          "Property Care That Protects What You Can’t Always Be There to Watch",
        pageIntro:
          "Whether your property is across town or across an ocean, Ivy Gaze provides the oversight, reporting, and hands-on care that protects its value.",
        bodyHeading: "Property Care",
        body: "Property Care is the foundation of the Ivy Gaze promise. We provide regular inspections, structured condition reporting, and proactive maintenance coordination that catch small issues before they become expensive problems. For property owners who can’t be on-site — including our growing base of diaspora clients in the United States managing real estate abroad — our digital reporting systems mean you always know exactly how your property is doing.",
        sections: [
          {
            heading: "What’s Included",
            items: [
              "Scheduled property inspections with digital condition reports.",
              "Maintenance coordination and vendor oversight.",
              "Diaspora property management, inspections, updates, and on-the-ground representation for owners abroad.",
              "Airbnb & short-let property support and turnover coordination.",
              "Asset preservation planning.",
              "Photo and video documentation delivered after every visit.",
            ],
          },
          {
            heading: "Who This Is For",
            items: [
              "Diaspora property owners managing real estate from abroad",
              "Real estate investors and developers",
              "Residential property owners who travel frequently",
              "Estate and portfolio managers",
            ],
          },
        ],
      },

      "facility-management": {
        name: "Facility Management",
        cardBody:
          "Facility oversight, vendor coordination, site inspections, preventive maintenance, compliance monitoring, performance reporting, and emergency response support.",
        pageHeading: "Facility Management Built for Operational Excellence",
        pageIntro:
          "From a single corporate office to a multi-site government portfolio, Ivy Gaze keeps your facilities compliant, well-maintained, and running the way they should.",
        bodyHeading: "Facility Management",
        body: "Ivy Gaze facility management programs go beyond basic upkeep. We coordinate vendors, manage preventive maintenance schedules, monitor compliance, and provide the structured reporting that lets facility directors and procurement officers focus on strategy instead of day-to-day firefighting. We deliver these programs for government, corporate, and estate clients across the United States, adapting vendor coordination and compliance standards to each site.",
        sections: [
          {
            heading: "What’s Included",
            items: [
              "Facility oversight and site inspections",
              "Vendor coordination for specialized repairs and services",
              "Preventive maintenance scheduling",
              "Compliance monitoring (OSHA and agency-specific requirements in the US)",
              "Performance reporting and digital service logs",
              "Dedicated account and supervisor structure for every client",
            ],
          },
          {
            heading: "Who This Is For",
            items: [
              "Government agencies and municipalities",
              "Corporate offices and multi-site commercial facilities",
              "Healthcare facilities, schools, and universities",
              "Hotels and hospitality operators",
            ],
          },
        ],
      },

      "environmental-services": {
        name: "Environmental Services",
        cardBody:
          "HUB-Certified,Janitorial, commercial and residential cleaning, deep cleaning, day porter services, post-construction cleanup, industrial cleaning, floor polishing and restoration, high-rise and commercial window cleaning, and fumigation and pest control fully licensed, insured, and compliant with federal procurement standards.",
        pageHeading:
          "Environmental Services - Engineered Into a Larger Standard of Care",
        pageIntro:
          "Documented protocols, supervisor quality checks, and regular client reporting — cleaning programs built to hold up to federal procurement standards.",
        bodyHeading: "Environmental Services",
        body: "Our Environmental Services division covers janitorial programs, commercial and residential cleaning, deep cleaning, day porter services, post-construction cleanup, and specialized industrial cleaning. Every program is built on documented protocols, supervisor quality checks, and regular client reporting — never a one-size-fits-all checklist. These programs run across the United States, covering commercial, government, and residential clients.",
        sections: [
          {
            heading: "What’s Included",
            items: [
              "Janitorial programs for commercial and government facilities",
              "Commercial and residential cleaning (recurring and one-time)",
              "Deep cleaning and post-construction cleanup",
              "Day porter services",
              "Industrial and specialized cleaning",
              "Disinfection of high-touch surfaces",
            ],
          },
          {
            heading: "Why It’s Part of Something Bigger",
            body: "Environmental Services at Ivy Gaze is never delivered in isolation. It’s one of six integrated service lines — which means the same team protecting your property’s value through Property Care can coordinate your cleaning program, your grounds maintenance, and your waste management under one accountable plan.",
          },
        ],
      },

      "waste-management": {
        name: "Waste Management",
        cardBody:
          "Commercial and industrial waste evacuation, recycling operations, factory waste handling, environmental sanitation, and bin management.",
        pageHeading:
          "Responsible Waste Management for Properties and Communities",
        pageIntro:
          "From routine collection to recycling and waste diversion, Ivy Gaze helps properties and communities operate more cleanly and sustainably.",
        bodyHeading: "Waste Management",
        body: "Ivy Gaze waste programs are built around the way your site actually operates. We handle scheduled collection and bin management, run recycling and waste diversion initiatives, and take on commercial, industrial, and factory waste streams — with the same documentation and supervisor oversight that runs through every other Ivy Gaze service line.",
        sections: [
          {
            heading: "Why It Matters",
            body: "Our environmental stewardship commitment extends beyond the properties we manage — supporting sustainable procurement, resource efficiency, and community sanitation programs in every market we serve.",
          },
          {
            heading: "Who This Is For",
            items: [
              "Waste collection and bin management",
              "Environmental sanitation services",
              "Recycling program design and management",
              "Waste diversion initiatives",
              "Commercial and industrial waste evacuation",
              "Factory and industrial waste handling",
            ],
          },
        ],
      },

      "grounds-maintenance": {
        name: "Grounds Maintenance",
        cardBody:
          "Landscaping, lawn care, grounds management, and exterior environmental maintenance.",
        pageHeading: "Grounds Maintenance & Landscaping Services",
        pageIntro:
          "Ivy Gaze grounds maintenance keeps the exterior of your property as well cared for as the inside.",
        bodyHeading: "Grounds Maintenance",
        body: "Ivy Gaze grounds maintenance keeps the exterior of your property as well cared for as the inside.",
        sections: [
          {
            heading: "What’s Included",
            items: [
              "Lawn mowing, edging, and trimming",
              "Seasonal planting and flower bed maintenance",
              "Shrub and hedge pruning",
              "Mulching and ground cover maintenance",
              "Irrigation inspection and coordination",
              "Seasonal cleanup - leaf removal, snow and ice management (applicable US markets)",
            ],
          },
        ],
      },

      "workforce-solutions": {
        name: "Workforce Solutions",
        cardBody:
          "Facility staffing, operational support personnel, site supervisors, and workforce outsourcing.",
        pageHeading: "Workforce Solutions That Keep Sites Fully Staffed",
        pageIntro:
          "Vetted, supervised personnel for the roles that keep a property running — placed, managed, and accountable to Ivy Gaze standards.",
        bodyHeading: "Workforce Solutions",
        body: "When a site needs people rather than a programme, Ivy Gaze places them. We recruit, vet, and supervise facility staff and operational support personnel, and we stay accountable for their performance — the same supervisor structure and reporting that runs through our facility management contracts applies to every placement.",
        sections: [
          {
            heading: "What’s Included",
            items: [
              "Facility staffing and operational support personnel",
              "On-site supervisors and team leads",
              "Workforce outsourcing for recurring operational roles",
              "Background screening and role-specific vetting",
              "Performance reporting and supervisor oversight",
              "Compliance with US labour and site-safety requirements",
            ],
          },
          {
            heading: "Who This Is For",
            items: [
              "Government agencies and municipalities",
              "Corporate offices and multi-site commercial facilities",
              "Property managers scaling operations across sites",
              "Contractors needing supervised operational crews",
            ],
          },
        ],
      },
    },

    contact: {
      tagline: "Book your service",
      heading: "Request a Property Service",
      bodyLead: "Tell us what you need and our team will respond within  ",
      bodyHighlight: "24 business hours",
      submitLabel: "Request Service",
      hoursHeading: "Business Hours",
      hoursLines: ["Monday–Friday :", "9:00 AM–5:00 PM (CST)"],
      hoursNote: "We respond within 24 business hours.",
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
          link: "+1 (347) 4849-185",
          href: "tel:+13474849185",
        },
        {
          icon: "pin",
          title: "Office",
          body: "Visit us or send mail to our main office location.",
          link: "Dallas–Fort Worth, Texas",
          href: "#",
        },
      ],
    },
  },

  // =========================================================================
  // NIGERIA
  // =========================================================================
  ng: {
    regionName: "Nigeria",

    hero: {
      heading:
        "Protecting properties. Preserving value. Delivering peace of mind.",
      body: "One partner for all your property needs across Lagos, Ogun, and expanding nationwide. Six integrated services, one accountable team.",
    },

    homeServices: {
      body: "Property care, facility management, environmental services, waste management, grounds maintenance, and workforce solutions — built for estates, developers, and diaspora owners.",
    },

    stats: {
      body: "Ivy Gaze is an integrated property care, facility management, and environmental services partner serving estates, developers, institutions, and diaspora owners across Nigeria.",
      items: [
        {
          label: "Properties protected",
          value: "100+",
          note: "Across Lagos, Ogun, and expanding nationwide.",
        },
        {
          label: "Years in operation",
          value: "7+",
          note: "Trusted by Estates, Developers, Residential & Diaspora Clients",
        },
        {
          label: "Client retention rate",
          value: "97%",
          note: "Long-term partnerships built on performance.",
        },
      ],
    },

    servicesPage: {
      heroHeading: "Six Services. One Accountable Partner.",
      heroBody:
        "Ivy Gaze brings structure, technology, and professionalism to every service line - so you never have to manage multiple vendors to protect a single property.",
      tagline: "Services",
      heading: "What we do for you",
      body: "Each service operates with the same rigor and accountability. Pick what you need. We handle the rest.",
      featureHeading:
        "Property Care That Protects What You Can’t Always Be There to Watch",
      featureBody:
        "Whether your property is across Lagos or across an ocean, Ivy Gaze provides the oversight, reporting, and hands-on care that protects its value.",
    },

    servicesCta: {
      heading: "Ready to protect your property?",
      body: [
        "Let us handle the details. You get the peace of mind.",
        "When urgent property situations arise — flooding, leaks, storm damage, or other emergencies — Ivy Gaze responds quickly. Our teams are equipped to mobilize on short notice, assess the situation, coordinate",
      ],
    },

    services: {
      "property-care": {
        name: "Property Care",
        cardBody:
          "Inspections, oversight, condition reporting, maintenance coordination, diaspora property management, full property management services (tenant vetting, lease administration, and vacancy management), short-let support, and asset preservation.",
        pageHeading:
          "Property Care That Protects What You Can’t Always Be There to Watch",
        pageIntro:
          "Whether your property is across Lagos or across an ocean, Ivy Gaze provides the oversight, reporting, and hands-on care that protects its value.",
        bodyHeading: "Property Care",
        body: "Property Care is the foundation of the Ivy Gaze promise. We provide regular inspections, structured condition reporting, and proactive maintenance coordination that catch small issues before they become expensive problems. For property owners who can’t be on-site — including diaspora clients managing real estate in Nigeria, and Nigeria-based owners managing properties locally — our digital reporting systems mean you always know exactly how your property is doing.",
        sections: [
          {
            heading: "What’s Included",
            items: [
              "Scheduled property inspections with digital condition reports.",
              "Maintenance coordination and vendor oversight.",
              "Diaspora property management, inspections, updates, and on-the-ground representation for owners abroad.",
              "Short-let property support and turnover coordination.",
              "Asset preservation planning.",
              "Photo and video documentation delivered after every visit.",
            ],
          },
          {
            heading: "Who This Is For",
            items: [
              "Diaspora property owners managing Nigerian real estate from abroad",
              "Real estate investors and developers",
              "Residential property owners who travel frequently",
              "Estate and portfolio managers",
            ],
          },
        ],
      },

      "facility-management": {
        name: "Facility Management",
        cardBody:
          "Facility oversight, vendor coordination, site inspections, preventive maintenance, compliance monitoring, performance reporting, and emergency response support.",
        pageHeading: "Facility Management Built for Operational Excellence",
        pageIntro:
          "From a single corporate office to a multi-site estate portfolio, Ivy Gaze keeps your facilities compliant, well-maintained, and running the way they should.",
        bodyHeading: "Facility Management",
        body: "Ivy Gaze facility management programs go beyond basic upkeep. We coordinate vendors, manage preventive maintenance schedules, monitor compliance, and provide the structured reporting that lets facility directors and estate managers focus on strategy instead of day-to-day firefighting. We deliver these programs for government, corporate, and estate clients across Nigeria, adapting vendor coordination and compliance standards to each site.",
        sections: [
          {
            heading: "What’s Included",
            items: [
              "Facility oversight and site inspections",
              "Vendor coordination for specialized repairs and services",
              "Preventive maintenance scheduling",
              "Vendor and compliance coordination for estates and developments (Nigeria)",
              "Performance reporting and digital service logs",
              "Dedicated account and supervisor structure for every client",
            ],
          },
          {
            heading: "Who This Is For",
            items: [
              "Government agencies, estates, and property developers (Nigeria)",
              "Corporate offices and multi-site commercial facilities",
              "Healthcare facilities, schools, and universities",
              "Hotels and hospitality operators",
            ],
          },
        ],
      },

      "environmental-services": {
        name: "Environmental Services",
        cardBody:
          "Janitorial, commercial and residential cleaning, deep cleaning, day porter services, post-construction cleanup, industrial cleaning, floor polishing and restoration, high-rise and commercial window cleaning, and fumigation and pest control — fully licensed and insured.",
        pageHeading:
          "Environmental Services - Engineered Into a Larger Standard of Care",
        pageIntro:
          "Documented protocols, supervisor quality checks, and regular client reporting — cleaning programs built for estates, commercial sites, and residences.",
        bodyHeading: "Environmental Services",
        body: "Our Environmental Services division covers janitorial programs, commercial and residential cleaning, deep cleaning, day porter services, post-construction cleanup, and specialized industrial cleaning. Every program is built on documented protocols, supervisor quality checks, and regular client reporting — never a one-size-fits-all checklist. These programs run across Nigeria, covering commercial, government, residential, and estate clients.",
        sections: [
          {
            heading: "What’s Included",
            items: [
              "Janitorial programs for commercial and government facilities",
              "Commercial and residential cleaning (recurring and one-time)",
              "Deep cleaning and post-construction cleanup",
              "Day porter services",
              "Industrial and specialized cleaning",
              "Estate, residential, and commercial cleaning programs (Nigeria)",
            ],
          },
          {
            heading: "Why It’s Part of Something Bigger",
            body: "Environmental Services at Ivy Gaze is never delivered in isolation. It’s one of six integrated service lines — which means the same team protecting your property’s value through Property Care can coordinate your cleaning program, your grounds maintenance, and your waste management under one accountable plan.",
          },
        ],
      },

      "waste-management": {
        name: "Waste Management",
        cardBody:
          "Commercial and industrial waste evacuation, recycling operations, factory waste handling, environmental sanitation, and bin management.",
        pageHeading:
          "Responsible Waste Management for Properties and Communities",
        pageIntro:
          "From routine collection to recycling and waste diversion, Ivy Gaze helps properties and communities operate more cleanly and sustainably.",
        bodyHeading: "Waste Management",
        body: "Ivy Gaze waste programs are built around the way your site actually operates. We handle scheduled collection and bin management, run recycling, composting and waste diversion initiatives, and take on commercial, industrial, and factory waste streams — with the same documentation and supervisor oversight that runs through every other Ivy Gaze service line.",
        sections: [
          {
            heading: "Why It Matters",
            body: "Our environmental stewardship commitment extends beyond the properties we manage — supporting sustainable procurement, resource efficiency, and community sanitation programs in every market we serve.",
          },
          {
            heading: "Who This Is For",
            items: [
              "Waste collection and bin management",
              "Environmental sanitation services",
              "Recycling program design and management",
              "Waste diversion initiatives",
              "Community and estate sanitation support (Nigeria)",
              "Commercial and industrial waste evacuation",
              "Factory and industrial waste handling",
            ],
          },
        ],
      },

      "grounds-maintenance": {
        name: "Grounds Maintenance",
        cardBody:
          "Landscaping, lawn care, grounds management, and exterior environmental maintenance.",
        pageHeading: "Grounds Maintenance & Landscaping Services",
        pageIntro:
          "Ivy Gaze grounds maintenance keeps the exterior of your property as well cared for as the inside.",
        bodyHeading: "Grounds Maintenance",
        body: "Ivy Gaze grounds maintenance keeps the exterior of your property as well cared for as the inside.",
        sections: [
          {
            heading: "What’s Included",
            items: [
              "Lawn mowing, edging, and trimming",
              "Seasonal planting and flower bed maintenance",
              "Shrub and hedge pruning",
              "Mulching and ground cover maintenance",
              "Irrigation inspection and coordination",
              "Estate and compound grounds care (Nigeria)",
            ],
          },
        ],
      },

      "workforce-solutions": {
        name: "Workforce Solutions",
        cardBody:
          "Facility staffing, operational support personnel, site supervisors, and workforce outsourcing.",
        pageHeading: "Workforce Solutions That Keep Sites Fully Staffed",
        pageIntro:
          "Vetted, supervised personnel for the roles that keep a property running — placed, managed, and accountable to Ivy Gaze standards.",
        bodyHeading: "Workforce Solutions",
        body: "When a site needs people rather than a programme, Ivy Gaze places them. We recruit, vet, and supervise facility staff and operational support personnel, and we stay accountable for their performance — the same supervisor structure and reporting that runs through our facility management contracts applies to every placement.",
        sections: [
          {
            heading: "What’s Included",
            items: [
              "Facility staffing and operational support personnel",
              "On-site supervisors and team leads",
              "Workforce outsourcing for recurring operational roles",
              "Background screening and role-specific vetting",
              "Performance reporting and supervisor oversight",
              "Estate and compound support staffing (Nigeria)",
            ],
          },
          {
            heading: "Who This Is For",
            items: [
              "Estates, developers, and facility owners",
              "Corporate offices and multi-site commercial facilities",
              "Property managers scaling operations across sites",
              "Contractors needing supervised operational crews",
            ],
          },
        ],
      },
    },

    contact: {
      tagline: "Book your service",
      heading: "Request a Property Service",
      bodyLead: "Tell us what you need and our team will respond within  ",
      bodyHighlight: "24 business hours",
      submitLabel: "Request Service",
      hoursHeading: "Business Hours",
      hoursLines: ["Monday–Friday :", "9:00 AM–5:00 PM (WAT)"],
      hoursNote: "We respond within 24 business hours.",
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
          link: "+234 801 234 5678",
          href: "tel:+2348012345678",
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
