import React from 'react'
import Message from './Message';
import Response from './Response';
import Typing from './Typing';

export default function MessageHistory({ props }) {

    return (
        <ul>
            {
                props.map((elem, index, arr) => {
                    if (elem.type === 'response') {
                        return <Response elem={elem} key={index} />
                    }
                    if (elem.type === 'message') {
                        return <Message elem={elem} key={index} />
                    } else {
                        return <Typing elem={elem} key={index} />
                    }
                })
            }
        </ul>
    )
}


