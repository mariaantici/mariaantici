import picture from '../me.jpeg'

export default function ContactSection() {
    return (
        <section className="lg:mx-20 2xl:mx-40 sm:mt-20" id='contact-section'>
            <div className="py-20 px-10 sm:py-32 lg:py-20 sides:px-24 text-brown-black lg:text-left">
                <div className="container mx-auto xl:px-32 space-y-10" >
                    <p className="sm:text-center mt-2 text-3xl font-bold sm:text-4xl tracking-widest">What's next?</p>
                    <div className="grid sm:grid-cols-2 items-center">
                        <div className="block rounded-3xl shadow-3xl px-4 py-4 sm:py-8 sm:px-12 sm:-mr-14 -mb-2 sm:-mb-0 contact">
                            <p className="text-lg xxs:text-xl sm:text-2xl font-bold tracking-wide mb-2">See if I'm the right fit <br /> for your team</p>
                            <p className="text-md sm:text-lg tracking-wide italic mb-6 text-brown-black/60">Thanks for stopping by! I’m currently looking to join a new team of creative designers and developers, so ...</p>
                            <a className="inline-block rounded-3xl px-3 py-2 text-base font-semibold leading-7 ring-1 ring-brown-black/10 hover:ring-brown-black/30 tracking-widest text-sm xxs:text-lg"
                                href='mailto: maria.antici99@mail.com'
                            >Email me :)</a>
                        </div>
                        <div className="md:mb-12 lg:mb-0 contactPic sm:ml-0">
                            <img
                                src={picture}
                                className="w-full sm:mt-0 rounded-3xl shadow-3xl"
                                alt="Pic of Maria Antici"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}