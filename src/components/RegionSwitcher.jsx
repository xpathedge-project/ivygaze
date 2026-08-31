import { useEffect, useRef, useState } from "react";
import { REGIONS } from "../content/regions";
import { useRegion } from "../context/RegionContext";
import { ChevronDown } from "./Icons";

export default function RegionSwitcher({ className = "" }) {
  const { region, setRegion, regionMeta } = useRegion();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close on outside click / Escape so the menu behaves like a real dropdown.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e) => {
      if (!ref.current?.contains(e.target)) setOpen(false);
    };
    const onKeyDown = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Region: ${regionMeta.name}. Change region`}
        className="flex w-full items-center justify-center gap-2 border border-white/25 bg-white/10 px-3 py-2 font-sans text-base leading-normal text-white transition-colors hover:bg-white/20 cursor-pointer"
      >
        <span aria-hidden="true">{regionMeta.flag}</span>
        {regionMeta.label}
        <ChevronDown
          size={18}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Region"
          className="absolute right-0 z-50 mt-1 w-full min-w-[190px] border border-white/25 bg-ivy-green shadow-lg"
        >
          {REGIONS.map((r) => (
            <li key={r.code}>
              <button
                type="button"
                role="option"
                aria-selected={r.code === region}
                onClick={() => {
                  setRegion(r.code);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-2 px-3 py-2 text-left font-sans text-base text-white transition-colors hover:bg-white/15 cursor-pointer ${
                  r.code === region ? "bg-white/10" : ""
                }`}
              >
                <span aria-hidden="true">{r.flag}</span>
                {r.label}
                <span className="ml-auto whitespace-nowrap text-sm text-white/60">
                  {r.name}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
