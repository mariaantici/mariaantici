import H2 from "@/common/components/H2";
import Section from "../common/components/Section";

export default function ContactSection() {
    return (
        <Section className="max-w-7xl lg:text-left space-y-10 sm:pb-40 lg:pb-30" id='contact-section'>
            <H2>What's next?</H2>
            <div className="grid sm:grid-cols-2 items-center">
                <div className="block rounded-3xl shadow-3xl px-4 py-4 sm:py-8 sm:px-12 sm:-mr-14 -mb-2 sm:-mb-0 contact">
                    <h3 className="text-lg xxs:text-xl sm:text-2xl font-bold tracking-wide mb-2">See if I'm the right fit</h3>
                    <p className="text-md sm:text-lg tracking-wide italic mb-6 text-brown-black/60">If you're looking for a bright-eyed and bushy-tailed junior dev with a positive attitude and a penchant for puns, look no further. I recently taught myself how to code and I'm now on the hunt for a great team to join. Let's build something awesome together!</p>
                    <a className="inline-block rounded-3xl px-3 py-2 text-base font-semibold leading-7 ring-1 ring-brown-black/10 hover:ring-brown-black/30 tracking-widest text-sm xxs:text-lg"
                        href='mailto: maria.antici99@mail.com'
                    >Email me :)</a>
                </div>
                <div className="md:mb-12 lg:mb-0 contactPic sm:ml-0">
                    <img
                        src="/images/me.jpeg"
                        className="w-full sm:mt-0 rounded-3xl shadow-3xl"
                        alt="Pic of Maria Antici"
                    />
                </div>
            </div>
        </Section >
    )
}