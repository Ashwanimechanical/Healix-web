import React from 'react';
import styled from 'styled-components';
import Ellipse from '../assets/Ellipse.png'; // Circular frame
import teamPhoto from '../assets/unsplash.png'; // Team photo for "Who We Are" section
import HomePageTwo from './HomePageTwo';
import HomePageThree from './HomePageThree';
import HomePageFour from './HomePageFour';
import HomePageFive from './HomePageFive';

// === Styled Components for Hero Section ===

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const MainContainer = styled.div`
  max-width: 1400px; /* This controls the overall maximum width of your page content */
  margin: 0 auto; /* Centers the entire page content horizontally */
  padding: 0; /* Important: MainContainer itself has NO horizontal padding, its children will */
  box-sizing: border-box; /* Ensures padding is included in the total width if applied elsewhere */
`;

const HomePageContainer = styled.section`
  display: flex;
  flex-direction: column; /* Default to column on mobile */
  align-items: center; /* Center content horizontally within this section */
  padding: 40px 20px; /* Default horizontal padding for mobile */
  background: linear-gradient(to right, rgba(229, 167, 225, 0.29), rgba(187, 212, 191, 0.43), rgba(214, 206, 144, 0.58), rgba(147, 182, 213, 0.58));
  position: relative;
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 768px) {
    flex-direction: row; /* Layout as row on desktop */
    justify-content: space-between; /* Pushes content wrappers to edges */
    padding: 60px 80px; /* Horizontal padding re-applied directly to this section for desktop */
  }

  @media (max-width: 1024px) { /* Adjust breakpoint for larger tablets/laptops */
    padding: 60px 50px; /* Adjusted padding for larger tablets/laptops */
  }

  @media (max-width: 480px) {
    padding: 40px 20px; /* Adjusted padding for very small screens (mobile) */
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
  max-width: 600px;
  text-align: center; /* Center text on mobile */
  z-index: 2;
  width: 100%; /* Ensure it takes full width up to max-width */

  @media (min-width: 768px) {
    text-align: left; /* Align text left on desktop */
    margin-right: 40px;
  }

  @media (min-width: 1024px) {
    max-width: 50%;
  }
`;

const Heading = styled.h1`
  font-size: 42px;
  font-weight: 700;
  line-height: 1.3;
  color: #222;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  color: #555;
  margin-bottom: 30px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column; /* Stack buttons on very small screens */
  justify-content: center; /* Center buttons on mobile */
  gap: 16px;
  width: 100%; /* Ensure buttons container takes full width */

  @media (min-width: 480px) { /* Adjust breakpoint for horizontal buttons */
    flex-direction: row; /* Row layout for buttons on wider mobile screens */
  }

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
  width: 100%; /* Make buttons full width on small screens */

  @media (min-width: 480px) {
    width: auto; /* Revert to auto width on wider screens */
  }

  &:hover {
    opacity: 0.9;
  }
`;

const PrimaryButton = styled(Button)`
  background-color: #222;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center; /* Center content within button */
  gap: 8px;
`;

const SecondaryButton = styled(Button)`
  background-color: #f0f0f0;
  color: #333;
  display: flex; /* Ensure secondary button also uses flex for alignment */
  align-items: center;
  justify-content: center;
`;

const Icon = styled.span`
  font-size: 18px;
`;

const ImageWrapper = styled.div`
  flex: 1;
  position: relative;
  max-width: 500px;
  width: 100%; /* Ensure it takes full width up to max-width */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;

  @media (min-width: 768px) {
    margin-top: 0;
  }

  @media (min-width: 1024px) {
    max-width: 50%;
  }
`;

const EllipseImage = styled.img`
  width: 100%;
  max-width: 400px;
  z-index: 1;
`;



const DecorativeCircle = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 80px;
  height: 80px;
  border: 3px solid #333;
  border-radius: 50%;
  z-index: 3;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    top: 5%;
    right: 10%;
  }
`;

const Star = styled.div`
  position: absolute;
  background-color: rgb(12, 12, 12);
  transform: rotate(45deg);
  z-index: 3;
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
    background-color: rgb(9, 9, 9);
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
  padding: 80px 20px; /* Default horizontal padding for mobile */
  background-color: #fff;
  text-align: center;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 100px 80px; /* Desktop padding */
  }

  @media (max-width: 1024px) {
    padding: 80px 50px; /* Adjusted padding for larger tablets/laptops */
  }

  @media (max-width: 480px) {
    padding: 60px 20px; /* Adjusted padding for very small screens (mobile) */
  }
`;

const SectionHeading = styled.h2`
  font-size: 46px;
  font-weight: 700;
  color: #000000;
  margin-bottom: 10px; /* Add some space below heading */
  text-align: center;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const SectionSubheading = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px; /* Increased margin for better separation */
  text-align: center;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 30px;
  }
`;

const ContentBlock = styled.div`
  display: flex;
  flex-direction: column; /* Stack vertically on mobile */
  gap: 40px;
  max-width: 1200px;
  width: 100%;
  align-items: center; /* Center content within this block on mobile */

  @media (min-width: 768px) {
    flex-direction: row; /* Arrange horizontally on desktop */
    gap: 80px;
    align-items: flex-start; /* Align items to the top on desktop */
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center; /* Center image horizontally on mobile */
  width: 100%; /* Ensure it takes full width to respect padding */

  @media (min-width: 768px) {
    justify-content: flex-start; /* Align image to start on desktop */
  }
`;

const TeamImage = styled.img`
  width: 100%;
  max-width: 500px; /* Limit image size */
  height: auto;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  object-fit: cover;
`;

const TextContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center text content horizontally on mobile */
  width: 100%; /* Ensure text content takes full width */

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
  width: 100%; /* Ensure paragraph takes full width */

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
  width: 100%; /* Ensure subheading takes full width */

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
  width: 100%; /* Ensure subtext takes full width */

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
    <AppWrapper>
      <MainContainer>
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
        {/* Other HomePage sections */}
        <HomePageTwo />
        <HomePageThree />
        <HomePageFour />
        <HomePageFive />
      </MainContainer>
    </AppWrapper>
  );
};

export default HomePage;