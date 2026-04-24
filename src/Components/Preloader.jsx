import "./css/Preloader.css";

function Preloader() {
  return (
    <div className="site-preloader" role="status" aria-live="polite">
      <div className="site-preloader__glow site-preloader__glow--one" />
      <div className="site-preloader__glow site-preloader__glow--two" />

      <div className="site-preloader__stage">
        <div className="site-preloader__ring" />
        <div className="site-preloader__ring site-preloader__ring--inner" />
        <div className="site-preloader__core">
          <span>CODEX</span>
        </div>
      </div>
    </div>
  );
}

export default Preloader;
