import React from 'react';
import Classes from './ExploreCardXl.module.css';

const exploreCardXl = (props) => (
    <div className="col-6">
        <a href="#voyage" className={[Classes.cardXlStyle].join(' ')}>
            <div className="card p-1">
                <div className="card-title fw-bold fs-5">{props.nomIles}</div>
                <img src={props.imgIles} className="card-img-top rounded" alt="iles" />
                <div className="card-body text-muted fw-bold">{props.info}</div>
            </div>
        </a>
    </div>
);

export default exploreCardXl;