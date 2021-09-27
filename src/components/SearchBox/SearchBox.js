import React from 'react';
import Classes from './SearchBox.module.css';
import ImgSearchBox from '../../assets/images/Bouillouse.png';

const searchBox = (props) => (
    <div className={["container p-2", Classes.searchB].join(' ')}>
        <img src={ImgSearchBox} alt="imgHome" />
        <div className={[Classes.formDiv].join( '')}>
            <form className={["p-2", Classes.formSearch].join(' ')}>
                <input className="p-4" type="search" placeholder="Où voulez-vous allez ?" id="search" />
            </form>
        </div>
    </div>
);

export default searchBox;