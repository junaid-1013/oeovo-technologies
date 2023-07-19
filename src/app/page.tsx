"use client";
import Hero from "@/components/Hero"
import WhyYouChoseUs from "@/components/WhyYouChoseUs"
import { ReviewCards } from "@/components/ReviewCards"
import OurCoreServices from "@/components/OurCoreServices"
import { Blogs } from "@/components/Blogs"
import { FloatingWhatsApp } from 'react-floating-whatsapp'

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
      <FloatingWhatsApp
        phoneNumber="+923265930300"
        accountName="LINETECH DIGITAL"
        avatar="https://yt3.googleusercontent.com/T2MuPGA7ptWWWlXcyW4zEuCgNn4c6Ly2GawV0Gc02l3yRyWGuM3CMCteH7-XkG8pvzkQq_GGeQ=s176-c-k-c0x00ffffff-no-rj"
        allowEsc
        allowClickAway
        notification
        notificationSound
      />

    </section>
  )
}
