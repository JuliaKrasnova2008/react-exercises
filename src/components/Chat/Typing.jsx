import React from 'react'

export default function Typing({ elem }) {
    return (
        <li>
            <div className="message-data">
                <span className="message-data-name"><i className="fa fa-circle online"></i> {elem.from.name}</span>
                <span className="message-data-time">{elem.time}</span>
            </div>
            <div className="message my-message">...</div>
        </li>
    )
}
