'use client'

import Link from "next/link"
import { WhatsappLogo } from "phosphor-react"


export default async function contact() {
    return (
        <>
            <div className="flex flex-col h-auto bg-slate-800 justify-center  ">
                <p className="text-white text-3xl text-center ">Contact</p>
                <div className=" flex flex-col text-white w-3/6 h-52 my-16 self-center text-center bg-gradient-to-b from-gray-900 from-10% via-gray-800 
                 via-30% to-gray-900 to-80%  gap-y-7  bg-gray-900 rounded-full ">
                    <p className="mt-8">bfdgg</p>
                    <p>rtghtrhrhth</p>
                    <Link href='#' className="flex flex-row justify-center place-self-center rounded-full  w-48  bg-white" >
                        <WhatsappLogo size={38} className=" -start-9  text-green-600  hover:text-green-400" />
                        <p className="flex text-black self-center">Whats App</p>
                    </Link>
                </div>
            </div>
        </>
    )
}