import React from 'react';
import styled from 'styled-components';

// Reusing the PageWrapper from the header to ensure consistent max-width and centering
const PageWrapper = styled.div`
    width: 100%; /* Take full width of its parent */
    max-width: 1200px; /* Adjust this max-width as per your overall page layout (should match header's) */
    margin: 0 auto; /* Center the wrapper on the page */
    box-sizing: border-box; /* Ensures padding doesn't add to the total width */

    /* The padding here is for the very edges of the page, when content is wider than max-width.
       Inner content padding is handled by the FooterContainer. */
    @media (max-width: 768px) {
        padding: 0 15px;
    }

    @media (max-width: 480px) {
        padding: 0 10px;
    }
`;

// Styled component for the main footer container
const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px; /* Re-introducing horizontal padding here for inner spacing */
    background-color: #333; /* Dark background color as seen in the image */
    color: #fff; /* White text color for contrast */
    font-size: 14px;
    flex-wrap: wrap; /* Allow items to wrap on smaller screens */
    box-sizing: border-box; /* Ensures padding doesn't add to the total width */


    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
        gap: 15px;
        padding: 20px 20px; /* Adjust padding for tablet: vertical 20px, horizontal 20px */
    }

    @media (max-width: 480px) {
        padding: 15px 15px; /* Adjust padding for mobile: vertical 15px, horizontal 15px */
    }
`;

// Styled component for the copyright text
const CopyrightText = styled.span`
    /* Basic styling for the copyright text */
`;

// Styled component for the social icons container
const SocialIcons = styled.div`
    display: flex;
    gap: 15px; /* Space between icons */

    @media (max-width: 768px) {
        margin-top: 10px; /* Add some space above icons on mobile */
    }
`;

// Styled component for individual social icon buttons/links
const SocialIconLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px; /* Fixed width for circular icon background */
    height: 36px; /* Fixed height for circular icon background */
    border-radius: 50%; /* Makes the background circular */
    background-color: #555; /* Slightly lighter dark background for icons */
    color: #fff; /* White icon color, inherited by SVG fill="currentColor" */
    text-decoration: none;
    font-size: 18px; /* Base size for the icon, SVGs will scale */
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #777; /* Darker hover effect */
    }

    svg {
        width: 18px; /* Control SVG size within the circular background */
        height: 18px;
        fill: currentColor; /* Ensures SVG color matches the parent's text color */
    }
`;

const Footer = () => {
    // Get the current year dynamically for the copyright
    const currentYear = new Date().getFullYear();

    return (
        <PageWrapper> {/* Wrap the FooterContainer with PageWrapper */}
            <FooterContainer>
                <CopyrightText>
                    &copy; {currentYear} Anima's Landing Page Ui Kit.
                </CopyrightText>
                <SocialIcons>
                    {/* YouTube Icon (Inline SVG) - Corrected to a standard play button */}
                    <SocialIconLink href="#" target="_blank" aria-label="YouTube">
                        <svg viewBox="0 0 24 24">
                            <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                        </svg>
                    </SocialIconLink>

                    {/* Instagram Icon (Inline SVG) - Corrected to a more standard Instagram logo */}
                    <SocialIconLink href="#" target="_blank" aria-label="Instagram">
                        <svg viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.251-.149-4.771-1.699-4.919-4.919-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.947.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.073 4.948.073s3.668-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.444.647-1.444 1.443s.647 1.444 1.444 1.444c.796 0 1.443-.647 1.443-1.444s-.647-1.443-1.443-1.443z"/>
                        </svg>
                    </SocialIconLink>

                    {/* GitHub Icon (Inline SVG) */}
                    <SocialIconLink href="#" target="_blank" aria-label="GitHub">
                        <svg viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.111.82-.257.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.332-1.756-1.332-1.756-1.088-.745.08-.729.08-.729 1.205.084 1.838 1.238 1.838 1.238 1.07 1.835 2.809 1.305 3.49.998.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.12-.3-.535-1.52.117-3.176 0 0 1-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.003.404 2.301-1.552 3.3-.322 3.3-.322.653 1.656.238 2.876.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.621-5.475 5.92.43.37.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .32.218.695.825.576 4.766-1.587 8.2-6.085 8.2-11.385c0-6.627-5.373-12-12-12z"/>
                        </svg>
                    </SocialIconLink>

                    {/* LinkedIn Icon (Inline SVG) */}
                    <SocialIconLink href="#" target="_blank" aria-label="LinkedIn">
                        <svg viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                    </SocialIconLink>
                </SocialIcons>
            </FooterContainer>
        </PageWrapper>
    );
};

export default Footer;