import TabsCard from "@/components/TabsCard";
import Image from "next/image";


export default function Home() {
    return (
        <>
            <br />
            <br />
            {/* <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center justify-center py-5">
                    <img className="h-auto max-w-lg rounded-lg" src="https://appsolvers.co/assets/img/about.jpg" alt="image description"/>
                </div>
                <TabsCard />

            </div> */}
            <div className="mx-auto w-full max-w-screen-xl grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:pt-12 sm:pb-40 md:pb-14 lg:pb-32 xl:h-[570px]">
                <div className="text-center md:text-right text-[#ffdf58] text-sm md:text-3xl font-bold md:px-8">
                    About Linetech Digital<br/>
                    Who we are.<br/>
                    What we do.
                </div>

                <div className="text-justify text-white">
                    Linetech Digital is a dynamic and forward-thinking online technology
                    company specializing in software services. With a focus on innovation
                    and customer-centricity, Linetech Digital offers a diverse range of solutions,
                    including custom software development, cloud computing, data analytics, artificial
                    intelligence, and cybersecurity services. Their skilled team of professionals collaborates
                    closely with clients to understand their unique needs and deliver tailored, high-quality
                    solutions that drive growth and success. Linetech Digital&apos;s commitment to staying at the
                    forefront of technological advancements ensures that they consistently provide cutting-edge
                    digital experiences, making them a trusted partner for businesses seeking to thrive in the digital landscape.
                </div>
            </div >

        </>
    )
}