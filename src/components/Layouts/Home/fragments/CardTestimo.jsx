import React from 'react'

const CardTestimo = (props) => {
  const {CardColor = "bg-white",
     CardText = "text-black"
    } = props;
  return (
   <div className={`w-20 md:w-15 aspect-square ${CardColor} ${CardText} text-center p-2 rounded-br-xl  rounded-tl-xl`}>
    <p className="text-xs md:text-sm">Up To</p>
    <h1 className="text-lg md:text-2xl font-bold">350</h1>
    <p className="text-xs md:text-sm">Clients</p>
  </div>
  )
}

export default CardTestimo
