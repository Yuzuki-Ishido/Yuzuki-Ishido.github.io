import { Link, animateScroll } from 'react-scroll';
import { useState } from 'react';
import { Spin as Hamburger } from 'hamburger-react';
import {
    VscAccount,
    VscTerminal,
    VscBriefcase,
    VscRepo,
    VscMail,
} from 'react-icons/vsc';

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!isOpen);
    };

    return (
        <div>
            <header className="fixed hidden h-screen w-24 flex-col items-center justify-between bg-[#060910] text-white md:flex">
                <Link
                    to="top"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={750}
                    className="mt-5 cursor-pointer rounded-md text-center transition-all hover:scale-110 hover:bg-slate-300 hover:font-bold hover:text-[#be7ffa] hover:underline"
                >
                    Logo
                </Link>
                <ul className="absolute top-[35%] flex flex-col items-center gap-y-5 text-base">
                    <li className="group flex flex-row">
                        <Link
                            to="Profile"
                            spy={true}
                            smooth={true}
                            offset={-175}
                            duration={750}
                            className="cursor-pointer transition-all hover:text-[#be7ffa]"
                        >
                            <VscAccount size={28} />
                        </Link>
                        <div className="invisible absolute left-20 flex -translate-x-3 flex-row rounded-md bg-slate-300 px-2 py-1 font-semibold text-purple-700 opacity-20 transition-all group-hover:visible group-hover:translate-x-0 group-hover:opacity-100">
                            Profile
                        </div>
                    </li>
                    <li className="group flex flex-row">
                        <Link
                            to="Skillset"
                            spy={true}
                            smooth={true}
                            offset={-250}
                            duration={750}
                            className="cursor-pointer transition-all group-hover:text-[#be7ffa]"
                        >
                            <VscTerminal size={28} />
                        </Link>
                        <div className="invisible absolute left-20 flex -translate-x-3 flex-row rounded-md bg-slate-300 px-2 py-1 font-semibold text-purple-700 opacity-20 transition-all group-hover:visible group-hover:translate-x-0 group-hover:opacity-100">
                            Skillset
                        </div>
                    </li>
                    <li className="group flex flex-row">
                        <Link
                            to="Experience"
                            spy={true}
                            smooth={true}
                            offset={-180}
                            duration={750}
                            className="cursor-pointer transition-all group-hover:text-[#be7ffa]"
                        >
                            <VscBriefcase size={28} />
                        </Link>
                        <div className="invisible absolute left-20 flex -translate-x-3 flex-row rounded-md bg-slate-300 px-2 py-1 font-semibold text-purple-700 opacity-20 transition-all group-hover:visible group-hover:translate-x-0 group-hover:opacity-100">
                            Experience
                        </div>
                    </li>
                    <li className="group flex flex-row">
                        <Link
                            to="Projects"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={750}
                            className="cursor-pointer transition-all group-hover:text-[#be7ffa]"
                        >
                            <VscRepo size={28} />
                        </Link>
                        <div className="invisible absolute left-20 flex -translate-x-3 flex-row rounded-md bg-slate-300 px-2 py-1 font-semibold text-purple-700 opacity-20 transition-all group-hover:visible group-hover:translate-x-0 group-hover:opacity-100">
                            Project
                        </div>
                    </li>
                    <li className="group flex flex-row">
                        <Link
                            to="Contact"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={750}
                            className="cursor-pointer transition-all group-hover:text-[#be7ffa]"
                        >
                            <VscMail size={28} />
                        </Link>
                        <div className="invisible absolute left-20 flex -translate-x-3 flex-row rounded-md bg-slate-300 px-2 py-1 font-semibold text-purple-700 opacity-20 transition-all group-hover:visible group-hover:translate-x-0 group-hover:opacity-100">
                            Contact
                        </div>
                    </li>
                </ul>
            </header>

            <ul className="border-1 fixed z-30 flex h-16 w-screen flex-row items-center justify-between bg-[#060910] text-white md:hidden">
                <li>
                    <Link
                        to="top"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={750}
                        onClick={() => setOpen(false)}
                        className="ml-7 cursor-pointer rounded-md transition-all hover:scale-110 hover:bg-slate-300 hover:font-bold hover:text-violet-700 hover:underline"
                    >
                        Logo
                    </Link>
                </li>

                <li className="absolute right-7">
                    <Hamburger toggled={isOpen} onToggle={handleClick} />
                </li>
            </ul>
            <div
                className={`fixed top-16 z-20 flex w-full cursor-pointer flex-col items-center transition-transform duration-700 ease-in-out md:hidden ${!isOpen ? '-translate-y-60 opacity-100' : 'opacity-100'}`}
            >
                <div className="absolute flex w-screen flex-col bg-[#020306] text-base text-white">
                    <ul className="flex flex-col items-center justify-between gap-y-5 p-4">
                        <li>
                            <Link
                                to="Profile"
                                spy={true}
                                smooth={true}
                                offset={-175}
                                duration={750}
                                onClick={handleClick}
                                className="cursor-pointer rounded-md text-center transition-all hover:scale-110 hover:bg-slate-300 hover:font-bold hover:text-violet-700 hover:underline"
                            >
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="Skillset"
                                spy={true}
                                smooth={true}
                                offset={-150}
                                duration={750}
                                onClick={handleClick}
                                className="cursor-pointer rounded-md text-center transition-all hover:scale-110 hover:bg-slate-300 hover:font-bold hover:text-violet-700 hover:underline"
                            >
                                Skillset
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="Experience"
                                spy={true}
                                smooth={true}
                                offset={-200}
                                duration={750}
                                onClick={handleClick}
                                className="cursor-pointer rounded-md text-center transition-all hover:scale-110 hover:bg-slate-300 hover:font-bold hover:text-violet-700 hover:underline"
                            >
                                Experience
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="Projects"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={750}
                                onClick={handleClick}
                                className="cursor-pointer rounded-md text-center transition-all hover:scale-110 hover:bg-slate-300 hover:font-bold hover:text-violet-700 hover:underline"
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="Contact"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={750}
                                onClick={handleClick}
                                className="cursor-pointer rounded-md text-center transition-all hover:scale-110 hover:bg-slate-300 hover:font-bold hover:text-violet-700 hover:underline"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
