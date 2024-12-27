import React from 'react'
import '../Carousel/Carousel.css';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {img} from './imgs/data';
function CaroEfffect() {
  return (
    <div style={{height:"750px", overflow:"hidden"}}>
<Carousel
autoPlay={true}
infiniteLoop={true}
showIndicators={false}
showThumbs={false}
showStatus={false}
showArrows={false}
>
{
  img.map((imageItemLink)=>{
    return <img src={imageItemLink} style={{height:"750px"}}/>
  })
}

</Carousel>
<div className={"hero_img"}></div>
    </div>
  )
}

export default CaroEfffect