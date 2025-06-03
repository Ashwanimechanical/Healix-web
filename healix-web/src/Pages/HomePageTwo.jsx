import React from 'react'; // useEffect, useRef are no longer needed
import styled, { keyframes } from 'styled-components'; // keyframes might not be needed if no other animations are used

// Import all images
// Ensure these paths are correct relative to where HomePageTwo.jsx is located
import marketingImage from '../assets/marketing.png';
import digitalNeedsImage from '../assets/alldigital.png';
import staffingImage from '../assets/staffing.png';
import hospitalImage from '../assets/hospital.png';
import hardwareImage from '../assets/hardware.png';

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
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3LjI1IDEuNjQ0NzZMMi41MzYwNCAxNi4zNTg3QzIuMTc2MTMgMTYuNzE4NiAyLjAxNjEzIDE3LjE3ODMgMi4wMTYxMyAxNy43Mzg1QzIuMDE2MTMgMTguMjk4NyAyLjE3NjEzIDE4Ljc1ODQgMi41MzYwNCAxOS4xMTgzTDUuMzYxMzcgMjEuOTQzQzUuNzIxMjggMjIuMzA3OCA2LjE3MDU1IDIyLjQ2NzUgNi42OTU5OCAyMi40Njc1QzcuMjIxNDEgMjIuNDY3NSA3Ljc3MTAyIDIyLjMwNzggOC4wMzU4NCAyMS45NDNMMjIuNzQ0MyA3LjIzNDc2QzIzLjEwNDIgNi44NzQ4NSAyMy4yNjQgNi40MTQ1OSAyMy4yNjQgNS44OTQzMkMyMy4yNjQgNS4zNzQwNiAyMy4xMDQyIDQuOTEzOCAyMi43NDQzIDQuNTUzOUwyMC40OTMgMi4zMDMxOUMxOS43NzM0IDEuNTc4ODMgMTguNzQ5MiAxLjIzNDc2IDE3LjI0OSAxLjY0NDc2WiBNNy4wNjU0MyAyMC4xMDMxTDRLjIzMDI3IDE2Ljc2NzJDNC4yNDMwMSAxNi43NDkyIDQuMjcyNDUgMTYuNzE0NyA0LjMwNzkyIDE2LjY3NTlMNC4zMjc3OSAxNi42NjExTDExLjI2NTIgOS43MjM0NkwxNS40NTA3IDEzLjkwODhMNy4wNjU0MyAyMC4xMDMxWiIgZmlsbD0iIzU1NjE2NSIvPgo8L3N2Zz4K" alt="Pencil Icon" />
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
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMiAyMkMxNy41MjI4IDIyIDIyIDE3LjUyMjggMjIgMTJDMjIgNi40NzcxOSAxNy41MjI4IDIgMTIgMkM2LjQ3NzE5IDIgMiA2LjQ3NzE5IDIgMTJDMiAxNy41MjI4IDYuNDc3MTkgMjIgMTIgMjJaTTExIDQuMjg0NzJWNC42MDkxN0MxMSAxMS45MjE4IDEzIDE1LjQ4ODcgMTMgMTkuNjA1NVYxOS42MjU2QzEzIDE5LjcyMDggMTMgMjAuMTE4NCAxMSAyMi4yNTE5QzExLjU5OTYgMjIuMTAzMiAxMi4xOTkxIDIyIDEyLjc4NTIgMjJDMTUuOTQ3OCAyMiAxOC42NjM4IDIwLjE5NTcgMjAuMzMyNSAxNy41NjcyQzE5LjA1MzcgMTYuNzM0MiAxOC4xNzUgMTUuNzQ3IDE3LjQ1NTMgMTQuNTEyNUMxNi40MzkzIDEzLjcwNzcgMTUuNTA3NyAxMi40MzI2IDE0LjQ4NzkgMTEuMjczMUMxMy41NzU4IDkuMjczNDkgMTIuNzY0OSA2LjY1NTYyIDExIDQuMjg0NzJaTTUuOTgzMzYgNS45ODAzNkM2LjM1MzM2IDYuMjk5MDYgNi42NDk0NSA2LjQzNDIyIDYuODU2OTMgNi40NjMxN0M4LjUyOTc4IDYuNzQxNjQgMTAuMjQ1OCA4LjUzMjk2IDEyLjM0NTEgMTEuMDQxNkMxMi44NTI0IDExLjY2MzggMTMuMzY4OSAxMi4yOTgzIDEzLjY3MDYgMTIuNDExNkMxMy45OTMxIDEyLjU0NDUgMTQuMTkxNSAxMi41OTYyIDE0LjM0MTEgMTIuNTY2M0MxNS4xNzA2IDEyLjM5NjggMTYuNjY0NyAxMC4wODk3IDE4LjY3OTUgNy4xNzg1MkMxOC4wMDEyIDUuMjQ0NzggMTUuNjY3NCAzLjYwMTE0IDEzLjAxMDYgMi4yMjM3NUwzLjYwMTE0IDEzLjAxMDZDMTEuODc2OCAyLjIxMzE2QzExLjQ2OTYgMi4xNjU4OCAxMS4yMzY1IDIuMTM2OTYgMTEuMDE2NyAyLjEwNDQyQzEwLjY2NzggMi4wNDUzOCAxMC4yOTgzIDEuOTg4MjYgOS44NzU5NiAxLjk4MTY5QzkuNjk4NTggMS45Nzg5NiA5LjQ4MDk5IDEuOTc2MzYgOS4yNjMxNyAxLjk3Mzk2QzkuNjA3NTkgMS44ODk1OSA4Ljg3NTk2IDEuODY1MTggOC4xNTg3NSAxLjkxMTYxQzcuNjQ3NDMgMS45NDE2OSA3LjA4ODY2IDIuMDg5OTcgNi41Mjk5MiAyLjU4OTMyQzUuOTgzMzYgMy4xMDg1OCA1LjQwNjcyIDMuNzYxNTQgNC45NTU5OCA0LjQ3MjE5QzQuNTczNjEgNS4wNDUyNyA0LjI0NTA0IDUuNDk5MjggMy45MDQ1NiA1Ljk0NDk5QzMuNTk5ODYgNi4zOTY1IDMuMzk1MjcgNi43NDI3NyAzLjIyNzY4IDYuOTgwNzdDMi45ODY0NyA3LjIxNjczIDIuNjQ4NzggNy42OTI0OCAyLjQwNzU4IDguMjgxMDlDMi4wMTI2IDkuMjAwMjIgMS44MDI1MyAxMC4xMDQyIDEuODQ4MTEgMTAuODU3QzEuODkzNjggMTEuNjA5NyAxLjk3MDE2IDEyLjQ1NjQgMi4wNDYxMyAxMy4wNzQ3QzIuMTU3MDMgMTQuMDE5NSAyLjQ1MTIyIDE1LjA1NDkgMi45NjI5OCAxNi4wMDE2QzMuMTEzNDkgMTYuMzU0MSAzLjM4NzU1IDE2LjcwMDIgMy41OTI3MiAxNi45MTM0QzQuMDQ3NDIgMTcuMzk5MSA0LjM4MTE3IDE3LjcxMzQgNC43MjMwMSAxNy45MTE1QzUuMDY0ODUgMTguMTA5NiA1LjU4MDQzIDE4LjM3MDUgNi4wNzI1NiAxOC41NDc2QzYuNTYzMTYgMTguNzIyMiA3LjIxMDU3IDE4Ljg2OTggNy45Nzk0OSAxOS4xMjkzQzguMTIzMTkgMTkuMjU0MyA4LjEzODYgMTkuMjUzNyA4LjIzNTc2IDE5LjMwNjJDMTAuMjA4NCAyMC4zMjk4IDEwLjY4MTggMjAuNTIyOCAxMS41OTg5IDIxLjc0ODFDMTEuODcyMyAyMS45MTYzIDEyLjAwMzkgMjEuOTU3OCAxMi4yMjM5IDIyLjAwMzJDMTIuMzQ4NCAyMi4wMzIxIDEyLjQ2MDcgMjIuMDU1NiAxMi41NzQxIDIyLjA3MzJMMjIuNjQyMiA2Ljk0NDkyTDEzLjAxMDYgMy42MDExNEMxMy42NTA1IDIuOTIyNCAxNC4yMDM1IDIuMzE1MjYgMTQuNTczNiAxLjk4OTc3QzE0LjkwNzEgMS44OTIyNyAxNS4xMTA5IDEuODU2MTggMTUuMjk0NSAxLjc5NzExQzE1LjQ5ODQgMS43MzIwMyAxNS41OTEgMS42OTA2OCAxNS42NjY3IDEuNjY4MTJDMTUuNzQyMyAxLjY0NjY4IDE1LjgyMzQgMS42MTc3NiAxNS45MDg5IDEuNjA5NzJDMTYuMjU4MiAxLjU4MzYyIDE2LjY0MDkgMS41NjU1NyAxNy4wMjI0IDEuNTQ5ODlDMTcuNDQ2NyAxLjU3MzA2IDE3LjczNjIgMS43MDQ1NSAxNy45NzgyIDEuNzc2MDdDMTguMjE2MiAxLjg0NjkyIDE4LjQzMTUgMS45MDUxMSAxOC42NzM4IDEuOTM5NzJDMTkuNjI4NCAyLjE0Mjg2IDE5LjgyOTcgMi41OTE4MSAyMC41NjQzIDIuNzk5MzhDMjAuODk4OSAyLjkxOTg5IDIxLjM1NzEgMy4xMzI1OCAyMS42NzMxIDMuNTYzMTZDMjEuOTgzNSAzLjk2NzQyIDIyLjI1MjcgNC4zNTM1MiAyMi40MzI3IDQuNzkzNzZDMjIuNTU5OSA1LjEwOTQ5IDIyLjU5NDggNS4yNTc2MSAyMi42MTY0IDUuNTE3NDhDMjIuNjk2NiA2LjQ0NTUyIDIyLjkwNTggNy40MjQ4NSAyMy4wNjQ0IDguNDg1MzRDMjMuMTI4NyA4Ljg5ODQ5IDIzLjIxNjIgOS4yNjkxNyAyMy4zMTk1IDkuNjg5MjRDMjMuMzQ0MyA5Ljc4ODg2IDIzLjM2OTYgOS44ODcyNyAyMy4zOTYxIDkuOTk0NjZDMjMuNTA1OCAxMC40Mzg3IDIzLjYwNzQgMTAuNzQ2MiAyMy43NDU3IDExLjA4NjlDMjMuODY5NSAxMS40MjQxIDIzLjk3NjQgMTEuOTMwOCAyMy45ODY5IDEyLjY2MDJDNTcuMzQyMDggMTQuOTgxOSAyMi4xNjc0IDExLjY5MjEgMjMuMTMxMiAxMy40Nzg0QzIzLjE5MTcgMTMuNzY2MyAyMy40Njg0IDE0LjE1NDUgMjMuNjY5MyAxNC41NDkzQzI0LjEwNzYgMTUuMzY5NyAyNC4yNjQ4IDE2LjExMDYgMjQuMTcxNiAxNi41MzI2QzIzLjk5NTggMTcuNDg2MiAyMy4zNzM3IDE4LjU3MjkgMjIuNTk1OSAxOS41NjQ5QzIyLjEyMDggMjAuMTc4NCAyMS44MzQ4IDIwLjQxNzUgMjEuNTc1NCAyMC42MjYzQzIxLjE0NTcgMjAuOTYyOSAyMC41OTE4IDIxLjM4MjYgMTkuODgwMyAyMS43MjQyQzE5LjE2OTcgMjIuMDU1NiAxOC4yNzMzIDIyLjI4NjQgMTcuNDE3NCAyMi40NTA0QzE2Ljg2MiAyMi41NjQxIDE2LjMzMzYgMjIuNjczNyAxNS43NDY0IDIyLjg1NzJDMTUuMjY1NyAyMy4wMDYxIDE0LjgxNTkgMjMuMTUzOCAxNC4zNzg4IDIzLjI2NzhDMTMuNjcwMyAyMy40NDAzIDEzLjAzNjQgMjMuNTI5NyAxMi42ODkyIDIzLjY0MTRDMTEuOTczNCAyMy44NTg1IDExLjMyNCAyMy45Mjk1IDEwLjY0NzcgMjMuOTc5NzlDMTAuMDgyMiAyMy45ODkyOSA5LjQyNDI0IDIzLjkyNzcgOC43NTY1MiAyMy43NDg1QzguMTU5MyAyMy41NzgxIDcuNTU4MyAyMy4zNzE2IDYuOTkzMzYgMjMuMTM0N0M2LjQ0MDkgMjIuOTMwMyA2LjE1NTY4IDIyLjcwNTcgNS42MTczMSAyMi4yODUxQzUuMzMyOTYgMjIuMDYwMiA1LjAwMzY4IDIxLjczNDUgNC43Njk5NiAyMS40MDYzQzQuMjkxODkgMjAuNzI5MiAzLjkzNzUgMjAuMjE4MyAzLjQ5NTY4IDE5LjYzMDdDMi45Mjg2NCAxOC44ODcgMi41MzY3NCAxOC4xOTE1IDIuMjYyNzYgMTcuNDY0N0MxLjk4MDk4IDE2LjcyNjggMS43OTc5NyAxNi4wMTEyIDEuNjc3MDIgMTUuNDM4N0MxLjQ4NzkzIDE0LjU5OTYgMS4zOTgzMyAxNC4xNTcgMS4yNjYxNyAxMy42Mjk2QzEuMjI2MzQgMTMuNDcwNSAxLjE5MDQ5IDEzLjMxMzYgMS4xNDY5NyAxMy4xNTEyQzAuOTE3ODkgMTIuMjYwOSAwLjk3NTU5MiAxMS4yOTE3IDEuMTg4OTcgMTAuNDUyN0MxLjM5NDIyIDkuNTQ1NzYgMS44ODQ2MiA4LjU4OTE5IDIuNjEyMjIgNy44MTA3N0MzLjAwOTM5IDcuMTAyODggMy4zMTYxNyA2LjYwNjY4IDMuNjc3NTUgNi4yNzY1NEM0LjI4ODQgNS43MzE1IDQuNzQ5NjIgNS4zNjI3NyA1LjQzNjIyIDUuMDI3NzlDNy4wODE2MyAzLjc0MzQxIDkuMTgyMiAyLjU1MTM0IDEwLjkwNjEgMi4yNjA5NUMxMC45MTU2IDIuMjU4MzYgMTAuOTMyOSAyLjI1NjI4IDEwLjk1MTcgMi4yNTU5OUMxMC45NjY1IDIuMjU1ODUgMTAuOTgxNyAyLjI1NTg5IDExLjAyMzEgMi4yNjEzNkMxMS4xMTc5IDIuMjg3NjUgMTEuMjIxMyAyLjMwODMxIDExLjMyMjggMi4zMjM2MUMxMS40OTc2IDIuMzUzMDIgMTEuNzA4OCAyLjQyMjU4IDExLjgzMyAyLjQ1Mzg1QzEyLjA1MzcgMi41MDE1MiAxMi4yODA2IDIuNzg1OTEgMTIuMzA4NCAyLjg0NjM4QzEyLjUyNTcgMy4yNDU3NiAxMi43MzM3IDMuNTcwMDggMTIuOTQ4NyAzLjk4NjcyQzEzLjMyNjYgNC42Mjg3OSAxMy42MTk3IDUuMTk1NDkgMTMuODMyIDUuODE3MzFDMTQuMDQ0MyA2LjQzOTE2IDE0LjEyNjYgNi44NTUxNSAxNC4yOTc0IDcuMTQ2ODJDMTQuNTIzNSA3LjQ1NTgzIDE0Ljg3MjYgNy44NTQ5OCAxNS4yNzM4IDguMjQ5MTFDMTUuNzgzNiA4Ljg5ODQ5IDE2LjY0MDkgOS44OTAzMSAxOC40NTA4IDExLjkwNzZMMjIuNjQyMiA2Ljk0NDkyTDE4LjM4NjQgMS44OTIyN0MxNy4yNTE4IDEuMjQ1NzYgMTYuMTM4NyAwLjQ1MzY1OCAxNS41NzAzIDAuMjEwMTI5QzE1LjA5MTUgLTAuMDk3MjExNCAxNC4yNjQ4IC0wLjA1Mjk3MiAxMy42MDk1IDAuMTQxNjYyQzEzLjI3MjQgMC4yNDMxODEgMTIuOTU4NyAwLjM1MzcyMSAxMi42NzM4IDAuNDg4MzdDMTIuNDI3MyAwLjU5NjY3OCAxMi4yMDE1IDAuNjUyMzg4IDEyLjAyNTYgMC43ODc3NTlDMTExLjgyMzUgMS4zNjM5NCAxMS40NDkgMi4wNzM1NiAxMS4wNjEgMi42OTAwN0MxMC41NTE1IDMuNTU1NDcgMTAuMTYxMyA0LjI0Nzg0IDkuNzY2ODcgNC44NjYzMkM5LjQ1OTYzIDUuMzE1MjggOC45OTEzMiA1LjgyOTUzIDguNDA4NzkgNi4zMzU2NEM3Ljg3NTQ4IDYuOTQ1NzYgNy4xNjQxIDcuNTc1NDggNi41MzA5OCA4LjEzMDY0QzUuNzk3ODcgOC44ODU4MiA1LjA2ODU4IDkuNTMyNTUgNC40MDQ4OSAxMC4xNTk5QzMuODQ4MjYgMTAuNzMyMiAzLjI3NjUyIDExLjMzMDcgMi42MjY1MiAxMi4wNzYzQzIuMTU3MDMgMTIuNTk1NiAxLjc2ODQxIDEzLjM4NzUgMS40ODc3OSAxMy43MTExQzEuMzExOTkgMTQuMDMzNyAxLjIzMjg4IDE0LjMxNzggMS4xNjk2NiAxNC41NDk4QzAuOTcwOTQ0IDE1LjU5ODMgMC43ODgyOTUgMTYuNjgyIDAuNzMzMTQ0IDE3LjQ1NDVDMi4xNjM1MiAyMi41MTggMjIuMjQxNyAxNi44MzM2IDE5LjM5MjkgMTIuMjkwMUwxOC43NTg2IDExLjkwOTZDMjEuNzA2NiA2Ljg4Mjc2IDIyLjY0MjIgNi45NDQ5MiAyMi42NDIyIDYuOTQ0OTJaIiBmaWxsPSIjNTU2MTY1Ii8+Cjwvc3ZnPgo=" alt="Globe Icon" />
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
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2IDdDMTYgOC41Mjk5MiAxNC42NTY5IDkuODc4NjggMTMgOS44Nzg2OEMxMS4zNDMxIDkuODc4NjggMTAgOC41Mjk5MiAxMCA3QzEwIDUuNDcxMDYgMTEuMzQzMSA0LjEyMTMyIDEzIDQuMTIxMzJDMTQuNjU2OSA0LjEyMTMyIDE2IDUuNDcxMDYgMTYgN1oiIGZpbGw9IiM1NTYxNjUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01LjQ5MDIgMy4zMDM5MkM1LjAyODQxIDguMjgxNDU0IDUuNzUwMzggOC45NTg1MzYgNi42MzI3OSA5LjI0Nzc0NCA3LjQ5NTI5OSA5LjUyOTU3OCA4LjUyOTI2OSA5LjQ5OTU5OSA5LjUyMzE5OSA5LjQ3NTQzQzEwLjY3NTU0IDEwLjMyMzY3IDExLjE5MTE3IDEyLjIyODc1IDEyLjEyMzQ2IDEzLjU5Mzg2QzEyLjkwMTQxIDEzLjU2NzA2IDEzLjM4NjQ5IDE0LjMwNjE4IDE0LjA3NzM4IDE0Ljk4NjI5QzE0Ljc1MTE4IDE1LjY1NTY5IDE1LjUyODc5IDE2LjIwMDcxIDE2LjIyMzY4IDE2LjQyMzkzQzE2Ljg1ODc3IDE2Ljg1ODAzIDE3LjUyNzE0IDE3LjMwNjE4IDE4LjIxNTM4IDE3LjYyNjIzQzE5LjE1NjIzIDE4LjE4OTI2IDE5LjkyNzA5IDE4LjU4NzA5IDIwLjY2NzQ5IDE4LjY2NTA1QzIxLjQwNzkgMTguNzQ0MzkgMjEuNjU4MyAxOC41NDc2MyAyMS43MzcyIDE4LjIzNjc1QzIxLjgzMzYzIDE3Ljg0NjI1IDIxLjg2MDk3IDE3LjQ1NTExIDIxLjgyNjcxIDE3LjA2NDU0QzIxLjcxNTgyIDE1LjkxODQ0IDIxLjMwMDcxIDE0LjU5MzcgMjAuNzYxNzkgMTMuNDI3MjRDMjAuNDUwNzEgMTIuNzUyMjMgMjAuMDQwMDQgMTIuMDYwNzMgMTkuNjAyMjIgMTEuNTMyMjJDMjMuNTczNyAxNi40NzgxIDIyLjgyNDYgMTkuNDcwOSAyMS42ODI2IDIwLjkwMTJDMTcuMzA3NCAyMi4wMzIgMTIuNDM4NiAyMi43Njk5IDkuMzAyODggMjIuNjI0MkMyLjE2OTkgMjIuNjAxNSAxLjI5NjI1IDE4LjQzNzkgMi44MzcwMiAxNi44NTczQzMuMTYxNzQgMTYuNTUzIDMuNDgzNzcgMTYuMjY4MiAzLjY5NDY2IDE2LjA1NTdDMy43MjU2NSAxNi4wMTEyIDMuNzMyMTUgMTUuOTkwNSAzLjc0MzUyIDE1LjU1NDUzQzE1Ljc4Nzc1IDIuNTI1MzggMTUuNjY3NDcgMi40ODU5OCAxNS40ODg3NyAyLjQzOTc3QzE1LjI1NjI5IDIuMzU3NzYgMTUuMDMyNjcgMi4yODczNiAxNC43NzMzMiAyLjIwNDg5QzE0LjUzNjQ5IDIuMTE3MDcgMTQuMjk3NzcgMi4wNDczMyAxNC4wNDQzNSAxLjk1NTQ5QzEzLjcyNjEzIDEuODE2MDYgMTMuMzU3NjEgMS42OTQyIDEzLjA3MTg0IDEuNTkzOTZDMTIuNzk3NTggMS40ODc3OSAxMi41Mjk3OSAxLjQwODc5IDEyLjI4MDY3IDEuMjcxMTZDMTEuOTMwOCAxLjA2NzY1IDExLjY3NDcgMC44NDYwNjQgMTEuNDE5OCAwLjczOTM3NUMxMS4yMjk4IDAuNjUwOTgxIDExLjAzNzUgMC41MzcwOCAxMC44NDc5IDAuNDQ2MTc0QzEwLjY1ODMgMC4zNTk2NTkgMTAuNDUyMDcgMC4yODc4NzcgMTAuMTk2NiAwLjI0MjgyNkMxMC4wNTg4NSAwLjIxMjY3NCA5Ljg3MTQ0IDAuMTY0Mzg4IDkuNjU4NTcgMC4xNDU5ODVDOS4yMjk0NiAwLjEwODcxMiA4Ljk2NzQ2IDAuMDc0NjU4NyA4LjcwNzk1IDAuMDc1NzU3N0M3Ljk3MDk0IDAuMDY1OTgyIDcuMjk1NDkgMC4xNDI0NjcgNi42MjE3NCAwLjQwMzUzQzUuOTY1NTEgMC42NDUwODggNS4xNzE4OCAwLjkyODAyMyA0LjYzODY1IDEuNDIyNzNDMy42NzY2MyAxLjk3MTQxIDMuMDg4MzcgMi40OTE0NiAyLjU1MTk3IDMuMTAyODhDMi4xNjM1MiAzLjQ4Mjg4IDEuOTYxODkgMy43ODM1MyAxLjc2NjU3IDQuMDY2NzlDMS42MzU3NiA0LjMyNzI1IDEuNTAwMzYgNC42NzY2MiAxLjMyNDAxIDQuOTYyNjVDMS4xNzA5OCAzLjg0Mjk1IDEuMzIwNjcgMi45NTU4NyAxLjUzMDIzIDIuMTE3MDdWMTIuNjY2OEM1Ljg0NTE5IDIzLjIxNjMgOC4wMzcxMiAyMy43NDg1IDEwLjA5MDUgMjMuODg3NTVDMTEuNDIxMSAyMy45NTgyNSAxMi43NTA2IDIzLjgwMTUxIDE0LjA3NzQgMjMuNTIyODhDMjIuNjQyMiA2Ljk0NDkyIDIyLjU4NzYgNi45NDg2NCAyMi41Mzc2IDYuOTU4MTRDMjIuNDg1NzIgNi45NzU3NiAyMi40MzM1OCA2Ljk5NzE5IDIyLjM4MTE2IDcuMDM2MTNDMjIuMDM2NDQgNy4zNTYzMiAyMS42OTE2IDcuNzY2MTcgMjEuNDA0NiA4LjE2MDQ2QzIwLjc4ODkgOC42MzQ4NSAxOS45OTc3IDkuMjQ2OTcgMTguODk4MyAxMC4wNjIyQzE3Ljk2NTYgMTAuNzY0MSA5Ljk2Mzg4IDE3LjgxNzQgMi4yOTYxNCAxNy40MDk1QzIuNDQ4NDkgMTYuNzI0MiAyLjc2MzcgMTYuMDYxNCAzLjAzMTQ5IDE1LjQ0MzdDMi44NjMyNiAxNi41MzEyIDIuOTgwNjggMTYuOTgyNiAzLjE4NjM2IDE3LjUzNDlDMi4zMDQ5MiAyMi40NjQgMi44OTUzIDIyLjgyNjUgMy43MzUzNCAyMy40NjQ0QzQuNjQyNDIgMjQuMTE5MyA1Ljg3Njg5IDI0LjE5MjggNy4wMzcwMiAyMy44OTYxQzIuNTQxNjcgMy41NjAyMiAyLjQxNDc4IDIuNzc3NiAyLjM4MDY4IDIuMzExMzZMMTIuMTI0MiAwLjA1NjYwMjJDMTIuMDczIDAuMDMzMzY1NiAxMi4wMjE0IDAuMDEyMDc4NiAxMi45MDY5IDAuMDExOTk2QzEyLjkxNjggMC4wMTE5OTYzIDEyLjUyOTcgMC4wMTI2NTU1IDEyLjUyOTcgMC4wNTY2MDIyQzExLjg2NCAwLjExNTMyMiAxMS4yMjQ1IDAuMzAxNDM1IDEwLjcxMiAwLjUyOTU3OEMxMC40NTMgMC42NDY4NzUgMTAuMjQ1NyAwLjc2NzIgOS45OTkxMiAwLjg5NDkzQzkuNDc4MDcgMS4xODU0NCA5LjA2NjY4IDEuNjY4NjUgOC42Njg1NiAyLjE5MzUyQzguMDMwNzkgMi44MDI1MyA3LjQyODQxIDMuNzU3NTggNi44NDcxOSAzLjkwNzZDNjY4NTE3IDE2LjY0MDkgOS44OTAzMSAxOC40NTA4IDExLjkxMTYgMTkuOTAyMzVMMjIuNjQyMiA2Ljk0NDkyIiBmaWxsPSIjNTU2MTY1Ii8+Cjwvc3ZnPgo=" alt="Doctor Icon" />
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
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIyLjQ0NTcgNi4wNTE2TDcuNTI1ODcgMjAuNTQ5MUM2LjYzNjIyIDIxLjQzNzcgNS4xODU0NiAyMS40Mzc3IDQuMjk2ODQgMjAuNTQ5MUMzLjQwODIyIDE5LjY2MDUgMy40MDgyMiAxOC4yMDk3IDQuMjk2ODQgMTcuMzIxMUwxMi4wOTE0IDkuNDMyODZMMTQuNjA1MiAxMi4yMjQzTDIyLjQ0NTcgNi4wNTE2WiIgZmlsbD0iIzU1NjE2NSIvPgo8cGF0aCBkPSJNMTQuMjQyNiAxLjU1MDUxTDIwLjEwNjYgOC44MTE2M0wxMy4yMzMyIDE2LjQ2NTFMNy4zNjkxNSA5LjIwMzk0TDE0LjI0MjYgMS41NTA1MVoiIGZpbGw9IiM1NTYxNjUiLz4KPC9zdmc+Cg==" alt="Hardware Icon" />
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
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcgMkM2LjQ0NzcyIDIgNiAyLjQ0NzcyIDYgM1YyMS4yMDY4QzYgMjEuNzU5NiA2LjQ0NzcyIDIyIDcgMjJDNy41NTIyOCAyMiA4IDIxLjc1OTYgOCAyMS4yMDY4VjEzQzggMTIuNDQ3NyA4LjQ0NzcyIDEyIDkgMTJINUwxOSA5VjMxTTE5IDIyVjE1QzE5IDE0LjQ0NzcgMTguNTUyMyAxNCAxOCAxNEgyMFYyMkgxOVoiIGZpbGw9IiM1NTYxNjUiLz4KPC9zdmc+Cg==" alt="Hospital Building Icon" />
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