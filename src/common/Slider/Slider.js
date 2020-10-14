import React, { useEffect, useRef, useState } from 'react'
import Arrow from '../Arrow/Arrow'
import Points from '../Points/Points'
import SlideContent from './SlideContent'
import s from './Slider.module.css'



export default function Slider(props) {
    
    let getWidth =()=> {
        return props.itemInSlide? window.innerWidth / props.itemInSlide: window.innerWidth
    }

    let slide = props.img

    const [state,setstate] = useState({
        indexOfSlider:0,
        translate: 0,
        transition:0.45,
    })
    
    const {
        indexOfSlider,
        transition,
        translate
    } = state 

    const playRef = useRef()
    useEffect(()=>{playRef.current = nextSlide})

    useEffect(()=>{
        const playImage = ()=>{
            playRef.current()

        }
        if(props.play != null){
            const intrval = setInterval(playImage, props.play * 1000)
            return ()=>clearInterval(intrval)
        }
    },[props.play])

    const nextSlide=()=>{
        if(indexOfSlider === slide.length -props.itemInSlide){
            return setstate({
                ...state,
                translate:0,
                indexOfSlider:0,
            })
        }
        
        setstate({
            ...state,
            indexOfSlider:indexOfSlider + 1,
            translate:(indexOfSlider + 1) * getWidth()
        })
    }
    const prevSlide=()=>{ 
        if(indexOfSlider === 0){
            return setstate({
                ...state,
                translate:(slide.length - props.itemInSlide) * getWidth(),
                indexOfSlider:(slide.length - props.itemInSlide),
            })
        }
        setstate({
            ...state,
            indexOfSlider:indexOfSlider - 1,
            translate:(indexOfSlider - 1) * getWidth()
        })
    }
    const clickSpan=(index)=>{
        setstate({
            ...state,
            indexOfSlider:index,
            translate:(index) * getWidth()
        })
    }
    return (
        <div className={s.slider}>
            <SlideContent 
                transition={transition}
                translate={translate} 
                width={getWidth() * slide.length}
                slide ={slide}
                between={props.between}
                >
            </SlideContent>
            {!props.play && 
                <div>
                    <Arrow directions ='left' handleClick={prevSlide}/>
                    <Arrow directions='right' handleClick={nextSlide}/>
                </div>
            }
            
            <Points slide={slide} indexOfSlider={indexOfSlider} clickSpan={clickSpan} itemInSlide={props.itemInSlide}/>
        </div>
    )
}

