// filepath: c:\Users\Usuario\projects\sigue\src\components\main-zoom.jsx

export function MainZoom({ onZoomIn, onZoomOut }) {
  return (
    <article className="sg-zoomMap">
      <button 
        className="sg-zoomMap-in"
        aria-label="Acercar"
        onClick={onZoomIn}
      >
        +
      </button>
      <button
        className="sg-zoomMap-out"
        aria-label="Alejar"
        onClick={onZoomOut}
      >
        -
      </button>
    </article>
  );
}