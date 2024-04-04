import React from 'react'
import  { useEffect,useState } from 'react'
import axios from 'axios'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card'
function Freecourse() {
  const [book,setBook]=useState([])
  useEffect(()=>{
      const getBook =async()=>{
try {
  const res=await axios.get("http://localhost:8000/book")
   console.log(res.data)
       setBook(res.data)
  }
catch (error) {
  console.log(error)
}
}
getBook();
}, [])
    const filterdata=book.filter((data)=>data.category==="free")
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
      <div className='max-w-screen-2x1 container mx-auto md:px-20 px-4 z-0'>
        <h1 className='text-white-xl font-semibold pb-2'>Free books</h1>
        <p className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="silder-conatiner">
            <Slider {...settings}>
                {filterdata.map((item)=>(
                    <Card item={item} key={item.id}/>
                ))}
           
            </Slider>
        </div>
      </div>
    </>
  )
}

export default Freecourse
