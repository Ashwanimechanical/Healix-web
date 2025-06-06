import styled from 'styled-components';
import React from 'react';
import healix_logo from '../assets/healix_logo.svg'; // Assuming this is now just the icon

// New Container to prevent damage on zoom and control overall layout
const PageWrapper = styled.div`
    width: 100%; /* Take full width of its parent */
    max-width: 1400px; /* Adjust this max-width as per your overall page layout */
    margin: 0 auto; /* Center the wrapper on the page */
    box-sizing: border-box; /* Ensures padding doesn't add to the total width */
`;

const HeaderContainer = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between; /* Pushes logo to left, buttons to right */
    align-items: center; /* Vertically centers items */
    padding: 20px 40px; /* Apply padding here to control spacing from edges */
    background-color: #fff; /* Assuming a white background based on the image */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05); /* Optional: subtle shadow for header */
    box-sizing: border-box; /* Ensures padding doesn't add to the total width */

    @media (max-width: 768px) {
        padding: 15px 20px; /* Reduce padding on smaller screens */
    }

    @media (max-width: 480px) {
        /* On very small screens, only logo and contact button will be visible */
        justify-content: space-between; /* Keep content spaced out */
        padding: 15px 15px; /* Adjust padding for mobile */
    }
`;

const Logo = styled.img`
    height: 40px; /* Adjust logo size as needed */
    flex-shrink: 0; /* Prevent logo from shrinking */

    @media (max-width: 768px) {
        height: 35px; /* Slightly smaller logo on tablets */
    }

    @media (max-width: 480px) {
        height: 30px; /* Even smaller logo on mobile */
    }
`;

const NavLinks = styled.nav`
    display: flex;
    align-items: center; /* Vertically centers items within NavLinks */
    gap: 30px; /* Space between nav items */

    @media (max-width: 768px) {
        gap: 20px; /* Reduce space between nav items on smaller screens */
    }

    @media (max-width: 480px) {
        /* On mobile, we only want the Contact link to be visible */
        gap: 0; /* No gap needed as only one item will be visible */
    }
`;

const NavLink = styled.a`
    text-decoration: none;
    color: #333; /* Darker text color */
    font-size: 16px;
    font-weight: 500;
    white-space: nowrap; /* Prevent text wrapping */

    &:hover {
        color: #007bff; /* Example hover color */
    }

    @media (max-width: 768px) {
        font-size: 15px;
    }

    @media (max-width: 480px) {
        font-size: 16px;
        padding: 0; /* Remove padding */
        display: block; /* Ensure it's always visible on mobile */
    }
`;

const Button = styled.button`
    padding: 12px 25px;
    border: none;
    border-radius: 8px; /* Slightly rounded corners */
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;
    white-space: nowrap; /* Prevent text wrapping */

    &:hover {
        opacity: 0.9;
    }

    @media (max-width: 768px) {
        padding: 10px 20px;
        font-size: 15px;
    }

    @media (max-width: 480px) {
        display: none; /* Hide buttons on mobile */
    }
`;

const PrimaryButton = styled(Button)`
    background-color: #222; /* Dark button background */
    color: #fff; /* White text for dark button */
    display: flex; /* Keep flex for icon alignment on larger screens */
    align-items: center;
    justify-content: center;
    gap: 8px; /* Space for icon if needed */

    @media (max-width: 480px) {
       display: none; /* Explicitly hide on mobile */
    }
`;

const SecondaryButton = styled(Button)`
    background-color: #f0f0f0; /* Light button background */
    color: #333; /* Dark text for light button */

    @media (max-width: 480px) {
       display: none; /* Explicitly hide on mobile */
    }
`;

const Icon = styled.span`
    /* Style for the icon inside the "Get Started" button */
    font-size: 18px; /* Adjust icon size */
`;

const Header = () => {
    return (
        <PageWrapper>
            <HeaderContainer>
                {/* Assuming healix_logo.svg now only contains the icon */}
                <Logo src={healix_logo} alt="Healix Logo Icon" />
                <NavLinks>
                    <NavLink href="#">Contact</NavLink>
                    {/* These buttons will be hidden on mobile via CSS */}
                    <SecondaryButton>How it works</SecondaryButton>
                    <PrimaryButton>
                        <Icon>⚡</Icon> {/* Replace with your actual icon */}
                        Get Started
                    </PrimaryButton>
                </NavLinks>
            </HeaderContainer>
        </PageWrapper>
    );
}

export default Header;