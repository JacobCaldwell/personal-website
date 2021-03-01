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

interface buttonActions {
    next: () => void;
    previous: () => void
}

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

const next = (length: number, current: number): number => (current + 1) % length

const previous = (length: number, current: number): number => (current - 1 + length) % length

export const useCarousel = (length: number, interval: number): [number, SwipeableHandlers, React.CSSProperties[], buttonActions] => {
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

    const actions: buttonActions = {
        next: () => {
            dispatch({
                type: 'next',
                length
            })
        },
        previous: () => {
            dispatch({
                type: 'prev',
                length
            })
        }
    }

    const boxStyle: React.CSSProperties = {
        transform: `translateX(0%)`,
        width: `${(length) * 100}%`,
        left: `-${(state.active + 1) * 100}%`,
        display: 'flex',
        flexDirection: 'row',
        transition: 'transform 500ms ease'
    }

    const itemStyles: React.CSSProperties = {
        flex: '1 1 0'
    }

    if (state.desired !== state.active) {
        state.active = state.desired
        const dist = state.active * (-100 / length)
        boxStyle.transform = `translateX(${dist}%)`;
    }

    useEffect(() => {
        const timeout = setTimeout(() => dispatch({ type: 'next', length }), 10000);
        return () => clearTimeout(timeout);
    }, [state.offset, state.active]);

    return [state.active, handlers, [boxStyle, itemStyles], actions]
}