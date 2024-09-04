import React, { FC } from 'react';
import {
    PythonOriginal,
    COriginal,
    CplusplusOriginal,
    GitOriginal,
    ReactOriginal,
    TailwindcssOriginal,
    MysqlOriginal,
    TypescriptOriginal,
    JavascriptOriginal,
    FirebaseOriginal,
    Html5Original,
} from 'devicons-react';
import excel from '.././assets/logos/excel.png';

interface LogoBoxProps {
    logo: React.ReactNode;
    text: string;
}
const LogoBox: FC<LogoBoxProps> = ({ logo, text }) => {
    return (
        <div className="relative -z-10 col-span-1 m-1 flex w-full flex-row items-center rounded-lg bg-gray-800 px-4 py-2">
            <div className="static left-[25%] md:left-[20%] lg:left-[25%]">
                {logo}
            </div>
            <div className="absolute left-[45%] text-left text-lg text-white sm:left-[4s0%] sm:font-semibold md:left-[45%] lg:left-[50%]">
                {text}
            </div>
        </div>
    );
};

export default function Skillset() {
    return (
        <section
            id="Skillset"
            className="mx-[5%] mb-[120px] mt-80 flex flex-col md:mb-[20%] lg:mx-[15%]"
        >
            <div className="text-2xl font-bold text-section-header">
                A list of languages and technologies I've used and have some
                experience with.
            </div>
            <div className="grid grid-cols-2 gap-x-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
                <LogoBox logo={<PythonOriginal size="50" />} text="Python" />
                <LogoBox logo={<COriginal size="50" />} text="C" />
                <LogoBox logo={<CplusplusOriginal size="50" />} text="C++" />
                <LogoBox logo={<GitOriginal size="50" />} text="Git" />
                <LogoBox
                    logo={<JavascriptOriginal size="50" />}
                    text="Javascript"
                />
                <LogoBox
                    logo={<TypescriptOriginal size="50" />}
                    text="TypeScript"
                />
                <LogoBox logo={<Html5Original size="50" />} text="HTML" />
                <LogoBox logo={<ReactOriginal size="50" />} text="React" />
                <LogoBox
                    logo={<TailwindcssOriginal size="50" />}
                    text="Tailwind CSS"
                />
                <LogoBox logo={<MysqlOriginal size="50" />} text="MySQL" />
                <LogoBox
                    logo={<FirebaseOriginal size="50" />}
                    text="Firebase"
                />
                <LogoBox
                    logo={<img src={excel} alt="" className="w-14" />}
                    text="Excel"
                />
            </div>
        </section>
    );
}
