export default function Homepage() {
    return (
        <main>
            <div className="relative">
                <div className="mx-auto max-w-3xl pt-32 pb-48 px-10 text-brown-black text-left space-y-11">
                        <p className="text-xl tracking-widest">
                            Hi, my name is
                        </p>
                        <h1 className="font-bold tracking-widest text-4xl sm:text-7xl">
                            MARIA ANTICI.
                        </h1>
                        <p className="text-xl tracking-widest leading-7 italic">
                            I’m passionate about software development and I’m skilled in HTML, CSS, JavaScript, and React. I’m now looking for a junior dev position as I recently learned how to code by myself.
                        </p>
                        <div className="mt-8 flex gap-x-4 sm:justify-center sm:pt-10">
                            <a
                                href="#resume"
                                className="inline-block rounded-3xl px-4 py-3 text-base font-semibold leading-7 ring-1 ring-brown-black/10 hover:ring-brown-black/30 tracking-widest"
                            >
                                Check out my resume!
                            </a>
                        </div>
                </div>
            </div>
        </main>
    );
}