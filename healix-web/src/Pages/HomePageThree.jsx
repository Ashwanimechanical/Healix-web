import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

// Import SVG logos for the client scroll section
import airbnbLogo from '../assets/airbnb.svg';
import googleLogo from '../assets/google.svg';
import amazonLogo from '../assets/amazon.svg';
import microsoftLogo from '../assets/microsoft.svg';
import fedexLogo from '../assets/fedex.svg';
import hubspotLogo from '../assets/hubspot.svg';

// Import PNG images for the testimonials section
import mehtaImg from '../assets/mehta.png';
import nishitaImg from '../assets/nishita.png';
import laurenImg from '../assets/lauren.png';


// --- Styled Components for HomePageThree (Metrics Section) ---

const MetricsContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 20px;
    background-color: #f8f9ff;
    text-align: center;
    width: 100%;
    box-sizing: border-box;

    @media (min-width: 768px) {
        padding: 100px 40px;
    }
    @media (min-width: 1024px) {
        padding: 120px 80px;
    }
`;

const MetricsSectionHeader = styled.div`
    margin-bottom: 60px;
    max-width: 800px;
    text-align: center;
`;

const MainTitle = styled.h2`
    font-size: 38px;
    font-weight: 700;
    color: #000;
    margin-bottom: 15px;
    line-height: 1.2;

    @media (max-width: 767px) { /* Mobile specific font size */
        font-size: 30px;
    }
    @media (min-width: 768px) {
        font-size: 48px;
    }
    @media (min-width: 1024px) {
        font-size: 56px;
    }
`;

const SubText = styled.p`
    font-size: 18px;
    color: #666;
    line-height: 1.6;

    @media (max-width: 767px) { /* Mobile specific font size */
        font-size: 16px;
    }
    @media (min-width: 768px) {
        font-size: 20px;
    }
`;

const CardsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr; /* Single column on mobile */
    gap: 30px;
    width: 100%;
    max-width: 1200px;

    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr); /* Three columns on larger screens */
    }
`;

const MetricCard = styled.div`
    background-color: ${props => {
        switch (props.borderColor) {
            case '#4299E1': // Blueish
                return '#EBF8FF'; // Light blue
            case '#ECC944': // Yellowish
                return '#FCFCEB'; // Light yellow
            case '#F6AD55': // Orangish
                return '#FEF6ED'; // Light orange
            default:
                return '#fff'; // Default white
        }
    }};
    border-radius: 12px;
    padding: 40px 25px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-bottom: 5px solid ${props => props.borderColor};
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: translateY(-10px);
    }

    @media (max-width: 767px) { /* Adjust padding for smaller screens */
        padding: 30px 20px;
    }
`;

const MetricValue = styled.h3`
    font-size: 56px;
    font-weight: 700;
    color: #333;
    margin-bottom: 10px;
    line-height: 1;

    @media (max-width: 767px) { /* Mobile specific font size */
        font-size: 48px;
    }
    @media (min-width: 768px) {
        font-size: 64px;
    }
`;

const MetricDescription = styled.p`
    font-size: 18px;
    color: #555;
    line-height: 1.4;

    @media (max-width: 767px) { /* Mobile specific font size */
        font-size: 16px;
    }
    @media (min-width: 768px) {
        font-size: 20px;
    }
`;

// Define the scrolling animation
const scrollAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%); /* Scrolls half the width of the duplicated content */
  }
`;

const LogosSection = styled.section`
  padding: 60px 20px;
  background-color: #f8f9ff; /* Consistent background */
  text-align: center;
  overflow: hidden; /* Hide overflowing content */
  width: 100%; /* Ensure it takes full width */
  box-sizing: border-box; /* Include padding in width calculation */
  position: relative; /* Needed for absolute positioning of lines */

  /* Top line */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 93%; /* Adjust width of the line */
    height: 1px; /* Thickness of the line */
    background-color: #e0e0e0; /* Light grey color for the line */

    @media (max-width: 767px) {
        width: 90%; /* Slightly smaller line width on mobile */
    }
  }

  /* Bottom line */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 93%; /* Adjust width of the line */
    height: 1px; /* Thickness of the line */
    background-color: #e0e0e0; /* Light grey color for the line */

    @media (max-width: 767px) {
        width: 90%; /* Slightly smaller line width on mobile */
    }
  }

  @media (max-width: 767px) { /* Adjust padding for smaller screens */
        padding: 40px 10px;
    }
`;

const ClientLogosSectionTitle = styled.h2`
  font-size: 38px;
  font-weight: 700;
  color: #000;
  margin-bottom: 40px;
  line-height: 1.2;

  @media (max-width: 767px) { /* Mobile specific font size */
    font-size: 30px;
    margin-bottom: 30px;
  }
  @media (min-width: 768px) {
    font-size: 48px;
  }
`;

const LogosContainer = styled.div`
  display: flex;
  width: 200%; /* Double the width to allow for seamless scrolling */
  animation: ${scrollAnimation} 30s linear infinite; /* Adjust duration for speed */
  white-space: nowrap; /* Prevent logos from wrapping */
  align-items: center; /* Vertically align logos */
  padding: 40px 0; /* Add vertical padding around logos */

  /* Pause animation on hover */
  &:hover {
    animation-play-state: paused;
  }

  @media (max-width: 767px) { /* Adjust padding for smaller screens */
    padding: 20px 0;
    animation: ${scrollAnimation} 20s linear infinite; /* Faster scroll on mobile */
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0; /* Prevent items from shrinking */
  width: auto; /* Allow image to dictate width */
  padding: 0 40px; /* Spacing between logos */

  img {
    height: 40px; /* Adjust logo height as needed */
    max-width: 100%;
  }

  /* Adjust padding for smaller screens if necessary */
  @media (max-width: 767px) {
    padding: 0 20px;
    img {
      height: 25px; /* Smaller logos on mobile */
    }
  }
`;


// --- Styled Components for Testimonials Section ---

const TestimonialsContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 20px;
    background-color: #f8f9ff; /* Consistent with Metrics section background */
    text-align: center;
    width: 100%;
    box-sizing: border-box;

    @media (min-width: 768px) {
        padding: 100px 40px;
    }
    @media (min-width: 1024px) {
        padding: 120px 80px;
    }
    @media (max-width: 767px) { /* Adjust padding for smaller screens */
        padding: 60px 20px;
    }
`;

const TestimonialsSectionHeader = styled.div`
    margin-bottom: 60px;
    text-align: center;

    @media (max-width: 767px) {
        margin-bottom: 40px;
    }
`;

const TestimonialsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr; /* Single column on mobile */
    gap: 30px;
    width: 100%;
    max-width: 1200px;

    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr); /* Three columns on larger screens */
    }
`;

const TestimonialCard = styled.div`
    background-color: #fff;
    border-radius: 12px;
    padding: 40px 25px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: translateY(-10px);
    }

    @media (max-width: 767px) { /* Adjust padding for smaller screens */
        padding: 30px 20px;
    }
`;

const CustomerAvatar = styled.img`
    width: 85px;
    height: 85px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 20px;
    border: 3px solid #e0e0e0; /* Subtle border around avatar */

    @media (max-width: 767px) { /* Smaller avatar on mobile */
        width: 70px;
        height: 70px;
        margin-bottom: 15px;
    }
`;

const CustomerName = styled.h4`
    font-size: 22px;
    font-weight: 600;
    color: #333;
    margin-bottom: 5px;

    @media (max-width: 767px) { /* Smaller font on mobile */
        font-size: 20px;
    }
`;

const CustomerTitle = styled.p`
    font-size: 16px;
    color: #777;
    margin-bottom: 25px;

    @media (max-width: 767px) { /* Smaller font and margin on mobile */
        font-size: 14px;
        margin-bottom: 20px;
    }
`;

const TestimonialText = styled.p`
    font-size: 18px;
    color: #555;
    line-height: 1.6;
    font-style: italic;
    margin-bottom: 25px;

    @media (max-width: 767px) { /* Smaller font on mobile */
        font-size: 16px;
        margin-bottom: 20px;
    }
`;

const StarRating = styled.div`
    color: #FFD700; /* Gold color for stars */
    font-size: 34px;

    span {
        margin: 0 2px;
    }

    @media (max-width: 767px) { /* Smaller stars on mobile */
        font-size: 28px;
    }
`;

// Helper Hook for Counting Animation (from your original code)
const useCounter = (target, duration = 2000) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);
    const animationFrameId = useRef(null);
    const startTimeRef = useRef(null);

    useEffect(() => {
        if (target === 0) return;

        const animateCount = (timestamp) => {
            if (!startTimeRef.current) startTimeRef.current = timestamp;
            const progress = timestamp - startTimeRef.current;
            const percentage = Math.min(progress / duration, 1);
            // Ease-out effect for a smoother animation
            const easedPercentage = 1 - Math.pow(1 - percentage, 3); // Cubic ease-out
            const value = Math.floor(easedPercentage * target);

            if (value > countRef.current) {
                setCount(value);
                countRef.current = value;
            }

            if (percentage < 1) {
                animationFrameId.current = requestAnimationFrame(animateCount);
            } else {
                setCount(target); // Ensure it lands on the exact target
                countRef.current = target;
            }
        };

        animationFrameId.current = requestAnimationFrame(animateCount);

        return () => {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
            // Reset state if component unmounts or target changes to 0,
            // to ensure animation restarts if section goes out then back into view.
            setCount(0);
            countRef.current = 0;
            startTimeRef.current = null;
        };
    }, [target, duration]);

    return count;
};

// --- Main Combined Component ---
const HomePageThree = () => {
    const sectionRef = useRef(null); // Ref for the Metrics section for Intersection Observer
    const [inView, setInView] = useState(false);

    // Targets for the counting animation based on the image
    const targetHospitals = inView ? 75 : 0;
    const targetROI = inView ? 931 : 0; // K is handled in display
    const targetStaff = inView ? 500 : 0;

    const hospitalsCount = useCounter(targetHospitals);
    const roiCount = useCounter(targetROI);
    const staffCount = useCounter(targetStaff);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Set inView to true when the element enters the viewport
                if (entry.isIntersecting) {
                    setInView(true);
                    // Optionally, unobserve after animation starts if you only want it once
                    observer.unobserve(entry.target);
                } else {
                    // If the section goes out of view, reset inView to false
                    // This allows the animation to restart if scrolled out and back in
                    setInView(false);
                }
            },
            {
                threshold: 0.5, // Trigger when 50% of the section is visible
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []); // Empty dependency array means this effect runs once on mount

    // Logos data for the auto-scrolling section
    const logos = [
        { src: airbnbLogo, alt: 'Airbnb' },
        { src: googleLogo, alt: 'Google' },
        { src: amazonLogo, alt: 'Amazon' },
        { src: microsoftLogo, alt: 'Microsoft' },
        { src: fedexLogo, alt: 'FedEx' },
        { src: hubspotLogo, alt: 'HubSpot' },
    ];

    // Duplicate the logos to create a seamless loop
    const duplicatedLogos = [...logos, ...logos];

    // Testimonials data
    const testimonials = [
        {
            avatar: mehtaImg,
            name: 'Dr. Mehta',
            title: 'Radiance Hospitals',
            text: '“Our patient inquiries have doubled since partnering with Healix. Their team understands healthcare like no other.”',
            rating: 5
        },
        {
            avatar: nishitaImg,
            name: 'Nishita Rao',
            title: 'Hospital Operations Head',
            text: '“From staffing support to digital strategy, they’re a one-stop solution. Highly professional and prompt.”',
            rating: 4
        },
        {
            avatar: laurenImg,
            name: 'Lauren M.',
            title: 'UI Designer @Boo',
            text: '“Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet”',
            rating: 4
        },
    ];

    return (
        <>
            {/* Metrics Section */}
            <MetricsContainer ref={sectionRef}>
                <MetricsSectionHeader>
                    <MainTitle>Our Metrics Tell the Story</MainTitle>
                    <SubText>
                        Our metrics component gives you the inside scoop on your success and helps you stay on top of your game in style.
                    </SubText>
                </MetricsSectionHeader>

                <CardsGrid>
                    <MetricCard borderColor="#4299E1"> {/* Blueish */}
                        <MetricValue>{hospitalsCount}+</MetricValue>
                        <MetricDescription>Hospitals Transformed</MetricDescription>
                    </MetricCard>
                    <MetricCard borderColor="#ECC944"> {/* Yellowish */}
                        <MetricValue>{roiCount}k+</MetricValue>
                        <MetricDescription>Average ROI on Marketing Campaigns</MetricDescription>
                    </MetricCard>
                    <MetricCard borderColor="#F6AD55"> {/* Orangish */}
                        <MetricValue>{staffCount}+</MetricValue>
                        <MetricDescription>Medical Staff Placed</MetricDescription>
                    </MetricCard>
                </CardsGrid>
            </MetricsContainer>

            {/* Client Logos Section */}
            <LogosSection>
                <ClientLogosSectionTitle>We Have Worked For...</ClientLogosSectionTitle>
                <LogosContainer>
                    {duplicatedLogos.map((logo, index) => (
                        <LogoWrapper key={index}>
                            <img src={logo.src} alt={logo.alt} />
                        </LogoWrapper>
                    ))}
                </LogosContainer>
            </LogosSection>

            {/* Testimonials Section */}
            <TestimonialsContainer>
                <TestimonialsSectionHeader>
                    <MainTitle>Real Stories from Satisfied Customers</MainTitle>
                    <SubText>
                        See how our landing page ui kit is making an impact.
                    </SubText>
                </TestimonialsSectionHeader>

                <TestimonialsGrid>
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index}>
                            <CustomerAvatar src={testimonial.avatar} alt={testimonial.name} />
                            <CustomerName>{testimonial.name}</CustomerName>
                            <CustomerTitle>{testimonial.title}</CustomerTitle>
                            <TestimonialText>{testimonial.text}</TestimonialText>
                            <StarRating>
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} role="img" aria-label="star">
                                        {i < testimonial.rating ? '★' : '☆'}
                                    </span>
                                ))}
                            </StarRating>
                        </TestimonialCard>
                    ))}
                </TestimonialsGrid>
            </TestimonialsContainer>
        </>
    );
};

export default HomePageThree;