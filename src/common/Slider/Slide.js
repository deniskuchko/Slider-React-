import React from 'react'
import s from './Slider.module.css'

export default function Slide(props) {
    return (
        <div className={s.slide} 
            style={{
                backgroundImage:`url(${props.contents})`,
                margin:` 0 ${props.between}px`,
            }}> 
        </div>
    )
}
