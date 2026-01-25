"use client"
import Image from "next/image";
import ChartCovariateIcon from "./ui/chart-covariate-icon";
import ChartHistogramIcon from "./ui/chart-histogram-icon";
import ChartLineIcon from "./ui/chart-line-icon";
import { easeIn, easeInOut, easeOut, motion } from "motion/react";

export default function Performance() {
    return (
        <section className="w-full h-screen flex items-center justify-center relative">
            <div className="w-full h-full flex items-center justify-center origin-center max-lg:scale-50">

                <motion.p initial={{ filter: "blur(5px)" }} whileInView={{ filter: "blur(0px)" }} viewport={{ amount: 0.5, margin: "-20% 0px 0px 0px", once: true }} transition={{ duration: 2, ease: "easeInOut", delay: 0.4 }} className="text-center text-2xl leading-7 whitespace-nowrap">
                    <span className="text-primary">"</span>Numbers that fuel your growth. Sub-headline: We don't just <br />
                    provide data; we provide a competitive edge. See how <br />
                    IgniteSync transforms sales pipelines.<span className="text-primary">"</span>
                </motion.p>
                <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ amount: 0.5, margin: "-20% 0px 0px 0px", once: true }} transition={{ duration: 1, delay: 0.4, ease: easeInOut }} className="absolute lg:left-1/6 left-0 lg:bottom-1/5 bottom-0 flex flex-col p-5 gap-5 rounded-3xl backdrop-blur-[3px] [box-shadow:1px_1px_0px_rgba(255,255,255,0.25),-1px_-1px_1px_rgba(255,255,255,0.25)] text-2xl whitespace-nowrap">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ amount: 0.5, margin: "-20% 0px 0px 0px", once: true }} transition={{ duration: 2, ease: "easeInOut", delay: 1 }} className="flex flex-row gap-5 items-center">
                        <ChartLineIcon size={42} className="text-primary" />
                        <p>45% Increase in Win Rates</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ amount: 0.5, margin: "-20% 0px 0px 0px", once: true }} transition={{ duration: 2, ease: "easeInOut", delay: 1.2 }} className="flex flex-row gap-5 items-center ">
                        <ChartCovariateIcon size={42} className="text-primary" />
                        <p>12h Saved per Rep/Week</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ amount: 0.5, margin: "-20% 0px 0px 0px", once: true }} transition={{ duration: 2, ease: "easeInOut", delay: 1.4 }} className="flex flex-row gap-5 items-center">
                        <ChartHistogramIcon size={42} className="text-primary" />
                        <p>300+ Enterprise Integrations</p>
                    </motion.div>
                </motion.div>
                <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ amount: 0.5, margin: "-20% 0px 0px 0px", once: true }} transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }} className="absolute lg:right-1/6 right-0 lg:top-30 top-0 flex flex-col p-5 gap-5 rounded-3xl backdrop-blur-[3px] [box-shadow:1px_1px_0px_rgba(255,255,255,0.25),-1px_-1px_1px_rgba(255,255,255,0.25)] text-2xl">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ amount: 0.5, margin: "-20% 0px 0px 0px", once: true }} transition={{ duration: 2, ease: "easeInOut", delay: 1 }} className="flex flex-row items-center gap-2">
                        <div className="w-12 h-12 rounded-full overflow-hidden relative shrink-0">
                            <Image src="/avatar.png" fill alt="avatar" className="object-cover" />
                        </div>
                        <div className="flex flex-row w-full items-center justify-between">
                            <p className="">Marcus Thorne</p>
                            <p className="text-xl">CEO & Founder</p>
                        </div>
                    </motion.div>
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ amount: 0.5, margin: "-20% 0px 0px 0px", once: true }} transition={{ duration: 2, ease: "easeInOut", delay: 1.2 }} className="text-center text-gray text-xl leading-5 whitespace-nowrap">
                        <span className="text-primary">"</span>IgniteSync didn’t just automate our sales process; it <br /> gave our team the clarity to focus on what actually <br /> matters—building relationships. It’s the engine <br /> behind our most profitable year yet.<span className="text-primary">"</span>
                    </motion.p>
                </motion.div>
            </div >
            <div className="absolute right-12 rotate-45 -bottom-1/4 w-[300px] h-[70vh]  bg-primary blur-[120px] -z-1" />
            <div className="absolute left-1/6 -rotate-45 bottom-1/3 w-[250px] aspect-square rounded-full  bg-primary blur-[120px] -z-1" />

        </section >
    );
}