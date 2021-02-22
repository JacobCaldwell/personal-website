import React, { useState } from "react"

type Props = {
    onClick: (input: boolean) => void
}

const Hamburger: React.FC<Props> = ({ onClick }) => {

    const [toggleState, setToggleState] = useState(false)

    type menuTypes = {
        id: number, 
        name: string,
        link: string
    }

    const menuItem: Array<menuTypes> = [
        {
            id: 1,
            name: "Work",
            link: "#Work",
        },
        {
            id: 2,
            name: "About",
            link: "#About",
        },
        {
            id: 3,
            name: "Contact",            
            link: "#Contact",
        }
    ]

const handleClick = (): void => {
    setToggleState(!toggleState)
    onClick && onClick(toggleState)
}

return (
    <div className="flex flex-row-reverse relative pr-2 sm:pr-10">
        <button
            className={`z-40 mt-2 mr-1 focus:outline-none hamburger hamburger--spin ${toggleState && 'is-active'}`}
            type="button"
            onClick={handleClick} >
            <span className="hamburger-box">
                <span className="hamburger-inner"></span>
            </span>
        </button>
        {/* <div className={`bg-white text-black fixed flex flex-col align-middle items-start rounded-2xl overflow-hidden shadow-2xl ${toggleState ? 'p-8 pt-14 scale-up' : 'scale-down'} transition-nav origin-top-right`}>
            {menuItem.map((item) => {
                return <div key={item.id} className={`pl-2 pr-28 py-2 text-lg uppercase opacity-0 hover:text-blue-600 transition-colors ${toggleState && 'opacity-100'}`}><a href={item.link}>{item.name}</a></div>
            })}
        </div> */}
    </div>
)
}


export default Hamburger
