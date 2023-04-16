import React from 'react';

import {ourStudy} from '../../data';

const Card = () => {
    console.log(ourStudy.map(item => item.lessons[0]))
    return (
        <>
            <ul>
                {ourStudy.map(item => (
                    <li key={item.id}>
                        <div>id:{item.id} - {item.title}</div>
                    </li>
                ))}
            </ul>
        </>
    );
};

export {Card};