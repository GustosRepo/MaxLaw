// Centralized firm constants (address, phone, etc.)
export const FIRM_ADDRESS_LINE1 = '732 S. Sixth Street, Suite 200C';
export const FIRM_ADDRESS_LINE2 = 'Las Vegas, Nevada 89101';
export const FIRM_ADDRESS_FULL = `${FIRM_ADDRESS_LINE1}, ${FIRM_ADDRESS_LINE2}`;
export const FIRM_NAME = 'The Law Offices of Saggese & Associates';
export const FIRM_CITY = 'Las Vegas';
export const FIRM_STATE = 'NV';
export const FIRM_ZIP = '89101';
export const SITE_URL = 'https://www.maxlawnv.com';
export const FIRM_LAT = 36.1607; // approximate
export const FIRM_LNG = -115.1407; // approximate

export const FIRM_PHONE_DISPLAY = '(702) 778‑8883';
export const FIRM_PHONE_E164 = '+17027788883';
export const TOTAL_RECOVERED_DISPLAY = '$30+ Million Recovered';
export const MARC_HEADSHOT_SRC = '/marc-red-tie.jpg';

export type CaseTopic = {
  label: string;
  href?: string;
};

export const PERSONAL_INJURY_CASE_TYPES: CaseTopic[] = [
  { label: 'Car Accident', href: '/practice/car-accidents' },
  { label: 'Truck / Semi-Truck Accident', href: '/practice/truck-accidents' },
  { label: 'Motorcycle Accident', href: '/practice/motorcycle-accidents' },
  { label: 'Pedestrian Accident', href: '/practice/crosswalk-and-pedestrian-accidents' },
  { label: 'Bicycle Accident' },
  { label: 'Rideshare Accident (Uber / Lyft)' },
  { label: 'Bus Accident', href: '/practice/commercial-vehicle-accidents' },
  { label: 'Boating Accident' },
  { label: 'Drunk Driver Accident' },
  { label: 'Premises Liability (Slip and Fall)', href: '/practice/premises-liability' },
  { label: 'Swimming Pool Accident (Drowning)' },
  { label: 'Elevator / Escalator Accident' },
  { label: 'Construction Accident' },
  { label: 'Equipment / Machinery Accident' },
  { label: 'Construction Zone / Work Zone Accident' },
  { label: 'Gym / Sports / Fitness Facility Injury' },
  { label: 'Traumatic Brain Injury (TBI)', href: '/practice/brain-and-spine-injury' },
  { label: 'Spinal Cord Injury', href: '/practice/brain-and-spine-injury' },
  { label: 'Burn Injury' },
  { label: 'Wrongful Death', href: '/practice/wrongful-death' },
  { label: 'Not Sure / Need Help Classifying My Case', href: '/contact' },
];

export const PERSONAL_INJURY_REPRESENTATION_TYPES = PERSONAL_INJURY_CASE_TYPES.filter(
  (item) => item.label !== 'Not Sure / Need Help Classifying My Case',
);

export const CRIMINAL_DEFENSE_CASE_TYPES: CaseTopic[] = [
  { label: 'Battery / DV (Domestic Violence)', href: '/criminal-defense/domestic-violence' },
  { label: 'Drug Offenses', href: '/criminal-defense/drugs' },
  { label: 'Assault / Battery' },
  { label: 'DUI — Drugs / Alcohol', href: '/criminal-defense/dui' },
  { label: 'Theft / Shoplifting', href: '/criminal-defense/theft' },
  { label: 'Warrant / Failure to Appear' },
  { label: 'Gun / Weapons Charges' },
  { label: 'Burglary / Robbery', href: '/criminal-defense/burglary' },
  { label: 'Hit and Run' },
  { label: 'Fraud / Casino Marker / White Collar Crimes', href: '/criminal-defense/forgery' },
  { label: 'Murder / Manslaughter', href: '/criminal-defense/murder' },
  { label: 'Other / Not Sure', href: '/contact' },
];

export const CRIMINAL_DEFENSE_REPRESENTATION_TYPES = CRIMINAL_DEFENSE_CASE_TYPES.filter(
  (item) => item.label !== 'Other / Not Sure',
);

export const MARC_AWARDS = [
  '2026 Platinum Client Champion, Martindale-Hubbell Attorney Ratings',
  '2025 Platinum Client Champion, Martindale-Hubbell Attorney Ratings',
  'Multi-Million Dollar Advocates Forum Member, Million Dollar Advocates Forum',
  'Million Dollar Advocates Forum Member, Million Dollar Advocates Forum',
  'Nation\'s Top One Percent of Attorneys, The National Association of Distinguished Counsel',
  '10 BEST Client Satisfaction Award, American Institute of DUI/DWI Attorneys',
  'Clients\' Choice Award - Criminal Defense, AVVO',
  '10 Best 2 Year Client Satisfaction Award, American Institute of Personal Injury Attorneys',
  '10 BEST - Client Satisfaction Award, American Institute of Personal Injury Attorneys',
  'Top 10 Attorney Award, National Academy of Personal Injury Attorneys',
  'Superb Rated Award - Top Attorney Criminal Defense, AVVO',
  'The Valley\'s Top Lawyers, Desert Companion Magazine',
  'Top Lawyers in Las Vegas, MyVegas Magazine',
  'Rising Star, Super Lawyers Magazine',
  'Silver Client Champion, Martindale-Hubbell Attorney Ratings',
  'Rated, AVVO',
  'Top Attorneys, Mountain States',
  'Rising Star, Super Lawyers Magazine',
  'Top 40 Under 40, The National Trial Lawyers',
  'Rising Star, Super Lawyers Magazine',
  'Top Attorneys, Mountain States',
];

export const FEATURED_MEDIA_APPEARANCES = [
  { network: 'Oxygen', program: 'Sin City Murders' },
  { network: 'Investigation Discovery', program: 'The Body Builder Murder' },
  { network: 'Lifetime', program: 'Fit for Murder (2025 dramatization)' },
  { network: 'HLN/CNN', program: 'Dr. Drew on Call' },
  { network: 'A&E', program: 'Dating App Horrors: The Untold Story' },
  { network: 'ABC', program: '20/20: In an Instant' },
];

// Encoded for URLs / map queries
export const FIRM_ADDRESS_QUERY = encodeURIComponent(FIRM_ADDRESS_FULL);

// (Optional) If later adding a Maps Embed API key, construct like:
// export const FIRM_MAP_EMBED_SRC = `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY}&q=${FIRM_ADDRESS_QUERY}`;
// For now we keep the existing long embed URL in the component.
