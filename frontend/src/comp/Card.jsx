import React from 'react'
import banner from '/banner.jpg'
function Card({item}) {
  return (
    <>
    <div  className=" mt-4 pl-3">
      <div className="card w-104 bg-base-100 shadow-xl z-0 hover:scale-105 duration-200">
  <figure><img  className="w-60 h-40"src={banner} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title font-bold">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="btn btn-primary hover:bg-black-500 text-white"><span>${item.price}</span>Buy Now</div>
    
  </div>
</div>
</div>
    </>
  )
}

export default Card
