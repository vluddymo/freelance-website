import Image from 'next/image';
import LinkButton from "@/components/LinkButton";

export default function Banner(){

    return (
        <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 flex flex-col p-4 justify-center order-2 lg:order-1 mr-4">
                <p>Hi, ich bin Wladi Moser</p>
                <h1>Freelance Web Developer</h1>
                <p>I craft responsive websites for companies, small business and individuals</p>
                <LinkButton href="/projects" >View My work</LinkButton>
            </div>
            <div className="flex-1 relative order-1 lg:order-2 rounded-full aspect-square rounded-tr-2xl">
                <div className="underlay absolute z-0 bottom-0 left-0 w-full h-full rounded-b-full rounded-t-full  bg-green-400 after:content-[''] after:w-full after:h-full after:absolute after:rounded-full after:bg-gray-100 after:z-10 after:-translate-y-80"></div>
                <Image
                src="/images/placeholder_portrait.png"
                alt="Portrait von Freelance Web Developer"
                fill={true}
                className="z-20 relative! mix-blend-normal rounded-full w-full aspect-auto"
                />
            </div>
        </div>
    )
}
