import Image from "next/image"
import Link from "next/link"

import shopiy from "../../public/shopify.jpg"
import customeWebApp from "../../public/Custom-Web-App-Development.jpg"
import mobileApp from "../../public/Mobile-App-Development.jpg"
import digitalMarketing from "../../public/Digital-Marketing-1.jpg"


const services = [
    {
        image: shopiy,
        alt: "Shopify",
        title: "Shopify",
        icon: (<svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24" fill="white"
            className="w-6 h-6">
            <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clipRule="evenodd" />
        </svg>
        ),
        description: "Set up your online business with the best eCommerce platform, Shopify. As the top Shopify developers in Pakistan, we ensure the success of your online store."
    },
    {
        image: customeWebApp,
        alt: "Custom Web App",
        title: "Custom Web App",
        icon: (<svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            className="w-6 h-6"
            fill="#fff"
            stroke="#fff"
            viewBox="0 0 363.715 363.715"
        >
            <path d="M236.25 222.275a12.45 12.45 0 0 0-1.252-9.506l-26.079-45.174a12.578 12.578 0 0 0-10.862-6.267 12.51 12.51 0 0 0-6.249 1.681l-13.595 7.85a95.66 95.66 0 0 0-17.834-10.332v-15.662c0-6.908-5.621-12.526-12.527-12.526H95.688c-6.906 0-12.525 5.618-12.525 12.526v15.661a95.673 95.673 0 0 0-17.835 10.333l-13.595-7.849a12.513 12.513 0 0 0-6.25-1.68 12.574 12.574 0 0 0-10.861 6.266l-26.08 45.172a12.454 12.454 0 0 0-1.253 9.507 12.442 12.442 0 0 0 5.836 7.605l13.557 7.826a96.362 96.362 0 0 0-.559 10.318c0 3.486.193 6.928.559 10.319l-13.557 7.827a12.44 12.44 0 0 0-5.836 7.606 12.449 12.449 0 0 0 1.253 9.505l26.079 45.174a12.575 12.575 0 0 0 10.861 6.266c2.186 0 4.348-.58 6.25-1.68l13.596-7.849a95.716 95.716 0 0 0 17.834 10.332v15.661a12.44 12.44 0 0 0 3.67 8.857 12.449 12.449 0 0 0 8.855 3.67h52.164c6.906 0 12.527-5.62 12.527-12.527v-15.662a95.653 95.653 0 0 0 17.833-10.332l13.596 7.849a12.502 12.502 0 0 0 6.249 1.68c4.47 0 8.63-2.4 10.862-6.266l26.079-45.174a12.448 12.448 0 0 0 1.252-9.505 12.435 12.435 0 0 0-5.834-7.606l-13.557-7.828c.365-3.391.558-6.833.558-10.319a96.09 96.09 0 0 0-.558-10.318l13.557-7.827a12.413 12.413 0 0 0 5.835-7.602zm-114.48 80.148c-30.043 0-54.396-24.354-54.396-54.397 0-30.041 24.354-54.396 54.396-54.396s54.397 24.355 54.397 54.396c0 30.042-24.354 54.397-54.397 54.397zM167.512 93.593a8.239 8.239 0 0 0 .83 6.29l17.256 29.892a8.32 8.32 0 0 0 7.188 4.146 8.292 8.292 0 0 0 4.137-1.111l9.002-5.197a63.227 63.227 0 0 0 11.795 6.827v10.377a8.23 8.23 0 0 0 2.428 5.861 8.232 8.232 0 0 0 5.86 2.427h34.517c4.57 0 8.29-3.718 8.29-8.288V134.44a63.31 63.31 0 0 0 11.794-6.828l9.004 5.198a8.266 8.266 0 0 0 4.135 1.111 8.32 8.32 0 0 0 7.188-4.146l17.256-29.892a8.234 8.234 0 0 0 .83-6.29 8.237 8.237 0 0 0-3.861-5.033l-8.975-5.182c.241-2.243.373-4.519.373-6.825s-.132-4.581-.373-6.825l8.975-5.181a8.239 8.239 0 0 0 3.861-5.034 8.24 8.24 0 0 0-.83-6.29l-17.256-29.892a8.32 8.32 0 0 0-7.188-4.147 8.268 8.268 0 0 0-4.135 1.113l-9.004 5.198a63.219 63.219 0 0 0-11.794-6.827V8.289c0-4.57-3.72-8.289-8.29-8.289h-34.517c-4.57 0-8.288 3.719-8.288 8.289v10.378a63.33 63.33 0 0 0-11.794 6.827l-9.003-5.198a8.27 8.27 0 0 0-4.137-1.113 8.327 8.327 0 0 0-7.188 4.147l-17.256 29.892a8.24 8.24 0 0 0-.83 6.29 8.24 8.24 0 0 0 3.861 5.034l8.975 5.181a63.848 63.848 0 0 0-.373 6.825c0 2.307.132 4.582.373 6.825l-8.975 5.182a8.245 8.245 0 0 0-3.861 5.034zm75.754-53.035c19.881 0 35.996 16.116 35.996 35.995s-16.115 35.995-35.996 35.995c-19.88 0-35.995-16.116-35.995-35.995s16.115-35.995 35.995-35.995zM354.003 209.477l-6.179-3.567c.167-1.544.258-3.111.258-4.699 0-1.588-.091-3.154-.258-4.699l6.179-3.567a5.666 5.666 0 0 0 2.657-3.465 5.671 5.671 0 0 0-.57-4.33l-11.88-20.576a5.724 5.724 0 0 0-4.946-2.855c-.996 0-1.98.265-2.848.766l-6.197 3.578a43.559 43.559 0 0 0-8.119-4.7v-7.144a5.713 5.713 0 0 0-5.705-5.706h-23.76a5.713 5.713 0 0 0-5.706 5.706v7.144a43.527 43.527 0 0 0-8.119 4.7l-6.198-3.578a5.695 5.695 0 0 0-2.847-.766 5.721 5.721 0 0 0-4.946 2.855L252.94 185.15a5.658 5.658 0 0 0-.572 4.33 5.675 5.675 0 0 0 2.658 3.465l6.18 3.567a43.653 43.653 0 0 0-.258 4.698c0 1.588.091 3.154.258 4.698l-6.18 3.567a5.664 5.664 0 0 0-2.658 3.464 5.662 5.662 0 0 0 .572 4.33l11.879 20.576a5.723 5.723 0 0 0 4.946 2.855c.996 0 1.98-.266 2.847-.766l6.198-3.578a43.582 43.582 0 0 0 8.119 4.7v7.144c0 1.523.593 2.957 1.671 4.034a5.667 5.667 0 0 0 4.035 1.672h23.76a5.713 5.713 0 0 0 5.705-5.706v-7.144a43.527 43.527 0 0 0 8.119-4.7l6.197 3.578c.867.5 1.852.766 2.848.766a5.723 5.723 0 0 0 4.946-2.855l11.88-20.576a5.666 5.666 0 0 0 .57-4.33 5.657 5.657 0 0 0-2.657-3.462zm-49.488 16.512c-13.686 0-24.778-11.095-24.778-24.778 0-13.685 11.092-24.779 24.778-24.779 13.685 0 24.777 11.095 24.777 24.779s-11.093 24.778-24.777 24.778z" />
        </svg>
        ),
        description: "We are the leading web development company in Pakistan that provides end-to-end custom web app development solutions to solve your unique business challenges."
    },
    {
        image: mobileApp,
        alt: "Mobile App",
        title: "Mobile App",
        icon: (<svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-6 h-6">
            <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
            <path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 19.875V4.125z" clipRule="evenodd" />
        </svg>

        ),
        description: "We provide full-cycle mobile application development services to develop high-performing and feature-rich mobile apps for both Android and iOS devices."
    },
    {
        image: digitalMarketing,
        alt: "Digital Marketing",
        title: "Digital Marketing",
        icon: (<svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="#fff"
            viewBox="0 0 24 24"
            className="w-6 h-6"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21H4.6c-.56 0-.84 0-1.054-.109a1 1 0 01-.437-.437C3 20.24 3 19.96 3 19.4V3m18 4l-5.434 5.434c-.198.198-.297.297-.412.334a.499.499 0 01-.309 0c-.114-.037-.213-.136-.41-.334l-1.87-1.868c-.197-.198-.296-.297-.41-.334a.499.499 0 00-.31 0c-.114.037-.213.136-.41.334L7 15m14-8h-4m4 0v4"
            ></path>
        </svg>
        ),
        description: "We offer digital marketing solutions such as SEO, Social Media Marketing, and Google Ads to help our clients achieve success with transformative marketing strategies."
    }
];

const ServiceItem = ({ image, alt, title, description, icon }: any) => (
    <div className="group relative cursor-pointer items-center justify-center overflow-hidden 
        hover:shadow-xl hover:shadow-black/30 rounded-lg hover:-translate-y-3
        transition-all duration-500 transform-gpu">
        <div className="h-96 w-80">
            <Image
                className="h-full w-full object-cover transition-transform duration-500 
          group-hover:rotate-3 group-hover:scale-125"
                src={image}
                alt={alt}
            />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black 
        group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-start justify-center 
        px-9 text-left transition-all duration-500 group-hover:translate-y-0">
            <div className="flex items-center mb-2 group-hover:opacity-100">
                {icon}
                <h1 className="font-['Calibri'] text-3xl text-white ml-2">
                    {title}
                </h1>
            </div>
            <p className="mb-3 pt-2 text-base text-left text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {description}
            </p>
        </div>
    </div>
);





const OurCoreServices = () => {
    return (
        <>
            <div className="flex mb-5 lg:-mb-16 items-center justify-center">
                <div>
                    <p className="mt-5 text-5xl text-center font-sans leading-[1.15] text-[#f5f5f5] sm:text-6xl">
                        Our Core Services
                    </p>
                </div>
            </div>
            <div className="flex min-h-screen items-center justify-center">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, index) => (
                        <ServiceItem key={index} {...service} />
                    ))}
                </div>
            </div>
            <div className="flex mb-5 lg:-mt-16 sm:mt-5 md:mt-5 items-center justify-center">
                <Link href="/services">
                    <button className="relative border-2 border-[#f5100d] bg-transparent py-2.5 px-5 font-medium uppercase 
                    text-[#f5100d] transition-all before:absolute before:left-0 before:top-0 before:-z-10 before:h-full 
                    before:w-full before:origin-top-left before:scale-x-0 before:bg-[#f5100d] before:transition-transform 
                    before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 
                    rounded-lg duration-500 transform hover:-translate-y-1">
                        View More &rarr;
                    </button>
                </Link>
            </div>
        </>
    )
}

export default OurCoreServices