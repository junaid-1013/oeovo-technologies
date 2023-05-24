import Hero from "@/components/Hero"
import WhatWeDo from "@/components/WhatWeDo"
import { ReviewCards } from "@/components/ReviewCards"

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <br/>
      <br/>
      <Hero/>
      <WhatWeDo/>
      <ReviewCards/>

    </section>
  )
}
