import IndexHeader from '@/app/components/index/header'
import IndexBody from '@/app/components/index/body'
import IndexCarousel from '@/app/components/index/carousel'
import IndexCarousel2 from '@/app/components/index/carousel2'
import Timeline from '@/app/components/index/TimeLine'
import Bottom from '@/app/components/index/bottom'
import  Contact  from '@/app/components/index/contact'
export default function index() {
    return (
        <>
            <div className='overflow-hidden'>
                <IndexHeader />
                <IndexBody />
                <Timeline />
                <IndexCarousel />
                <IndexCarousel2 />
                <Contact />
                <Bottom />
            </div>


        </>
    )
}