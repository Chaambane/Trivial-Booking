import React from 'react';
import Classes from './Navbar.module.css';

import LogoTrivialBooking from '../../assets/images/logo.png'

    const navbar = (props) => (
        <header className="container mt-4">
            <nav className="navbar navbar-expand-lg fixed-top p-3">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#top">
                        <h1 className={[Classes.navH1].join(' ')}>
                            <img src={LogoTrivialBooking} alt="logo" className="me-1" />
                            <span className="fw-bold fs-4">Travel-Booking</span>
                        </h1>
                    </a>
                    <button className={["navbar-toggler btn btn-white", Classes.navTogglerBtn].join(' ')} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="fw-bold fs-6">Menu</span>
                    </button>
                    <div className="d-flex">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className={["navbar-nav me-auto mb-2 mb-lg-0", Classes.navUl].join(' ')}>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#top" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Forum
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#top">Voyage</a></li>
                                        <li><a className="dropdown-item" href="#top">Touriste</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#voyages">Voyages</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#alertes">Restaurants</a>
                                </li>
                                <li className="nav-item">
                                    <a className={["nav-link", Classes.signIn].join(' ')} href="#registration">Sign-in</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );

export default navbar;