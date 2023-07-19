import blogs1 from "../../public/blogs1.png"
import blogs2 from "../../public/blogs2.jpg"
import blogs3 from "../../public/blogs3.png"
import Image from "next/image"
import Link from "next/link"


const articleData = [
    {
        imageSrc: blogs1,
        category: 'Web Design',
        title: 'Key Principles for Creating an Excellent Website Design',
        description:
            'A great website should engage the visitor and effectively convey the message that it is trying to convey. A good website design is influenced by ...',
    },
    {
        imageSrc: blogs2,
        category: 'E-commerce',
        title: 'The Importance of Data Analytics in E-Commerce',
        description:
            'Imagine if you could predict what your customers are likely to purchase and the price range at which you should sell it in order to ...',
    },
    {
        imageSrc: blogs3,
        category: 'CMS Website Development',
        title: 'Maximize Your Website`s Potential Using a CMS',
        description:
            'In the current digital age, a website has become a must for almost all types of businesses. Having a website is one of the crucial &hellip;',
    },
];


export const Blogs = () => {
    return (
        <>
            <div className="flex mb-5 items-center justify-center">
                <div>
                    <p className="mt-5 text-5xl text-center font-sans leading-[1.15] text-[#f5f5f5] sm:text-6xl">
                        Blogs
                    </p>
                </div>
            </div>
            <div className="container my-12 mx-auto px-4 md:px-12">
                <div className="flex flex-wrap px-2">
                    {articleData.map((article, index) => (
                        <div
                            key={index}
                            className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 py-4"
                        >
                            <article className=" rounded-lg shadow-lg bg-[#111111]/30">
                                <a href="#" className="image-wrapper block">
                                    <Image
                                        alt="Placeholder"
                                        className="block rounded-lg h-auto w-full transition-transform duration-300 transform 
                                        hover:translate-y-[-5px] hover:elevated-shadow"
                                        src={article.imageSrc}
                                    />
                                </a>
                                <header className="flex flex-col items-start justify-between leading-tight p-2 md:p-4">
                                    <h1 className="text-lg">
                                        <a href="#" className="group text-[#fcb040] font-['Calibri'] text-bold transition duration-300">
                                            {article.category}
                                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#fcb040]"></span>
                                        </a>
                                    </h1>
                                    <h1 className="text-lg">
                                        <a className="text-[#7b7b7b]" href="#">
                                            {article.title}
                                        </a>
                                    </h1>
                                </header>
                                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                    <p className="ml-2 text-sm text-white">{article.description}</p>
                                </footer>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex mb-5 items-center justify-center">
                <Link href="@/services">
                    <button className="relative border-2 border-[#fcb040] bg-transparent py-2.5 px-5 font-medium uppercase 
                    text-[#fcb040] transition-all before:absolute before:left-0 before:top-0 before:-z-10 before:h-full 
                    before:w-full before:origin-top-left before:scale-x-0 before:bg-[#fcb040] before:transition-transform 
                    before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 
                    rounded-lg duration-500 transform hover:-translate-y-1">
                        See Full Blog &rarr;
                    </button>
                </Link>
            </div>

        </>
    )
}
