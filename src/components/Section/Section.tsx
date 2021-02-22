import React, { useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import Navbar from '../Navbar/Navbar'

type Props = {
    children?: React.ReactNode,
    handlers?: any

}

export const Section: React.FC<Props> = ({children, handlers}) => {


    return (
        <div className={`w-scr en z-10`} {...handlers}>
            {children && children}
        </div>
    )
}

