import React from 'react';
import styled from 'styled-components';

// Import the marketing image
import marketingImg from '../assets/marketing.png'; // Make sure this path is correct relative to where CaseStudyPage.jsx is saved

// --- Styled Components for Case Study Section ---

const CaseStudyPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    padding: 80px 20px;
    background: linear-gradient(to right, rgba(229, 167, 225, 0.29), rgba(187, 212, 191, 0.43), rgba(214, 206, 144, 0.58), rgba(147, 182, 213, 0.58));
    text-align: center;
    width: 100%;
    box-sizing: border-box;

    @media (min-width: 768px) {
        padding: 100px 40px;
    }
    @media (min-width: 1024px) {
        padding: 120px 80px;
    }
    @media (max-width: 767px) {
        padding: 60px 20px;
    }
`;

const CaseStudySectionHeader = styled.div`
    margin-bottom: 60px;
    max-width: 800px;
    text-align: center;

    @media (max-width: 767px) {
        margin-bottom: 40px;
    }
`;

const SectionTitle = styled.h2`
    font-size: 38px;
    font-weight: 700;
    color: #333;
    margin-bottom: 15px;
    line-height: 1.2;

    @media (max-width: 767px) {
        font-size: 30px;
    }
    @media (min-width: 768px) {
        font-size: 48px;
    }
    @media (min-width: 1024px) {
        font-size: 56px;
    }
`;

const SectionSubText = styled.p`
    font-size: 18px;
    color: #555;
    line-height: 1.6;

    @media (max-width: 767px) {
        font-size: 16px;
    }
    @media (min-width: 768px) {
        font-size: 20px;
    }
`;

const CaseStudyCardWrapper = styled.div`
    background-color: #fff;
    border-radius: 16px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: row; /* Default for desktop */
    align-items: center;
    width: 100%;
    max-width: 1000px;
    padding: 40px;
    gap: 40px;

    @media (max-width: 991px) { /* Adjust for tablet and smaller desktops */
        flex-direction: column; /* Stack content vertically */
        padding: 30px;
        gap: 30px;
    }

    @media (max-width: 767px) { /* Further adjustments for mobile */
        padding: 25px;
        gap: 25px;
    }
`;

const CaseStudyContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    text-align: left;

    @media (max-width: 991px) {
        text-align: center;
        align-items: center;
    }
`;

const CaseStudyHospitalName = styled.h3`
    font-size: 28px;
    font-weight: 700;
    color: #333;
    margin-bottom: 15px;

    @media (max-width: 767px) {
        font-size: 24px;
        margin-bottom: 10px;
    }
`;

const CaseStudyDescription = styled.p`
    font-size: 18px;
    color: #666;
    line-height: 1.6;
    margin-bottom: 20px;

    span {
        color: #28a745;
        margin-right: 8px;
        font-weight: 600;
    }

    @media (max-width: 767px) {
        font-size: 16px;
        margin-bottom: 15px;
    }
`;

const CaseStudyMetric = styled.p`
    font-size: 22px;
    font-weight: 700;
    color: #000;
    margin-bottom: 30px;

    @media (max-width: 767px) {
        font-size: 20px;
        margin-bottom: 20px;
    }
`;

const ViewMoreButton = styled.button`
    background-color: #333;
    color: #fff;
    padding: 15px 30px;
    border: none;
    border-radius: 8px;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
        background-color: #555;
        transform: translateY(-2px);
    }

    @media (max-width: 767px) {
        padding: 12px 25px;
        font-size: 16px;
    }
`;

const CaseStudyImageWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: #f0f0f0;
    border-radius: 12px;
    overflow: hidden;

    img {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
        display: block;
    }

    @media (max-width: 991px) {
        width: 100%;
        max-width: 400px;
        padding: 0;
        background: none;
    }
`;

const PaginationButtons = styled.div`
    display: flex;
    margin-top: 40px;
    gap: 20px;

    @media (max-width: 767px) {
        margin-top: 30px;
        gap: 15px;
    }
`;

const PaginationButton = styled.button`
    margin-top: 20px;
    background-color: transparent; 
    border: 1px solid #000; 
    border-radius: 50%;
    width: 60px; 
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px; 
    color: #333;
    font-weight: 300;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
    /* Adjusted box shadow to closely match the subtle shadow in image_dc4f51.png */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

    &:hover {
        background-color: rgba(0, 0, 0, 0.05);
        color: #000;
        transform: translateY(-2px);
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
    }

    &:active {
        transform: translateY(0); /* Press effect */
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 767px) {
        width: 40px; /* Adjusted size for mobile */
        height: 40px;
        font-size: 22px; /* Adjusted arrow size for mobile */
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Smaller shadow for mobile */
    }
`;


// --- HomePageFour Component ---
const HomePageFour = () => {
    return (
        <CaseStudyPageContainer>
            <CaseStudySectionHeader>
                <SectionTitle>Our Case Studies</SectionTitle>
                <SectionSubText>
                    Find the perfect plan for your business with our flexible pricing options.
                </SectionSubText>
            </CaseStudySectionHeader>

            <CaseStudyCardWrapper>
                <CaseStudyContent>
                    <CaseStudyHospitalName>Rainbow Hospital</CaseStudyHospitalName>
                    <CaseStudyDescription>
                        <span>✓</span> A 6-month marketing campaign led to a massive rise <br/> in digital appointments, social engagement, and <br/> patient retention.
                    </CaseStudyDescription>
                    <CaseStudyMetric>200% Rise in OPD Bookings</CaseStudyMetric>
                    <ViewMoreButton>View More</ViewMoreButton>
                </CaseStudyContent>
                <CaseStudyImageWrapper>
                    <img src={marketingImg} alt="Marketing campaign results on mobile" />
                </CaseStudyImageWrapper>
            </CaseStudyCardWrapper>

            <PaginationButtons>
                <PaginationButton>←</PaginationButton> {/* Left arrow */}
                <PaginationButton>→</PaginationButton> {/* Right arrow */}
            </PaginationButtons>
        </CaseStudyPageContainer>
    );
};

export default HomePageFour;