'use client'
import git from '@/app/public/git.jpg'
import mark from '@/app/public/mark.jpg'
import next from '@/app/public/nextjs.jpg'
import aut from '@/app/public/aut.jpg'
import prinGit from '@/app/public/prinGit.jpg'
import portGit from '@/app/public/port.jpg'
import java from '@/app/public/java.jpg'

import Image from 'next/image'
import { Card, } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Link from 'next/link'
import { LinkedinLogo } from 'phosphor-react'



export default function indexCarousel2() {
    return (
        <>
            <div className="flex flex-row  justify-center bg-slate-800 h-auto">
                <div id="section3" className="flex-row text-center mt-16 text-white text-3xl">
                    Certified
                    <div className=" w-screen px-16 py-5 h-64  mb-16 my-16 rounded-lg bg-gradient-to-b 
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
                                                    src={git}
                                                    width={660}
                                                    height={100}
                                                    alt=''
                                                    className='relative object-cover '></Image>
                                                <Link href='https://www.linkedin.com/in/miguel-almeida-32aa6b225/' className='absolute flex-row  bg-transparent group    text-transparent rounded-t-lg border-hidden w-12 h-12 '><LinkedinLogo size={47} className='relative text-blue-800 text-center group-hover:text-blue-600 ' /></Link>


                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))}
                                {Array.from({ length: 1 }).map((_, index) => (
                                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 3xl:basis-1/4 ">
                                        <div className="p-1 ">
                                            <Card className="flex   overflow-hidden  h-52 ">
                                                <Image
                                                    src={mark}
                                                    width={900}
                                                    height={900}
                                                    alt=''
                                                    className='relative object-cover'></Image>
                                                <Link href='https://www.linkedin.com/in/miguel-almeida-32aa6b225/' className='absolute flex-row  bg-transparent  group 
                                               text-transparent rounded-t-lg border-hidden w-12 h-12 '><LinkedinLogo size={47} className='relative text-blue-800 group-hover:text-blue-600 text-center  ' /></Link>


                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))}
                                {Array.from({ length: 1 }).map((_, index) => (
                                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 3xl:basis-1/4 ">
                                        <div className="p-1 ">
                                            <Card className="flex   overflow-hidden  h-52 ">
                                                <Image
                                                    src={next}
                                                    width={900}
                                                    height={900}
                                                    alt=''
                                                    className='relative object-cover'></Image>
                                                <Link href='https://www.linkedin.com/in/miguel-almeida-32aa6b225/' className='absolute flex-row  bg-transparent group
                                                     text-transparent rounded-t-lg border-hidden w-12 h-12 '><LinkedinLogo size={47} className='relative text-blue-800 group-hover:text-blue-600 text-center  ' /></Link>


                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))}
                                {Array.from({ length: 1 }).map((_, index) => (
                                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 3xl:basis-1/4 ">
                                        <div className="p-1 ">
                                            <Card className="flex   overflow-hidden  h-52 ">
                                                <Image
                                                    src={aut}
                                                    width={900}
                                                    height={900}
                                                    alt=''
                                                    className='relative object-cover'></Image>
                                                <Link href='https://www.linkedin.com/in/miguel-almeida-32aa6b225/' className='absolute flex-row  bg-transparent group  
                                                    text-transparent rounded-t-lg border-hidden w-12 h-12 '><LinkedinLogo size={47} className='relative text-blue-800 group-hover:text-blue-600 text-center  ' /></Link>

                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))}
                                {Array.from({ length: 1 }).map((_, index) => (
                                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 3xl:basis-1/4 ">
                                        <div className="p-1 ">
                                            <Card className="flex   overflow-hidden  h-52 ">
                                                <Image
                                                    src={prinGit}
                                                    width={900}
                                                    height={900}
                                                    alt=''
                                                    className='relative object-cover'></Image>
                                                <Link href='https://www.linkedin.com/in/miguel-almeida-32aa6b225/' className='absolute flex-row  bg-transparent  group
                                                text-transparent rounded-t-lg border-hidden w-12 h-12 '><LinkedinLogo size={47} className='relative text-blue-800 group-hover:text-blue-600 text-center  ' /></Link>

                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))}
                                {Array.from({ length: 1 }).map((_, index) => (
                                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 3xl:basis-1/4 ">
                                        <div className="p-1 ">
                                            <Card className="flex   overflow-hidden  h-52 ">
                                                <Image
                                                    src={portGit}
                                                    width={900}
                                                    height={900}
                                                    alt=''
                                                    className='relative object-cover'></Image>
                                                <Link href='https://www.linkedin.com/in/miguel-almeida-32aa6b225/' className='absolute flex-row  bg-transparent  group 
                                                    text-transparent rounded-t-lg border-hidden w-12 h-12 '><LinkedinLogo size={47} className='relative text-blue-800 group-hover:text-blue-600 text-center  ' /></Link>


                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))}
                                {Array.from({ length: 1 }).map((_, index) => (
                                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 3xl:basis-1/4 ">
                                        <div className="p-1 ">
                                            <Card className="flex  overflow-hidden  h-52 ">

                                                <Image
                                                    src={java}
                                                    width={900}
                                                    height={900}
                                                    alt=''
                                                    className='relative object-cover'>
                                                </Image>
                                                <Link href='https://www.linkedin.com/in/miguel-almeida-32aa6b225/' className='absolute flex-row  bg-transparent  group 
                                                  text-transparent rounded-t-lg border-hidden w-12 h-12 '><LinkedinLogo size={47} className='relative text-blue-800 group-hover:text-blue-600 text-center  ' /></Link>


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