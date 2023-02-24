export default function Homepage() {
    return (
        <section>
            <div className="relative">
                <div className="mx-auto max-w-3xl pt-10 xs:pt-32 pb-28 px-10 text-brown-black text-left space-y-8 xxs:space-y-11">
                    <p className="text-md xxs:text-xl tracking-widest">
                        Hi, my name is
                    </p>
                    <h1 className="font-bold tracking-widest text-xl xxs:text-4xl sm:text-7xl">
                        MARIA ANTICI.
                    </h1>
                    <p className="text-md xxs:text-xl tracking-widest leading-7 italic lg:pr-20">
                        I'm absolutely in love with crafting beautiful and user-friendly interfaces. I'm most confident in my skills with HTML, CSS, Tailwind CSS and JavaScript. Currently expanding my skills in React and Next.js.
                    </p>
                    <div className="mt-8 flex gap-x-4 sm:justify-center sm:pt-10">
                        <a
                            href="/documents/Resume-AnticiMaria.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block rounded-3xl px-4 py-3 text-base font-semibold leading-7 ring-1 ring-brown-black/10 hover:ring-brown-black/30 tracking-widest text-sm xxs:text-xl"
                        >
                            Check out my resume!
                        </a>
                    </div>
                </div>
                <div className='absolute top-52 right-32 xl:left-2/3 2xl:left-2/3 hidden lg:block 2xl:hidden flowers'>
                    <img src="/images/flowers.webp" alt='minimalist flowers'></img>
                </div>
            </div>
        </section>
    );
}