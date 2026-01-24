import Image from "next/image";
import GearIcon from "./ui/gear-icon";
import ChartBarIcon from "./ui/chart-bar-icon";
import BrandAiStudioIcon from "./ui/brand-aistudio-icon";

export default function Features() {
    return (
        <section className="w-full h-screen flex items-center justify-center relative">
            <div className="w-full h-full relative drop-shadow-[0px_4px_120px_#FF6B00]">
                <Image src="/app.png" alt="Features" fill className="object-cover" />
                <div className="w-50 aspect-square rounded-full bg-primary blur-[120px] absolute left-50 top-20 -z-1"></div>
                <div className="w-70 aspect-square rounded-full bg-primary blur-[120px] absolute -right-50 bottom-0 -z-1"></div>
                <div className="absolute left-1/3 top-10 flex flex-col p-5 gap-5 rounded-3xl backdrop-blur-[3px] [box-shadow:1px_1px_0px_rgba(255,255,255,0.25),-1px_-1px_1px_rgba(255,255,255,0.25)] text-2xl">
                    <div className="flex flex-row gap-5 items-center">
                        <GearIcon size={42} className="text-primary" />
                        <p>Workflow Automation</p>
                    </div>
                    <p className="text-xl text-gray leading-6">
                        Remove the busywork. Let your team focus on <br /> building relationships, not updating CRM fields.
                    </p>
                </div>
                <div className="absolute left-20 bottom-1/5 flex flex-col p-5 gap-5 rounded-3xl backdrop-blur-[3px] [box-shadow:1px_1px_0px_rgba(255,255,255,0.25),-1px_-1px_1px_rgba(255,255,255,0.25)] text-2xl">
                    <div className="flex flex-row gap-5 items-center">
                        <ChartBarIcon size={42} className="text-primary" />
                        <p>Predictive Forecasting</p>
                    </div>
                    <p className="text-xl text-gray leading-6">
                        Know exactly where your revenue will be next <br /> quarter with 98% accuracy.
                    </p>
                </div>
                <div className="absolute right-20 bottom-1/2 flex flex-col p-5 gap-5 rounded-3xl backdrop-blur-[3px] [box-shadow:1px_1px_0px_rgba(255,255,255,0.25),-1px_-1px_1px_rgba(255,255,255,0.25)] text-2xl">
                    <div className="flex flex-row gap-5 items-center">
                        <BrandAiStudioIcon size={42} className="text-primary" />
                        <p>Smart Outreach</p>
                    </div>
                    <p className="text-xl text-gray leading-6">
                        AI-generated emails and follow-ups that sound <br /> human and get replies.
                    </p>
                </div>
            </div>
        </section>
    );
}