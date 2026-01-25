"use client"
import RightChevron from "./ui/right-chevron";
import { useState } from "react";

export default function FAQ() {
    const [active, setActive] = useState(0)
    return (
        <section className="flex flex-col items-center justify-center min-h-screen gap-5 max-[1025]:pt-200">
            <h2 className="text-2xl">Frequently Asked Questions</h2>
            <div onClick={() => setActive(0)} className={`flex flex-col w-110 ${active === 0 ? "h-38" : "h-15"} transition-all duration-300 overflow-hidden p-5 gap-5 rounded-2xl backdrop-blur-[3px] [box-shadow:1px_1px_0px_rgba(255,255,255,0.25),-1px_-1px_1px_rgba(255,255,255,0.25)]`}>
                <div className="w-full flex flex-row items-center justify-between">
                    <p>What exactly is IgniteSync?</p>
                    <RightChevron className="-rotate-45 text-primary" size={24} />
                </div>
                <p className="text-gray leading-4 text-sm">IgniteSync is an AI-driven Revenue Operations (RevOps) platform designed to automate sales workflows, predict revenue outcomes, and optimize team performance through real-time data intelligence.</p>
            </div>
            <div onClick={() => setActive(1)} className={`flex flex-col w-110 ${active === 1 ? "h-30" : "h-15"} transition-all duration-300 overflow-hidden p-5 gap-5 rounded-2xl backdrop-blur-[3px] [box-shadow:1px_1px_0px_rgba(255,255,255,0.25),-1px_-1px_1px_rgba(255,255,255,0.25)]`}>
                <div className="w-full flex flex-row items-center justify-between">
                    <p>Is IgniteSync suitable for small startups?</p>
                    <RightChevron className="-rotate-45 text-primary" size={24} />
                </div>
                <p className="text-gray leading-4 text-sm">Yes, IgniteSync is designed to be accessible for small startups with a focus on affordability and ease of use.</p>
            </div>
            <div onClick={() => setActive(2)} className={`flex flex-col w-110 ${active === 2 ? "h-37" : "h-15"} transition-all duration-300 overflow-hidden p-5 gap-5 rounded-2xl backdrop-blur-[3px] [box-shadow:1px_1px_0px_rgba(255,255,255,0.25),-1px_-1px_1px_rgba(255,255,255,0.25)]`}>
                <div className="w-full flex flex-row items-center justify-between">
                    <p className="whitespace-nowrap">How accurate is the AI revenue forecasting?</p>
                    <RightChevron className="-rotate-45 text-primary" size={24} />
                </div>
                <p className="text-gray leading-4 text-sm">The AI revenue forecasting accuracy can vary based on the quality and quantity of data input, but IgniteSync is designed to provide reliable predictions with a focus on real-time data intelligence.</p>
            </div>
            <div onClick={() => setActive(3)} className={`flex flex-col w-110 ${active === 3 ? "h-33" : "h-15"} transition-all duration-300 overflow-hidden p-5 gap-5 rounded-2xl backdrop-blur-[3px] [box-shadow:1px_1px_0px_rgba(255,255,255,0.25),-1px_-1px_1px_rgba(255,255,255,0.25)]`}>
                <div className="w-full flex flex-row items-center justify-between">
                    <p className="whitespace-nowrap">Which CRMs do you integrate with?</p>
                    <RightChevron className="-rotate-45 text-primary" size={24} />
                </div>
                <p className="text-gray leading-4 text-sm">IgniteSync currently supports integration with HubSpot and Salesforce, and we are working on adding more CRM integrations in the future.</p>
            </div>
            <div onClick={() => setActive(4)} className={`flex flex-col w-110 ${active === 4 ? "h-37" : "h-15"} transition-all duration-300 overflow-hidden p-5 gap-5 rounded-2xl backdrop-blur-[3px] [box-shadow:1px_1px_0px_rgba(255,255,255,0.25),-1px_-1px_1px_rgba(255,255,255,0.25)]`}>
                <div className="w-full flex flex-row items-center justify-between">
                    <p>How long does it take to see results?</p>
                    <RightChevron className="-rotate-45 text-primary" size={24} />
                </div>
                <p className="text-gray leading-4 text-sm">The time it takes to see results can vary based on the quality and quantity of data input, but IgniteSync is designed to provide reliable predictions with a focus on real-time data intelligence.</p>
            </div>
            <div onClick={() => setActive(5)} className={`flex flex-col w-110 ${active === 5 ? "h-33" : "h-15"} transition-all duration-300 overflow-hidden p-5 gap-5 rounded-2xl backdrop-blur-[3px] [box-shadow:1px_1px_0px_rgba(255,255,255,0.25),-1px_-1px_1px_rgba(255,255,255,0.25)]`}>
                <div className="w-full flex flex-row items-center justify-between">
                    <p>Where is my sales data stored?</p>
                    <RightChevron className="-rotate-45 text-primary" size={24} />
                </div>
                <p className="text-gray leading-4 text-sm">IgniteSync stores your sales data in a secure and encrypted database, and we are working on adding more CRM integrations in the future.</p>
            </div>
            <div onClick={() => setActive(6)} className={`flex flex-col w-110 ${active === 6 ? "h-29" : "h-15"} transition-all duration-300 overflow-hidden p-5 gap-5 rounded-2xl backdrop-blur-[3px] [box-shadow:1px_1px_0px_rgba(255,255,255,0.25),-1px_-1px_1px_rgba(255,255,255,0.25)]`}>
                <div className="w-full flex flex-row items-center justify-between">
                    <p>Can I change my plan later?</p>
                    <RightChevron className="-rotate-45 text-primary" size={24} />
                </div>
                <p className="text-gray leading-4 text-sm">Yes, you can change your plan at any time by logging into your account and updating your subscription plan.</p>
            </div>
            <div onClick={() => setActive(7)} className={`flex flex-col w-110 ${active === 7 ? "h-26" : "h-15"} transition-all duration-300 overflow-hidden p-5 gap-5 rounded-2xl backdrop-blur-[3px] [box-shadow:1px_1px_0px_rgba(255,255,255,0.25),-1px_-1px_1px_rgba(255,255,255,0.25)]`}>
                <div className="w-full flex flex-row items-center justify-between">
                    <p>What kind of support do you offer?</p>
                    <RightChevron className="-rotate-45 text-primary" size={24} />
                </div>
                <p className="text-gray leading-4 text-sm">Yes, we offer 24/7 support through email and live chat.</p>
            </div>
        </section >
    );
}