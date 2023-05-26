import Hero from "@/components/Hero"
import WhyYouChoseUs from "@/components/WhyYouChoseUs"
import { ReviewCards } from "@/components/ReviewCards"
import OurCoreServices from "@/components/OurCoreServices"

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <br />
      <br />
      <Hero />
      <OurCoreServices/>
      <WhyYouChoseUs />
      <ReviewCards />

    </section>
  )
}
