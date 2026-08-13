// The two markets Ivy Gaze operates in. Picking one swaps the copy that the
// pages read out of content.js — it never changes layout, spacing, or styling.

export const REGIONS = [
  { code: 'us', label: 'USA', flag: '🇺🇸', name: 'United States' },
  { code: 'ng', label: 'NGN', flag: '🇳🇬', name: 'Nigeria' },
]

export const DEFAULT_REGION = 'us'

// Remembers the visitor's choice between page loads.
export const REGION_STORAGE_KEY = 'ivygaze.region'

export function getRegion(code) {
  return REGIONS.find((r) => r.code === code) ?? REGIONS[0]
}
