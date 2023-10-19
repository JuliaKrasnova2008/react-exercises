import React, { useState } from 'react'

import './Slides.css'

export default function Slides({ slides, loop, navs, pags }) {

    const [index, setIndex] = useState(0)

    const allPages = slides.length
    console.log(index);


    function handleLeft(index) {
        if (index > 0) {
            setIndex(index - 1)
        } else {
            if (loop) {
                setIndex(slides.length - 1)
            }
        }
    }
    function handleRight(index) {
        if (index < slides.length - 1) {
            setIndex(index + 1)
        } else {
            if (loop) {
                setIndex(0)
            }
        }
    }

    return (
        <div clSlides="slides">
            <button
                onClick={() => handleLeft(index)}
            >лево</button>
            <ul className='slides__list'>

                <li className='slides__item'
                // onClick={ }
                >
                    {pags &&
                        <p>{index + 1}/{allPages}</p>
                    }
                    <img src={slides[index].img} />
                    <p>{slides[index].text}</p>
                    {navs &&
                        slides.map((elem, i) => {
                            return <p className={index === i ? 'navs navs__active' : 'navs'}></p>
                        })
                    }
                </li>

            </ul>
            <button
                onClick={() => handleRight(index)}
            >право</button>

        </div >
    )
}
