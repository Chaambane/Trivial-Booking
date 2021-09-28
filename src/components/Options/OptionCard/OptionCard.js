import React from 'react';
import Classes from './OptionCard.module.css';

const optionCard = (props) => (
    <div className={["d-flex flex-wrap",Classes.cardStyle].join(' ')}>
        <a href="#hotels">
            <span>{props.children}</span>
        </a>
    </div>
);

export default optionCard;