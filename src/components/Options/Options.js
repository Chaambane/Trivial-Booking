import React from 'react';
import Classes from './Options.module.css';
import OptionCard from './OptionCard/OptionCard';

    const options = (props) => (
        <div className={["p-2", Classes.optionDiv].join(' ')}>
            <OptionCard>Hôtels</OptionCard>
            <OptionCard>Appartements</OptionCard>
            <OptionCard>Complexes hôteliers</OptionCard>
            <OptionCard>Villas</OptionCard>
            <OptionCard>Restaurants</OptionCard>
        </div>
    );

export default options;