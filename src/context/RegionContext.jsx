import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { CONTENT } from '../content/content'
import {
  DEFAULT_REGION,
  REGIONS,
  REGION_STORAGE_KEY,
  getRegion,
} from '../content/regions'

const RegionContext = createContext(null)

function readStoredRegion() {
  if (typeof window === 'undefined') return DEFAULT_REGION
  const stored = window.localStorage.getItem(REGION_STORAGE_KEY)
  return REGIONS.some((r) => r.code === stored) ? stored : DEFAULT_REGION
}

export function RegionProvider({ children }) {
  const [region, setRegion] = useState(readStoredRegion)

  useEffect(() => {
    window.localStorage.setItem(REGION_STORAGE_KEY, region)
  }, [region])

  const value = useMemo(
    () => ({
      region,
      setRegion,
      regionMeta: getRegion(region),
      content: CONTENT[region],
    }),
    [region],
  )

  return (
    <RegionContext.Provider value={value}>{children}</RegionContext.Provider>
  )
}

export function useRegion() {
  const ctx = useContext(RegionContext)
  if (!ctx) throw new Error('useRegion must be used inside a <RegionProvider>')
  return ctx
}

// Shorthand for the common case: components that only need the copy.
export function useContent() {
  return useRegion().content
}
