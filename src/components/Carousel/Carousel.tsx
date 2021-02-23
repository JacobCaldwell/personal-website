import React, { useEffect } from 'react'
import { useCarousel } from "../../hooks/useCarousel";



const Carousel: React.FC = ({ children }) => {

    const length = React.Children.count(children)

    const [handlers, styles, actions] = useCarousel(length, 1)

    const nextHandler = () => {
        actions.next()
    }

    const prevHandler = () => {
        actions.previous()
    }

    return (
        <div className="h-screen" style={styles} {...handlers}>
            {children}
            <button className="absolute left-0" onClick={() => actions.next()}>Next</button>
            <button className="absolute left-72" onClick={() => actions.previous()}>Prev</button>
        </div>
    )
}


export default Carousel


