'use client'
import Image from "next/image"
import {Dict} from "@chakra-ui/utils";
import React from 'react';
interface ResearchEntryProps {
    title:string,
    projects : Dict
}
const ResearchEntry : React.FC<ResearchEntryProps> = ({title, projects}) =>{
    console.log(projects);
    let projects_ = [];
    for (let project in projects) {
        let project_ =
            <>
            <h3 className={'font-extrabold'}>{project}</h3>
            <p className={'pl-3'}>
                {projects[project]}
            </p>
            </>

        projects_.push(project_)
    }

    return (

        <>
            <div className='w-full'>
                <h1>{title}</h1>
                {projects_}
            </div>
        </>
    )
}

export default ResearchEntry;