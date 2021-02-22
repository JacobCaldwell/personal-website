import React, { useEffect } from 'react'
import { useCarousel } from "../../hooks/useCarousel";



const Carousel: React.FC = ({ children }) => {

    const length = React.Children.count(children)

    const [handlers, styles] = useCarousel(length, 1)


    return (
        <div className="h-screen" style={styles}>
            {children}
        </div>
    )
}


export default Carousel


