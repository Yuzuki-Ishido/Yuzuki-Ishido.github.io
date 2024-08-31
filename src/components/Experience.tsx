export default function Experience() {
    return (
        <section
            id="Experience"
            className="mb:[120px] md:mb[20%] mx-[5%] mt-[160px] flex flex-col sm:mt-[240px] md:mx-[20%] lg:mx-[15%] xl:mx-[20%]"
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
                        holy shit i did too much for this club <br /> Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Enim
                        praesentium et dolor qui, ducimus laboriosam velit quae,
                        autem cupiditate doloribus voluptatem iure nesciunt
                        totam magnam nihil aperiam facilis nisi eos! <br />{' '}
                        <br /> Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. Vero mollitia perferendis placeat
                        earum. Nisi rerum autem, enim delectus consequatur
                        molestiae harum quia sit minus repellat. Quo hic ad
                        doloremque itaque!
                    </div>
                </div>
                <div className="col-span-1 flex"></div>
            </div>
        </section>
    );
}
