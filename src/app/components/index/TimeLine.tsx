// components/Timeline.js
import { timelineData } from '@/app/data/timeLineData';
import { timelineStudies } from '@/app/data/timeLineStudies';

export default function Timeline() {
    return (
        <div id='section1' className=' flex justify-center xs:max-lg:flex-col bg-slate-800'>
            <div className="timeline-container    m-6 mt-24 max-w-4xl rounded-lg p-1 bg-gradient-to-b from-gray-900 from-10% via-gray-800  via-30% to-gray-900 
              to-80%   bg-gray-900">
                <h2 className="text-3xl text-white mt-14  mb-8 text-center">Career</h2>
                <div className="relative mx-6 my-14 border-l-4 border-black">
                    {timelineData.map((event, index) => (
                        <div key={index} className="mb-8 ml-6">
                            <div className="absolute -left-4 w-8 h-8 bg-slate-700 rounded-full text-white flex items-center justify-center">
                                {index + 1}
                            </div>
                            <h3 className="text-2xl text-justify text-white ">{event.title}</h3>
                            <time className="block text-justify mb-2 text-white">{event.date}</time>
                            <p className="text-white text-justify xl:max-3xl:text-lg ">{event.description}</p>
                        </div>
                    ))}
                </div>
            </div>
             <div className="timeline-container m-6 mt-24 max-w-4xl rounded-lg p-1 bg-gradient-to-b from-gray-900 from-10% via-gray-800  via-30% to-gray-900 
              to-80%   bg-gray-900">
                <h2 className="text-3xl text-white mt-14  mb-8 text-center">Graduation</h2>
                <div className="relative mx-6 my-14 border-l-4 border-black">
                    {timelineStudies.map((event, index) => (
                        <div key={index} className="mb-8 ml-6">
                            <div className="absolute -left-4 w-8 h-8 bg-slate-700 rounded-full text-white flex items-center justify-center">
                                {index + 1}
                            </div>
                            <h3 className="text-2xl text-justify text-white ">{event.title}</h3>
                            <time className="block text-justify mb-2 text-white">{event.date}</time>
                            <p className="text-white text-justify xl:max-3xl:text-lg ">{event.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
