"use client"
import Image from "next/image";
import SimpleCheckedIcon from "./ui/simple-checked-icon";
import { motion } from "motion/react"

export default function Prices() {
    return (
        <section className="w-full h-screen flex flex-col items-center justify-center relative gap-10">
            <Image src="/grad9.png" alt="Prices" fill className="absolute inset-0 object-cover -z-1 scale-150" />
            <div className="flex flex-row items-center justify-center p-2 gap-2 rounded-2xl backdrop-blur-[3px] [box-shadow:1px_1px_0px_rgba(255,255,255,0.25),-1px_-1px_1px_rgba(255,255,255,0.25)] text-lg">
                <button className="bg-white text-black p-2 rounded-lg">Annual</button>
                <button>Monthly</button>
            </div>
            <div className="flex min-[1025]:flex-row flex-col gap-5 items-start justify-center">
                <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }} viewport={{ amount: 0.5, margin: "-20% 0px 0px 0px", once:true }} className="flex flex-col w-100 justify-center p-5 gap-5 rounded-2xl backdrop-blur-[3px] [box-shadow:1px_1px_0px_rgba(255,255,255,0.25),-1px_-1px_1px_rgba(255,255,255,0.25)]">
                    <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }} viewport={{ amount: 0.5, margin: "-20% 0px 0px 0px", once:true }} className="text-2xl text-center">Ignite</motion.h2>
                    <div className="flex flex-row items-center justify-center gap-2">
                        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut", delay: 0.6 }} viewport={{ amount: 0.5, margin: "-20% 0px 0px 0px", once:true }} className="text-5xl font-publica-sans-bold">$49</motion.h2>
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut", delay: 0.8 }} viewport={{ amount: 0.5, margin: "-20% 0px 0px 0px", once:true }} className="flex flex-col items-center justify-center leading-4 text-gray">
                            <p>/month (USD)</p>
                            <p>$588 billed yearly</p>
                        </motion.div>
                    </div>
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut", delay: 1 }} viewport={{ amount: 0.5, margin: "-20% 0px 0px 0px", once:true }} className="text-gray leading-4">Ideal for small teams or solo founders looking to <br /> spark their sales process.</motion.p>
                    <div className="h-px w-full bg-gray" />
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut", delay: 1.2 }} viewport={{ amount: 0.5, margin: "-20% 0px 0px 0px", once:true }} className="flex flex-col gap-2">
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut", delay: 1.4 }} viewport={{ amount: 0.5, margin: "-20% 0px 0px 0px", once:true }} className="flex flex-row gap-2 items-center">
                            <SimpleCheckedIcon className="text-primary" size={32} />
                            <p>Up to 3 Team Members</p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut", delay: 1.6 }} viewport={{ amount: 0.5, margin: "-20% 0px 0px 0px", once:true }} className="flex flex-row gap-2 items-center">
                            <SimpleCheckedIcon className="text-primary" size={32} />
                            <p className="flex flex-col leading-4">Basic CRM Integration <span className="text-gray">(Hubspot, Salesforce)</span></p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut", delay: 1.8 }} viewport={{ amount: 0.5, margin: "-20% 0px 0px 0px", once:true }} className="flex flex-row gap-2 items-center">
                            <SimpleCheckedIcon className="text-primary" size={32} />
                            <p className="flex flex-col leading-4">AI-Powered Lead Scoring <span className="text-gray">(Up to 500 leads/month)</span></p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut", delay: 2 }} viewport={{ amount: 0.5, margin: "-20% 0px 0px 0px", once:true }} className="flex flex-row gap-2 items-center">
                            <SimpleCheckedIcon className="text-primary" size={32} />
                            <p className="flex flex-col leading-4">Automated Email Sequences <span className="text-gray">(3 active workflows)</span></p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut", delay: 2.2 }} viewport={{ amount: 0.5, margin: "-20% 0px 0px 0px", once:true }} className="flex flex-row gap-2 items-center">
                            <SimpleCheckedIcon className="text-primary" size={32} />
                            <p className="flex flex-col leading-4">Standart Support <span className="text-gray">(Email only)</span></p>
                        </motion.div>
                    </motion.div>
                    <motion.button initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut", delay: 2.4 }} viewport={{ amount: 0.5, margin: "-20% 0px 0px 0px", once:true }} className="w-full p-3 rounded-lg bg-white text-black">Start Your Spark</motion.button>
                </motion.div>
                <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 1, ease: "easeInOut", delay: 0.6 }} viewport={{ amount: 0.5, margin: "-20% 0px 0px 0px", once:true }} className="flex flex-col w-100 justify-center p-5 gap-5 rounded-2xl backdrop-blur-[3px] border-primary border-2 relative z-1">
                    <div className=" absolute right-0 top-0 translate-x-1/7 -translate-y-1/2 bg-primary text-white p-2 rounded-lg text-xl">Most Popular</div>
                    <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut", delay: 0.6 }} viewport={{ amount: 0.5, margin: "-20% 0px 0px 0px", once:true }} className="text-2xl text-center flex flex-col items-center justify-center leading-4">Velocity <span className="text-gray text-base">(PRO)</span></motion.h2>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut", delay: 0.8 }} viewport={{ amount: 0.5, margin: "-20% 0px 0px 0px", once:true }} className="flex flex-row items-center justify-center gap-2">
                        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut", delay: 1 }} viewport={{ amount: 0.5, margin: "-20% 0px 0px 0px", once:true }} className="text-5xl font-publica-sans-bold">$149</motion.h2>
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut", delay: 1.2 }} viewport={{ amount: 0.5, margin: "-20% 0px 0px 0px", once:true }} className="flex flex-col items-center justify-center leading-4 text-gray">
                            <p>/month (USD)</p>
                            <p>$1788 billed yearly</p>
                        </motion.div>
                    </motion.div>
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut", delay: 1.4 }} viewport={{ amount: 0.5, margin: "-20% 0px 0px 0px", once:true }} className="text-gray leading-4">Perfect for scaling startups that need to <br /> accelerate their revenue engine.</motion.p>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut", delay: 1.6 }} viewport={{ amount: 0.5, margin: "-20% 0px 0px 0px", once:true }} className="h-px w-full bg-gray" />
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut", delay: 1.8 }} viewport={{ amount: 0.5, margin: "-20% 0px 0px 0px", once:true }} className="flex flex-col gap-2">
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut", delay: 2 }} viewport={{ amount: 0.5, margin: "-20% 0px 0px 0px", once:true }} className="flex flex-row gap-2 items-center">
                            <SimpleCheckedIcon className="text-primary" size={32} />
                            <p>Everything in Ignite, plus:</p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut", delay: 2.2 }} viewport={{ amount: 0.5, margin: "-20% 0px 0px 0px", once:true }} className="flex flex-row gap-2 items-center">
                            <SimpleCheckedIcon className="text-primary" size={32} />
                            <p className="flex flex-col leading-4">Up to 15 Team Members</p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut", delay: 2.4 }} viewport={{ amount: 0.5, margin: "-20% 0px 0px 0px", once:true }} className="flex flex-row gap-2 items-center">
                            <SimpleCheckedIcon className="text-primary" size={32} />
                            <p className="flex flex-col leading-4">Advanced Predictive <br /> Analytics & Forecasting</p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut", delay: 2.6 }} viewport={{ amount: 0.5, margin: "-20% 0px 0px 0px", once:true }} className="flex flex-row gap-2 items-center">
                            <SimpleCheckedIcon className="text-primary" size={32} />
                            <p className="flex flex-col leading-4">AI-Generated Personalized Outreach <span className="text-gray">(Unlimited)</span></p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut", delay: 2.8 }} viewport={{ amount: 0.5, margin: "-20% 0px 0px 0px", once:true }} className="flex flex-row gap-2 items-center">
                            <SimpleCheckedIcon className="text-primary" size={32} />
                            <p className="flex flex-col leading-4">Multi-channel Automation <span className="text-gray">(Email + LinkedIn)</span></p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut", delay: 3 }} viewport={{ amount: 0.5, margin: "-20% 0px 0px 0px", once:true }} className="flex flex-row gap-2 items-center">
                            <SimpleCheckedIcon className="text-primary" size={32} />
                            <p className="flex flex-col leading-4">Custom Sales Pipeline Management</p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut", delay: 3.2 }} viewport={{ amount: 0.5, margin: "-20% 0px 0px 0px", once:true }} className="flex flex-row gap-2 items-center">
                            <SimpleCheckedIcon className="text-primary" size={32} />
                            <p className="flex flex-col leading-4">Priority Support <span className="text-gray">(Chat & Email)</span></p>
                        </motion.div>
                    </motion.div>
                    <motion.button initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut", delay: 3.4 }} viewport={{ amount: 0.5, margin: "-20% 0px 0px 0px", once:true }} className="w-full p-3 rounded-lg bg-primary text-white">Accelerate Growth</motion.button>
                </motion.div>
                <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 1, ease: "easeInOut", delay: 0.8 }} viewport={{ amount: 0.5, margin: "-20% 0px 0px 0px", once:true }} className="flex flex-col w-100 justify-center p-5 gap-5 rounded-2xl backdrop-blur-[3px] [box-shadow:1px_1px_0px_rgba(255,255,255,0.25),-1px_-1px_1px_rgba(255,255,255,0.25)]">
                    <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut", delay: 0.8 }} viewport={{ amount: 0.5, margin: "-20% 0px 0px 0px", once:true }} className="text-2xl text-center flex flex-col items-center justify-center leading-4">Inferno <span className="text-gray text-base">(ENTERPRISE)</span></motion.h2>
                    <motion.div className="flex flex-row items-center justify-center gap-2">
                        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut", delay: 1 }} viewport={{ amount: 0.5, margin: "-20% 0px 0px 0px", once:true }} className="text-5xl font-publica-sans-bold flex flex-col"><span>CUSTOM</span><span>PRICING</span></motion.h2>
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut", delay: 1.2 }} viewport={{ amount: 0.5, margin: "-20% 0px 0px 0px", once:true }} className="flex flex-col items-center justify-center leading-4 text-gray">
                            <p>/month (USD)</p>
                            <p>$588 billed yearly</p>
                        </motion.div>
                    </motion.div>
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut", delay: 1.4 }} viewport={{ amount: 0.5, margin: "-20% 0px 0px 0px", once:true }} className="text-gray leading-4">Full-scale revenue intelligence for global organizations requiring total control.</motion.p>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut", delay: 1.6 }} viewport={{ amount: 0.5, margin: "-20% 0px 0px 0px", once:true }} className="h-px w-full bg-gray" />
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut", delay: 1.8 }} viewport={{ amount: 0.5, margin: "-20% 0px 0px 0px", once:true }} className="flex flex-col gap-2">
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut", delay: 2 }} viewport={{ amount: 0.5, margin: "-20% 0px 0px 0px", once:true }} className="flex flex-row gap-2 items-center">
                            <SimpleCheckedIcon className="text-primary" size={32} />
                            <p>Everything in Velocity, plus:</p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut", delay: 2.2 }} viewport={{ amount: 0.5, margin: "-20% 0px 0px 0px", once:true }} className="flex flex-row gap-2 items-center">
                            <SimpleCheckedIcon className="text-primary" size={32} />
                            <p className="flex flex-col leading-4">Unlimited Team Members</p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut", delay: 2.4 }} viewport={{ amount: 0.5, margin: "-20% 0px 0px 0px", once:true }} className="flex flex-row gap-2 items-center">
                            <SimpleCheckedIcon className="text-primary" size={32} />
                            <p className="flex flex-col leading-4">Custom AI Model Training <span className="text-gray">(Based on your historical data)</span></p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut", delay: 2.6 }} viewport={{ amount: 0.5, margin: "-20% 0px 0px 0px", once:true }} className="flex flex-row gap-2 items-center">
                            <SimpleCheckedIcon className="text-primary" size={32} />
                            <p className="flex flex-col leading-4">API Access & Custom Webhooks</p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut", delay: 2.8 }} viewport={{ amount: 0.5, margin: "-20% 0px 0px 0px", once:true }} className="flex flex-row gap-2 items-center">
                            <SimpleCheckedIcon className="text-primary" size={32} />
                            <p className="flex flex-col leading-4">White-label Dashboard Options</p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut", delay: 3 }} viewport={{ amount: 0.5, margin: "-20% 0px 0px 0px", once:true }} className="flex flex-row gap-2 items-center">
                            <SimpleCheckedIcon className="text-primary" size={32} />
                            <p className="flex flex-col leading-4">Advanced Security & SSO <span className="text-gray">(Single Sign-On)</span></p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut", delay: 3 }} viewport={{ amount: 0.5, margin: "-20% 0px 0px 0px", once:true }} className="flex flex-row gap-2 items-center">
                            <SimpleCheckedIcon className="text-primary" size={32} />
                            <p className="flex flex-col leading-4">Dedicated Account Manager <span className="text-gray">(24/7 Phone Support)</span></p>
                        </motion.div>
                    </motion.div>
                    <motion.button initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut", delay: 3.2 }} viewport={{ amount: 0.5, margin: "-20% 0px 0px 0px", once:true }} className="w-full p-3 rounded-lg bg-white text-black">Contact Sales</motion.button>
                </motion.div>
            </div>
        </section>
    );
}