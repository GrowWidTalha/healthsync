import React from "react";
import Video from "next-video";

const IntroVideo = () => {
    return (
        <section className="mx-auto max-w-4xl mt-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Watch Our{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2663EA] to-[#4A90E2]">
                    Intro Video
                </span>
            </h2>
            <div className="aspect-w-16 aspect-h-9">
                <Video
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                    src={"/intro.mp4"}
                    // primaryColor="#fff"
                    // secondaryColor="#2663EA"
                    accentColor="#2663EA"
                />
            </div>
        </section>
    );
};

export default IntroVideo;
