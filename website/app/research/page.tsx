import {DesktopNav} from "@/app/Components/Navbar";
import Image from "next/image";

export default function ResearchPage () {
    return(
        <>
            <DesktopNav></DesktopNav>

            <div className = 'flex flex-col w-[100%] h-[100vh] px-[18rem]'>
                <div className='w-full'>
                    <h1>undergraduate research assistant - food ai and engineering lab</h1>
                    <p className='pl-3'>this lab is led by Dr Jiyoon Yi and focuses on using ai in detecting food borne
                        illnesses and other implementations in the industry. after spending a few months on learning the basics I finally got to code. first I recreated the model from the CNN-MGP paper. that was good practice
                        to better understand the data I will be dealing later. shortly, CNN-MGP paper creates a model that predicts whether a genome encodes a protein. after that I worked on creating a model for a CPS(Center for Produce Safety)
                        grant proposal. the model I created predicted various chemical features of the soil using microbiome data. since genomic sequencing is quicker, requires less soil and experienced personal, this approach would enable growers
                        an easier assessment of the soil. if approved I will continue working on this project. below you can find current results of the model:

                    </p>
                    <div className='flex w-full justify-center'>
                        <Image src='/foodai_fig1.png' alt='bar plot of model predictions' height='500' width='500'></Image>
                    </div>
                </div>
                <div className = 'w-full'>
                    <h1>undergraduate research - NASA LEADS Project</h1>
                </div>

            </div>
        </>
    )
}