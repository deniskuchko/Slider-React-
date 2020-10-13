import React from 'react'
import  leftArrow from '../../img/back.svg'
import  rightArrow from '../../img/next.svg'
import s from './Arrow.module.css'

export default function Arrow({directions, handleClick}) {
    return (
        <div onClick={handleClick} className={s.arrow}
        //onMouseLeave={() => handleClick()}
        onTouchMove={touchMoveEvent => handleClick(touchMoveEvent)}
        style={{
            right:`${directions === 'right' && `25px`}`,
            left:`${directions === 'left' &&  `25px`}`,
            
        }}>
           {directions === 'right' ? <img style={{transform:`translateX(-2px)`}} src={rightArrow}/>
           : <img style={{transform:`translateX(2px)`}} src={leftArrow}/>} 
        </div>
    )
}
