'use client'

import Link from "next/link"
import { WhatsappLogo } from "phosphor-react"


export default async function contact() {
    return (
        <>
            <div className="flex flex-col h-auto bg-slate-800 justify-center   ">
                <p className="text-white text-3xl text-center ">Contact</p>
                <div className=" flex flex-col xs:max-xl:w-auto xs:max-sm:rounded-lg text-white w-3/6 h-auto my-16 self-center text-center bg-gradient-to-b from-gray-900 from-10% via-gray-800 
                 via-30% to-gray-900 to-80%  gap-y-7  bg-gray-900 rounded-full ">
                    <p className="mt-8 text-3xl">Learn more</p>
                    <p className="text-lg text-justify  mx-12">I am open to new collaboration opportunities and ready to help your business reach new innovation levels through technology.</p>
                    <Link href='https://wa.me/5551994641195' className="flex flex-row mb-8 justify-center place-self-center rounded-full  w-48  bg-white group hover:bg-black" >
                        <WhatsappLogo size={38} className=" -start-9  text-green-600  group-hover:text-green-400" />
                        <p className="flex text-black self-center group-hover:text-white">Whats App</p>
                    </Link>
                </div>
            </div>
        </>
    )
}