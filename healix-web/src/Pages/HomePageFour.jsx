import React from 'react';
import styled from 'styled-components';

// Import images
import marketingImg from '../assets/marketing.png'; // For Case Study section
import shubhamImg from '../assets/shubham.png';     // For Team section
import sumitImg from '../assets/sumit.png';         // For Team section

// New blog post images
import hospitalToolsImg from '../assets/hospital.png';     // "Top 5 Digital Tools"
import howToMarketImg from '../assets/howtomarket.png';   // "How to Market Your Hospital"
import hiringMedicalImg from '../assets/hiringmedical.png'; // "Hiring Medical Staff"


// --- General Styled Components for Section Headers (Reused) ---

const SectionHeader = styled.div`
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

// --- Styled Components for Case Study Section ---

const CaseStudyContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 20px;
    background: linear-gradient(to right, rgba(229, 167, 225, 0.29), rgba(187, 212, 191, 0.43), rgba(214, 206, 144, 0.58), rgba(147, 182, 213, 0.58)); /* Specific gradient background */
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

const CaseStudyCardWrapper = styled.div`
    background-color: #fff;
    border-radius: 16px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: row; /* Default for desktop: content and image side-by-side */
    align-items: center;
    width: 100%;
    max-width: 1000px;
    padding: 40px;
    gap: 40px;

    @media (max-width: 991px) {
        flex-direction: column; /* Stack content and image vertically on smaller screens */
        padding: 30px;
        gap: 30px;
    }

    @media (max-width: 767px) {
        padding: 25px;
        gap: 25px;
    }
`;

const CaseStudyLeftContent = styled.div` /* New container for the left-hand text content */
    flex: 1;
    display: flex;
    flex-direction: column;
    text-align: left; /* Align text to the left */

    @media (max-width: 991px) {
        text-align: center; /* Center text when stacked on smaller screens */
        align-items: center;
    }
`;

const CaseStudyHospitalName = styled.h3`
    font-size: 28px;
    font-weight: 700;
    color: #333;
    margin-bottom: 15px; /* Spacing below the hospital name */

    @media (max-width: 767px) {
        font-size: 24px;
        margin-bottom: 10px;
    }
`;

const CaseStudyDescription = styled.p`
    font-size: 18px;
    color: #666;
    line-height: 1.6;
    margin-bottom: 20px; /* Spacing below the description */

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
    margin-bottom: 30px; /* Spacing below the metric */

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
    flex: 1; /* Takes equal space as the content */
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
        width: 100%; /* Image takes full width when stacked */
        max-width: 400px; /* Max width for image when stacked */
        padding: 0;
        background: none; /* Remove background when stacked */
    }
`;

const PaginationButtons = styled.div`
    display: flex;
    margin-top: 40px;
    gap: 60px; /* Keeping gap as requested for desktop */

    @media (max-width: 767px) {
        margin-top: 30px;
        gap: 45px;
    }
`;

const PaginationButton = styled.button`
    background-color: transparent;
    border: 1px solid #000;
    border-radius: 50%;
    width: 50px; 
    height: 50px; /* Must be equal to width */
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px; 
    color: #333;
    font-weight: 300;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

    &:hover {
        background-color: rgba(0, 0, 0, 0.05);
        color: #000;
        transform: translateY(-2px);
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
    }

    &:active {
        transform: translateY(0);
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 767px) {
        width: 40px; 
        height: 40px; 
        font-size: 18px; 
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
`;


// --- Styled Components for "Meet our team" Section ---

const TeamContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 20px;
    background-color: #f8f9ff; /* Specific light background for team section */
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

const TeamGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
    width: 100%;
    max-width: 900px;

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const TeamCard = styled.div`
    background-color: #fff;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: translateY(-10px);
    }

    @media (max-width: 767px) {
        padding: 25px;
    }
`;

const TeamImage = styled.img`
    width: 160px;
    height: 160px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 20px;
    border: 4px solid #fff;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);

    @media (max-width: 767px) {
        width: 120px;
        height: 120px;
        margin-bottom: 15px;
    }
`;

const TeamName = styled.h3`
    font-size: 24px;
    font-weight: 600;
    color: #333;
    margin-bottom: 8px;

    @media (max-width: 767px) {
        font-size: 20px;
    }
`;

const TeamTitle = styled.p`
    font-size: 16px;
    color: #666;

    @media (max-width: 767px) {
        font-size: 14px;
    }
`;

// --- Styled Components for "Read Latest Blogs" Section ---

const BlogsContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 20px;
    background-color: #f8f9ff; /* White background as seen in image_7c64ae.jpg */
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

const BlogGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr; /* Single column on mobile */
    gap: 30px; /* Space between blog cards */
    width: 100%;
    max-width: 1100px; /* Adjust max-width as needed for 3 columns */

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr); /* Two columns on tablets */
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr); /* Three columns on desktops */
    }
`;

const BlogCard = styled.div`
    background-color: #fff;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    align-items: center; /* Center horizontally for content */
    text-align: left; /* Align text content to the left */
    overflow: hidden; /* Ensures image corners are rounded with card */
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: translateY(-5px);
    }
`;

const BlogImage = styled.img`
    width: 100%;
    height: 200px; 
    object-fit: cover; 
    border-radius: 20px; 
    

    @media (max-width: 767px) {
        height: 180px; /* Slightly smaller image height on mobile */
    }
`;

const BlogContent = styled.div`
    padding: 25px;
    display: flex;
    flex-direction: column;
    gap: 12px; /* Spacing between title and description */
    width: 100%; /* Ensure content takes full width of card */
    flex-grow: 1; /* Allow content to grow and take available space */

    @media (max-width: 767px) {
        padding: 20px;
        gap: 10px; /* Slightly smaller gap on mobile */
    }
`;

const BlogTitle = styled.h3`
    margin-left: 10px;
    font-size: 24px;
    font-weight: 700;
    color: #333;
    line-height: 1.3;
    margin-bottom: 0; 
    min-height: 58px; 
   
    @media (max-width: 767px) {
        font-size: 18px;
        min-height: 48px; /* Adjusted min-height for mobile font size */
    }
`;

const BlogDescription = styled.p`
    margin-left: 10px;
    font-size: 16px;
    color: #666;
    line-height: 1.6;
    margin-bottom: 0; /* Removed margin-bottom here as content padding handles spacing */

    @media (max-width: 767px) {
        font-size: 14px;
    }
`;


// --- Main HomePageFour Component (combines all sections) ---
const HomePageFour = () => {
    return (
        <> {/* Use a React Fragment to return multiple top-level elements */}
            {/* Our Case Studies Section */}
            <CaseStudyContainer>
                <SectionHeader>
                    <SectionTitle>Our Case Studies</SectionTitle>
                    <SectionSubText>
                        Find the perfect plan for your business with our flexible pricing options.
                    </SectionSubText>
                </SectionHeader>

                <CaseStudyCardWrapper>
                    {/* Reordered content here to match the image structure */}
                    <CaseStudyLeftContent> {/* Dedicated div for the left-hand text content */}
                        <CaseStudyHospitalName>Rainbow Hospital</CaseStudyHospitalName>
                        <CaseStudyDescription>
                            <span>✓</span> A 6-month marketing campaign led to a massive rise <br/> in digital appointments, social engagement, and <br/> patient retention.
                        </CaseStudyDescription>
                        <CaseStudyMetric>200% Rise in OPD Bookings</CaseStudyMetric>
                        <ViewMoreButton>View More</ViewMoreButton>
                    </CaseStudyLeftContent>
                    <CaseStudyImageWrapper>
                        <img src={marketingImg} alt="Marketing campaign results on mobile" />
                    </CaseStudyImageWrapper>
                </CaseStudyCardWrapper>

                <PaginationButtons>
                    <PaginationButton>&larr;</PaginationButton>
                    <PaginationButton>&rarr;</PaginationButton>
                </PaginationButtons>
            </CaseStudyContainer>

            {/* Meet our team Section */}
            <TeamContainer>
                <SectionHeader>
                    <SectionTitle>Meet our team</SectionTitle>
                    <SectionSubText>
                        Get to know the faces behind the scenes and learn about the values that drive us.
                    </SectionSubText>
                </SectionHeader>

                <TeamGrid>
                    <TeamCard>
                        <TeamImage src={sumitImg} alt="Dr. Sumit Kumawat" />
                        <TeamName>Dr.Sumit Kumawat</TeamName>
                        <TeamTitle>CXO</TeamTitle>
                    </TeamCard>
                    <TeamCard>
                        <TeamImage src={shubhamImg} alt="Shubham Saxena" />
                        <TeamName>Shubham Saxena</TeamName>
                        <TeamTitle>CXO</TeamTitle>
                    </TeamCard>
                </TeamGrid>
            </TeamContainer>

            {/* Read Latest Blogs Section */}
            <BlogsContainer>
                <SectionHeader>
                    <SectionTitle>Read Latest Blogs</SectionTitle>
                    <SectionSubText>
                        In a creative workplace, employees responsibly try different solutions
                    </SectionSubText>
                </SectionHeader>

                <BlogGrid>
                    <BlogCard>
                        <BlogContent>
                            <BlogTitle>Top 5 Digital Tools <br/> Every Modern <br/> Hospital Needs</BlogTitle>
                              <BlogImage src={hospitalToolsImg} alt="Top 5 Digital Tools Every Modern Hospital Needs" />
                            <BlogDescription>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit elit posuere morbi laoreet tortor auctor. Urna integer enim id neque, tristique quis.
                            </BlogDescription>
                        </BlogContent>
                    </BlogCard>

                    <BlogCard>
                        <BlogContent>
                            <BlogTitle>How to Market Your <br/> Hospital Ethically & <br/> Effectively</BlogTitle>
                             <BlogImage src={howToMarketImg} alt="How to Market Your Hospital Ethically & Effectively" />
                            <BlogDescription>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit elit posuere morbi laoreet tortor auctor. Urna integer enim id neque, tristique quis.
                            </BlogDescription>
                        </BlogContent>
                    </BlogCard>

                    <BlogCard>
                        <BlogContent>
                            <BlogTitle>Hiring Medical <br/> Staff: In-House vs. <br/> Outsourced</BlogTitle>
                            <BlogImage src={hiringMedicalImg} alt="Hiring Medical Staff: In-House vs. Outsourced" />
                            <BlogDescription>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit elit posuere morbi laoreet tortor auctor. Urna integer enim id neque, tristique quis.
                            </BlogDescription>
                        </BlogContent>
                    </BlogCard>
                </BlogGrid>
            </BlogsContainer>
        </>
    );
};

export default HomePageFour;