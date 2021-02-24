import React, { useEffect } from 'react'
import { useCarousel } from "../../hooks/useCarousel";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

type CarouselItemBoxProps = {
    style: React.CSSProperties
}

type CarouselItemProps = {
    style: React.CSSProperties
}

type Props = {
    items: React.ReactNode[]
}

type CarouselButtonProps = {
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
}


const buttonWrapper: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    fontSize: '2rem',
    justifyContent: 'space-between',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    position: 'absolute',
    top: '50%',
    width: '100%',
    zIndex: 10,
}

const Carousel: React.FC<Props> = ({ children, items }) => {

    const [active, handlers, [boxStyle, itemStyle], actions] = useCarousel(items.length, 1)

    const clickNext = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        event.preventDefault()
        actions.next()
    }
    const clickPrev = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        event.preventDefault()
        actions.previous()
    }

    return (
        <Wrapper>
            <div className="outline-none" style={buttonWrapper}>
                <CarouselButton onClick={clickPrev}>
                    <FiChevronLeft />
                </CarouselButton>
                <CarouselButton onClick={clickNext}>
                    <FiChevronRight />
                </CarouselButton>
            </div>
            <CarouselItemBox style={boxStyle} {...handlers}>
                {items?.map((item, idx) => {
                    return <CarouselItem key={idx} style={itemStyle}>{item}</CarouselItem>
                })}
            </CarouselItemBox>
        </Wrapper>
    )
}

const CarouselButton: React.FC<CarouselButtonProps> = ({ children, onClick }) => {
    return (<button onClick={onClick}>{children}</button>)
}

const CarouselItem: React.FC<CarouselItemProps> = ({ children, style }) => {
    return (<div style={style}>{children}</div>)
}

const CarouselItemBox: React.FC<CarouselItemBoxProps> = ({ children, style }) => {
    return (<div style={style}>{children}</div>)
}

const Wrapper: React.FC = ({ children }) => {
    return (<div className="relative">{children}</div>)
}

export default Carousel


