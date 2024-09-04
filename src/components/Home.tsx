export default function Home() {
    return (
        <section
            id="Home"
            className="align-items-center grid h-screen justify-items-center pt-16"
        >
            <div className="mx-[10%] my-[160px] flex flex-col md:mx-[17.5%] md:mb-[22.5%] md:mt-[17%]">
                <div className="text-4xl font-thin text-section-header">
                    Hi, my name is
                </div>
                <div className="text-6xl font-bold text-[#c284ff]">
                    Ian Kong.
                </div>
                <div className="mt-4 text-2xl text-slate-200">
                    I'm a recent graduate from UCSC centered in the Bay Area
                    with a growing interest in data management and other
                    back-end fields.
                </div>
            </div>
        </section>
    );
}
