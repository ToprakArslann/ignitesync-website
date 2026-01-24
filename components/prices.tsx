import Image from "next/image";
import SimpleCheckedIcon from "./ui/simple-checked-icon";

export default function Prices() {
    return (
        <section className="w-full h-screen flex flex-col items-center justify-center relative gap-5">
            <Image src="/grad9.png" alt="Prices" fill className="absolute inset-0 object-cover -z-1 scale-150" />
            <div className="flex flex-row items-center justify-center p-2 gap-2 rounded-2xl backdrop-blur-[3px] [box-shadow:1px_1px_0px_rgba(255,255,255,0.25),-1px_-1px_1px_rgba(255,255,255,0.25)] text-lg">
                <button className="bg-white text-black p-2 rounded-lg">Annual</button>
                <button>Monthly</button>
            </div>
            <div className="flex flex-row gap-5 items-start justify-center">
                <div className="flex flex-col w-100 justify-center p-5 gap-5 rounded-2xl backdrop-blur-[3px] [box-shadow:1px_1px_0px_rgba(255,255,255,0.25),-1px_-1px_1px_rgba(255,255,255,0.25)]">
                    <h2 className="text-2xl text-center">Ignite</h2>
                    <div className="flex flex-row items-center justify-center gap-2">
                        <h2 className="text-5xl font-publica-sans-bold">$49</h2>
                        <div className="flex flex-col items-center justify-center leading-4 text-gray">
                            <p>/month (USD)</p>
                            <p>$588 billed yearly</p>
                        </div>
                    </div>
                    <p className="text-gray leading-4">Ideal for small teams or solo founders looking to <br /> spark their sales process.</p>
                    <div className="h-px w-full bg-gray" />
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row gap-2 items-center">
                            <SimpleCheckedIcon className="text-primary" size={32} />
                            <p>Up to 3 Team Members</p>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <SimpleCheckedIcon className="text-primary" size={32} />
                            <p className="flex flex-col leading-4">Basic CRM Integration <span className="text-gray">(Hubspot, Salesforce)</span></p>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <SimpleCheckedIcon className="text-primary" size={32} />
                            <p className="flex flex-col leading-4">AI-Powered Lead Scoring <span className="text-gray">(Up to 500 leads/month)</span></p>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <SimpleCheckedIcon className="text-primary" size={32} />
                            <p className="flex flex-col leading-4">Automated Email Sequences <span className="text-gray">(3 active workflows)</span></p>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <SimpleCheckedIcon className="text-primary" size={32} />
                            <p className="flex flex-col leading-4">Standart Support <span className="text-gray">(Email only)</span></p>
                        </div>
                    </div>
                    <button className="w-full p-3 rounded-lg bg-white text-black">Start Your Spark</button>
                </div>
                <div className="flex flex-col w-100 justify-center p-5 gap-5 rounded-2xl backdrop-blur-[3px] border-primary border-2 relative z-1">
                    <div className=" absolute right-0 top-0 translate-x-1/7 -translate-y-1/2 bg-primary text-white p-2 rounded-lg text-xl">Most Popular</div>
                    <h2 className="text-2xl text-center flex flex-col items-center justify-center leading-4">Velocity <span className="text-gray text-base">(PRO)</span></h2>
                    <div className="flex flex-row items-center justify-center gap-2">
                        <h2 className="text-5xl font-publica-sans-bold">$149</h2>
                        <div className="flex flex-col items-center justify-center leading-4 text-gray">
                            <p>/month (USD)</p>
                            <p>$1788 billed yearly</p>
                        </div>
                    </div>
                    <p className="text-gray leading-4">Perfect for scaling startups that need to <br /> accelerate their revenue engine.</p>
                    <div className="h-px w-full bg-gray" />
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row gap-2 items-center">
                            <SimpleCheckedIcon className="text-primary" size={32} />
                            <p>Everything in Ignite, plus:</p>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <SimpleCheckedIcon className="text-primary" size={32} />
                            <p className="flex flex-col leading-4">Up to 15 Team Members</p>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <SimpleCheckedIcon className="text-primary" size={32} />
                            <p className="flex flex-col leading-4">Advanced Predictive <br /> Analytics & Forecasting</p>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <SimpleCheckedIcon className="text-primary" size={32} />
                            <p className="flex flex-col leading-4">AI-Generated Personalized Outreach <span className="text-gray">(Unlimited)</span></p>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <SimpleCheckedIcon className="text-primary" size={32} />
                            <p className="flex flex-col leading-4">Multi-channel Automation <span className="text-gray">(Email + LinkedIn)</span></p>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <SimpleCheckedIcon className="text-primary" size={32} />
                            <p className="flex flex-col leading-4">Custom Sales Pipeline Management</p>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <SimpleCheckedIcon className="text-primary" size={32} />
                            <p className="flex flex-col leading-4">Priority Support <span className="text-gray">(Chat & Email)</span></p>
                        </div>
                    </div>
                    <button className="w-full p-3 rounded-lg bg-primary text-white">Accelerate Growth</button>
                </div>
                <div className="flex flex-col w-100 justify-center p-5 gap-5 rounded-2xl backdrop-blur-[3px] [box-shadow:1px_1px_0px_rgba(255,255,255,0.25),-1px_-1px_1px_rgba(255,255,255,0.25)]">
                    <h2 className="text-2xl text-center flex flex-col items-center justify-center leading-4">Inferno <span className="text-gray text-base">(ENTERPRISE)</span></h2>
                    <div className="flex flex-row items-center justify-center gap-2">
                        <h2 className="text-5xl font-publica-sans-bold flex flex-col"><span>CUSTOM</span><span>PRICING</span></h2>
                        <div className="flex flex-col items-center justify-center leading-4 text-gray">
                            <p>/month (USD)</p>
                            <p>$588 billed yearly</p>
                        </div>
                    </div>
                    <p className="text-gray leading-4">Full-scale revenue intelligence for global organizations requiring total control.</p>
                    <div className="h-px w-full bg-gray" />
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row gap-2 items-center">
                            <SimpleCheckedIcon className="text-primary" size={32} />
                            <p>Everything in Velocity, plus:</p>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <SimpleCheckedIcon className="text-primary" size={32} />
                            <p className="flex flex-col leading-4">Unlimited Team Members</p>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <SimpleCheckedIcon className="text-primary" size={32} />
                            <p className="flex flex-col leading-4">Custom AI Model Training <span className="text-gray">(Based on your historical data)</span></p>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <SimpleCheckedIcon className="text-primary" size={32} />
                            <p className="flex flex-col leading-4">API Access & Custom Webhooks</p>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <SimpleCheckedIcon className="text-primary" size={32} />
                            <p className="flex flex-col leading-4">White-label Dashboard Options</p>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <SimpleCheckedIcon className="text-primary" size={32} />
                            <p className="flex flex-col leading-4">Advanced Security & SSO <span className="text-gray">(Single Sign-On)</span></p>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <SimpleCheckedIcon className="text-primary" size={32} />
                            <p className="flex flex-col leading-4">Dedicated Account Manager <span className="text-gray">(24/7 Phone Support)</span></p>
                        </div>
                    </div>
                    <button className="w-full p-3 rounded-lg bg-white text-black">Contact Sales</button>
                </div>
            </div>
        </section>
    );
}