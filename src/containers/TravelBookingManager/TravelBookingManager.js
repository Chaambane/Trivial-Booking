import React, {Component} from 'react';
import Navbar from '../../components/Navbar/Navbar';

class TravelBookingManager extends Component {
    render() {
        return (
            <>
                <Navbar/>
                <main className="container">
                    ongletsBox <br />
                    searchBox <br />
                    Un week-end de rêve Box <br />
                    Vous aimeriez aussi Box <br />
                    Explorer les îles Box
                </main>
                <footer className="container-fluid">
                    mon Footer
                </footer>
            </>
        )
    };
}

export default TravelBookingManager;