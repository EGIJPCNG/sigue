import { MainDropdown } from "./main-dropdown";
import { MainHeader } from "./main-header";
import { MainZoom } from "./main-zoom";
import { MainMap } from "./main-map";

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