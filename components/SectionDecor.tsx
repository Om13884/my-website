/**
 * Floating 3D decorative elements — unique per variant.
 * position: absolute, so parent section must have position: relative + overflow: hidden.
 */
export default function SectionDecor({ variant }: { variant: "cube" | "orb" | "dots" | "hex" | "rings" | "mesh" | "particles" | "geo" }) {
  return (
    <div className={`sdecor sdecor-${variant}`} aria-hidden="true">

      {variant === "cube" && <>
        <div className="sd-cube sd-cube-1">
          <div className="sd-face sd-face-front" />
          <div className="sd-face sd-face-back" />
          <div className="sd-face sd-face-left" />
          <div className="sd-face sd-face-right" />
          <div className="sd-face sd-face-top" />
          <div className="sd-face sd-face-bottom" />
        </div>
        <div className="sd-cube sd-cube-2">
          <div className="sd-face sd-face-front" />
          <div className="sd-face sd-face-back" />
          <div className="sd-face sd-face-left" />
          <div className="sd-face sd-face-right" />
          <div className="sd-face sd-face-top" />
          <div className="sd-face sd-face-bottom" />
        </div>
        <div className="sd-glow-orb sd-go-sm" />
      </>}

      {variant === "orb" && <>
        <div className="sd-sphere sd-sph-1" />
        <div className="sd-sphere sd-sph-2" />
        <div className="sd-ring-outline sd-ro-1" />
        <div className="sd-dot-scatter">
          {[...Array(8)].map((_, i) => <span key={i} className={`sd-dot sd-d${i}`} />)}
        </div>
      </>}

      {variant === "dots" && <>
        <div className="sd-dot-grid-bg" />
        <div className="sd-glow-orb sd-go-lg" />
        <div className="sd-particle-field">
          {[...Array(6)].map((_, i) => <span key={i} className={`sd-pf-dot sd-pf-d${i % 6}`} />)}
        </div>
      </>}

      {variant === "hex" && <>
        <div className="sd-hex sd-hex-1" />
        <div className="sd-hex sd-hex-2" />
        <div className="sd-glow-line sd-gl-h" />
      </>}

      {variant === "rings" && <>
        <div className="sd-ring-outline sd-ro-1" />
        <div className="sd-ring-outline sd-ro-2" />
        <div className="sd-ring-outline sd-ro-3" />
        <div className="sd-glow-orb sd-go-sm" />
      </>}

      {variant === "mesh" && <>
        <div className="sd-mesh-grid" />
        <div className="sd-glow-line sd-gl-h" />
        <div className="sd-glow-line sd-gl-v" />
        <div className="sd-sphere sd-sph-1" />
      </>}

      {variant === "particles" && <>
        <div className="sd-particle-field">
          {[...Array(8)].map((_, i) => <span key={i} className={`sd-pf-dot sd-pf-d${i % 6}`} />)}
        </div>
        <div className="sd-glow-orb sd-go-lg" />
        <div className="sd-ring-outline sd-ro-1" />
      </>}

      {variant === "geo" && <>
        <div className="sd-cube sd-cube-1">
          <div className="sd-face sd-face-front" />
          <div className="sd-face sd-face-back" />
          <div className="sd-face sd-face-left" />
          <div className="sd-face sd-face-right" />
          <div className="sd-face sd-face-top" />
          <div className="sd-face sd-face-bottom" />
        </div>
        <div className="sd-sphere sd-sph-2" />
        <div className="sd-hex sd-hex-1" />
        <div className="sd-ring-outline sd-ro-2" />
        <div className="sd-dot-grid-bg" />
      </>}

    </div>
  );
}
