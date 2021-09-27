import React, {Component} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Options from '../../components/Options/Options';
import SearchBox from '../../components/SearchBox/SearchBox';
import Accommodation from '../../components/Accomodation/Accomodation';
import TravelFrance from '../../components/TravelFrance/TravelFrance'

class TravelBookingManager extends Component {
    render() {
        return (
            <>
                <Navbar/>
                <main className="container">
                    <Options/>
                    <SearchBox/>
                    <Accommodation/>
                    <TravelFrance/>
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