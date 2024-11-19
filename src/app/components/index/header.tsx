
import Image from 'next/image'
import img from '@/app/public/logo.png'
import Link from 'next/link'
import HamburgerMenu from './HamburguerMenu'

export default  async function headerIndex() {


    return (
        <>

            <div id='section4' className="flex h-24 bg-slate-900 px-10 justify-between">
                <div className=" text-white self-center ">
                    <Image
                        src={img}
                        width={50}
                        height={50}
                        alt={''}></Image>
                </div>
                <div className="flex space-x-10 text-white self-center max-[500px]:hidden ">
                    <Link href='#section1' className='hover:text-slate-500'>Home</Link>
                    <Link href='#section2' className='hover:text-slate-500'>Projects</Link>
                    <Link href='#section3' className='hover:text-slate-500'>Certified</Link>
                </div>
                <div className='min-[499px]:hidden flex space-x-10 text-white self-center ' >
                    <HamburgerMenu />
                </div>
            </div >
        </>
    )
}