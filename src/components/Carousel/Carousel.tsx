import React, { useEffect } from 'react'
import { useCarousel } from "../../hooks/useCarousel";

type CarouselItemBoxProps = {
    children?: React.ReactElement | React.ReactElement[]
    style: React.CSSProperties
}

const Carousel: React.FC = ({ children }) => {

    // const length = React.Children.count(children)

    const [handlers, styles, actions] = useCarousel(3, 1)

    return (
        <Wrapper>
            <div className="h-56" style={styles} {...handlers}>
                {children}
            </div>
            <CarouselItemBox style={styles} {...handlers}>
                <CarouselItem>test1</CarouselItem>
                <CarouselItem>test2</CarouselItem>
                <CarouselItem>test3</CarouselItem>
            </CarouselItemBox>
            <div className="flex flex-col justify-between">
                <button className=" top-1/2 " onClick={() => actions.next()}>Next</button>
                <button className=" top-1/2 " onClick={() => actions.previous()}>Prev</button>
            </div>
        </Wrapper>
    )
}

const CarouselItem: React.FC = ({ children }) => {
    return (<div>{children}</div>)
}

const CarouselItemBox: React.FC<CarouselItemBoxProps> = ({ children, style }) => {
    return (<div>{children}</div>)
}

const Wrapper: React.FC = ({ children }) => {
    return (<div>{children}</div>)
}

export default Carousel


