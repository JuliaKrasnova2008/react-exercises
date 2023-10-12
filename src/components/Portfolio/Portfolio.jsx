import React, { useState } from 'react'
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';
import useWindow from '../../hooks/useWindow';

export default function Portfolio({ portfolio }) {
    //стили
    const portfolioConteiner = {
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
    }
    //кнопка, на которую нажали и ее состояние
    const [check, setIsCheck] = useState("All")

    //получаю массив с уникальными названиями всех фильтров
    const filters = portfolio.reduce((result, elem) => {
        if (!result.includes(elem.category)) {
            result.push(elem.category)
            return result
        }
        return result
    }, [])

    //получаю элемент на котором кликнули и меняю на самое название
    function onSelectFilter(filter) {
        setIsCheck(filter)
    }
    //кастомный хук
    const [width, height] = useWindow()


    return (
        <div style={portfolioConteiner}>
            <span>{width + "px" + "*" + height + "px"}</span>
            <Toolbar filters={['All', ...filters]} selected={check} onSelectFilter={onSelectFilter} />
            <ProjectList
                portfolio={check === "All" ? portfolio : portfolio.filter((elem) => {
                    return elem.category.includes(check)
                })} />
        </div>
    )
}
