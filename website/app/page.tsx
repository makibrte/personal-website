import Image from "next/image";
import {DesktopNav} from "@/app/Components/Navbar";

export default function Home() {
  return (
    <>
        <DesktopNav></DesktopNav>
      <div className = 'flex w-[100%] h-[100vh]'>
          <div className={'mt-5'}>
              <h1 className=' text-3xl'>a little bit about me...</h1>
              <p className={'mt-2'}>my name is mateja milicevic. I was born in Belgrade, Serbia.
                  I lived there my whole life until I enrolled in a boarding school near Albany, NY.
                  after graduating from high school I enrolled in Michigan State University.
                  initially I was studying finance but then I switched to data science.
                  I am supposed to graduate summer 24. in my free time I love watching football(soccer) and also playing
                  ping-pong.
                  I am a HUGE Real Madrid fan, hala madrid! but truly my two biggest passions are computers and travel.
                  you can find me writing about my travels in <a href={'/blog'} className={'underline'}>blog</a>.</p>
              <h1 className=' text-3xl mt-3'>showing off my photography skills</h1>
          </div>


      </div>
    </>
  );
}
