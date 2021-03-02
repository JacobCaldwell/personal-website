import React from 'react'
import { Section } from '../Section/Section'
import image from "../../content/images/me.jpg";
import resume from "../../content/documents/Resume.pdf";
import Carousel from '../Carousel/Carousel';
import { IoMail, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import react from "../../content/images/react.png";
import firebase from "../../content/images/firebase.png";
import typescript from "../../content/images/ts.png";
import tailwind from "../../content/images/tailwind.png";

type Props = {
    children?: React.ReactNode
}

const skills = [
    {
        id: 1,
        name: "React",
        link: "https://reactjs.org",
        class: 'hover:text-blue-500 transition-color duration-150'
    },
    {
        id: 2,
        name: "Typescript",
        link: "http://typescriptlang.org",
        class: 'hover:text-yellow-500 transition-color duration-150'
    },
    {
        id: 3,
        name: "GCP",
        link: "https://cloud.google.com",
        class: 'hover:text-green-500 transition-color duration-150'
    },
    {
        id: 4,
        name: "MS Test",
        link: "https://reactjs.org",
        class: 'hover:text-purple-500 transition-color duration-150'
    }]

const socials = [
    {
        id: 1,
        name: 'Send me an email',
        href: 'mailto:jacobscaldwell1@gmail.com',
        icon: <IoMail className="mr-3" />
    },
    {
        id: 2,
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/caldwelljacob/',
        icon: <IoLogoLinkedin className="mr-3" />
    },
    {
        id: 3,
        name: 'GitHub',
        href: 'https://github.com/JacobCaldwell',
        icon: <IoLogoGithub className="mr-3" />

    }]

export const ContentSection: React.FC<Props> = ({ children }) => {

    return (
        <div className={`w-full flex flex-col scroll-children`}>
            <Carousel
                items={[
                    <Section>
                        <div className="flex flex-col justify-center w-full h-screen px-16 md:px-32">
                            <div className="flex flex-col md:flex-row items-center md:justify-center">
                                <img alt="me" className=" w-52 rounded-2xl md:mr-10" src={image}></img>
                                <div className="max-w-3xl mt-5 md:mt-0 text-center md:text-left">
                                    <h1 className="text-xl md:text-lg text-gray-500 uppercase font-normal">About Me</h1>
                                    <p className="text-1xl md:text-2xl font-medium my-6">{`Im a goal-oriented engineer with extensive experience in developing electrical, mechanical and software systems. Im proficient in an assortment of technologies, including `}
                                        {skills.map((element, idx) => {
                                            return idx === skills.length - 1 ? <span key={element.id}>and<a href={element.link} className={element.class}> {element.name}</a>.</span> : <a href={element.link} key={element.id} className={element.class}>{element.name}, </a>
                                        })}</p>
                                    <button className="text-gray-700 px-8 py-2 rounded-full border-gray-500 border hover:bg-gray-100 focus:outline-none">
                                        <a href={resume}>View my resume</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Section>,
                    <Section>
                        <div className="flex flex-col justify-center w-full h-screen px-16 md:px-32">
                            <div className="flex flex-col md:flex-row items-center md:justify-center">
                                <div className="max-w-3xl mt-5 md:mt-0 md:text-left flex flex-col md:flex-row">
                                    <div>
                                        <h1 className="text-xl md:text-lg text-gray-500 uppercase font-normal">Want to talk?</h1>
                                        <p className="text-1xl md:text-2xl font-medium my-3">Get in touch or check me out on social</p>
                                    </div>
                                    <hr className="w-0.5 h-auto mx-7 bg-gray-200" />
                                    <div className="flex flex-col">
                                        {socials.map((item) => (
                                            <button key={item.id} className="z-20 my-2 text-gray-700 px-6 overflow-hidden py-2 rounded-full border-gray-500 border hover:bg-gray-100 focus:outline-none">
                                                <a className="whitespace-nowrap flex flex-row items-center" href={item.href}>{item.icon}{item.name}</a>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Section>,
                ]}>
            </Carousel>
            <Section classes="w-auto py-32 flex flex-col justify-center items-center px-16 md:px-32">
                <h1 className="text-xl md:text-lg text-gray-500 uppercase font-normal">About this site</h1>
                <p className="text-1xl md:text-2xl font-medium my-3 text-center">This website was designed and code by myself using the following technologies:</p>
                <div className="flex flex-col md:flex-row items-center justify-between pt-2">
                    <img className="h-20 px-6 mt-8" src={react} alt="" />
                    <img className="h-20 px-6 mt-8" src={firebase} alt="" />
                    <img className="h-20 px-6 mt-8" src={typescript} alt="" />
                    <img className="h-20 px-6 mt-8" src={tailwind} alt="" />
                </div>

            </Section>
        </div>
    )
}