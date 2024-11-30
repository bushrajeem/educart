import React from 'react'

function QuestionCard({details}) {
  return (
    <div>
        <div className='container px-[25px]'>
            <div 
            className=' border-solid border-2 border-primary rounded-lg
            hover:bg-gradient-to-r from-primary/50 to-white/50 w-[570px] h-[50px] p-3'>
       <div className='font-bold text-white hover:text-black'>

       {details.name}
       </div>
            </div>

        </div>
    </div>
  )
}

export default QuestionCard