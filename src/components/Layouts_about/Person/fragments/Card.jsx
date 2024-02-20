import React from 'react'

const Card = () => {
  return (
    <div class="bg-blue-600 rounded-t-[100px] w-[200px] h-[300px] px-[20px] text-center text-[#585DF5] font-bold">
            <div>
              <img
                src="image/person.png"
                alt=""
                class="filter drop-shadow-md"
              />
              <div class="name bg-white px-[10px] py-[5px] rounded-[3px] shadow-md mt-[-10px]">
                Alfar Ramazhan
              </div>
              <div class="position bg-white px-[10px] py-[5px] rounded-[3px] shadow-md mt-[10px]">
                Backend Developer
              </div>
            </div>
          </div>
  )
}

export default Card
