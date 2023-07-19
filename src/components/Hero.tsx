import Link from "next/link";


const Hero = () => {
    return (
        <section
            className={`flex flex-col justify-center items-center bg-[#1b1b1b] py-2 
            bg-[url('../../public/4.png')] bg-cover h-screen`}>
            <div className="flex flex-col items-center justify-center py-2 w-full px-4">
                <div className="flex flex-row px-28">
                    <p className="mt-5 text-5xl text-center font-['Impact'] leading-[1.15] text-[#f5f5f5] sm:text-6xl">
                        Software Development Company in Lahore, Pakistan For Innovative Software Solutions
                        {/* &nbsp;<span className="text-[#fcb040]">OEOVO Technologies</span> */}
                    </p>
                </div>
                <div className="pb-5">
                    <p className="text-[#dcdde1] mt-5 text-lg text-center sm:text-xl max-w-2xl px-4">
                        Empowering and Optimizing Your Business with Innovative Technologies
                    </p>
                </div>
            </div>
            <Link href="@/contact">
                <button className="relative border-2 border-[#fcb040] bg-transparent py-2.5 px-5 font-medium uppercase 
                text-[#fcb040] transition-all before:absolute before:left-0 before:top-0 before:-z-10 before:h-full 
                before:w-full before:origin-top-left before:scale-x-0 before:bg-[#fcb040] before:transition-transform 
                before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 
                rounded-lg duration-500 transform hover:-translate-y-1">
                    Discover
                </button>
            </Link>
        </section>

    )
}

export default Hero