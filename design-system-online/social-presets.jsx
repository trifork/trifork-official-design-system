/* =============================================================
   Trifork — Social Post presets & sample data  (v2)
   ============================================================= */

const PHOTOS = [
  { src: '', label: 'None' },
  { src: 'assets/imagery/trifork-aarhus-1.jpg', label: 'Aarhus — building' },
  { src: 'assets/imagery/trifork-aarhus-2.jpg', label: 'Aarhus — office' },
  { src: 'assets/imagery/trifork-aarhus-3.jpg', label: 'Aarhus — interior' },
  { src: 'assets/imagery/trifork-aarhus-4.jpg', label: 'Aarhus — exterior' },
  { src: 'assets/imagery/trifork-people-1.jpg', label: 'People' },
  { src: 'assets/imagery/trifork-stock-1.jpg',  label: 'Speaker' },
  { src: 'assets/imagery/trifork-vision-pro.png', label: 'Vision Pro' },
];

/* ---------- The six card types ---------- */
const CARD_TYPES = [
  { id: 'event', label: 'Event',          variant: 'event',   blurb: 'Date and time lead. Eyebrow signals the action ("JOIN US"). Speakers optional — list them inline.' },
  { id: 'quote', label: 'Quote',          variant: 'quote',   blurb: 'Short, attributed. The open-quote glyph is the only ornamental orange permitted. Avatar optional.' },
  { id: 'stat',  label: 'Single stat',    variant: 'stat',    blurb: 'One number, one label. Orange is reserved for the figure; nothing else competes with it.' },
  { id: 'job',   label: 'Job opening',    variant: 'job',     blurb: 'A hook title plus the open roles. Pairs naturally with a "why work with us" body page in a carousel.' },
  { id: 'news',  label: 'News',           variant: 'news',    blurb: 'One announcement. Key/value rows carry the practical detail (report time, webcast, location).' },
  { id: 'case',  label: 'Case story',     variant: 'case',    blurb: 'Customer context up front. Usually photo-backed; the eyebrow names the sector or client.' },
];

/* ---------- Gallery presets: 3 variations per type ---------- */
const TEMPLATE_PRESETS = [
  {
    type: 'event', name: 'Event', blurb: CARD_TYPES[0].blurb,
    variants: [
      { label: 'Bottom · photo', props: {
        format: '1:1', layout: 'bottom', bg: 'photo', variant: 'event',
        photoSrc: 'assets/imagery/trifork-stock-1.jpg', photoPos: '60% 35%',
        eyebrow: 'JOIN US', eyebrowColor: 'white',
        title: 'AI Enablement: Boost your business with artificial intelligence',
        meta: ['20 February, Aarhus', '15:30–17:30'],
      }},
      { label: 'Center · with speakers', props: {
        format: '1:1', layout: 'center', bg: 'ink', variant: 'event',
        eyebrow: 'JOIN US',
        title: 'Enhanced customer experiences, powered by AI',
        meta: ['30 April 2026, Aarhus'],
        speakers: [
          { name: 'Jens Peter Hedegård', role: 'Vice President', company: 'Trifork' },
          { name: 'Sune Louis Lundorff', role: 'Department Manager', company: 'OK' },
        ],
      }},
      { label: 'Landscape · speakers', props: {
        format: '1.91:1', layout: 'center', bg: 'light', variant: 'event',
        eyebrow: 'WEBINAR',
        title: 'Enhanced customer experiences, powered by AI',
        metaRows: [{ label: 'Date', value: '30 April 2026' }, { label: 'Where', value: 'Sankt Knuds Torv 9, Aarhus' }],
        speakers: [
          { name: 'Per Balsløw Østergaard', role: 'Sr. Project Manager', company: 'Krifa' },
          { name: 'Jens Peter Hedegård', role: 'Vice President', company: 'Trifork' },
        ],
      }},
    ],
  },
  {
    type: 'quote', name: 'Quote', blurb: CARD_TYPES[1].blurb,
    variants: [
      { label: 'Center · light', props: {
        format: '1:1', layout: 'center', bg: 'light', variant: 'quote',
        eyebrow: 'THE USER WHISPERER',
        title: 'Keeping a relentless focus on users, workflows and real-life needs throughout delivery.',
        quoteAttribution: { name: 'Amanda Pedersen', role: 'Senior Product Designer, Trifork' },
      }},
      { label: 'Center · ink', props: {
        format: '1:1', layout: 'center', bg: 'ink', variant: 'quote',
        eyebrow: 'IN THEIR WORDS',
        title: 'They tell us where the system will fail in three years, not just where it works today.',
        quoteAttribution: { name: 'Maja Vestergaard', role: 'CTO, Nordic Air' },
      }},
      { label: 'Bottom · photo', props: {
        format: '4:5', layout: 'bottom', bg: 'photo', variant: 'quote',
        photoSrc: 'assets/imagery/trifork-people-1.jpg', photoPos: 'center 25%',
        eyebrow: 'FROM THE FLOOR',
        title: 'The best architecture review is the one your junior can read on the train home.',
        quoteAttribution: { name: 'Sara K. Lindqvist', role: 'Principal Engineer' },
      }},
    ],
  },
  {
    type: 'stat', name: 'Single stat', blurb: CARD_TYPES[2].blurb,
    variants: [
      { label: 'Orange · ink', props: {
        format: '1:1', layout: 'center', bg: 'ink', variant: 'stat', statColor: 'orange',
        eyebrow: 'TRIFORK IN 2025', statNumber: '+11', statUnit: '%',
        statLabel: 'Revenue growth, year on year.', meta: ['Annual report 2025'],
      }},
      { label: 'Blue · light', props: {
        format: '1:1', layout: 'center', bg: 'light', variant: 'stat', statColor: 'blue',
        eyebrow: 'BCG, 2024', statNumber: '81', statUnit: '%',
        statLabel: 'of business leaders see significant potential in generative AI.',
      }},
      { label: 'Neutral · photo', props: {
        format: '4:5', layout: 'bottom', bg: 'photo', variant: 'stat', statColor: 'neutral',
        photoSrc: 'assets/imagery/trifork-aarhus-4.jpg',
        eyebrow: 'WE ARE', statNumber: '1,247',
        statLabel: 'Engineers, designers and consultants across 11 countries.', meta: ['May 2026'],
      }},
    ],
  },
  {
    type: 'job', name: 'Job opening', blurb: CARD_TYPES[3].blurb,
    variants: [
      { label: 'Top · ink', props: {
        format: '1:1', layout: 'top', bg: 'ink', variant: 'job',
        eyebrow: 'JOIN US', title: 'We are hiring',
        positions: ['Senior Software Engineer, AI-augmented development', 'Senior Backend Developer, Digital Health', 'Senior Digital Health Architect (HL7 FHIR)'],
      }},
      { label: 'Bottom · photo', props: {
        format: '4:5', layout: 'bottom', bg: 'photo', variant: 'job',
        photoSrc: 'assets/imagery/trifork-people-1.jpg', photoPos: 'center 20%',
        eyebrow: 'JOIN US', eyebrowColor: 'white',
        title: 'We’re growing in Digital Health',
      }},
      { label: 'Center · light', props: {
        format: '1:1', layout: 'center', bg: 'light', variant: 'job',
        eyebrow: 'WHY WORK WITH US?',
        body: 'You’ll work on meaningful challenges in a complex healthcare domain, alongside strong technical experts who value quality and deep understanding, in a culture driven by trust, curiosity, and collaboration.',
      }},
    ],
  },
  {
    type: 'news', name: 'News', blurb: CARD_TYPES[4].blurb,
    variants: [
      { label: 'Bottom · photo', props: {
        format: '1:1', layout: 'bottom', bg: 'photo', variant: 'news',
        photoSrc: 'assets/imagery/trifork-aarhus-1.jpg',
        eyebrow: '5 MAY 2026', eyebrowColor: 'white', title: 'Q1 Report 2026',
        metaRows: [{ label: 'Report', value: '07:00 (CEST)' }, { label: 'Webcast', value: '11:00–12:00 (CEST)' }],
      }},
      { label: 'Bottom · ink', props: {
        format: '1:1', layout: 'bottom', bg: 'ink', variant: 'news',
        eyebrow: 'PRESS RELEASE', title: 'Trifork acquires Helsinki studio Aalto Code.',
        meta: ['Copenhagen', '04 June 2026'],
      }},
      { label: 'Top · light', props: {
        format: '1:1', layout: 'top', bg: 'light', variant: 'news',
        eyebrow: 'ANNOUNCEMENT', title: 'Half-year results — record bookings in healthcare and aviation.',
        meta: ['Q2 2026'],
      }},
    ],
  },
  {
    type: 'case', name: 'Case story', blurb: CARD_TYPES[5].blurb,
    variants: [
      { label: 'Bottom · photo', props: {
        format: '1:1', layout: 'bottom', bg: 'photo', variant: 'case',
        photoSrc: 'assets/imagery/trifork-vision-pro.png',
        eyebrow: 'CASE · AVIATION', eyebrowColor: 'white',
        title: 'Cutting recurrent-training cost by 38% for a European carrier.',
        meta: ['Read the case'],
      }},
      { label: 'Top · light', props: {
        format: '1:1', layout: 'top', bg: 'light', variant: 'case',
        eyebrow: 'CASE · HEALTHCARE',
        title: 'A digital pathway for stroke patients, deployed across 14 hospitals.',
        body: 'Built with Region Midtjylland over 18 months.',
        meta: ['Region Midtjylland'],
      }},
      { label: 'Center · ink', props: {
        format: '4:5', layout: 'center', bg: 'ink', variant: 'case',
        eyebrow: 'CASE · RAIL',
        title: 'Training the next generation of rail employees.',
        body: 'How Apple Vision Pro reshapes immersive training in railway operations.',
      }},
    ],
  },
];

/* ---------- Carousel example: a job-opening swipe sequence ---------- */
const CAROUSEL_EXAMPLE = {
  name: 'Job opening carousel',
  blurb: 'Five square pages designed to be swiped left-to-right in a single LinkedIn post.',
  format: '1:1',
  pages: [
    { format: '1:1', layout: 'bottom', bg: 'photo', variant: 'job', photoSrc: 'assets/imagery/trifork-people-1.jpg', photoPos: 'center 20%', eyebrow: 'JOIN US', eyebrowColor: 'white', title: 'We’re growing in Digital Health' },
    { format: '1:1', layout: 'center', bg: 'light', variant: 'job', eyebrow: 'WHY WORK WITH US?', body: 'You’ll work on meaningful challenges in a complex healthcare domain, alongside strong technical experts who value quality and deep understanding.' },
    { format: '1:1', layout: 'top', bg: 'ink', variant: 'job', eyebrow: 'OPEN ROLES', title: 'We are hiring', positions: ['Senior Software Engineer, AI-augmented development', 'Senior Backend Developer, Digital Health', 'Digital Health Delivery Lead'] },
    { format: '1:1', layout: 'bottom', bg: 'photo', variant: 'case', photoSrc: 'assets/imagery/trifork-aarhus-3.jpg', eyebrow: 'LIFE AT TRIFORK', eyebrowColor: 'white', title: 'Built on craft, shipped with care.' },
    { format: '1:1', layout: 'center', bg: 'light', variant: 'default', eyebrow: 'INTERESTED?', title: 'Let’s have a conversation.', showLogo: true },
  ],
};

Object.assign(window, { PHOTOS, CARD_TYPES, TEMPLATE_PRESETS, CAROUSEL_EXAMPLE });
