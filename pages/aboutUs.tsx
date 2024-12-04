import { defaultFilms } from '@/data/defaultFilms';
import React from "react";
import Header from "@/components/Header";
import Carousel from "@/components/Carusel";


const AboutUs = () => {
    return (
        <div className="aboutUs">
            <Header/>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="flex flex-row items-start gap-4 max-w-[1800px] w-full">
                    <div className="text-blue-500 text-2xl">
                        Hello everyone. This is a library of films that you can add to yourself.
                        You just need to fill out the form on the Home page and add the desired film to the list.
                    </div>
                    <div className="w-full">
                        <div className="container-fluid">
                            <Carousel images={defaultFilms}></Carousel>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default AboutUs;
