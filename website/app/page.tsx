import {DesktopNav} from "@/app/Components/Navbar";

export default function Home() {
    return (
        <>
            <DesktopNav></DesktopNav>
            <div className='flex flex-col items-center  w-full h-[100vh] px-4 md:px-[13rem]'>
                <div className='w-full max-w-3xl'>
                    <h1 className='text-3xl text-center md:text-left'>a little bit about me...</h1>
                    <p className='mt-2 pl-3'>my name is mateja milicevic. I was born in Belgrade, Serbia.
                        I moved to US for education when I was 16. 
                        Main passions in life are building, travelling and cooking.
                        If you have a cool idea or just want to chat, feel free to reach out at <a href='mailto:me@matejam.com' className='underline'>me@matejam.com</a>.
                        </p>
                </div>
            </div>
        </>
    );
}
