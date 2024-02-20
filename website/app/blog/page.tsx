import {DesktopNav} from "@/app/Components/Navbar";
import Image from "next/image";
export default function BlogPage(){
    return(
        <>
            <DesktopNav></DesktopNav>
            <div className='w-[100%] h-[100vh] flex justify-center items-center'>
                <div>
                <Image src='/coming_soon.png' alt='coming soon symbol' width='300' height='300'></Image>
                </div>
            </div>
        </>
    )
}