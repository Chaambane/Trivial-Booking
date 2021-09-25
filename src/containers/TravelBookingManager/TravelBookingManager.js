import React, {Component} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Options from '../../components/Options/Options';
import SearchBox from '../../components/SearchBox/SearchBox';

class TravelBookingManager extends Component {
    render() {
        return (
            <>
                <Navbar/>
                <main className="container">
                    <Options/>
                    <SearchBox/>
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