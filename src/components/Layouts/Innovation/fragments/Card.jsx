import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Card = (props) => {
    const { CardTitle, CardDate, CardImage, CardDescription} = props;
  return (
   <div className='mx-10'>
    <a href="">
    <div className=" bg-blue-100  lg:max-w-3xl  rounded-xl shadow-md overflow-hidden">
    <div className="md:flex">
      <div className="md:shrink-0 h-full">
        <img
          className="w-full  md:w-full lg:w-48 sm:w-full rounded-xl"
          src={`image/${CardImage}`}
          alt="Team"
        />
      </div>
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
         {CardTitle}
        </div>
        
        <div className="mt-2 text-gray-500 overflow-y-auto max-h-20">
         {CardDescription}
        </div>
        <span className="text-blue-600"><FontAwesomeIcon icon={faCalendarDays} className="text-blue-900" />{CardDate}</span>
      </div>
    </div>
  </div>
    </a>
   </div>
  )
}

export default Card
