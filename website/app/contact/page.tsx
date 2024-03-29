import {DesktopNav} from "@/app/Components/Navbar";

export default function ContactPage (){
    return(
        <>
            <DesktopNav></DesktopNav>
            <div className='width-[100%] height-[100vh] px-[13rem]'>
                <h1 className='text-3xl mt-3'>how to get in contact:</h1>
                <p>if you are contacting me about research or Imagine Software Club, please use:
                    <a href='mailto:milicev2@msu.edu' className='underline'>milicev2@msu.edu</a></p>
                <p>for anything else, please use:
                    <a href='mailto:milicevicmateja@outlook.com' className='underline'>milicevicmateja@outlook.com</a></p>
                <p className='pt-3'>za pripadnike ex-YU podrucja, slobodno me kontaktiratjte na nasem!</p>
                <p>para comunicarme en español, solo puedo pedir en restaurantes.</p>
                <p>je peux parler français, mais je ne vuex pas!</p>
            </div>
        </>
    )
}
