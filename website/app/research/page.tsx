import {DesktopNav} from "@/app/Components/Navbar";
import Image from "next/image";
import ResearchEntry from "@/app/Components/ResearchEntry";

export default function ResearchPage () {
    const food_ai = {
        "Impact of biotic and abiotic factors on Listeria monocytogenes, Salmonella enterica, and Enterohemorrhagic Escherichia coli in agricultural soil extracts":
        "This is my first co-authored work. Currently under review for submission at MDPI. My work focused on modeling inoculated pathogen survival using soil chemistry and taxa data." +
            "Using days 0 and 1 my model would forecast the survival for days 4,6,8,10 and 14.",

    }
    const nasa = {
        "Laser Energized Aerial Drone System":"We are charging drones by shooting lasers at them."
    }
    return(
        <>
            <DesktopNav></DesktopNav>
            <div className = 'flex flex-col w-[100%] h-[100vh] px-[18rem]'>
                <ResearchEntry
                    title={'Research Assistant - Food AI & Engineering Lab'}
                    projects={food_ai}></ResearchEntry>
                <ResearchEntry title={"NASA - USRC"} projects={nasa}></ResearchEntry>
                </div>

        </>
    )
}