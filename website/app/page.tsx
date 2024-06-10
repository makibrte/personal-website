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
                        currently I am studying computational data science at Michigan State University. starting Fall `24 I am supposed to start
                        my graduate studies as a Ph.D. candidate in Biosystems engineering.
                        I am supposed to graduate summer `24. in my free time I love watching football (soccer) and also playing
                        ping-pong.
                        I am a HUGE Real Madrid fan, hala madrid! but truly my two biggest passions are computers and travel.
                        you can find me writing about my travels in <a href='/blog' className='underline'>blog</a>. everything else really is about computers and research.</p>
                    <h1 className='text-3xl mt-3 text-center md:text-left'>showing off my photography skills</h1>
                </div>
            </div>
        </>
    );
}
