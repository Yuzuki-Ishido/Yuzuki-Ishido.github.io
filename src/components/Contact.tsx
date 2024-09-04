import React, { useState, useRef } from 'react';

export default function Contact() {
    const [isClick, setClick] = useState(false);

    const handleClick = () => {
        setClick(!isClick);
    };

    return (
        <section
            id="Contact"
            className="relative mt-[10%] flex h-[65vh] justify-center md:h-screen md:items-center"
        >
            <div className="flex flex-col text-center">
                <div className="mx-[5%] my-2 flex text-4xl font-bold text-section-header lg:text-6xl xl:mx-[10%]">
                    Thanks for taking the time to scroll through.
                </div>
                <div className="mx-[6%] my-4 text-2xl font-semibold text-white xl:mx-[16.5%]">
                    I'm currently looking for any new career opportunities. If
                    you have any questions or want to reach out to me, feel free
                    to contact me below.
                </div>
                <a
                    onClick={handleClick}
                    href="mailto:iankongm@gmail.com"
                    className="my-4 flex w-max cursor-pointer self-center rounded-xl bg-slate-900 p-4 font-semibold text-white transition-all hover:scale-105 hover:bg-slate-700"
                >
                    Email Me
                </a>
            </div>
        </section>
    );
}
