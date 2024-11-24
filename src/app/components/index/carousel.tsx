'use client'
import rede from '@/app/public/rede.png'
import guardi from '@/app/public/guardi.png'
import login from '@/app/public/login.png'
import loja from '@/app/public/loja.png'
import money from '@/app/public/money.png'
import projeto from '@/app/public/Projeto.png'
import timer from '@/app/public/timer.png'

import Image from 'next/image'
import { Card, } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Link from 'next/link'
import { GithubLogo } from 'phosphor-react'



export default function indexCarousel() {
    return (
        <>
         <div className="flex flex-row  justify-center bg-slate-800 h-auto">
                <div id="section2" className="flex-row text-center mt-16  text-white text-3xl">
                    Projects
                    <div className=" w-screen px-16 py-5 h-64   mt-14 rounded-lg bg-gradient-to-b 
                from-gray-900 from-10% via-gray-800  via-30% to-gray-900 
                to-80%   bg-gray-900 ">
                        <Carousel
                            opts={{
                                align: "start",
                            }}
                            className="  xs:max-2xl:mx-auto"
                        >
                            <CarouselContent >
                                {Array.from({ length: 1 }).map((_, index) => (
                                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 3xl:basis-1/4 ">
                                        <div className="p-1 ">
                                            <Card className="flex   overflow-hidden  h-52 ">
                                                <Image
                                                    src={rede}
                                                    width={660}
                                                    height={100}
                                                    quality={100} 
                                                    alt=''
                                                    className='relative object-fill '></Image>
                                                <Link href='https://github.com/Miguelalmeida01/React_typeScript-CursoRocketseat' className='absolute flex-row  justify-center group  
                                                    text-transparent rounded-t-lg border-hidden w-12 h-12 '><GithubLogo size={47} className=' text-white group-hover:text-slate-500 text-center  ' /></Link>


                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))}
                                {Array.from({ length: 1 }).map((_, index) => (
                                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 3xl:basis-1/4 ">
                                        <div className="p-1 ">
                                            <Card className="flex   overflow-hidden  h-52 ">
                                                <Image
                                                    src={guardi}
                                                    width={900}
                                                    height={900}
                                                    alt=''
                                                    className='relative object-fill'></Image>
                                                <Link href='https://github.com/Miguelalmeida01/ProjetoModelNetflix-Next-React' className='absolute flex-row  bg-transparent group
                                                text-transparent rounded-t-lg border-hidden w-12 h-12 '><GithubLogo size={47} className='relative text-white group-hover:text-slate-500 text-center  ' /></Link>


                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))}
                                {Array.from({ length: 1 }).map((_, index) => (
                                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 3xl:basis-1/4 ">
                                        <div className="p-1 ">
                                            <Card className="flex   overflow-hidden  h-52 ">
                                                <Image
                                                    src={login}
                                                    width={900}
                                                    height={900}
                                                    alt=''
                                                    className='relative object-fill'></Image>
                                                <Link href='https://github.com/Miguelalmeida01/ProjetoLogin-Next-React' className='absolute flex-row  bg-transparent group
                                                    text-transparent rounded-t-lg border-hidden w-12 h-12 '><GithubLogo size={47} className='relative text-white group-hover:text-slate-500 text-center  ' /></Link>


                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))}
                                {Array.from({ length: 1 }).map((_, index) => (
                                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 3xl:basis-1/4 ">
                                        <div className="p-1 ">
                                            <Card className="flex   overflow-hidden  h-52 ">
                                                <Image
                                                    src={loja}
                                                    width={900}
                                                    height={900}
                                                    alt=''
                                                    className='relative object-fill'></Image>
                                                <Link href='https://github.com/Miguelalmeida01/ProjetoShop-CursoRocketseat-' className='absolute flex-row  bg-transparent group
                                                    text-transparent rounded-t-lg border-hidden w-12 h-12 '><GithubLogo size={47} className='relative text-white group-hover:text-slate-500 text-center  ' /></Link>

                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))}
                                {Array.from({ length: 1 }).map((_, index) => (
                                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 3xl:basis-1/4 ">
                                        <div className="p-1 ">
                                            <Card className="flex   overflow-hidden  h-52 ">
                                                <Image
                                                    src={money}
                                                    width={900}
                                                    height={900}
                                                    alt=''
                                                    className='relative object-fill'></Image>
                                                <Link href='https://github.com/Miguelalmeida01/ProjetoMoney-CursoRocketseat' className='absolute flex-row  bg-transparent group
                                                     text-transparent rounded-t-lg border-hidden w-12 h-12 '><GithubLogo size={47} className='relative text-white group-hover:text-slate-500 text-center  ' /></Link>

                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))}
                                {Array.from({ length: 1 }).map((_, index) => (
                                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 3xl:basis-1/4 ">
                                        <div className="p-1 ">
                                            <Card className="flex   overflow-hidden  h-52 ">
                                                <Image
                                                    src={projeto}
                                                    width={900}
                                                    height={900}
                                                    alt=''
                                                    className='relative object-fill'></Image>
                                                <Link href='https://github.com/Miguelalmeida01/Tela_login' className='absolute flex-row  bg-transparent group
                                                      text-transparent rounded-t-lg border-hidden w-12 h-12 '><GithubLogo size={47} className='relative text-white group-hover:text-slate-500 text-center  ' /></Link>


                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))}
                                {Array.from({ length: 1 }).map((_, index) => (
                                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 3xl:basis-1/4 ">
                                        <div className="p-1 ">
                                            <Card className="flex  overflow-hidden  h-52 ">

                                                <Image
                                                    src={timer}
                                                    width={900}
                                                    height={900}
                                                    quality={100} 
                                                    alt=''
                                                    className='relative object-fill'>
                                                </Image>
                                                <Link href='https://github.com/Miguelalmeida01/ProjetoTimer-CursoRocketseat-' className='absolute flex-row  bg-transparent group
                                                  text-transparent rounded-t-lg border-hidden w-12 h-12 '><GithubLogo size={47} className='relative text-white group-hover:text-slate-500 text-center  ' /></Link>


                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))}

                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                </div>
            </div>
        </>
           
    )
}