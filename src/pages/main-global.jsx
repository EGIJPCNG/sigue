import { useState } from "react";
import { MainDropdown } from "../components/main-dropdown";
import { MainHeader } from "../components/main-header";
import { MainZoom } from "../components/main-zoom";
import { MainMap } from "../components/main-map";

export function MainGlobal () {

    const [showMap, setShowMap] = useState(true);
    const [showHeader, setShowHeader] = useState(true);
    const [showDropdown, setShowDropdown] = useState(true);
    const [showZoom, setShowZoom] = useState(true);

    return(
        <main className="sg-mainMapInteractive">
            <MainMap />
            <MainHeader />
            <MainDropdown />
            <MainZoom />
        </main>
    )
}