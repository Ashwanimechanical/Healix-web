import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Component/Header'; 
import Footer from './Component/Footer';
import styled from 'styled-components'; 
import HomePage from './Pages/HomePage'; 
import HomePageTwo from './Pages/HomePageTwo';
import HomePageThree from './Pages/HomePageThree';
import HomePageFour from './Pages/HomePageFour';

const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
                </Routes>

                <Footer />
            </AppWrapper>
        </Router>
    );
}

export default App;
