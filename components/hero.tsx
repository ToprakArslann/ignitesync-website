import Image from "next/image";
import RightChevron from "./ui/right-chevron";

export default function Hero() {
    return (
        <section className="flex items-center flex-row h-screen w-full px-15 relative">
            <div className="flex flex-col gap-8">
                <h2 className="flex flex-col text-[150px] font-publica-sans-extra-bold leading-[0.9] gap-0">
                    <span className="w-full h-30 flex flex-row justify-between items-center gap-2" >
                        <span className="flex items-center justify-center w-full h-full ">IGNITE</span>
                        <div className="flex items-center justify-center w-full h-28 -translate-y-3  rounded-full relative overflow-hidden">
                            <Image src="/gradient1.png" alt="Gradient" className="w-full h-full" fill />
                        </div>
                    </span>
                    <span className="w-full h-30 flex flex-row justify-between items-center gap-2" >
                        <div className="flex items-center justify-center w-full h-28 -translate-y-3  rounded-full relative overflow-hidden">
                            <Image src="/gradient2.png" alt="Gradient" className="w-full h-full" fill />
                        </div>
                        <span className="flex items-center justify-center w-full h-full ">YOUR</span>
                    </span>
                    <span className="">
                        REVENUE
                    </span>
                </h2>
                <p className="text-2xl">
                    The AI-powered engine that predicts, automates, and closes <br /> deals faster. Stop guessing and start growing with real-time <br /> sales intelligence.
                </p>
                <div className="flex flex-row gap-8 items-center">
                    <a href="" className="flex flex-row items-center justify-between gap-2 bg-white text-black rounded-2xl p-1 text-xl">
                        <span className="flex items-center justify-center bg-primary rounded-xl p-3 aspect-square text-white"><RightChevron /></span>
                        <span>Get Started</span>
                    </a>
                    <a href="" className="underline text-xl">Book a Strategy Call</a>

                </div>
            </div>
            <div className="absolute right-1/5 -rotate-10 top-0 w-[250px] h-[120vh] bg-primary blur-[120px] rounded-b-full " />
            <div className="absolute right-0 rotate-25 -bottom-1/2 w-[200px] h-[60vh] bg-primary blur-[120px] " />
        </section>
    );
}