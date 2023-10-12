import React from 'react'

export default function ProjectList({ portfolio }) {
    const projectConteiner = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '20px',
        width: '90%',
        justifyContent: 'space-around',
    }
    const imgStyle = {
        objectFit: 'contain',
    }
    return (
        <div style={projectConteiner}>
            {
                portfolio.map((elem, index) => {
                    return <img style={imgStyle} src={elem.img} key={index} alt={elem.category} />
                })
            }

        </div>
    )
}
