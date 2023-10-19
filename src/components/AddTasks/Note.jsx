import React from "react";
import task from '../../images/Task.svg'

export const Note = (props) => {
    const { item, ...restProps } = props;

    return (
        <div {...restProps} className="note">
            <img className="note__img" src={task} alt="Заметка" />
            {item || ""}
        </div>
    );
};
