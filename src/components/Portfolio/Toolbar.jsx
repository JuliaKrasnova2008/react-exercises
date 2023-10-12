import React from 'react'

export default function Toolbar({ filters, selected, onSelectFilter }) {
    const activeBtn = {
        width: '150px',
        height: '30px',
        fontSize: '15px',
        backgroundColor: 'black',
        borderRadius: '5px',
        cursor: 'pointer',
        color: 'white',
    }
    const unActiveBtn = {
        width: '150px',
        height: '30px',
        fontSize: '15px',
        backgroundColor: 'inherit',
        borderRadius: '5px',
        cursor: 'pointer',
        color: 'black',
    }

    const conteinerBtn = {
        margin: '0',
        width: '70%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: '10px',

    }

    return (
        <div style={conteinerBtn}>
            {filters.map((elem, index) => {
                return <button
                    style={elem === selected ? activeBtn : unActiveBtn}
                    key={index}
                    onClick={() => onSelectFilter(elem)}
                >{elem}</button>
            })}
        </div>
    )
}
