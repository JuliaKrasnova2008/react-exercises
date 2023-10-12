import React, { useEffect, useState } from 'react'
import InputCity from './InputCity';

export default function Input({ items }) {
    // console.log(items);
    const [value, setValue] = useState("")
    const [isActive, setIsActive] = useState(false)

    return (
        <form>
            <label>
                Город
                <input
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value)
                        setIsActive(e.target.value.trim() !== "")
                    }
                    }
                />
                {isActive && (
                    <ul>
                        {items.filter((valueArr) => {
                            return valueArr.toLowerCase().includes(value.toLowerCase())
                        }).slice(0, 5)
                            .map((elem, index) => {
                                return <InputCity elem={elem} key={index} setValue={setValue} setIsActive={setIsActive} />
                            })}

                    </ul>
                )
                }
            </label>
        </form>
    )
}
