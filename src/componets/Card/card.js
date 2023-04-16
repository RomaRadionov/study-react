import React from 'react';

import {ourStudy} from '../../data';

const Card = () => {
    return (
        <div>
            <ul>
                {ourStudy.map(item => (
                    <li key={item.id}>{item.id}</li>
                ))}
            </ul>
        </div>
    );
};

export {Card};