import React from 'react';
import AccomodationCard from '../AccomodationCard/AccomodationCard';
import Hotels from '../../assets/images/accommodationType/Hotels.jpg'
import Appartement from '../../assets/images/accommodationType/Appartements.jpg'
import Complexes from '../../assets/images/accommodationType/complexes.jpg'
import Villas from '../../assets/images/accommodationType/villas.jpg'

const accommodation = (props) => (
    <article className="container mt-4 p-2">
        <h2 className="p-3 fw-bold text-uppercase">Les types d'hebergements</h2>
        <div className="d-flex justify-content-around">
            <AccomodationCard
                image={Hotels}
                titleCard={"Hôtels"}
                titleText={"739 864 hôtels"}
            />
            <AccomodationCard
                image={Appartement}
                titleCard={"Appartements"}
                titleText={"30425 Appartements"}
            />
            <AccomodationCard
                image={Complexes}
                titleCard={"Complexes"}
                titleText={"14 023 complexes"}
            />
            <AccomodationCard
                image={Villas}
                titleCard={"Villas"}
                titleText={"298 517 villas"}
            />
        </div>
    </article>
);

export default accommodation;