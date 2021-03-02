import React, { useState } from 'react'

type Props = {
    children?: React.ReactNode,
    handlers?: any,
    classes?: any
}

export const Section: React.FC<Props> = ({ children, handlers, classes }) => {
    return (
        <div className={classes} {...handlers}>
            {children && children}
        </div>
    )
}