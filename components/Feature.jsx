import React from 'react'
import { RiSparkling2Line, RiTeamLine, RiTimerLine } from "react-icons/ri";


const Feature = () => {
  const FeatStyle = "text-5xl text-accent-primary";
  const FeatHr = " w-full bg-accent-primary  md:block hidden";
  return (
    <div>
      {/* Desktop */}
      <div className={`w-full items-center justify-evenly    font-light text-center max-w-screen-md  mx-auto px-[1rem] md:px-0  hidden md:flex`}>
        <span className="flex items-center justify-center flex-col">
          <RiTimerLine className={FeatStyle} />
          <p className='font-medium'>
            TIMELY <br className='md:block hidden' /> DELIVERIES
          </p>
        </span>
        <hr className={FeatHr} />
        <span className="flex items-center justify-center flex-col">
          <RiSparkling2Line className={FeatStyle} />
          <p className='font-medium'>
            QUALITY <br className='md:block hidden' /> FINISHING
          </p>
        </span>
        <hr className={FeatHr} />
        <span className="flex items-center justify-center flex-col">
          <RiTeamLine className={FeatStyle} />
          <p className='font-medium'>
            EXPERIENCED <br className='md:block hidden' /> TEAMS
          </p>
        </span>
      </div>
      {/* Mobile */}
      <div className={`w-full flex items-center mx-auto   flex-col  md:hidden gap-2 px-[1rem] md:px-0`}>
        <div className='flex items-center justify-center  gap-5  bg-gray-50 px-2 py-2 rounded-xl   w-full'>
          <RiTimerLine className={FeatStyle} />
          <p className='font-medium text-gray-700 text-center'>
            TIMELY  DELIVERIES
          </p>
        </div>
        <div className='flex items-center justify-center gap-5  bg-gray-50 px-2 py-2 rounded-xl   w-full'>
          <RiSparkling2Line className={FeatStyle} />
          <p className='font-medium text-gray-700'>
            QUALITY FINISHING
          </p>
        </div>
        <div className='flex items-center justify-center gap-5  bg-gray-50 px-2 py-2 rounded-xl   w-full'>
          <RiTeamLine className={FeatStyle} />
          <p className='font-medium text-gray-700'>
            EXPERIENCED TEAMS
          </p>
        </div>
      </div>
    </div>
  )
}

export default Feature