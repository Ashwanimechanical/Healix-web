import styled from 'styled-components';
import React from 'react';
import healix_logo from '../assets/healix_logo.svg';

// --- Navbar Container ---
// This container provides the full-width background and shadow for the header.
const NavbarContainer = styled.div`
  width: 100%; /* Ensures the container takes full width */
  background-color: #fff; /* Moved background color here for full-width header bar */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05); /* Moved shadow here for full-width header bar */
   /* Keep header sticky on scroll */
  top: 0;
  z-index: 1000; /* Ensure header is above other content */
  
`;

// --- Header Content Container ---
// This container now holds the actual content (logo, nav links) and constrains its width.
const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1400px; /* NEW: Set a maximum width for the header's content */
    margin: 0 auto;     /* NEW: Center the content horizontally within NavbarContainer */
    padding: 20px 40px; /* Keep padding for content spacing relative to its own edges */
    flex-wrap: wrap; /* Allow items to wrap on smaller screens */
    

    /* Remove background-color and box-shadow from here as they are now on NavbarContainer */
    /* background-color: #fff; */
    /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05); */

    @media (max-width: 1440px) { /* Adjust padding for screens just slightly larger than max-width */
        padding: 20px 40px; /* Maintain desktop padding up to this size */
    }

    @media (max-width: 768px) {
        padding: 15px 20px; /* Adjust padding for mobile */
        gap: 15px; /* Space between stacked items */
    }
`;

const Logo = styled.img`
    height: 40px; /* Adjust logo size as needed */

    @media (max-width: 768px) {
        height: 35px; /* Slightly smaller logo on mobile */
    }
`;

const NavLinks = styled.nav`
    display: flex;
    align-items: center;
    gap: 30px; /* Space between nav items */

    @media (max-width: 768px) {
        gap: 15px; /* Space between stacked links/buttons */
    }
`;

const NavLink = styled.a`
    text-decoration: none;
    color: #333; /* Darker text color */
    font-size: 16px;
    font-weight: 500;
    &:hover {
        color: #007bff; /* Example hover color */
    }

    @media (max-width: 768px) {
        font-size: 15px; /* Slightly smaller font on mobile */
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
    width: auto; /* Default width */

    &:hover {
        opacity: 0.9;
    }

    @media (max-width: 768px) {
        width: 80%; /* Make buttons wider on mobile for easier tapping */
        max-width: 250px; /* Limit max width for very large phones */
        padding: 10px 20px; /* Slightly less padding */
        font-size: 15px; /* Smaller font */
        display: none; /* Hide buttons on mobile */
    }
`;

const PrimaryButton = styled(Button)`
    background-color: #222; /* Dark button background */
    color: #fff; /* White text for dark button */
    display: flex;
    justify-content: center; /* Center content within button on mobile */
    align-items: center;
    gap: 8px; /* Space for icon if needed */

    @media (max-width: 768px) {
        display: none; /* Explicitly hide on mobile */
    }
`;

const SecondaryButton = styled(Button)`
    background-color: #f0f0f0; /* Light button background */
    color: #333; /* Dark text for light button */
    display: flex;
    justify-content: center; /* Center content within button on mobile */
    align-items: center;

    @media (max-width: 768px) {
        display: none; /* Explicitly hide on mobile */
    }
`;

const Icon = styled.span`
    /* Style for the icon inside the "Get Started" button */
    font-size: 18px; /* Adjust icon size */

    @media (max-width: 768px) {
        font-size: 16px; /* Slightly smaller icon on mobile */
    }
`;

const Header = () => {
    return (
        <NavbarContainer> {/* Provides full-width background and shadow */}
            <HeaderContainer> {/* Constrains and centers the header content */}
                <Logo src={healix_logo} alt="Healix Logo" />
                <NavLinks>
                    <NavLink href="#">Contact</NavLink>
                    {/* These buttons will be hidden on mobile due to their styled components */}
                    <SecondaryButton>How it works</SecondaryButton>
                    <PrimaryButton>
                        <Icon>⚡</Icon> {/* Replace with your actual icon, e.g., <FaBolt /> if using react-icons */}
                        Get Started
                    </PrimaryButton>
                </NavLinks>
            </HeaderContainer>
        </NavbarContainer>
    );
}

export default Header;