import React from 'react'
import Button from '../../../../shared/components/Button'

function VideoCourse() {
  return (
    <div className='relative'>
        <img 
        className='absolute w-[145px] h[200px]'
        src="/videoshape1.svg" alt="" />
        <div className='container px-[70px] py-10'>
             <div className='grid grid-cols-12'>
                <div className='col-span-6 ml-10'>
                  <h2 className="text-[30px] text-secondary font-bold mt-[150px]">
              Start{" "}
              <span className="text-primary">Learning Online Video</span>{" "}
              Courses
            </h2>
            <p className='text-[13px] py-5'>
            Donec posuere congue sem, et auctor est malesuada vitae. Integer eget pretium sem. Curabitur tempor ultrices quam ut iaculis. Nunc vitae ligula non magna semper pretium. Nulla a sodales ipsum, quis varius massa. Duis gravida euismod nisl.
            </p>
            <Button text="Get the Courses" />
                </div>
                <div className='col-span-6'>
                    <div className='relative h-full'>
                  <img 
                  className='w-[390px] h-[390px] ml-48 mt-[80px]'
                  src="/videoshape5.svg" alt="" />
                  <div 
                  className='duration'>
                  42 Hours <br /> Videos
                  <img 
                  className='absolute top-3 left-3'
                  src="/videoshape3.svg" alt="" />
                  </div>
                  <img 
                  className='absolute -top-4 left-[70px] w-[250px] h-[250px] -z-10'
                  src="/videoshape4.svg" alt="" />
                  <img 
                  className=' absolute -left-[150px] w-[300px] h-[190px] bottom-0 -z-10'
                  src="/videoshape2.svg" alt="" />
                    </div>
                </div>
             </div>
        </div>
    </div>
  )
}

export default VideoCourse