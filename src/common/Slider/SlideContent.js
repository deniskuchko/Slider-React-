import React from 'react'
import Slide from './Slide'

export default function SlideContent(props) {
let slide = props.slide
    return (
        <div style={{
            transform:`translateX(-${props.translate}px)`,
            transition: `transform ${props.transition}s ease-out 0s`,
            height:`100%`,
            width:`${props.width}px`,
            display:`flex`
        }}>
            {slide.map((slide,index)=><Slide key={index} contents={slide}/>)}
            

        </div>
    )
}
