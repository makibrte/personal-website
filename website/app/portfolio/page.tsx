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

        <div className='width-[100%] height-[100%] px-[13rem] flex flex-col'>
        <div className='w-full flex justify-between items-center'>
            <h1 className='py-2'>resume:</h1>
            <button type="button"
                    className='bg-green-300 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-lg'
                    onClick={handleShowResume}>{showResume ? 'Hide resume' : 'Show resume'}
            </button>
        </div>
        <div className='justify-center w-full'>
            {showResume ? <iframe src='/resume.pdf' width='100%' height='800px' className='mt-10'></iframe> : <p></p>}
        </div>
        <div className='w-full'>
            <h1>projects:</h1>
        </div>
            <div className='w-full'>
                <h2 className='pl-3'>NASA DRIFT</h2>
                <p className='pl-5'>currently I am working on creating a kinematic model for LEADS. LEADS is an undergraduate research project at MSU funded by NASA where
                the goal is to create a system where the drone will be charged using lasers. you can find out more in the research section...</p>

            </div>
            <div className='w-full'>
                <h2 className='pl-3'>cardeB - Winner of FinTech Track at SpartaHack9</h2>
                <p className='pl-5'>cardeB is an application that allows you to share meta-business cards using iOS newest feature
                called NameDrop. those business cards can contain almost any type of information and allow for easier networking.
                another cool feature of the app is requesting money over ApplePay using NameDrop and AirDrop.
                    The app was made using Swift and SwiftUI, while the backend was made in Django and Gunicorn. I worked mostly on the application side. Below you can see the demo of our application...</p>
            </div>
            <div className='w-full'>
                <h2 className='pl-3'> Ford - Capstone Class - Paint Defect Analysis</h2>
                <p className='pl-5'>worked with Ford Motor Co. for a semester as part of my capstone CMSE495 class. analyzed data and made visualizations
                to better understand</p>
            </div>
            <div className='w-full'>
                <h2 className='pl-3'>gitLinked - NASA SpaceApps 2023 Top32 Open Science Track</h2>
                <p className='pl-5'></p>
            </div>

            <div className='w-full'>
                <h2 className='pl-3'>Monopoly AI - Team Lead - AI Club @ MSU</h2>
                <p className='pl-5'></p>
            </div>

        </div>


</>
)
    ;
}
