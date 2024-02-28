import React from 'react'
import { faCalendarDays, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = () => {
  return (
    <div className="bg-blue-100 aspect-[4/3] rounded-md">
          <div className=''>
          <img src="/image/inovation.jpg" alt="" className='w-full aspect-video object-cover' />
          </div>
          <h1 className="text-2xl my-5 font-semibold ml-5">judul berita</h1>
          <div className="text-blue-700 text-sm flex ml-5 mb-3">
            <div className="flex mr-5">
              <FontAwesomeIcon
                icon={faUser}
                style={{ color: "#2071fe" }}
                className="self-center mr-1"
              />
              <p>khoirul kholqi</p>
            </div>
            <div className="flex">
              <FontAwesomeIcon icon={faCalendarDays} style={{ color: "#2071fe" }} className="self-center mr-1 " />
              <p>28-09-2023</p>
            </div>
          </div>
          {" "}
          <div className="h-1/2 mx-5 my-4  overflow-auto px-5 scrollbar scrollbar-thumb-slate-900 scrollbar-track-blue-100">
            <p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, corrupti facilis voluptate reiciendis unde quos necessitatibus qui autem vero consequatur. Provident, doloremque odio in maxime, dignissimos molestias eligendi neque accusamus ratione earum eaque aperiam quaerat ex! Tenetur quidem laudantium soluta libero dolore nam! Adipisci velit vitae commodi ex nisi veniam odio ipsa! Tempore, nemo repellat a nihil quidem impedit itaque atque quaerat iure eius natus corrupti neque, illo consequatur vero quia. Doloribus sapiente quis cumque maxime. Fugiat aliquid voluptatem assumenda culpa incidunt quaerat alias dolores quae ipsum, id reiciendis illum dicta! Id architecto atque ut hic sed eligendi debitis praesentium!</p>
          </div>
        </div>
  )
}

export default Card
