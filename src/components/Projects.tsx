export default function Projects() {
    return (
        <section
            id="Projects"
            className="mx-[5%] mb-[35vh] mt-[360px] md:mb-0 md:mt-[25%] lg:mx-[10%]"
        >
            <div className="mb-2 text-3xl text-section-header">
                Completed Public Projects
            </div>
            <div className="mb-1 grid grid-cols-1 flex-row gap-2 sm:grid-cols-2 lg:grid-cols-3">
                <div className="relative -z-20 col-span-1 flex w-full flex-col gap-2 rounded-lg bg-slate-800 bg-opacity-[35%] px-4 py-2">
                    <div className="mt-2 text-2xl font-semibold text-white">
                        Portfolio
                    </div>
                    <div className="text-slate-200">
                        This website that you are currently on! I took this
                        project as a way to teach myself more about front-end
                        development, mainly as a skill to have under my belt.
                        Through this project I learned how to use Typescript
                        (and Javascript to an extent), HTML, as well as using
                        Tailwind CSS. It should be responsive so that it can be
                        viewed nicely on all devices.
                    </div>
                    <a
                        className="bottom-1 -z-10 my-2 flex w-32 justify-center rounded-xl bg-gray-700 p-4 font-semibold text-white transition-all hover:scale-105"
                        href="https://github.com/Yuzuki-Ishido/Yuzuki-Ishido.github.io"
                    >
                        Learn more
                    </a>
                </div>
            </div>
        </section>
    );
}
