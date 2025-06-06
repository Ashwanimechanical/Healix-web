import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

// Import your components
import Header from './Component/Header';
import Footer from './Component/Footer';

// Import your page components
import HomePage from './Pages/HomePage';
import HomePageTwo from './Pages/HomePageTwo';
import HomePageThree from './Pages/HomePageThree';
import HomePageFour from './Pages/HomePageFour';
import HomePageFive from './Pages/HomePageFive';

const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100vw; /* <-- Changed to 100vw to take full viewport width */
    margin: 0; /* Ensuring no external margin for AppWrapper */
    padding: 0; /* Ensuring no external padding for AppWrapper */
    box-sizing: border-box; /* Ensures padding/border are included in the width */
    overflow-x: hidden; /* <-- Crucial to prevent horizontal scroll if 100vw causes it */
`;

function App() {
    return (
        <Router>
            <AppWrapper>
                <Header />

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path='homepagetwo' element={<HomePageTwo />} />
                    <Route path='homepagethree' element={<HomePageThree />} />
                    <Route path='homepagefour' element={<HomePageFour />} />
                    <Route path='homepagefive' element={<HomePageFive />} />
                </Routes>

                <Footer />
            </AppWrapper>
        </Router>
    );
}

export default App;