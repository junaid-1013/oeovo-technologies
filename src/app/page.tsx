import Hero from "@/components/Hero"
import WhyYouChoseUs from "@/components/WhyYouChoseUs"
import { ReviewCards } from "@/components/ReviewCards"
import OurCoreServices from "@/components/OurCoreServices"
import { Blogs } from "@/components/Blogs"

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <br />
      <br />
      <Hero />
      <OurCoreServices/>
      <Blogs/>
      <WhyYouChoseUs />
      <ReviewCards />

    </section>
  )
}
