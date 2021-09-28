import React from 'react';
import Classes from './ExploreIslands.module.css';
import ExploreCardXl from './ExploreCardXl/ExploreCardXl';
import ExploreCard from './ExploreCard/ExploreCard';
import Guadeloupe from '../../assets/images/islands/guadeloupe.png'
import Maurice from '../../assets/images/islands/maurice.jpg'
import Reunion from '../../assets/images/islands/reunion.jpg'
import Seychelles from '../../assets/images/islands/seychelles.jpg'
import Tahiti from '../../assets/images/islands/tahiti.jpg'

const exploreIslands = (props) => (
    <section className="container mt-4">
        <h2 className="fw-bold p-2">Des idées pour votre prochain voyage?</h2>
        <div className="row no-gutters text-center p-2">
            <ExploreCardXl
                nomIles={"Guadeloupe"}
                imgIles={Guadeloupe}
                info={"84 établissements"}
            />
            <ExploreCardXl
                nomIles={"Maurice"}
                imgIles={Maurice}
                info={"27 établissements"}
            />
            <div className={["mt-4", Classes.smallCard].join(' ')}>
                <ExploreCard
                    nomIles={"Reunion"}
                    imgIles={Reunion}
                    infoIles={"27 établissements"}
                />
                <ExploreCard
                    nomIles={"Tahiti"}
                    imgIles={Tahiti}
                    infoIles={"33 établissements"}
                />
                <ExploreCard
                    nomIles={"Seychelles"}
                    imgIles={Seychelles}
                    infoIles={"58 établissements"}
                />
            </div>
        </div>
    </section>
);

export default exploreIslands;