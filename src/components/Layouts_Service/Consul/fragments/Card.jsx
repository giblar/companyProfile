import React from 'react'

const Card = () => {
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
             Konsultasi Strategis
            </span>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum rem adipisci quam sapiente aliquam maxime? Pariatur nam, ad non, fugiat fuga aspernatur harum totam veritatis veniam iusto reprehenderit distinctio sapiente.
            </p>
            
          </div>
        </div>
  )
}

export default Card
