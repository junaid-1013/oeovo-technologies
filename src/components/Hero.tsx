import Image from "next/image";
import heroImg from "../../public/hero.png"
import Link from "next/link";

const Hero = () => {
    return (
        <section className="flex flex-col justify-center items-center bg-[#1b1b1b] py-5">
            <Image
                src={heroImg}
                alt="Oeowo TEchnologies Body Image"
                className="w-[35%] h-auto pt-5 animate-bounces"
            />
            <div className="flex flex-col items-center justify-center py-2 w-full">
                <div className="flex flex-row">
                    <p className="mt-5 text-5xl text-center font-sans leading-[1.15] text-[#f5f5f5] sm:text-6xl">
                        Welcome to&nbsp;
                        <span className="text-[#f5100d]">OEOVO Technologies</span>
                    </p>
                </div>
                <div className="pb-5">
                    <p className="text-[#7b7b7b] mt-5 text-lg text-center sm:text-xl max-w-2xl">
                        Our vision is to become the world&rsquo;s leading idea-realization company
                    </p>
                </div>
            </div>
            <Link href="@/contact">
                <button
                    className="bg-[#f5100d] hover:bg-[#f5100d]/50 text-white py-2 px-4 rounded">
                    Get Started
                </button>
            </Link>
        </section>
    )
}

export default Hero