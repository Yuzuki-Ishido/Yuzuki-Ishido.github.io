import pic from '../assets/images/pic.jpg';

export default function Profile() {
    return (
        <section
            id="Profile"
            className="mx-[10%] mt-80 lg:mx-[20%] xl:mx-[25%]"
        >
            <div className="mb-4 flex flex-col text-3xl text-section-header sm:text-5xl xl:text-6xl">
                Here's a bit about me.
            </div>
            <div className="grid flex-row justify-between text-left sm:grid-cols-2 sm:gap-0 sm:p-2 md:items-center xl:grid-cols-5">
                <div className="sm:text-md mb-4 justify-self-center text-slate-300 sm:col-span-1 lg:text-lg xl:col-span-3">
                    I'm Ian, and I'd like to say I'm someone who gets very
                    interested or fixated on learning or improving any skills. I
                    had a slight interest in programming since high school;
                    however, only really started to learn once I enterred
                    college as a computer science major. <br />
                    During my four years in college, I started programming with
                    python, and very quickly started to learn other languages
                    from other classes I took, such as C++, assembly, and even
                    haskell to some extent, but I would say the language I have
                    the most experience using would be C. <br />
                    I've always loved messing around with numbers and data,
                    eventually using spreadsheet application such as Excel or
                    Google Sheets to create what my friends would call "crazy
                    and ridiculous" equations and spreadsheets in order to
                    calculate potential damage values in various video games.
                    This enjoyment I find from using spreadsheets and databases
                    is the primary reason I learned how to use SQL, in hopes
                    that I could figure out how to streamline this hobby of mine
                    to be as automated as possible. <br />
                </div>
                <img
                    src={pic}
                    className="lg:max-w-84 flex w-[90%] justify-self-center rounded-lg sm:col-span-1 xl:col-span-2"
                />
            </div>
        </section>
    );
}
