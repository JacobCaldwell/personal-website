import React from 'react'
import { Section } from '../Section/Section'
import image from "../../content/images/me.jpg";
import Carousel from '../Carousel/Carousel';

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
                                    <button className="text-gray-700 px-8 py-2 rounded-full border-gray-500 border hover:bg-gray-100 focus:outline-none">View my resume</button>
                                </div>
                            </div>
                        </div>
                    </Section>,
                ]}>
            </Carousel>
        </div>
    )
}