import React from 'react'

const Card = (props) => {
  const { title, description } = props
  return (
    <div className="rounded overflow-hidden flex flex-col max-w-xl mx-auto">
          <div>
            <img
              className="w-full"
              src="/image/meeting.png"
              alt="Meeting"
            />
          </div>
          <div className="relative -mt-16 px-10 pt-5 pb-16 bg-white shadow-lg m-10">
            <span className="font-semibold text-lg  hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
           {title}
            </span>
            <p className="text-gray-500 text-sm">
              {description}
            </p>
            
          </div>
        </div>
  )
}

export default Card
