'use client'
import Image from 'next/image'
import Perfil from "@/app/public/perfil.jpg"

import { motion } from "framer-motion"
import Link from 'next/link'
import { GithubLogo, LinkedinLogo, WhatsappLogo } from 'phosphor-react'


export default function indexBody() {


  return (
    <>
      <div className="flex  xs:max-md:flex-col-reverse lg:max-2xl:flex-row w-full bg-slate-800  py-20  md:max-xl:flex-col-reverse  ">
        <div
          className="flex  lg:max-3xl:w-2/5 sm:min-md:w-auto max-[767px]:w-auto overflow-ellipsis h-auto   md:max-xl:w-auto   sm:max-sm:w-auto rounded-lg bg-gradient-to-b
                from-gray-900 from-10% via-gray-800  via-30% to-gray-900 
                to-80%   bg-gray-900  m-6">

          <div className='my-14  text-white space-y-5 mx-6 '>
            <p className='text-2xl xl:max-3xl:text-4xl '>Descrição</p>
            <p className='text-base text-justify xl:max-3xl:text-xl'>Miguel de Almeida é um programador front-end com expertise em tecnologias modernas como React e Next.js 14. Ele também domina HTML, CSS e Node.js, sendo capaz de construir interfaces web eficientes e dinâmicas. Além disso, Miguel tem um bom controle sobre o uso de GitHub para versionamento de código e colaboração em projetos, o que reforça sua habilidade em trabalhar em equipes ágeis e em desenvolvimento contínuo.</p>
          </div>


        </div>
        <div className="flex  h-auto lg:max-3xl:w-3/5 sm:min-md:w-auto max-[767px]:w-auto rounded-lg overflow-hidden md:max-xl:w-auto sm:max-sm:w-auto
                 bg-gradient-to-b from-gray-900 from-10% via-gray-800 
                 via-30% to-gray-900 to-80%   bg-gray-900 m-6 items-center ">
          <div className='text-white self-start my-14 w-2/4 flex-wrap ml-6 '>
            <h1
              className=' text-4xl xl:max-3xl:text-5xl'>Hello, Miguel da silva de Almeida</h1>
            <p className='text-xs xl:max-3xl:text-base'>FRONT-END DEVELOPER <br></br> REACT | NODE | NEXT | HTML | TAILWIND | SQL</p>
          </div>
          <motion.div
            className='flex w-2/4  items-center justify-end'
            style={{ rotate: 360 }} // Adiciona a rotação ao container
            transition={{ duration: 20, repeat: Infinity }}>

            <Image
              src={Perfil}
              width={430}
              height={0}
              alt={''}
              className=" h-96 object-fill xs:max-sm:h-52 sm:max-lg:h-80 lg:max-xl:h-auto absolute rounded-s-full overflow-hidden "></Image>

            <motion.svg
              className="  overflow-visible "
              width="100%"
              height="100%"
              viewBox="0 0 506 506"
              fill="transparent"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.circle
                cx="882"
                cy="273"
                r="900"
                stroke="#ffffff"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ strokeDasharray: "24 10 0 0" }}
                animate={{
                  strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                  rotate: [120, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.svg>
          </motion.div>

        </div>
      </div>
      <div className='flex bg-slate-900 sm:min-md:flex-col max-[767px]:flex-col md:space-x-7 max-[767px]:gap-y-7 max-[767px]:h-auto justify-center w-auto h-40'>
        <div className='flex self-center   max-[767px]:mt-6 rounded-3xl  text-green-600 bg-black justify-center w-32 h-10
           hover:bg-gradient-to-b hover:from-gray-900 hover:from-10% hover:via-gray-800  hover:via-30% hover:to-gray-900 
           hover:to-80%   hover:bg-gray-900'>
          <Link href='https://wa.me/5551994641195' className='flex gap-x-1 items-center '><WhatsappLogo
            size={32}
            target="_blank"
            className='flex text-green-600 justify-center ' />
            Whats App
          </Link>
        </div>
        <div className='flex self-center   rounded-3xl  text-blue-800 bg-black justify-center w-32 h-10
          hover:bg-gradient-to-b hover:from-gray-900 hover:from-10% hover:via-gray-800  hover:via-30% hover:to-gray-900 
          hover:to-80%   hover:bg-gray-900'>
          <Link href='https://www.linkedin.com/in/miguel-almeida-32aa6b225/' className='flex gap-x-1 items-center  '><LinkedinLogo
            size={32}
            className='flex text-blue-800 justify-center ' />
            Linkedin
          </Link>
        </div>
        <div className='flex self-center max-[767px]:mb-6  rounded-3xl  text-white justify-center w-32 h-10 bg-black
          hover:bg-gradient-to-b hover:from-gray-900 hover:from-10% hover:via-gray-800  hover:via-30% hover:to-gray-900 
                hover:to-80%   hover:bg-gray-900'>
          <Link href='https://github.com/Miguelalmeida01' className='flex gap-x-1  items-center '><GithubLogo
            size={32}
            className='flex text-white justify-center ' />
            Github
          </Link>
        </div>
      </div>
    </>
  )
}