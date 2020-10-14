import React from 'react'
import Slide from './Slide'
import s from './Slider.module.css'

export default function SlideContent(props) {
let slide = props.slide
    return (
        <div className={s.slideContent} 
            style={{
                transform:`translateX(-${props.translate}px)`,
                transition: `transform ${props.transition}s ease-out 0s`,
                width:`${props.width}px`,
            }}>
            {slide.map((slide,index)=><Slide key={index} contents={slide} between={props.between}/>)}
        </div>
    )
}
