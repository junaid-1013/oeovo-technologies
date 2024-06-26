import Image from "next/image"
import Link from "next/link"

import shopiy from "../../../public/shopify.jpg"
import customeWebApp from "../../../public/Custom-Web-App-Development.jpg"
import mobileApp from "../../../public/Mobile-App-Development.jpg"
import digitalMarketing from "../../../public/Digital-Marketing-1.jpg"
import crmSoftware from "../../../public/services-4.jpg"
import seo from "../../../public/services-5.jpg"
import IOS from "../../../public/services-6.jpg"
import bussinesApp from "../../../public/services-7.jpg"
import socialMediaMarketing from "../../../public/services-10.jpg"
import contentWritting from "../../../public/services-11.jpg"
import ITResearch from "../../../public/services-12.jpg"
import digitalCommerce from "../../../public/services-13.jpg"
import graphicDesign from "../../../public/services-14.jpg"
import AISolutions from "../../../public/services-15.jpg"


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
    },
    {
        image: crmSoftware,
        alt: "crmSoftware",
        title: "CRM Software",
        icon: (<svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#fff"
            className="w-6 h-6">
            <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd" />
            <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
        </svg>

        ),
        description: "CRM software (customer relationship management software) is a tool that's designed to help your organization offer your customers a unique and seamless experience"
    },
    {
        image: seo,
        alt: "SEO",
        title: "SEO",
        icon: (<svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#fff"
            className="w-6 h-6">
            <path d="M8.25 10.875a2.625 2.625 0 115.25 0 2.625 2.625 0 01-5.25 0z" />
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.125 4.5a4.125 4.125 0 102.338 7.524l2.007 2.006a.75.75 0 101.06-1.06l-2.006-2.007a4.125 4.125 0 00-3.399-6.463z" clipRule="evenodd" />
        </svg>

        ),
        description: "We are heavily focused on search engine optimization and we provide the best solution to your every problem related to ranking higher, increasing organic traffic, and getting leads."
    },
    {
        image: IOS,
        alt: "IOS",
        title: "IOS",
        icon: (<svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            viewBox="-1.5 0 20 20"
            className="w-6 h-6"
        >
            <g>
                <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                    <g fill="#fff" transform="translate(-102 -7439)">
                        <g transform="translate(56 160)">
                            <path d="M57.57 7282.193c.73-.845 1.221-2.022 1.087-3.193-1.05.04-2.322.671-3.075 1.515-.677.749-1.267 1.946-1.108 3.094 1.172.087 2.368-.57 3.097-1.416m2.628 7.432c.03 3.027 2.77 4.034 2.801 4.047-.022.07-.438 1.435-1.444 2.845-.87 1.218-1.774 2.43-3.196 2.457-1.398.025-1.848-.794-3.447-.794-1.597 0-2.097.768-3.42.819-1.373.049-2.42-1.318-3.296-2.532-1.794-2.483-3.164-7.017-1.324-10.077.915-1.52 2.548-2.482 4.321-2.506 1.348-.025 2.621.869 3.445.869.825 0 2.372-1.075 3.998-.917.68.027 2.591.263 3.818 1.984-.1.059-2.28 1.275-2.256 3.805"></path>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
        ),
        description: "Whether you are looking for iPhone app development services, or willing to build an application that would work equally well across all Apple devices."
    },
    {
        image: bussinesApp,
        alt: "bussinesApp",
        title: "Business App",
        icon: (<svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#fff"
            className="w-6 h-6">
            <path fillRule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
            <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
        </svg>

        ),
        description: "App solvers highly experienced Business Applications team can help you identify, assess, and bridge the gaps in your Business Applications stack."
    },
    {
        image: socialMediaMarketing,
        alt: "socialMediaMarketing",
        title: "SM Marketting",
        icon: (<svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            version="1.1"
            viewBox="0 0 76.609 76.609"
            xmlSpace="preserve"
            className="w-8 h-8"
        >
            <g>
                <path d="M57.455 16.575c0 1.12 1.121 2.24 2.688 2.24 2.239 0 2.911-.896 2.911-2.24v-.447c-.223-.672-.896-1.12-1.566-1.568-.225 0-.672-.224-1.119-.224-1.57.001-2.914.896-2.914 2.239zM62.16 9.183c-.226-1.344-1.121-2.464-2.24-2.464-1.121 0-1.793 1.12-1.567 2.464.226 1.344 1.119 2.464 2.239 2.464.896 0 1.791-1.12 1.568-2.464z"></path>
                <path d="M52.08 25.983l3.808-3.808c2.239 1.792 4.93 2.912 7.841 2.912a12.525 12.525 0 0012.544-12.544A12.525 12.525 0 0063.728 0c-6.942 0-12.544 5.6-12.544 12.544 0 3.136 1.119 5.823 2.912 7.84l-3.809 3.809c.672.671 1.344 1.344 1.793 1.79zM65.744 8.511h2.463V6.048h.896v2.464h2.465v.896h-2.465v2.465h-.896V9.407h-2.463v-.896zm-5.6 4.256c0-.224 0-.448.226-.672h-.447c-1.793 0-3.137-1.344-3.137-2.912s1.791-2.912 3.584-2.912h4.03l-.896.672H62.16c.896.225 1.344 1.345 1.344 2.464 0 .896-.448 1.568-1.121 2.24-.672.448-.896.672-.896 1.12 0 .448.673 1.12 1.12 1.344 1.119.672 1.344 1.568 1.344 2.688 0 1.567-1.344 2.912-4.031 2.912-2.239 0-4.256-.896-4.256-2.464s1.791-2.912 4.031-2.912h.672c0-.671-.223-1.119-.223-1.568zM63.728 51.52c-2.911 0-5.823 1.119-7.841 2.912l-3.807-3.809c-.449.672-1.121 1.118-1.568 1.566l3.809 3.809c-1.792 2.238-2.912 4.929-2.912 7.841a12.526 12.526 0 0012.545 12.544 12.526 12.526 0 0012.545-12.544c-.228-6.944-5.827-12.319-12.771-12.319zm-3.584 18.144H57.68v-7.841h2.464v7.841zm-1.12-8.959c-.896 0-1.567-.673-1.567-1.346 0-.672.672-1.344 1.567-1.344s1.567.672 1.567 1.344c-.224.897-.671 1.346-1.567 1.346zm11.2 8.959h-2.912v-4.031c0-1.119-.447-1.792-1.345-1.792-.672 0-1.119.448-1.344.896v4.93h-2.688v-7.841h2.688v1.12c.225-.447 1.121-1.344 2.465-1.344 1.791 0 3.136 1.119 3.136 3.584v4.478zM24.304 50.625l-3.808 3.809c-2.24-1.793-4.928-2.912-7.84-2.912A12.524 12.524 0 00.112 64.065c0 6.944 5.6 12.545 12.544 12.545A12.525 12.525 0 0025.2 64.065c0-2.912-1.12-5.823-2.912-7.84l3.808-3.809c-.672-.673-1.344-1.346-1.792-1.791zm-6.271 11.423c0 3.808-2.912 8.063-8.064 8.063-1.567 0-3.136-.448-4.256-1.346h.672c1.344 0 2.464-.447 3.584-1.119-1.12 0-2.24-.896-2.688-2.017h1.12c-1.345-.226-2.24-1.344-2.24-2.688.448.225.896.447 1.344.447-.672-.447-1.344-1.344-1.344-2.24 0-.446.224-.896.448-1.344 1.344 1.793 3.359 2.912 5.823 2.912v-.672c0-1.568 1.345-2.912 2.912-2.912.896 0 1.568.447 2.017.896.672-.225 1.344-.448 1.792-.672-.225.672-.673 1.119-1.345 1.566.672 0 1.12-.225 1.568-.447-.448.672-.896 1.119-1.344 1.344l.001.229zM12.656 25.088c2.912 0 5.823-1.12 7.84-2.912l3.808 3.808c.448-.672 1.12-1.119 1.568-1.567l-3.809-3.808c1.792-2.24 2.912-4.928 2.912-7.84 0-6.944-5.6-12.544-12.544-12.544C5.488.225.112 5.825.112 12.769c0 6.718 5.6 12.319 12.544 12.319zM9.744 10.527h1.344V9.183c0-1.792.672-2.912 2.912-2.912h1.792v2.24h-1.12c-.896 0-.896.224-.896.896v1.12h2.016l-.224 2.24H13.55v6.272h-2.688v-6.272H9.519v-2.24h.225zM49.617 44.575c-.226-.446-.673-.673-.896-.673-2.016-.672-3.807-1.118-5.823-1.791-.224 0-.672-.447-.672-1.344 0-.449 0-.673-.447-.673-.226 0 0 0-.226-.224-.223-.896-.223-1.345-.223-1.568 0-.223.223-.225.223-.448.673-.896.896-2.239.896-2.688 0 0 .225 0 .225-.225.224-.448.224-.448.224-1.121.226-.446.226-1.118-.224-1.118-.225.224-.225 0-.225-.448v-2.688c0-.896-.673-1.567-1.119-1.791-.674-.449-.896-.673-1.121-.673-.225-.224-.225-.448 0-.672.224-.223.447-.223.447-.448h-.225c-.225 0-1.567.226-2.239.448-1.12.224-2.24.672-3.137 1.345-.672.447-1.12 1.119-1.12 2.017v2.688c0 .226 0 .448-.224.226-.672 0-.224.896-.224 1.118 0 .448.224.673.447 1.121 0 .225.225.225.225.225.224.672.448 2.016.896 2.688 0 0 .225.225.225.448 0 .448 0 1.12-.225 1.568 0 0 0 .225-.224.225-.448 0-.448.224-.448.672 0 .672-.448 1.345-.672 1.345-1.12.446-4.479 1.567-5.6 1.791-.672.226-.896.448-1.12.672l-1.12 2.688c4.479 0 6.72 2.688 11.424 3.584h2.24c4.704-.672 8.063-3.584 11.2-3.584l-1.118-2.692z"></path>
            </g>
        </svg>
        ),
        description: "If you want your business to soar to new heights, then you need to ace the Social Media platforms."
    },
    {
        image: contentWritting,
        alt: "contentWritting",
        title: "content Writting",
        icon: (<svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="w-6 h-6"
        >
            <g fill="#fff" fillRule="evenodd" clipRule="evenodd">
                <path d="M12 21a1 1 0 011-1h8a1 1 0 110 2h-8a1 1 0 01-1-1zM20.774 8.1c1.61-1.616 1.541-3.738.339-5.038A3.31 3.31 0 0018.748 2c-.949-.022-1.931.34-2.838 1.099a.988.988 0 00-.067.061L2.874 16.181A3 3 0 002 18.3v1.693C2 21.094 2.892 22 4.004 22h1.679a3 3 0 002.125-.883L20.774 8.1zm-3.567-2.307a1 1 0 10-1.414 1.414l1 1a1 1 0 101.414-1.414l-1-1z"></path>
            </g>
        </svg>
        ),
        description: "You can rest assured as we provide the best website content writing services in Pakistan. We will bring you the most quality and relevant website content and optimize it fully for your related keywords."
    },
    {
        image: ITResearch,
        alt: "IT Research",
        title: "IT Research",
        icon: (<svg
            xmlns="http://www.w3.org/2000/svg"
            id="OBJECT"
            fill="#fff"
            viewBox="0 0 32 32"
            className="w-6 h-6"
        >
            <g id="SVGRepo_iconCarrier">
                <defs>
                    <style>{".cls-1{fill:#b2b2b2}"}</style>
                </defs>
                <title />
                <path d="M9.66 23.34a1 1 0 0 1-.66-.29 1 1 0 0 1 0-1.41l3.27-3.28a1 1 0 0 1 1.42 1.42l-3.28 3.27a1 1 0 0 1-.75.29Z" />
                <circle cx={20} cy={12} r={11} className="cls-1" />
                <path d="M20 19a7 7 0 1 1 7-7 7 7 0 0 1-7 7Zm0-12a5 5 0 1 0 5 5 5 5 0 0 0-5-5Z" />
                <path d="M20 19c-2.23 0-3.4-3.52-3.4-7s1.17-7 3.4-7 3.4 3.52 3.4 7-1.17 7-3.4 7Zm0-12c-.4.06-1.4 1.9-1.4 5s1 4.94 1.4 5 1.4-1.9 1.4-5-1-4.94-1.4-5ZM11.78 23.05 9 20.22a1 1 0 0 0-1.42 0l-5.7 5.66a3 3 0 0 0 0 4.24 3 3 0 0 0 4.24 0l5.66-5.66a1 1 0 0 0 .29-.7 1 1 0 0 0-.29-.71Z" />
                <path
                    d="M11.78 25.46a1 1 0 0 1-.71-.29l-4.24-4.24a1 1 0 0 1 0-1.42 1 1 0 0 1 1.41 0l4.25 4.25a1 1 0 0 1-.71 1.7Z"
                    className="cls-1"
                />
                <path d="M26 13H14a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2Z" />
            </g>
        </svg>
        ),
        description: "IT Research Services strives to provide the core IT resources researchers require to effectively conduct their data-driven research. Hardware and software solutions for data analysis."
    },
    {
        image: digitalCommerce,
        alt: "digitalCommerce",
        title: "ECommerce",
        icon: (<svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            id="_x32_"
            fill="#fff"
            viewBox="0 0 512 512"
            className="w-6 h-6"
        >
            <g id="SVGRepo_iconCarrier">
                <style>{".st0{fill:#fff}"}</style>
                <path
                    d="M198.746 439.89a35.658 35.658 0 0 0-20.013-6.119c-4.912 0-9.651 1-13.943 2.82a35.843 35.843 0 0 0-15.737 12.958 35.598 35.598 0 0 0-6.112 20.013 35.519 35.519 0 0 0 2.812 13.934 35.84 35.84 0 0 0 12.95 15.737 35.677 35.677 0 0 0 20.03 6.128c4.912 0 9.642-1.001 13.926-2.82a35.84 35.84 0 0 0 15.746-12.959 35.754 35.754 0 0 0 6.119-20.021c0-4.911-1.009-9.642-2.82-13.934a35.808 35.808 0 0 0-12.958-15.737zm-6.716 35.286a14.54 14.54 0 0 1-5.244 6.36 14.325 14.325 0 0 1-8.054 2.464c-2.026-.008-3.904-.405-5.615-1.142a14.485 14.485 0 0 1-6.36-5.226 14.463 14.463 0 0 1-2.464-8.072 14.494 14.494 0 0 1 1.142-5.615c1.075-2.572 2.928-4.796 5.234-6.359a14.358 14.358 0 0 1 8.063-2.456c2.018 0 3.887.406 5.607 1.133a14.474 14.474 0 0 1 6.36 5.243 14.257 14.257 0 0 1 2.456 8.054c0 2.027-.397 3.896-1.125 5.616zM168.726 392.844c-3.87 0-7.492-.777-10.816-2.175a27.935 27.935 0 0 1-12.239-10.089 27.521 27.521 0 0 1-4.714-14.835c.149-6.592 2.25-12.314 5.938-16.887 1.91-2.357 4.267-4.424 7.128-6.136 2.828-1.687 6.16-3.026 10.073-3.87l244.336-39.769a38.938 38.938 0 0 0 31.888-30.664l29.887-146.928v-.016c.347-1.704.512-3.44.512-5.16a25.956 25.956 0 0 0-5.855-16.424 25.943 25.943 0 0 0-20.086-9.518H106.456L94.928 50.769v.008a50.606 50.606 0 0 0-37.876-34.989L15.688 6.931C8.692 5.426 1.794 9.891.29 16.896c-1.497 7.004 2.96 13.901 9.973 15.398l41.349 8.865a24.63 24.63 0 0 1 18.457 17.052l75.585 259.634a52.676 52.676 0 0 0-4.928 2.605c-8.154 4.855-14.687 11.669-19.07 19.624-4.192 7.559-6.417 16.126-6.624 24.967h-.042v1.347h.033a53.551 53.551 0 0 0 4.193 19.575 53.89 53.89 0 0 0 19.458 23.634 53.525 53.525 0 0 0 30.052 9.187h137.269c-.042-1.281-.19-2.53-.19-3.82 0-7.567.777-14.952 2.175-22.122H168.726zm184.737-257.907c7.285-2.117 14.91 2.051 17.027 9.336l27.836 95.275c2.117 7.286-2.059 14.902-9.344 17.035-7.278 2.126-14.902-2.05-17.027-9.336l-27.828-95.275c-2.127-7.277 2.05-14.901 9.336-17.035zm-60.063.248c7.278-2.134 14.902 2.042 17.027 9.328l30.49 104.412c2.134 7.278-2.051 14.911-9.328 17.036-7.278 2.125-14.902-2.051-17.036-9.337l-30.49-104.413c-2.125-7.275 2.051-14.909 9.337-17.026zm-60.079.215c7.285-2.117 14.91 2.059 17.027 9.344l32.996 112.972c2.133 7.286-2.051 14.911-9.328 17.035-7.277 2.126-14.902-2.05-17.036-9.336l-32.996-112.98c-2.126-7.277 2.051-14.901 9.337-17.035zm-60.071.24c7.286-2.126 14.911 2.051 17.036 9.337l35.568 121.796c2.134 7.285-2.051 14.918-9.328 17.036-7.278 2.133-14.902-2.051-17.036-9.328l-35.576-121.812c-2.118-7.279 2.05-14.903 9.336-17.029z"
                    className="st0"
                />
                <path
                    d="M421.604 324.561c-49.932 0-90.396 40.472-90.396 90.404 0 49.924 40.464 90.396 90.396 90.396 49.924 0 90.396-40.472 90.396-90.396 0-49.932-40.472-90.404-90.396-90.404zm-5.126 132.629-43.217-34.576 16.399-20.5 22.427 17.945 37.784-48.576 20.733 16.118-54.126 69.589z"
                    className="st0"
                />
            </g>
        </svg>
        ),
        description: "App Solvers Digital Commerce Practice offers end-to-end services to transform the way enterprises engage, transact and service their customers in today’s multi-channel landscape."
    },
    {
        image: graphicDesign,
        alt: "graphicDesign",
        title: "Graphic Design",
        icon: (<svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            version="1.1"
            viewBox="0 0 800 800"
            xmlSpace="preserve"
            className="w-8 h-8"
        >
            <g>
                <path d="M776.557 119.544c.357-21.353-7.375-41.042-21.771-55.438-7.812-7.81-20.475-7.81-28.285.001s-7.811 20.474 0 28.284c6.663 6.662 10.236 16.067 10.063 26.484-.166 9.938-3.928 19.534-10.063 25.669-12.725 12.725-139.57 124.086-238.635 210.734L463.586 331c72.32-82.747 162.068-185.064 197.172-223.914l7.986 7.987c7.811 7.811 20.475 7.812 28.284.002 7.812-7.81 7.813-20.473.003-28.284L674.35 64.108a19.999 19.999 0 00-14.142-5.859h-.001a20.001 20.001 0 00-14.142 5.857c-12.171 12.17-86.618 96.725-153.792 173.381-18.065-27.343-42.194-50.865-70.895-68.921-41.949-26.391-90.855-39.772-145.362-39.772-11.991 0-23.854.756-35.257 2.249-10.953 1.434-18.669 11.474-17.236 22.427 1.434 10.952 11.473 18.668 22.426 17.235 9.689-1.268 19.805-1.911 30.066-1.911 82.994 0 152.612 37.208 188.714 100.146a80727.506 80727.506 0 00-76.59 87.649c-24.918 3.395-43.511 13.592-56.621 31.078-12.189 16.257-17.532 35.673-23.188 56.229-6.82 24.786-13.872 50.416-33.983 70.526a20.001 20.001 0 0014.142 34.143c53.825 0 96.486-11.473 126.799-34.099 27.317-20.391 43.6-49.341 47.45-84.105 51.533-45.007 273.565-239.051 292.047-257.533 13.496-13.495 21.432-32.917 21.772-53.284zM457.684 381.666a65630.2 65630.2 0 01-17.438 15.232l-18.261-18.26c4.887-5.601 9.976-11.432 15.226-17.444l20.473 20.472zm-66.323 100.745c-15.732 11.744-36.668 19.57-62.509 23.403 8.793-17.681 13.726-35.608 18.045-51.307 9.27-33.688 14.916-50.596 37.758-56.63l36.929 36.928c-4.066 19.658-14.183 35.633-30.223 47.606zM178.311 189.959c2.913 0 5.872-.64 8.671-1.989a176.435 176.435 0 015.479-2.528c10.105-4.461 14.681-16.269 10.22-26.374-4.461-10.104-16.268-14.68-26.374-10.22-2.247.992-4.5 2.032-6.697 3.091-9.949 4.797-14.126 16.752-9.33 26.701 3.448 7.15 10.591 11.319 18.031 11.319z"></path>
                <path d="M322.839 570.789c-11.035-.108-20.099 8.729-20.224 19.773-.863 76.887-12.47 111.188-78.964 111.188-37.276 0-76.396-27.269-107.328-74.813-34.107-52.427-52.891-120.494-52.891-191.663 0-92.393 27.9-169.269 78.561-216.465 8.082-7.529 8.53-20.185 1.001-28.267s-20.185-8.53-28.267-1.001c-29.841 27.801-52.93 63.923-68.627 107.363-15.042 41.626-22.668 88.181-22.668 138.37 0 78.821 21.083 154.636 59.363 213.476 38.451 59.104 89.792 93.001 140.856 93.001 48.841 0 82.882-17.187 101.175-51.082 15.706-29.104 17.416-66.701 17.786-99.657.124-11.045-8.728-20.1-19.773-20.223zM421.257 274.597c0-36.74-29.891-66.631-66.631-66.631-36.741 0-66.633 29.891-66.633 66.631 0 36.741 29.892 66.633 66.633 66.633 36.74-.001 66.631-29.892 66.631-66.633zm-93.264 0c0-14.685 11.947-26.631 26.633-26.631 14.685 0 26.631 11.946 26.631 26.631 0 14.686-11.946 26.633-26.631 26.633-14.686-.001-26.633-11.948-26.633-26.633z"></path>
                <path d="M195.826 365.177c36.741 0 66.632-29.891 66.632-66.631 0-36.741-29.891-66.632-66.632-66.632s-66.632 29.891-66.632 66.632c0 36.74 29.891 66.631 66.632 66.631zm0-93.263c14.685 0 26.632 11.947 26.632 26.632s-11.947 26.631-26.632 26.631-26.632-11.946-26.632-26.631 11.948-26.632 26.632-26.632zM211.417 451.638c0-36.741-29.891-66.633-66.632-66.633s-66.632 29.892-66.632 66.633c0 36.74 29.891 66.631 66.632 66.631s66.632-29.891 66.632-66.631zm-66.632 26.631c-14.685 0-26.632-11.946-26.632-26.631 0-14.686 11.947-26.633 26.632-26.633s26.632 11.947 26.632 26.633c0 14.684-11.947 26.631-26.632 26.631zM214.792 674.175c36.741 0 66.633-29.891 66.633-66.631s-29.892-66.631-66.633-66.631c-36.74 0-66.631 29.891-66.631 66.631s29.891 66.631 66.631 66.631zm0-93.262c14.686 0 26.633 11.946 26.633 26.631s-11.947 26.631-26.633 26.631c-14.684 0-26.631-11.946-26.631-26.631s11.947-26.631 26.631-26.631z"></path>
            </g>
        </svg>
        ),
        description: "Graphic Design is to craft your communication visually and we help you create visual content to trigger your message creativity."
    },
    {
        image: AISolutions,
        alt: "AISolutions",
        title: "AI Solutions",
        icon: (<svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            fill="#fff"
            viewBox="0 0 512 512"
            className="w-6 h-6"
        >
            <path
                d="m497.879 222.264-.131-.122.106.106a47.965 47.965 0 0 0-7.69-6.324 7.388 7.388 0 0 1-2.896-.613 7.678 7.678 0 0 1-3.518-3.036 48.495 48.495 0 0 0-14.063-4.213c-4.197-.58-7.093-4.45-6.504-8.639.58-4.181 4.451-7.093 8.623-6.513 4.786.68 9.54 1.907 14.146 3.682.728-3.338 1.137-6.741 1.137-10.194a47.596 47.596 0 0 0-5.547-22.278v-.008c-4.311-8.181-10.594-14.554-17.99-18.931a48.082 48.082 0 0 0-21.28-6.595 63.885 63.885 0 0 1-5.023 20.233 7.658 7.658 0 0 1-10.055 4.008 7.658 7.658 0 0 1-4.008-10.055 49.324 49.324 0 0 0 4.025-19.397c0-.933-.041-1.857-.082-2.782a49.293 49.293 0 0 0-8.574-25.067 48.783 48.783 0 0 0-21.05-17.278 48.8 48.8 0 0 0-19.406-4.026c-12.411 0-24.437 4.778-33.503 13.212a64.274 64.274 0 0 1 2.643 18.195c0 4.221-3.428 7.641-7.65 7.641-4.23 0-7.658-3.42-7.658-7.641a49.072 49.072 0 0 0-3.22-17.54l.004.007c-3.526-9.228-9.773-17.14-17.753-22.735-7.977-5.596-17.634-8.868-28.135-8.868-9.138 0-17.639 2.47-24.948 6.79-5.846 3.452-10.898 8.108-14.858 13.589a64.151 64.151 0 0 1 12.309 37.887c0 4.222-3.424 7.641-7.65 7.641-4.234 0-7.658-3.42-7.658-7.641-.004-12.436-4.578-23.742-12.169-32.382l-.012-.008c-9.028-10.292-22.2-16.738-36.946-16.747-10.247.008-19.696 3.109-27.571 8.452-7.862 5.342-14.108 12.91-17.81 21.786a49.354 49.354 0 0 0-3.751 18.899 7.641 7.641 0 0 1-7.65 7.641c-4.226 0-7.653-3.42-7.653-7.641 0-6.21.904-12.223 2.54-17.917a48.9 48.9 0 0 0-18.408-3.617c-3.628 0-7.318.417-11.012 1.26-10.893 2.504-20.036 8.394-26.687 16.338a49.224 49.224 0 0 0-10.051 19.872c15.827.295 31.633 6.398 43.819 18.334a7.645 7.645 0 0 1 .114 10.815c-2.953 3.018-7.8 3.068-10.82.122-9.576-9.367-21.95-14.022-34.369-14.038-2.225 0-4.443.164-6.644.45l-.028.008h-.02c-10.428 1.424-20.453 6.169-28.422 14.284-9.372 9.58-14.015 21.926-14.018 34.353 0 7.126 1.542 14.26 4.618 20.838a49.118 49.118 0 0 0 10.132 14.284l.008.008a48.95 48.95 0 0 0 16.657 10.75c3.939 1.513 5.898 5.948 4.372 9.891-1.526 3.943-5.956 5.907-9.895 4.377a64.163 64.163 0 0 1-21.86-14.096 65.839 65.839 0 0 1-7.572-8.893C3.13 250.465 0 260.373 0 270.452c.004 7.813 1.866 15.708 5.817 23.112 4.442 8.296 10.872 14.759 18.424 19.185 5.984 3.51 12.664 5.694 19.541 6.463l-.013-.442c0-4.05.377-8.026 1.088-11.871.769-4.156 4.762-6.897 8.914-6.137 4.16.762 6.905 4.77 6.14 8.926a49.604 49.604 0 0 0-.712 12.615c.09 1.252.221 2.446.41 3.584l.008.057.008.057c3.502 24.028 24.245 41.954 48.547 41.954 1.162 0 2.34-.05 3.523-.132h.012c10.775-.777 20.449-4.941 28.107-11.404a49.526 49.526 0 0 0 12.832-16.666 7.652 7.652 0 0 1 13.838 6.538c-3.261 6.897-7.723 13.114-13.11 18.432 3.01 9.229 8.659 17.189 16.023 23.088 8.463 6.766 19.106 10.742 30.593 10.742 1.162 0 2.331-.033 3.526-.123h.012a48.982 48.982 0 0 0 20.007-5.874c-.941-4.41-1.461-8.918-1.461-13.466 0-9.392 2.074-18.948 6.419-27.948 1.832-3.82 6.41-5.408 10.214-3.574 3.804 1.832 5.408 6.405 3.571 10.21-3.33 6.922-4.901 14.161-4.901 21.312 0 5.015.778 9.988 2.27 14.734l.004.008c3.919 12.501 12.779 23.398 25.533 29.542 6.893 3.329 14.133 4.9 21.288 4.9a49.371 49.371 0 0 0 31.215-11.167l.028-.016a49.101 49.101 0 0 0 13.037-16.608l.008-.025a48.937 48.937 0 0 0 4.851-19.218c.188-4.221 3.763-7.494 7.993-7.314a7.67 7.67 0 0 1 7.305 7.986 64.36 64.36 0 0 1-6.373 25.214l.008-.008a64.35 64.35 0 0 1-12.166 17.27c9.024 12.975 24.037 21.124 40.268 21.116a50.37 50.37 0 0 0 9.171-.859c11.806-2.234 21.77-8.468 28.855-17.083 7.078-8.614 11.192-19.562 11.192-31.122 0-.36-.008-.711-.017-1.047v-.048a46.89 46.89 0 0 0-.843-8.067c-1.219-6.504-3.705-12.403-7.1-17.639-4.942-4.36-10.456-10.038-15.634-16.37-5.506-6.749-10.611-14.12-14.031-21.557-2.25-4.982-3.854-9.998-3.886-15.307 0-2.348.352-4.778 1.211-7.126a17.86 17.86 0 0 1 4.14-6.455v.008a7.635 7.635 0 0 1 10.816 0c2.986 2.978 2.986 7.838 0 10.815-.295.311-.442.54-.589.925-.147.393-.27.974-.27 1.832-.033 1.922.762 5.196 2.496 8.934 1.71 3.739 4.254 7.936 7.241 12.084 5.931 8.312 13.629 16.477 19.422 21.435l.786.679.581.85a64.411 64.411 0 0 1 9.866 24.061v.008c.238 1.268.393 2.527.556 3.804.753.033 1.522.098 2.291.098 9.711-.008 19.471-2.879 28.062-8.918a48.826 48.826 0 0 0 15.552-17.9 49.295 49.295 0 0 0 5.351-22.35 48.77 48.77 0 0 0-4.892-21.263 66.381 66.381 0 0 1-9.18 2.282c-4.164.721-8.124-2.078-8.852-6.25a7.67 7.67 0 0 1 6.258-8.835c13.557-2.34 25.951-10.226 33.642-22.899A48.807 48.807 0 0 0 512 256.772c0-12.745-4.966-25.246-14.121-34.508zm-350.691-58.413c7.322-8.64 17.033-14.784 27.464-18.801 10.452-4.017 21.68-5.956 32.439-5.956 10.476.008 20.522 1.816 29.076 5.743 3.833 1.768 5.51 6.316 3.742 10.154a7.658 7.658 0 0 1-10.16 3.746c-5.919-2.757-13.99-4.352-22.658-4.344-8.901 0-18.416 1.652-26.937 4.941-8.537 3.272-16.023 8.173-21.287 14.399v.008a7.657 7.657 0 0 1-10.783.892c-3.224-2.732-3.628-7.559-.896-10.782zm174.198 180.952c-8.893.016-16.971-.99-24.347-2.7.204 2.103.343 4.434.343 6.93 0 4.998-.532 10.7-2.114 16.69-1.579 5.98-4.226 12.263-8.403 18.301a7.653 7.653 0 1 1-12.582-8.721c3.068-4.434 4.999-9.008 6.188-13.49 1.186-4.484 1.608-8.868 1.608-12.779.004-5.392-.806-9.867-1.391-12.387a77.668 77.668 0 0 1-10.414-5.702c-12.808-8.312-21.382-19.258-26.777-29.69-3.604-6.962-5.822-13.72-6.987-19.578-.671-3.338-1.002-6.39-1.002-9.146a7.653 7.653 0 0 1 7.657-7.657 7.652 7.652 0 0 1 7.65 7.657c-.013 2.242.466 5.956 1.681 10.178 1.206 4.246 3.133 9.081 5.919 13.94 5.584 9.736 14.46 19.504 28.139 25.845 9.142 4.238 20.518 6.995 34.832 7.003 4.226 0 7.654 3.428 7.654 7.649a7.656 7.656 0 0 1-7.654 7.657zm53.882-55.886c-1.579 3.919-6.03 5.833-9.957 4.254-3.91-1.562-5.816-5.988-4.271-9.916v-.008l.05-.114c.048-.132.122-.36.228-.671.205-.606.491-1.571.778-2.766.589-2.414 1.17-5.825 1.17-9.572l-.025-.548c-10.48 3.567-20.248 5.195-29.235 5.195-13.581.017-25.321-3.706-34.885-9.359-9.58-5.653-17.025-13.139-22.588-20.723-6.324-8.631-14.628-16.355-24.13-21.836-9.515-5.482-20.167-8.737-31.482-8.745-9.932.024-20.457 2.495-31.473 8.525-10.435 5.743-17.172 13.384-21.513 21.762-4.315 8.37-6.119 17.549-6.115 25.886-.021 7.731 1.6 14.718 3.726 19.144a7.665 7.665 0 0 1-3.645 10.202c-3.816 1.8-8.382.18-10.194-3.648-3.313-7.06-5.171-15.929-5.191-25.697.004-9.695 1.935-20.281 6.644-30.418-9.487 2.152-18.302 3.109-26.348 3.1-4.34.008-8.426-.294-12.321-.769a7.51 7.51 0 0 1-1.448 2.856l-.004.007h-.008l-.09.115c-.082.115-.225.295-.413.532a84.764 84.764 0 0 0-1.628 2.242 104.003 104.003 0 0 0-5.416 8.59c-4.189 7.364-8.946 17.729-11.274 29.387a7.641 7.641 0 0 1-9.003 6.005 7.647 7.647 0 0 1-6.001-9.008c2.774-13.843 8.222-25.582 12.963-33.936a120.06 120.06 0 0 1 6.39-10.096c-6.242-1.873-11.646-4.164-16.051-6.496-10.072-5.351-15.336-10.726-15.762-11.159a7.65 7.65 0 0 1 10.987-10.643l.008-.008.074.074.471.45c.45.409 1.182 1.039 2.18 1.825 1.996 1.578 5.081 3.746 9.204 5.923 8.258 4.369 20.604 8.795 37.142 8.812 11.61 0 25.33-2.218 41.25-8.337a69.33 69.33 0 0 1 14.03-10.112c13.086-7.191 26.295-10.415 38.828-10.406 14.293 0 27.612 4.148 39.127 10.791 11.527 6.659 21.308 15.79 28.826 26.032 4.561 6.218 10.578 12.214 18.015 16.592 7.457 4.377 16.305 7.232 27.116 7.241 7.392 0 15.753-1.366 25.186-4.68-2.282-3.714-5.727-7.29-11.38-10.513a7.657 7.657 0 0 1 7.528-13.335c9.056 5.105 15.119 11.862 18.628 18.915 3.543 7.052 4.606 14.194 4.606 20.273-.032 10.599-3.108 18.241-3.304 18.789zm-2.864-93.765c-17.884.008-33.527-4.819-46.183-12.125a98.012 98.012 0 0 1-7.249 8.975c-6.921 7.592-17.106 16.518-30.724 21.41-3.98 1.424-8.357-.654-9.781-4.638a7.65 7.65 0 0 1 4.634-9.777c10.035-3.559 18.436-10.611 24.27-16.984a81.45 81.45 0 0 0 6.316-7.772c-7.567-6.381-13.52-13.646-17.594-21.107-3.895-7.183-6.144-14.563-6.165-21.762 0-4.221 3.424-7.641 7.649-7.641 4.226 0 7.654 3.42 7.654 7.641-.02 3.87 1.338 9.032 4.299 14.44 2.949 5.424 7.428 11.085 13.262 16.141 11.682 10.128 28.577 17.892 49.611 17.892 4.222 0 7.65 3.428 7.65 7.657a7.647 7.647 0 0 1-7.649 7.65zm60.328 107.763c-2.699 3.256-7.526 3.714-10.783 1.023a7.657 7.657 0 0 1-1.022-10.775c8.328-10.144 11.42-20.338 11.446-30.115.016-8.893-2.692-17.491-6.963-24.715-4.246-7.241-10.07-13.016-15.682-16.232-3.739-2.168-7.298-3.158-10.113-3.15a7.65 7.65 0 1 1 0-15.299c4.664 0 9.212 1.138 13.532 3.043 4.311 1.898 8.402 4.574 12.198 7.846 7.568 6.545 14.006 15.47 18.039 25.918 2.692 6.963 4.304 14.604 4.304 22.588.024 13.14-4.459 27.195-14.956 39.868z"
                style={{
                    fill: "#fff",
                }}
            />
        </svg>
        ),
        description: "With real AI, your network becomes easier to operate. You can quickly configure, troubleshoot, and protect your network while minimizing errors."
    },
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

export default function Home() {
    return (
        <section className="w-full flex-center flex-col mb-5">
            <br />
            <br />
            <br />
            <div className="flex flex-col mb-5 items-center justify-center">
                <div>
                    <p className="mt-5 text-5xl text-center font-sans leading-[1.15] text-[#f5f5f5] sm:text-6xl">
                        Our Services
                    </p>
                </div>
                <div className="text-[#7b7b7b] mt-5 text-lg text-center sm:text-xl max-w-2xl">
                    <p>
                        We are doing our very best to provide you with the best possible service.
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
        </section>
    )
}
