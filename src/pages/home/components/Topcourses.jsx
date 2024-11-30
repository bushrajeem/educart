import React from 'react'
import SectionTitle from '../../../shared/components/SectionTitle'

function Topcourses() {
  return (
    <div className=" bg-gradient-to-r from-secondary/15 to-primary/10 w-full">
    <div className="container px-5">
      <div className=" py-10">
        <h1 className="text-[40px] font-bold text-secondary py-5 text-center">
          Top Most{" "}
          <span className="text-primary">
            Course Categories
          </span>
        </h1>
        
        <div className='grid grid-cols-4 text-white text-center py-5'>
          <div className='col-span-1'>
            <div className='grid grid-rows-2'>
              <div className=' row-span-1 bg-secondary w-[300px] h-[100px] rounded-lg flex justify-center items-center'>
              PHP Development
              </div>
              <div className=' row-span-1 bg-secondary w-[300px] h-[100px] rounded-lg mt-[5px] flex justify-center items-center'>
              Web Designing
              </div>
            </div>
          </div>
          <div className='col-span-1 bg-primary rounded-lg mr-[10px] flex justify-center items-center'>
          Photography
          </div>
          <div className='col-span-1'>
          <div className='grid grid-rows-2'>
          <div className=' row-span-1 bg-secondary w-[300px] h-[100px] rounded-lg flex justify-center items-center'>
          Art Illustration
              </div>
              <div className=' row-span-1 bg-secondary w-[300px] h-[100px] rounded-lg mt-[5px] flex justify-center items-center'>
              Development
              </div>
            </div>
          </div>
          <div className='col-span-1 bg-secondary rounded-lg mr-[10px] flex justify-center items-center'>
          Digital Marketing
          </div>
        </div>
      </div>
      
    </div>
  </div>
  )
}

export default Topcourses
