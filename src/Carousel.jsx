import React,{useContext, useEffect, useState} from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { SearchContext } from "./App";
import { Image } from "semantic-ui-react";
import CardSlide from "./CardSlide";

export default function Carousel({state}) {
    const searchContext = useContext(SearchContext)
    const [loading, setLoading] = useState(false)
    const [src, setSrc] = useState(null)
    
    useEffect(()=>{
        if(!state){
            setLoading(true);
            setSrc('')
        }
        else {
            setLoading(false);
            setSrc('https://www.thespruce.com/thmb/SQbJ6YEwiPYfTkLulXaFFF1At98=/941x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-grow-organic-fiddlehead-ferns-2539638-hero-23c689cdd2b74f0c9e817cc6e710f0b8.jpg')
        }
    },[loading])
   
  return (
    <CarouselProvider
      naturalSlideHeight={1}
      naturalSlideWidth={1}
      totalSlides={3}
    >
        <Slider>
            <CardSlide image="ui placeholder"
                index={0}
                header='header'
                src={src}
                
            
            />
            <Slide />
            <Slide />
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
  );
}
