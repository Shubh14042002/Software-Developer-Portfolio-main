import React from "react";

// Experiences Data
import experiences from "./data/data.js";

const Experiences = () => {
    return (
        <div className="max-w-6xl m-auto p-4 pt-8 sm:pt-20 px-2" id="experiences">
            <h1 className="text-3xl text-teal-500 font-bold sm:text-4xl sm:leading-10">
                <span className="text-5xl sm:text-6xl">#04;</span> 
                <br /> Years Of Coding Experience.
            </h1>
            <div className="py-6 pt-100 grid lg:grid-cols-3 sm:grid-cols-2 gap-6">
                {
                    experiences ?
                        experiences.map((experience, index) =>
                            <div 
                                key={index} 
                                className="bg-cyan-900 p-10 rounded hover:bg-cyan-800 relative ">
                                <b className="text-teal-500 text-sm bg-white py-1 px-2 rounded absolute left-3 -top-2 hover:bg-teal-500 hover:text-white">
                                    {experience.title}
                                </b>
                                <p>
                                <img src={experience.imageUrl} alt = {experience.title} style={{ width: '390px', height: '170px', objectFit: 'cover' }}  />
                                </p>
                            </div>
                        )
                    : null
                }
            </div>
        </div>
    );
}

export default Experiences;