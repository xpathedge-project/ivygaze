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
import cardFacility from "../assets/images/services/facility-management.png";
import cardEnvironmental from "../assets/images/services/environmental-services.png";
import cardWaste from "../assets/images/services/waste-management.png";
import cardGrounds from "../assets/images/services/grounds-maintenance.png";
import cardWorkforce from "../assets/images/services/workforce-solutions.png";

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
    card: cardPropertyCare,
    cardAlt: "Freshly cleaned bathroom in a maintained residence",
    gallery: [subPropertyCare1, subPropertyCare2],
  },
  "facility-management": {
    card: cardFacility,
    cardAlt: "Facility manager reviewing a site inspection on a tablet",
    gallery: [subFacility1, subFacility2],
  },
  "environmental-services": {
    card: cardEnvironmental,
    cardAlt: "Grounds crew bagging garden waste",
    gallery: [subEnvironmental1, subEnvironmental2],
  },
  "waste-management": {
    card: cardWaste,
    cardAlt: "Sorted recycling bins ready for collection",
    gallery: [subWaste1, subWaste2],
  },
  "grounds-maintenance": {
    card: cardGrounds,
    cardAlt: "Landscaped grounds along a property boundary",
    gallery: [subGrounds1, subGrounds2],
  },
  "workforce-solutions": {
    card: cardWorkforce,
    cardAlt: "Site crew in safety gear working together",
    gallery: [subFacility1, subGrounds1],
  },
};

// Shared across both markets — the "Where we serve" table is a side-by-side
// comparison of the two, so it is intentionally not region-switched.
export const COVERAGE = {
  tagline: "Coverage",
  heading: "Where we serve",
  body: "Select a region to see our service areas and capabilities.",
  columns: [
    {
      region: "us",
      rows: [
        ["Primary Market", "Texas"],
        ["Service Coverage", "DFW & Surrounding Areas"],
        ["Service lines", "6"],
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
      rows: [
        ["Initial Market", "Lagos & Ogun"],
        ["Expansion", "Nation Wide"],
        ["Service lines", "5"],
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
        {
          label:
            "Technology-Enabled Inspections, Reporting & Quality Assurance",
          value: "10K+",
          note: "Real-time transparency and accountability.",
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
        {
          label:
            "Technology-Enabled Inspections, Reporting & Quality Assurance",
          value: "10K+",
          note: "Real-time transparency for owners abroad.",
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
