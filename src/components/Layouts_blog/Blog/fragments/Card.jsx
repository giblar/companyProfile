import React from 'react'
import { faCalendarDays, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = (props) => {
  const { CardTitle, CardCreator, CardDescription, CardDate } = props;
  return (
    <div className="bg-[#F4F8FF] aspect-[4/3] rounded-md">
          <div className=''>
          <img src="/image/inovation.jpg" alt="" className='w-full aspect-video object-cover' />
          </div>
          <h1 className="text-2xl my-5 font-semibold ml-5">{CardTitle}</h1>
          <div className="text-blue-700 text-sm flex ml-5 mb-3">
            <div className="flex mr-5">
              <FontAwesomeIcon
                icon={faUser}
                style={{ color: "#2071fe" }}
                className="self-center mr-1"
              />
              <p>{CardCreator}</p>
            </div>
            <div className="flex">
              <FontAwesomeIcon icon={faCalendarDays} style={{ color: "#2071fe" }} className="self-center mr-1 " />
              <p>{CardDate}</p>
            </div>
          </div>
          {" "}
          <div className="h-1/2 mx-5 my-4  overflow-auto px-5 scrollbar scrollbar-thumb-slate-900 scrollbar-track-blue-100">
            <p className=''>{CardDescription}</p>
          </div>
        </div>
  )
}

export default Card
