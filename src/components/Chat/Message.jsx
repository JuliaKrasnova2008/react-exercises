import React from 'react'


export default function Message({ elem }) {
    return (
        <li className="clearfix">
            <div className="message-data align-right">
                <span className="message-data-time">{elem.time}</span>
                <span className="message-data-name">{elem.from.name}</span>
                <i className="fa fa-circle me"></i>
            </div>
            <div className="message other-message float-right">
                {elem.text}
            </div>
        </li>
    )
}
