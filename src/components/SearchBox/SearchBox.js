import React from 'react';
import Classes from './SearchBox.module.css';

const searchBox = (props) => (
    <div className={[Classes.formDiv].join( '')}>
        <form className={["p-2", Classes.formSearch].join(' ')}>
            <input className="p-4" type="search" placeholder="Où voulez-vous allez ?" id="search" />
        </form>
    </div>
);

export default searchBox;