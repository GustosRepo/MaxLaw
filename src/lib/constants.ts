// Centralized firm constants (address, phone, etc.)
export const FIRM_ADDRESS_LINE1 = '732 S 6th St #200c';
export const FIRM_ADDRESS_LINE2 = 'Las Vegas, NV 89101';
export const FIRM_ADDRESS_FULL = `${FIRM_ADDRESS_LINE1}, ${FIRM_ADDRESS_LINE2}`;
export const FIRM_NAME = 'The Law Offices of Saggese & Associates';

export const FIRM_PHONE_DISPLAY = '(702) 778‑8883';
export const FIRM_PHONE_E164 = '+17027788883';

// Encoded for URLs / map queries
export const FIRM_ADDRESS_QUERY = encodeURIComponent(FIRM_ADDRESS_FULL);

// (Optional) If later adding a Maps Embed API key, construct like:
// export const FIRM_MAP_EMBED_SRC = `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY}&q=${FIRM_ADDRESS_QUERY}`;
// For now we keep the existing long embed URL in the component.
