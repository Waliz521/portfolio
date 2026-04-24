import { getTestimonialsByCategory } from "./testimonials";

/**
 * Approximate coordinates for each distinct clientLocation string on freelance contracts.
 * Add entries when new regions appear in testimonials.
 */
export const FREELANCE_LOCATION_COORDS = {
  "California, USA": [36.7783, -119.4179],
  "Dartford, United Kingdom": [51.4462, 0.2167],
  "Rome, Italy": [41.9028, 12.4964],
  "Weston Colville, United Kingdom": [52.142, 0.374],
  "Kuwait, Kuwait": [29.3759, 47.9774],
  "East London, South Africa": [-32.97, 27.86],
};

function projectAmountValue(amount) {
  if (amount == null || typeof amount !== "string") return -1;
  const cleaned = amount.replace(/,/g, "").replace(/[^0-9.]/g, "");
  const n = parseFloat(cleaned);
  return Number.isFinite(n) ? n : -1;
}

/**
 * One map point per unique client + location; projects[] lists related contracts (sorted by amount desc).
 */
export function getFreelanceClientMapPoints() {
  const freelance = getTestimonialsByCategory("freelance");
  const groups = new Map();

  for (const t of freelance) {
    const loc = t.clientLocation;
    const name = t.clientName;
    if (!loc || !name) continue;

    const coords = FREELANCE_LOCATION_COORDS[loc];
    if (!coords) continue;

    const key = `${name}::${loc}`;
    if (!groups.has(key)) {
      groups.set(key, {
        key,
        clientName: name,
        locationLabel: loc,
        position: coords,
        projects: [],
      });
    }

    groups.get(key).projects.push({
      id: t.id,
      title: t.title,
      amount: t.amount,
    });
  }

  for (const point of groups.values()) {
    point.projects.sort(
      (a, b) => projectAmountValue(b.amount) - projectAmountValue(a.amount)
    );
  }

  return Array.from(groups.values());
}
