import React from 'react'; // useEffect, useRef are no longer needed
import styled, { keyframes } from 'styled-components'; // keyframes might not be needed if no other animations are used

// Import all images
// Ensure these paths are correct relative to where HomePageTwo.jsx is located
import marketingImage from '../assets/marketing.png';
import digitalNeedsImage from '../assets/alldigital.png';
import staffingImage from '../assets/staffing.png';
import hospitalImage from '../assets/hospital.png';
import hardwareImage from '../assets/hardware.png';
import marketingIcon from '../assets/marketingIcon.png';
import staffingIcon from '../assets/staffingIcon.png';
import alldigitalIcon from '../assets/alldigitalIcon.png';
import hospitalIcon from '../assets/hospitalIcon .png';
import hardwareIcon from '../assets/hardwareIcon.png';


// --- Keyframe Animations (removed, leaving only if other animations are later added) ---
// const fadeIn = keyframes`...`; // No longer needed, can be removed

// --- Reusable Styled Components ---

// Generic Section Container
const SectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 15px;
    background-color: #ffffff;
    width: 100%;
    box-sizing: border-box;
    /* Removed opacity: 0 and animation properties */

    @media (min-width: 768px) {
        flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
        justify-content: space-around;
        padding: 60px 30px;
    }
    @media (min-width: 1024px) {
        padding: 80px 60px;
    }
    @media (min-width: 1200px) {
        padding: 100px 80px;
    }
`;

// Generic Content Wrapper
const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 100%;
    width: 100%;
    margin-bottom: 30px;
    text-align: left;
    padding: 0 10px;
    box-sizing: border-box;

    /* Removed opacity: 0 and animation properties from children */

    @media (min-width: 768px) {
        max-width: 450px;
        margin-right: ${props => props.reverse ? '0' : '40px'};
        margin-left: ${props => props.reverse ? '40px' : '0'};
        margin-bottom: 0;
        padding: 0;
    }
    @media (min-width: 1024px) {
        max-width: 550px;
        margin-right: ${props => props.reverse ? '0' : '60px'};
        margin-left: ${props => props.reverse ? '60px' : '0'};
    }
`;

// Generic Icon Wrapper
const IconWrapper = styled.div`
    width: 45px;
    height: 45px;
    background-color: ${props => props.bgColor || '#E6EEFF'};
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    border: 1px solid ${props => props.borderColor || '#B3D9FF'};

    & img {
        width: 25px;
        height: 25px;
    }

    @media (min-width: 768px) {
        width: 50px;
        height: 50px;
        margin-bottom: 25px;
        & img {
            width: 28px;
            height: 28px;
        }
    }
`;

// Generic Main Heading
const MainHeading = styled.h2`
    font-size: 28px;
    font-weight: 700;
    color: #000;
    margin-bottom: 10px;
    line-height: 1.3;
    text-align: center;
    width: 100%;
    /* Removed opacity: 0 and animation properties */

    @media (min-width: 480px) {
        font-size: 32px;
    }
    @media (min-width: 768px) {
        font-size: 38px;
        margin-bottom: 15px;
        text-align: left;
    }
    @media (min-width: 1024px) {
        font-size: 44px;
    }
`;

// Generic Subheading
const SubHeading = styled.p`
    font-size: 16px;
    font-weight: 600;
    color: #333;
    margin-bottom: 15px;
    line-height: 1.5;
    text-align: center;
    width: 100%;
    /* Removed opacity: 0 and animation properties */

    @media (min-width: 480px) {
        font-size: 18px;
    }
    @media (min-width: 768px) {
        font-size: 20px;
        margin-bottom: 20px;
        text-align: left;
    }
`;

// Generic Description Text
const DescriptionText = styled.p`
    font-size: 14px;
    color: #666;
    line-height: 1.8;
    margin-bottom: 20px;
    text-align: center;
    width: 100%;
    /* Removed opacity: 0 and animation properties */

    @media (min-width: 480px) {
        font-size: 15px;
    }
    @media (min-width: 768px) {
        font-size: 16px;
        margin-bottom: 25px;
        text-align: left;
    }
`;

// Generic Feature List
const FeatureList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    margin-bottom: 25px;
    font-size: 14px;
    color: #333;
    line-height: 2.2;
    width: 100%;
    text-align: left;

    & li {
        position: relative;
        padding-left: 25px;
        margin-bottom: 8px;
        /* Removed opacity: 0 and animation properties */
    }

    & li::before {
        content: '•';
        color: ${props => props.bulletColor || '#5C7CFA'};
        font-size: 22px;
        position: absolute;
        left: 0;
        top: 0;
        line-height: 1;
    }

    @media (min-width: 480px) {
        font-size: 15px;
    }
    @media (min-width: 768px) {
        font-size: 16px;
        margin-bottom: 30px;
    }
`;

// Generic "Learn More" Button with Hover Effect
const LearnMoreButton = styled.button`
    background-color: #1A202C;
    color: #fff;
    padding: 12px 25px;
    border: none;
    border-radius: 8px;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease-in-out;
    align-self: center;
    /* Removed opacity: 0 and animation properties */

    &:hover {
        background-color: #2D3748;
        transform: scale(1.05);
    }

    @media (min-width: 480px) {
        padding: 14px 28px;
        font-size: 16px;
    }
    @media (min-width: 768px) {
        align-self: flex-start;
    }
`;

// Generic Image Wrapper with Hover Effect
const ImageWrapper = styled.div`
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    max-width: 90%;
    width: 100%;
    margin-bottom: 0;
    /* Removed opacity: 0 and animation properties */
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

    & img {
        width: 100%;
        height: auto;
        display: block;
        object-fit: cover;
    }

    &:hover {
        transform: scale(1.03);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
    }

    @media (min-width: 768px) {
        max-width: 45%;
        min-width: 300px;
    }
    @media (min-width: 1024px) {
        max-width: 500px;
    }
`;

// --- Specific Section Components ---

const WhatWeDoSectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px 15px;
    background-color: #F8F9FF;
    text-align: center;
    width: 100%;
    box-sizing: border-box;
    /* Removed opacity: 0 and animation properties */

    @media (min-width: 768px) {
        padding: 80px 30px;
    }
    @media (min-width: 1024px) {
        padding: 100px 60px;
    }
    @media (min-width: 1200px) {
        padding: 120px 80px;
    }
`;

const SectionHeading = styled.h2`
    font-size: 36px;
    font-weight: 700;
    color: #000;
    margin-bottom: 10px;
    line-height: 1.2;
    text-align: center;
    /* Removed opacity: 0 and animation properties */

    @media (min-width: 480px) {
        font-size: 40px;
    }
    @media (min-width: 768px) {
        font-size: 48px;
        margin-bottom: 15px;
    }
    @media (min-width: 1024px) {
        font-size: 56px;
    }
`;

const SectionDescription = styled.p`
    font-size: 16px;
    color: #666;
    max-width: 90%;
    line-height: 1.6;
    margin-bottom: 0;
    text-align: center;
    /* Removed opacity: 0 and animation properties */

    @media (min-width: 480px) {
        font-size: 17px;
    }
    @media (min-width: 768px) {
        font-size: 18px;
        max-width: 700px;
    }
`;

const HomePageTwo = () => {
    // Removed all useRef and useEffect hooks for Intersection Observer

    return (
        <>
            {/* What We Do Section */}
            <WhatWeDoSectionContainer>
                <SectionHeading>What We Do?</SectionHeading>
                <SectionDescription>
                    These are just a few features you'll get using Anima Landing Page Ui Kit.
                </SectionDescription>
            </WhatWeDoSectionContainer>

            {/* Marketing For Hospital Section */}
            <SectionContainer>
                <ContentWrapper>
                    <IconWrapper bgColor="#E6EEFF" borderColor="#B3D9FF">
                        <img src={marketingIcon}alt="Pencil Icon" />
                    </IconWrapper>
                    <MainHeading>Marketing For Hospital</MainHeading>
                    <SubHeading>Strategic Healthcare Marketing That Brings In Patients, Not Just Clicks</SubHeading>
                    <DescriptionText>
                        We understand the sensitivity and trust required in hospital marketing. Our campaigns are designed to ethically and effectively increase patient engagement, build brand credibility, and drive footfall.
                    </DescriptionText>
                    <FeatureList bulletColor="#5C7CFA">
                        <li>Brand Positioning & Strategy</li>
                        <li>Campaign Management (Google Ads, Social Media)</li>
                        <li>Local SEO & Reputation Management</li>
                        <li>Patient-Centric Communication Plans</li>
                    </FeatureList>
                    <LearnMoreButton>Learn More</LearnMoreButton>
                </ContentWrapper>
                <ImageWrapper>
                    <img src={marketingImage} alt="Marketing dashboard on a phone" />
                </ImageWrapper>
            </SectionContainer>

            {/* All Digital Needs Section */}
            <SectionContainer reverse>
                <ContentWrapper reverse>
                    <IconWrapper bgColor="#FFF2E6" borderColor="#FFD39B">
                        <img src={alldigitalIcon} alt="Globe Icon" />
                    </IconWrapper>
                    <MainHeading>All Digital Needs</MainHeading>
                    <SubHeading>Healthcare Goes Digital – So Should You</SubHeading>
                    <DescriptionText>
                        We build seamless digital experiences for hospitals and clinics that simplify bookings, enhance communication, and make patient journeys smoother.
                    </DescriptionText>
                    <FeatureList bulletColor="#FFC107">
                        <li>Custom Hospital Websites & Mobile Apps</li>
                        <li>Patient Portals with Appointment Systems</li>
                        <li>Integrated CRM & Marketing Automation</li>
                        <li>WhatsApp/IVR Chatbots</li>
                        <li>Real-time Data Dashboards for Admins</li>
                    </FeatureList>
                    <LearnMoreButton>Learn More</LearnMoreButton>
                </ContentWrapper>
                <ImageWrapper>
                    <img src={digitalNeedsImage} alt="Linac therapy machine" />
                </ImageWrapper>
            </SectionContainer>

            {/* Staffing Help (Doctors & All) Section */}
            <SectionContainer>
                <ContentWrapper>
                    <IconWrapper bgColor="#FFE6E6" borderColor="#FFCCCC">
                        <img src={staffingIcon} alt="Doctor Icon" />
                    </IconWrapper>
                    <MainHeading>Staffing Help (Doctors & All)</MainHeading>
                    <SubHeading>The Right Talent, Right When You Need Them</SubHeading>
                    <DescriptionText>
                        Finding qualified medical professionals can be a challenge. We simplify the process, connecting you with top-tier doctors, nurses, and administrative staff to ensure your operations run smoothly.
                    </DescriptionText>
                    <FeatureList bulletColor="#FF7043">
                        <li>Permanent & Locum Doctor Placement</li>
                        <li>Nurse & Allied Healthcare Staffing</li>
                        <li>Medical Administrative Support</li>
                        <li>Rigorous Vetting & Credentialing</li>
                    </FeatureList>
                    <LearnMoreButton>Learn More</LearnMoreButton>
                </ContentWrapper>
                <ImageWrapper>
                    <img src={staffingImage} alt="Healthcare professionals" />
                </ImageWrapper>
            </SectionContainer>

            {/* Hospital Hardware Section */}
            <SectionContainer reverse>
                <ContentWrapper reverse>
                    <IconWrapper bgColor="#E6F7F7" borderColor="#B3E6E6">
                        <img src={hardwareIcon} alt="Hardware Icon" />
                    </IconWrapper>
                    <MainHeading>Hospital Hardware</MainHeading>
                    <SubHeading>Equipping Excellence: Reliable Hardware For Critical Care</SubHeading>
                    <DescriptionText>
                        From the operating room to the administrative office, we provide high-quality, dependable hardware solutions that keep your hospital running efficiently and effectively.
                    </DescriptionText>
                    <FeatureList bulletColor="#4CAF50">
                        <li>Advanced Diagnostic Equipment</li>
                        <li>Medical IT Infrastructure</li>
                        <li>Patient Monitoring Systems</li>
                        <li>Secure Data Storage Solutions</li>
                        <li>Custom Procurement & Installation</li>
                    </FeatureList>
                    <LearnMoreButton>Learn More</LearnMoreButton>
                </ContentWrapper>
                <ImageWrapper>
                    <img src={hardwareImage} alt="Medical hardware" />
                </ImageWrapper>
            </SectionContainer>

            {/* Hospital Building Section (Placeholder) */}
            <SectionContainer>
                <ContentWrapper>
                    <IconWrapper bgColor="#F2E6FF" borderColor="#D9B3FF">
                        <img src={hospitalIcon} alt="Hospital Building Icon" />
                    </IconWrapper>
                    <MainHeading>Full Hospital Setup</MainHeading>
                    <SubHeading>Building The Future of Healthcare, From Ground Up</SubHeading>
                    <DescriptionText>
                        We offer end-to-end solutions for setting up new hospitals or expanding existing ones, ensuring compliance, efficiency, and a patient-first design.
                    </DescriptionText>
                    <FeatureList bulletColor="#8D62ED">
                        <li>Infrastructure Planning & Design</li>
                        <li>Equipment Procurement & Installation</li>
                        <li>Licensing & Regulatory Compliance</li>
                        <li>Workflow Optimization</li>
                        <li>Staff Training & Management Support</li>
                    </FeatureList>
                    <LearnMoreButton>Learn More</LearnMoreButton>
                </ContentWrapper>
                <ImageWrapper>
                    <img src={hospitalImage} alt="Modern hospital building" />
                </ImageWrapper>
            </SectionContainer>
        </>
    );
};

export default HomePageTwo;