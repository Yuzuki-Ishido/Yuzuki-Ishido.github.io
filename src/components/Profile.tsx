import pic from '../assets/images/pic.jpg';

export default function Profile() {
    return (
        <section
            id="Profile"
            className="mx-[10%] mt-80 lg:mx-[20%] xl:mx-[25%]"
        >
            <div className="text-section-header mb-4 flex flex-col text-3xl sm:text-5xl xl:text-6xl">
                Here's a bit about me.
            </div>
            <div className="grid flex-row justify-between text-left sm:grid-cols-2 sm:gap-0 sm:p-2 md:items-center xl:grid-cols-5">
                <div className="sm:text-md mb-4 justify-self-center text-slate-300 sm:col-span-1 lg:text-lg xl:col-span-3 xl:text-xl">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Tempora sequi corrupti, blanditiis incidunt quibusdam rerum
                    nobis illum, quia voluptatum, nesciunt delectus! Ex aliquid
                    minus consectetur praesentium, architecto quos nesciunt
                    enim. <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Error vitae cumque sunt itaque consequatur obcaecati in
                    dolorum doloribus exercitationem dolor quos quidem tempore,
                    aliquid distinctio fugit iste aliquam fuga excepturi.
                </div>
                <img
                    src={pic}
                    className="lg:max-w-84 flex w-[90%] justify-self-center rounded-lg sm:col-span-1 xl:col-span-2"
                />
            </div>
        </section>
    );
}
