import Link from "next/link";


const Hero = () => {
    return (
        <section
            className={`flex flex-col justify-center items-center bg-[#1b1b1b] py-2 
            bg-[url('../../public/4.png')] bg-cover h-screen`}>
            <div className="flex flex-col items-center justify-center py-2 w-full px-4">
                <div className="flex flex-row">
                    <p className="mt-5 text-5xl text-center font-['Impact'] leading-[1.15] text-[#f5f5f5] sm:text-6xl">
                        Software Development Company in Lahore, Pakistan For Innovative Software Solutions
                        {/* &nbsp;<span className="text-[#f5100d]">OEOVO Technologies</span> */}
                    </p>
                </div>
                <div className="pb-5">
                    <p className="text-[#dcdde1] mt-5 text-lg text-center sm:text-xl max-w-2xl px-4">
                        Empowering and Optimizing Your Business with Innovative Technologies
                    </p>
                </div>
            </div>
            <Link href="@/contact">
                <button
                    className="bg-[#f5100d] hover:bg-[#f5100d]/50 text-white py-2 px-4 rounded
                    transition duration-300 transform hover:-translate-y-1">
                    Discover More
                </button>
            </Link>
        </section>

    )
}

export default Hero