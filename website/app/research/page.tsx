import {DesktopNav} from "@/app/Components/Navbar";
import Image from "next/image";
import ResearchEntry from "@/app/Components/ResearchEntry";

export default function ResearchPage () {
    const food_ai = {
        "AI and metagenomics": "Imputation, microbiome modeling and genome ORF prediction using Transformer models."

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
                <ResearchEntry title={"NASA - DRIFT Lab"} projects={nasa}></ResearchEntry>
                </div>

        </>
    )
}