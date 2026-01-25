import Image from "next/image";

export default function Footer() {
    return (
        <div className="flex relative h-screen items-center justify-center">
            <Image src="/grad10.png" alt="gradient" fill className="object-cover scale-150 absolute translate-y-1/2" />
            <h2 className="text-[19vw] text-center absolute bottom-0 translate-y-1/3">IgniteSync.</h2>
        </div>
    )
}