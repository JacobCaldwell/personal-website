import React, { useEffect } from 'react'
import { useCarousel } from "../../hooks/useCarousel";



const Carousel: React.FC = ({ children }) => {

    const length = React.Children.count(children)

    const [handlers, styles, actions] = useCarousel(3, 1)

    return (
        <div className='relative'>
            {/* <div className="h-screen" style={styles} {...handlers}>
                {children}
            </div> */}
            <div className="flex flex-col justify-between">
                <button className=" top-1/2 " onClick={() => actions.next()}>Next</button>
                <button className=" top-1/2 " onClick={() => actions.previous()}>Prev</button>
            </div>
        </div>
    )
}


export default Carousel


