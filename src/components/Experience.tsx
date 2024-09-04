export default function Experience() {
    return (
        <section
            id="Experience"
            className="mb:[120px] md:mb[20%] mx-[5%] mt-[160px] flex flex-col sm:mt-[240px] md:mx-[20%] lg:mx-[15%] xl:mx-[15%]"
        >
            <div className="mb-4 text-3xl font-bold text-section-header">
                Some recent work or leadership experience.
            </div>
            <div className="grid flex-row justify-between gap-2 p-1 lg:grid-cols-2">
                <div className="col-span-1 flex flex-col">
                    <div className="text-xl font-semibold text-slate-200">
                        UCSC JSA
                    </div>
                    <div className="text-sm text-gray-400">
                        Sepember 2022 through June 2024
                    </div>
                    <div className="mt-2 text-slate-300">
                        During the academic year of 2022-2023, I was the
                        vice-president and treasurer of the Japanese Student
                        Association at UCSC. As vice-president, I was the main
                        person in charge of organizing and monitoring logistics
                        in regards to on campus events that would reach as many
                        as around 150 attendees, along with facilitating
                        meetings among officers to make progress on planning and
                        making sure everyone was on the right page. While as the
                        treasurer, I was the person in charge of managing the
                        club's financial ledger through spreadsheets, advising
                        hosting fundraisers or potential profit or loss of
                        available funds from events hosted.
                        <br /> <br /> For the academic year of 2023-2024, I took
                        a less active role as the senior advisor, where I would
                        periodically give feedback and ideas for the club's
                        cabinet, as well as check in on each individual staff
                        member to see what they think of their progress for the
                        year and resolve any possible issues.
                    </div>
                </div>
                <div className="col-span-1 flex"></div>
            </div>
        </section>
    );
}
