import React from 'react'

export default function Slide(props) {
    return (
        <div style={{
            backgroundImage:`url(${props.contents})`,
            width: `100%`,
            height: `100%`,
            backgroundRepeat: 'round',
            backgroundSize: 'cover',
        } }>
            
            
        </div>
    )
}
