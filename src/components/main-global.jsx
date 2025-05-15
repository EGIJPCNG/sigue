import { useState } from "react";
import { MainDropdown } from "./main-dropdown";
import { MainHeader } from "./main-header";
import { MainZoom } from "./main-zoom";
import { MainMap } from "./main-map";

export function MainGlobal () {

    const [showMap, setShowMap] = useState(true);
    const [showHeader, setShowHeader] = useState(true);
    const [showDropdown, setShowDropdown] = useState(true);
    const [showZoom, setShowZoom] = useState(true);

    return(
        <main className="sg-mainMapInteractive">
            {/* <button onClick={() => setShowMap(!showMap)}>
                {showMap ? "Ocultar Mapa" : "Mostrar Mapa"}
            </button>
            {showMap && <MainMap />}

            <button onClick={() => setShowHeader(!showHeader)}>
                {showHeader ? "Ocultar Encabezado" : "Mostrar Encabezado"}
            </button>
            {showHeader && <MainHeader />}

            <button onClick={() => setShowDropdown(!showDropdown)}>
                {showDropdown ? "Ocultar Dropdown" : "Mostrar Dropdown"}
            </button>
            {showDropdown && <MainDropdown />}

            <button onClick={() => setShowZoom(!showZoom)}>
                {showZoom ? "Ocultar Zoom" : "Mostrar Zoom"}
            </button>
            {showZoom && <MainZoom />} */}

            <MainMap />
            <MainHeader />
            <MainDropdown />
            <MainZoom />
            <MainZoom />
        </main>
    )
}