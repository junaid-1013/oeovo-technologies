import Link from "next/link"
import Image from "next/image"
import mail from "../../public/mail.png"
import phone from "../../public/phone.png"

const Top = () => {
    return (
        <nav className="w-full bg-[#111111] shadow fixed z-10 ">
            <div className="px-2 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 flex flex-row">
                <div className="flex flex-row mr-12">
                    <Image
                        src={mail}
                        alt="mailIcon"
                        width={20}
                        height={20}
                        className="object-contain mr-2"
                    />
                    <Link href="mailto:info@oeovo.com"
                        className="font-sans  text-white"

                    >info@oeovo.com</Link>
                </div>
                <div className="flex flex-row">
                    <Image
                        src={phone}
                        alt="phoneIcon"
                        width={18}
                        height={18}
                        className="object-contain mr-2"
                    />
                    <Link href="tel:+923270663686"
                        className="font-sans  text-white"

                    >+923270663686</Link>
                </div>
            </div>
        </nav>
    )
}

export default Top