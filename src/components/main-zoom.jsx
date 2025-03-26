// filepath: c:\Users\Usuario\projects\sigue\src\components\main-zoom.jsx

export function MainZoom({ onZoomIn, onZoomOut }) {
  return (
    <article className="sg-zoomMap">
      <button
        className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl text-[#0a0a40] shadow-lg hover:bg-gray-100"
        aria-label="Acercar"
        onClick={onZoomIn}
      >
        +
      </button>
      <button
        className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl text-[#0a0a40] shadow-lg hover:bg-gray-100"
        aria-label="Alejar"
        onClick={onZoomOut}
      >
        -
      </button>
    </article>
  );
}