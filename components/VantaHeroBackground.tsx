// Pure CSS animated background — replaces THREE.js/Vanta WebGL (massive performance gain)
// No client JS needed: same visual (dark + drifting indigo glow orbs) with zero GPU WebGL cost.
export default function VantaHeroBackground() {
  return (
    <div
      aria-hidden="true"
      style={{ position: "fixed", inset: 0, overflow: "hidden", zIndex: -1, background: "#0e0e1a" }}
    >
      <div className="vanta-glow vg1" />
      <div className="vanta-glow vg2" />
      <div className="vanta-glow vg3" />
      {/* subtle dot grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(rgba(99,102,241,0.06) 1px, transparent 1px)",
        backgroundSize: "44px 44px",
      }} />
      {/* top fade so navbar area stays crisp */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0,
        height: 120, pointerEvents: "none",
        background: "linear-gradient(to top, transparent 0%, rgba(21,21,32,0.55) 100%)",
      }} />
    </div>
  );
}
