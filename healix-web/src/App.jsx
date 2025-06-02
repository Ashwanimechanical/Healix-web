import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Component/Header'; 
import Footer from './Component/Footer';
import styled from 'styled-components'; 
import HomePage from './Pages/HomePage'; // Make sure this exists and is correctly exported

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
                    {/* Add other routes if needed */}
                </Routes>

                <Footer />
            </AppWrapper>
        </Router>
    );
}

export default App;
