'use client'
import { useState } from 'react';
import {DesktopNav} from "@/app/Components/Navbar";



export default function PortfolioPage() {
    const [showResume, setShowResume] = useState(false);

    const handleShowResume  = () =>{
        setShowResume(!showResume);
    }

    return(
        <>
            <DesktopNav></DesktopNav>
            <div className='width-[100%] height-[100%]  px-[13rem] flex flex-col'>
                <div className='w-full'><h1>resume:</h1></div>
                <div className='justify-center w-full'>
                    <iframe src='/resume.pdf' width='100%' height='800px' className='mt-10'></iframe>
                </div>
                <div className='w-full'><h1>projects:</h1></div>
            </div>

        </>
    );
}
