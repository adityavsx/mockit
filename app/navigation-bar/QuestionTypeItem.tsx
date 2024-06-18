﻿'use client'
import LibraryAddTwoToneIcon from '@mui/icons-material/LibraryAddTwoTone';

// This is the click
function tickClick() {
    console.log('tick-clicked')
}

export default function NavbarCardItem(props: {
    name: string,
    desc: string
}) {
    return (
        <div className = "flex group">
            <div className="w-full font-light text-sm flex transition-colors duration-500 ease-in-out hover:bg-question-type-item-hover rounded p-2">
                <LibraryAddTwoToneIcon style={{
                    color: '#000D7C',
                    width: "30px",
                }} onClick={tickClick} className= "cursor-pointer active:fill-black"/>
                <text className = "mx-3">
                    {props.name}
                </text>
            </div>
            <span className="w-80 absolute p-2 right-90 rounded-md left-80 shadow-lg text-white bg-black font-regular transition-all duration-500 scale-0 origin-left group-hover:scale-100">
                <p>{props.desc}</p>
            </span>
        </div>
    )
}