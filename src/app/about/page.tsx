import TabsCard from "@/components/TabsCard";
import Image from "next/image";


export default function Home() {
    return (
        <>
            <br />
            <br />
            <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center justify-center py-5">
                    <img className="h-auto max-w-lg rounded-lg" src="https://appsolvers.co/assets/img/about.jpg" alt="image description"/>
                </div>
                <TabsCard />

            </div>

        </>
    )
}