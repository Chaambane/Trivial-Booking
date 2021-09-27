import React from 'react';
import Classes from './AccomodationCard.module.css';

const accomodationCard = (props) => (
    <a href="#top" className={["me-1 p-1", Classes.cardStyle].join(' ')}>
        <div className="card">
            <img src={props.image} className="card-img-top" alt="accomodation"/>
            <div className="card-body">
                <h5 className="card-title fw-bold mb-0">{props.titleCard}</h5>
                <p className="card-text fst-italic text-muted">{props.titleText}</p>
            </div>
        </div>
    </a>
);

export default accomodationCard;