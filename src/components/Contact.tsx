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

/* import emailjs from '@emailjs/browser';
import { IoIosCloseCircleOutline } from 'react-icons/io';

const form = useRef();

const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
        .sendForm(
            'service_x49bi3m',
            'template_rvs41dc',
            e.currentTarget,
            'OFYSWJ9P29GRsRz75',
        )
        .then(
            () => {
                console.log('success');
            },
            (error) => {
                console.log('error', error.text);
            },
        );
    e.currentTarget.reset();
};
<div
                className={`absolute flex h-[70%] w-[80%] rounded-xl bg-slate-300 transition-all ease-in-out ${isClick ? 'z-20 opacity-100' : '-z-20 opacity-0'}`}
            >
                <form
                    onSubmit={sendEmail}
                    className="absolute top-5 flex flex-col"
                >
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                </form>
                <button
                    className="absolute right-4 top-4 text-gray-600"
                    onClick={handleClick}
                >
                    <IoIosCloseCircleOutline size="30" />
                </button>
            </div> */
