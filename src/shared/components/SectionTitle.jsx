import React from 'react'

function SectionTitle({bluetitle, orangetitle, textSize}) {
  return (
    <div>
        <h1 className={` text-[${textSize}] font-bold `}>
            <span className='text-secondary'>{bluetitle}{" "}</span>
            <span className='text-primary'>{orangetitle}</span>
        </h1>
    </div>
  )
}

export default SectionTitle