import React, {Component} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Options from '../../components/Options/Options';

class TravelBookingManager extends Component {
    render() {
        return (
            <>
                <Navbar/>
                <main className="container">
                    <Options/>
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