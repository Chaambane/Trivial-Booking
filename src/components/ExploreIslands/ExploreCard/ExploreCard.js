import React from 'react';
import Classes from './ExploreCard.module.css';

const exploreCard = (props) => (
    <a href="#voyage" className={[Classes.cardStyle].join(' ')}>
        <div className="card p-1">
            <h5 className="card-title fw-bold">{props.nomIles}</h5>
            <img src={props.imgIles} className="card-img-top rounded" alt="imgiles" />
            <div className="card-body text-muted">{props.infoIles}</div>
        </div>
    </a>
);

export default exploreCard;