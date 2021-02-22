import React, { useEffect, useReducer } from "react";
import { useSwipeable, SwipeableHandlers } from "react-swipeable";

interface State {
    offset: number;
    desired: number;
    active: number;
}

const initialState: State = {
    offset: 0,
    desired: 0,
    active: 0,
};

interface nextAction {
    type: 'next'
    length: number
}

interface prevAction {
    type: 'prev';
    length: number;
}

type Actions =
    | nextAction
    | prevAction

const reducer = (state: State, action: Actions): State => {
    switch (action.type) {
        case 'next':
            return { ...state, desired: next(action.length, state.active) };
        case 'prev':
            return { ...state, desired: previous(action.length, state.active) };
        default:
            return state;
    }
}

const next = (length: number, current: number): number => {
    return (current + 1) % length;
}

const previous = (length: number, current: number): number => {
    return (current - 1 + length) % length;
}

export const useCarousel = (length: number, interval: number): [SwipeableHandlers, React.CSSProperties] => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const handlers: SwipeableHandlers = useSwipeable({
        onSwipedLeft(event) {
            dispatch({
                type: 'next',
                length
            })
        },
        onSwipedRight(event) {
            dispatch({
                type: 'prev',
                length
            })
        },
        trackMouse: true,
        trackTouch: true
    })

    const style: React.CSSProperties = {
        transform: 'translateX(0)',
        width: `${(length + 2) * 100}%`,
        left: `-${(state.active + 1) * 100}%`,
        display: 'flex',
        flexDirection: 'row'
    }

    if (state.desired !== state.active) {
        style.transform = `translateX(${window.innerWidth}px)`
    }



    return [handlers, style]


}