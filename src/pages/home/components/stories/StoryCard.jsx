import { CheckBadgeIcon } from '@heroicons/react/16/solid'
import { CheckCircle, CircleCheck, Clock3, GraduationCap, RatioIcon } from 'lucide-react'
import React from 'react'

function StoryCard({details}) {
  return (
    <div className=' mt-10 bg-white w-[410px]'>
        <img
        className='w-fit '
        src={details.image} alt="" />
        <div className='px-5 py-4'>
            <div className='font-semibold text-[20px]'>
        {details.title}
            </div>
            <span className='text-[#6F6F6F] font-medium text-[14px]'>
            {details.university}
            </span>
            <div className='flex items-center gap-2 text-[13px] text-[#6F6F6F] mt-5'>
                <span className='text-secondary'>
            <GraduationCap />
                </span>
            <div className=' flex justify-between items-center gap-1'>
            Course Qualification:
                <span className='font-medium text-secondary text-[15px]'>
                {details.degree}
                </span>
            </div>
            </div>
            <div className='flex items-center gap-2 text-[13px] text-[#6F6F6F] mt-3'>
                <span className='text-secondary'>
                <CircleCheck />
                </span>
                <div className='flex gap-2 items-center justify-center'>
                Entry Score:
                <span className='font-medium text-secondary text-[16px]'>
                {details.score}    
                </span> 
                </div>
            </div>
            <div className='flex items-center gap-2 text-[13px] text-[#6F6F6F] mt-3'>
                <span className='text-secondary'>
                <Clock3 />
                </span>
                <div className='flex gap-2 items-center justify-center'>
                Duration:
                <span className='font-medium text-secondary text-[16px]'>
                {details.time}    
                </span> 
                </div>
            </div>
            <div>
                <p className='text-primary font-medium text-[16px] py-5'>
                    Happy Meter: 
                </p>
            </div>
            <button className='font-medium border-b-2 border-black mb-2'>
                Read More
            </button>
        </div>
    </div>
  )
}

export default StoryCard