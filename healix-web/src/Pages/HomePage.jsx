import React from 'react';
import styled from 'styled-components';
import Ellipse from '../assets/Ellipse.png'; // Circular frame
import teamPhoto from '../assets/unsplash.png'; // Team photo for "Who We Are" section
import HomePageTwo from './HomePageTwo';
import HomePageThree from './HomePageThree';
import HomePageFour from './HomePageFour';
import HomePageFive from './HomePageFive';


// IMPORTANT: Replace this placeholder URL with the actual path to your doctors image!
// Example: import doctorsActualImage from '../assets/your-doctors-doctors-image.jpg';
const doctorsImage = "https://placehold.co/400x400/cccccc/333333?text=Doctors+Image"; // Placeholder for the doctors image


// === Styled Components for Hero Section ===

const MainContainer = styled.div`
  max-width: 1400px; /* Adjust this value as needed to control content width */
  margin: 0 auto; /* Centers the container horizontally */
  padding: 0 2px; /* Add some horizontal padding to prevent content from touching edges on smaller screens */

  @media (max-width: 768px) {
    padding: 0 5px; /* Slightly less padding on smaller screens */
  }
`;

const HomePageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  background: linear-gradient(to right,rgba(229, 167, 225, 0.29),rgba(187, 212, 191, 0.43),rgba(214, 206, 144, 0.58),rgba(147, 182, 213, 0.58));
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 60px 80px;
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
  max-width: 600px;
  text-align: center; /* Center text on mobile */
  z-index: 2; /* Ensure content is above decorative elements */

  @media (min-width: 768px) {
    text-align: left; /* Align text left on desktop */
    margin-right: 40px;
  }
`;

const Heading = styled.h1`
  font-size: 42px;
  font-weight: 700;
  line-height: 1.3;
  color: #222;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 32px; /* Smaller font on mobile */
  }
`;

const Description = styled.p`
  font-size: 18px;
  color: #555;
  margin-bottom: 30px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 16px; /* Smaller font on mobile */
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center; /* Center buttons on mobile */
  gap: 16px;

  @media (min-width: 768px) {
    justify-content: flex-start; /* Align buttons left on desktop */
  }
`;

const Button = styled.button`
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s ease;
  border: none;

  &:hover {
    opacity: 0.9;
  }
`;

const PrimaryButton = styled(Button)`
  background-color: #222;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SecondaryButton = styled(Button)`
  background-color: #f0f0f0;
  color: #333;
`;

const Icon = styled.span`
  font-size: 18px;
`;

const ImageWrapper = styled.div`
  flex: 1;
  position: relative;
  max-width: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px; /* Add margin on top for mobile when stacked */

  @media (min-width: 768px) {
    margin-top: 0; /* Remove margin on desktop */
  }
`;

const EllipseImage = styled.img`
  width: 100%;
  max-width: 400px;
  z-index: 1;
`;

const DoctorsImage = styled.img`
  position: absolute;
  width: 70%;
  max-width: 260px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  object-fit: cover;
  z-index: 2;
`;

const DecorativeCircle = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 80px;
  height: 80px;
  border: 3px solid #333;
  border-radius: 50%;
  z-index: 3; /* Ensure it's on top of doctors image */

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    top: 5%;
    right: 10%;
  }
`;

const Star = styled.div`
  position: absolute;
  background-color:rgb(12, 12, 12);
  transform: rotate(45deg);
  z-index: 3; /* Ensure it's on top of doctors image */
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};

  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color:rgb(9, 9, 9);
    width: 100%;
    height: 100%;
  }

  &::before {
    transform: rotate(90deg);
  }

  &::after {
    transform: rotate(0deg);
  }
`;

// === Styled Components for "Who We Are" Section ===

const WhoWeAreSectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 40px; /* Ample padding for the section */
    background-color: #fff; /* White background as per the image */
    text-align: center; /* Default center text on mobile */

    @media (min-width: 768px) {
        text-align: left; /* Align text left on desktop */
        padding: 100px 80px;
    }
`;

const SectionHeading = styled.h2`
    font-size: 46px;
    font-weight: 700;
    color: #000000;
    margin-bottom: 0px;
    /* Removed fixed margin-left for responsiveness */
    /* margin-left: 360px; */
    text-align: center; /* Center on mobile */
    width: 100%; /* Take full width to allow centering */

    @media (max-width: 768px) {
        font-size: 32px;
    }
    @media (min-width: 768px) {
        text-align: right; /* Align right on desktop */
        margin-right: 720px;

        /* To simulate the previous margin-left, you could use a max-width and margin: 0 auto for the parent,
           or adjust text-align as done here. For a multi-column layout on desktop,
           the text-align: left on the section itself, combined with the ContentBlock's layout,
           will naturally align it. */
    }
`;

const SectionSubheading = styled.p`
    font-size: 18px;
    color: #666;
    margin-bottom: 30px;
    /* Removed fixed margin-left for responsiveness */
    /* margin-left: 540px; */
    text-align: center; /* Center on mobile */
    width: 100%; /* Take full width to allow centering */

    @media (max-width: 768px) {
        font-size: 16px;
        margin-bottom: 40px;
    }
    @media (min-width: 768px) {
        text-align: right;
        margin-right: 380px;
    }
`;

const ContentBlock = styled.div`
    display: flex;
    flex-direction: column; /* Stack vertically on mobile */
    gap: 40px; /* Space between image and text on mobile */
    max-width: 1200px; /* Max width for the content block */
    width: 100%;

    @media (min-width: 768px) {
        flex-direction: row; /* Arrange horizontally on desktop */
        gap: 80px; /* Space between image and text on desktop */
    }
`;

const ImageContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center; /* Center image horizontally on mobile */
    align-items: center; /* Center image vertically if container allows */

    @media (min-width: 768px) {
        justify-content: flex-start; /* Align image to start on desktop */
        align-items: flex-start; /* Align image to top on desktop */
    }
`;

const TeamImage = styled.img`
    width: 100%;
    max-width: 500px; /* Limit image size */
    height: auto;
    border-radius: 12px; /* Slightly rounded corners for the image */
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1); /* Subtle shadow */
    object-fit: cover;
`;

const TextContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center; /* Center text content horizontally on mobile */

    @media (min-width: 768px) {
        align-items: flex-start; /* Align text left on desktop */
    }
`;

const DescriptionParagraph = styled.p`
    font-size: 16px;
    color: #444;
    line-height: 1.7;
    margin-bottom: 20px;
    text-align: center; /* Center text on mobile */

    @media (min-width: 768px) {
        text-align: left; /* Align text left on desktop */
    }
`;

const SubHeading = styled.h3`
    font-size: 20px;
    font-weight: 600;
    color: #000000;
    margin-top: 0px;
    margin-bottom: 5px;
    text-align: center; /* Center text on mobile */

    @media (min-width: 768px) {
        text-align: left; /* Align text left on desktop */
    }
`;

const SubText = styled.p`
    font-size: 16px;
    color: #444;
    line-height: 1.7;
    margin-bottom: 20px;
    text-align: center; /* Center text on mobile */

    @media (min-width: 768px) {
        text-align: left; /* Align text left on desktop */
    }
`;

// Reusing Button styles from the hero section for consistency
const SectionPrimaryButton = styled(PrimaryButton)`
    margin-top: 20px; /* Space above the button */
`;


// === Component ===

const HomePage = () => {
  return (
    <MainContainer> {/* Wrap all content in MainContainer */}
      <HomePageContainer>
        <ContentWrapper>
          <Heading>
            Empowering Healthcare<br />
            Through Smart<br />
            Marketing & Tech<br />
            Solutions
          </Heading>
          <Description>
            Your all-in-one partner for hospital marketing, digital transformation,<br />
            staffing, and medical hardware solutions.
          </Description>
          <ButtonsContainer>
            <PrimaryButton>
              <Icon>⚡</Icon> Get Started
            </PrimaryButton>
            <SecondaryButton>How it works</SecondaryButton>
          </ButtonsContainer>
        </ContentWrapper>

        <ImageWrapper>
          <EllipseImage src={Ellipse} alt="Decorative Ellipse" />
          {/* Doctors Image is now uncommented and using the placeholder */}
          {/* <DoctorsImage src={doctorsImage} alt="Doctors" /> Added doctorsImage */}
          <DecorativeCircle />
          <Star size={20} bottom="10%" left="15%" />
          <Star size={15} top="15%" right="-2%" />
        </ImageWrapper>
      </HomePageContainer>

      {/* The "Who We Are" section is now a separate, sibling component */}
      <WhoWeAreSectionContainer>
          <SectionHeading>Who We Are?</SectionHeading>
          <SectionSubheading>a full-service healthcare marketing and solutions agency.</SectionSubheading>

          <ContentBlock>
              <ImageContainer>
                  <TeamImage src={teamPhoto} alt="Our Team" />
              </ImageContainer>
              <TextContent>
                  <DescriptionParagraph>
                      At Healix, we specialize in transforming healthcare institutions
                      into powerful, patient-centric brands. With over a decade of
                      expertise, our team blends healthcare knowledge with
                      modern marketing, technology, and operational support. We
                      are not just marketers—we're your strategic growth partners.
                  </DescriptionParagraph>

                  <SubHeading>Mission:</SubHeading>
                  <SubText>
                      To deliver measurable growth and enhanced patient
                      experiences through tailored marketing, digital tools, and
                      clinical staffing support.
                  </SubText>

                  <SubHeading>Vision:</SubHeading>
                  <SubText>
                      To be the most trusted healthcare marketing and support
                      agency, redefining success for hospitals and clinics across
                      the country.
                  </SubText>

                  <SectionPrimaryButton>
                      Get Started &rarr; {/* Arrow icon */}
                  </SectionPrimaryButton>
              </TextContent>
          </ContentBlock>
      </WhoWeAreSectionContainer>
      <HomePageTwo />
      <HomePageThree />
      <HomePageFour />
      <HomePageFive />
    </MainContainer>
  );
};

export default HomePage;