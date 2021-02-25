import React, { useState } from 'react'

type Props = {
    children?: React.ReactNode,
    handlers?: any
}

export const Section: React.FC<Props> = ({ children, handlers }) => {
    return (
        <div className={`w-scr en z-10`} {...handlers}>
            {children && children}
        </div>
    )
}