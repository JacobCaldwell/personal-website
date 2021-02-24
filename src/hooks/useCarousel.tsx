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

const next = (length: number, current: number): number => {
    // console.log(`Run next: curr:${current} len: ${length} Value: ${(current + 1 + length) % length}`);
    return (current + 1) % length;
}

const previous = (length: number, current: number): number => {
    // console.log(`Run prev: curr:${current} len: ${length} Value: ${(current - 1 + length) % length}`);
    return (current - 1 + length) % length;
}

const transitionTime = 400;
const smooth = `transform ${transitionTime}ms ease`;

export const useCarousel = (length: number, interval: number): [SwipeableHandlers, React.CSSProperties, buttonActions] => {
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

    const style: React.CSSProperties = {
        transform: 'translateX(0)',
        width: `${(length) * 100}%`,
        left: `-${(state.active + 1) * 100}%`,
        display: 'flex',
        flexDirection: 'row'
    }


    if (state.desired !== state.active) {

        // const distanceBetweenActiveAndDesired = desired > active ? desired - active : active - desired
        // const directionOfMovement = desired > active ? 1 : -1


        state.active = state.desired

        const translateDistance = state.active * (-100 / length)
        style.transition = smooth;
        style.transform = `translateX(${translateDistance}%)`;


        // console.log({ active, desired, distanceBetweenActiveAndDesired, directionOfMovement, translateDistance });





    }



    return [handlers, style, actions]
}