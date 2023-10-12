import React from 'react'

export default function Response({ elem }) {

    return (
        <li>
            <div className="message-data">
                <span className="message-data-name"><i className="fa fa-circle online"></i> {elem.from.name}</span>
                <span className="message-data-time">{elem.time}</span>
            </div>
            <div className="message my-message">
                {elem.text}
            </div>
        </li>
    )
}
