import React from 'react';
import AccomodationCard from '../AccomodationCard/AccomodationCard';
import Aix from '../../assets/images/city/aix.jpg';
import Perpignan from '../../assets/images/city/perpignan.jpg';
import Poitiers from '../../assets/images/city/poitiers.jpg';
import Strasbourg from '../../assets/images/city/strasbourg.jpg';

const travelFrance = (props) => (
    <article className="container mt-4 p-2 shadow-sm p-3 mb-5 bg-body rounded">
        <h2 className="p-1 fw-bold ">Voyagez en France</h2>
        <h3 className="mt-0 fw-light">Les destinations prisées par nos clients</h3>
        <div className="d-flex justify-content-around">
            <AccomodationCard
                image={Aix}
                titleCard={"Aix-en-Provence"}
                titleText={"864 établissements"}
            />
            <AccomodationCard
                image={Perpignan}
                titleCard={"Perpignan"}
                titleText={"425 établissements"}
            />
            <AccomodationCard
                image={Poitiers}
                titleCard={"Poitiers"}
                titleText={"123 établissements"}
            />
            <AccomodationCard
                image={Strasbourg}
                titleCard={"Strasbourg"}
                titleText={"517 établissements"}
            />
        </div>
    </article>
);

export default travelFrance;