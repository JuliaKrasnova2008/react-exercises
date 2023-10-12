import React from 'react'

export default function InputCity({ elem, setValue, setIsActive }) {
    return (
        <li onClick={() => {
            setValue(elem)
            setIsActive(false)
        }}>
            <p>{elem}</p>
        </li>
    )
}
