'use client'
import Link from "next/link";
import { GithubLogo, LinkedinLogo, WhatsappLogo } from "phosphor-react";
import React from 'react'

export default async function bottom() {
    return (
        <>
            <div className="flex xs:max-sm:flex-col xs:max-sm:gap-y-9  xs:max-sm:py-7 bg-slate-900 h-56 justify-between">

                <div className="flex   text-white text-base self-center mx-20">
                    <Link href='#section4' className="hover:text-slate-500 border-r-4  pr-9  border-slate-700">Home</Link>
                    <Link href='#section2' className="hover:text-slate-500 border-r-4  pr-9 pl-9 border-slate-700">Projects</Link >
                    <Link href='#section3' className="hover:text-slate-500 pl-9">Certified</Link >
                </div>
                <div className="flex flex-row mx-20 space-x-20  self-center">
                  <Link href="https://github.com/Miguelalmeida01"><GithubLogo size={38}  className="text-white hover:text-slate-500" /></Link>
                  <Link href="https://www.linkedin.com/in/miguel-almeida-32aa6b225/">  <LinkedinLogo size={38}  className="text-blue-800 hover:text-blue-600" /></Link>
                  <Link href="https://wa.me/5551994641195"><WhatsappLogo size={38}  className="text-green-600 hover:text-green-400" /></Link>
                </div>
            </div>

        </>
    )
}