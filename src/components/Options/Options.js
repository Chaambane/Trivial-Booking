import React from 'react';
import OptionCard from './OptionCard/OptionCard';

    const options = (props) => (
        <div className="d-flex justify-content-between p-2 mt-2">
            <OptionCard>Hotels</OptionCard>
            <OptionCard>Location vacances</OptionCard>
            <OptionCard>Activités</OptionCard>
            <OptionCard>Restaurants</OptionCard>
            <OptionCard>Forums de voyage</OptionCard>
            <OptionCard>Plus</OptionCard>

        </div>
    );

export default options;