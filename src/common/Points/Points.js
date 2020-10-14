import React from 'react'
import s from './Points.module.css'

  const  Point = ({active,index,clickSpan})=> {

    return <span 
        className = {s.point} 
        style={{background:`${active? 'black' : 'white'}`}}
        onClick={()=>{clickSpan(index)}}
    >
    </span>
}

export default function Points({slide,indexOfSlider,clickSpan, itemInSlide} ) {
    return (
        <div className={s.points} >
            {slide.map((slide, i)=> <Point key={slide} 
                active={indexOfSlider === i} 
                index={i} 
                clickSpan={clickSpan}/>)}
        </div>
    )
}
