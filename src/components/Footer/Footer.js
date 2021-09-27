import React from 'react';
import Classes from './Footer.module.css';

const footer = (props) => (
    <footer className={["container-fluid mt-4 p-2 text-center rounded", Classes.footerColor].join(' ')}>
        <div>
            <p className="fw-bold p-2">chaambane-dev@2021</p>
        </div>
    </footer>
);

export default footer;