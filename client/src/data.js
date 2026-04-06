import constructionImage from './assets/new construction.png';
import terraceImage from './assets/new terrace.png';
import deckSlabImage from './assets/new deckslab.png';
import toiletImage from './assets/new toilet.png';
import basementImage from './assets/new basement.png';

export const services = [
  {
    title: 'Construction',
    text: 'End-to-end civil and structural construction with clear planning, disciplined execution, and strict quality checks. We handle excavation, RCC work, masonry, plastering, and finishing coordination while maintaining timeline and budget visibility for every project stage.',
    details:
      'Each project begins with a site readiness review, method planning, and milestone mapping so teams, vendors, and client stakeholders stay aligned from foundation to handover.',
    includes: ['RCC and masonry execution', 'Plastering and finishing coordination', 'Quality and progress reporting'],
    image: constructionImage,
    imageAlt: 'Construction service photo'
  },
  {
    title: 'Terrace Waterproofing',
    text: 'Comprehensive terrace waterproofing designed for harsh sun, heavy rain, and standing water conditions. Our team prepares the substrate, treats cracks and joints, applies layered membrane systems, and performs pond tests to ensure long-term seepage protection.',
    details:
      'We customize system selection to slab condition and terrace usage so performance is maintained even under repeated weather cycles and thermal movement.',
    includes: ['Crack and joint treatment', 'Membrane-based layered application', 'Pond testing before handover'],
    image: terraceImage,
    imageAlt: 'Terrace waterproofing service photo'
  },
  {
    title: 'Deck Slab Waterproofing',
    text: 'Specialized deck slab protection to prevent water ingress, corrosion, and premature slab damage. We focus on slope correction, surface treatment, crack repair, and durable coating application so the slab remains protected under regular load and weather exposure.',
    details:
      'Our process addresses both immediate leakage concerns and long-term durability risks by combining repair, reinforcement, and protective top treatment in one coordinated package.',
    includes: ['Slope and drainage correction', 'Surface repair and crack sealing', 'Protective coating for durability'],
    image: deckSlabImage,
    imageAlt: 'Deck slab waterproofing service photo'
  },
  {
    title: 'Toilet Waterproofing',
    text: 'Leak-proofing solutions for toilets and wet areas with precise treatment at floor-wall joints, pipe sleeves, trap zones, and corners. We complete application with curing and flood testing to avoid hidden leakage that can damage adjacent rooms and lower floors.',
    details:
      'Detail-focused execution in compact wet zones helps prevent recurring seepage complaints and reduces maintenance disruptions after occupancy.',
    includes: ['Joint and sleeve sealing', 'Corner and trap zone reinforcement', 'Curing and flood test verification'],
    image: toiletImage,
    imageAlt: 'Toilet waterproofing service photo'
  },
  {
    title: 'Basement Waterproofing',
    text: 'Basement waterproofing systems built to resist hydrostatic pressure, dampness, and recurring wall-floor leakage. Depending on site condition, we apply negative or positive side treatment, seal construction joints, and strengthen vulnerable zones for reliable long-term performance.',
    details:
      'By evaluating water source, pressure level, and structural condition, we choose the right treatment sequence to improve dryness, durability, and indoor usability of below-grade spaces.',
    includes: ['Negative or positive side treatment', 'Construction joint sealing', 'High-risk zone strengthening'],
    image: basementImage,
    imageAlt: 'Basement waterproofing service photo'
  }
];

export const projects = [
  {
    name: 'Skyline Tower',
    type: 'High-Rise Development',
    blurb: 'A 24-floor mixed-use tower delivered with phased concrete pours and accelerated finishing packages.'
  },
  {
    name: 'Maple Residences',
    type: 'Luxury Housing',
    blurb: 'A modern neighborhood build featuring energy-efficient envelopes and premium interior detailing.'
  },
  {
    name: 'NorthGrid Logistics Hub',
    type: 'Industrial Facility',
    blurb: 'A high-capacity warehouse with reinforced slab systems, coordinated utility zones, and rapid handoff.'
  }
];

export const testimonials = [
  {
    quote: 'Their team delivered exactly when they said they would, and the communication never slipped.',
    author: 'Aarav Mehta, Property Developer'
  },
  {
    quote: 'From drawings to handover, ConstructPro handled every stage with real professionalism.',
    author: 'Nisha Verma, Homeowner'
  }
];

export const aboutHighlights = [
  {
    title: 'Built on Planning',
    text: 'We begin with clear schedules, realistic cost controls, and coordinated site strategy before the first day of work.'
  },
  {
    title: 'Driven by Craft',
    text: 'Our teams focus on structural integrity, finish quality, and practical details that keep buildings performing for years.'
  },
  {
    title: 'Trusted by Clients',
    text: 'From private homeowners to commercial developers, clients rely on us for transparency, accountability, and delivery.'
  }
];
