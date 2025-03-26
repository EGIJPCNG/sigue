import { MainDropdown } from "./main-dropdown";
import { MainHeader } from "./main-header";
import { MainZoom } from "./main-zoom";
import { MainMap } from "./main-map";

import "../css/main-dropdown.css"
import "../css/main-header.css"

import "../css/main-zoom.css"
// import "./main-map.css"
// import "./main-zoom.css"
// import { MainFooter } from "./main-footer";

export function MainGlobal () {

    return(
        <main className="sg-mainMapInteractive">
            <MainMap/>
            <MainHeader />
            <MainDropdown></MainDropdown>
            <MainZoom />
        </main>
    )
}