import React, { useState } from 'react'
import { Note } from './Note'
import './AddTasks.css'

export default function MainTasks() {
    const [arr, setArr] = useState([])
    const [value, setValue] = useState('')
    const quantityTasks = arr.length


    //добавление
    function handleAdd() {
        setArr((prev) => {
            return [...prev, value].sort()
        })
        setValue("")
    }

    //удаление
    function handleDelete(index) {
        setArr((prevArr) => {
            return prevArr.filter((elem, i) => {
                return index !== i
            })
        })
    }

    return (
        <div className='tasks'>
            <p className='tasks__quantity'>{"Добавлено: " + quantityTasks}</p>
            <form className='tasks__form'>
                <label className='tasks__label'>
                    <input
                        className='tasks__input'
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder='Введите заметку ... '
                    />
                    <button
                        className='tasks__btn'
                        onClick={handleAdd}
                        disabled={value === ""}
                    >+</button>
                </label>
            </form>
            {arr.map((elem, index) => {
                return <Note
                    item={elem}
                    index={index}
                    key={index}
                    onClick={() => handleDelete(index)}
                />
            })}
        </div>
    )
}
