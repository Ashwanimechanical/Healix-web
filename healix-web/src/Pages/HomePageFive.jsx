import React from 'react';
import styled from 'styled-components';
// If you have react-icons installed, uncomment these imports for better visuals
import { FaInstagram, FaBehance, FaTwitter, FaPhone, FaEnvelope, FaDribbble } from 'react-icons/fa';

// Styled component for the main container (now with gradient background as in the image)
const ContactContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 80px 20px;
    /* This is the gradient background for the ENTIRE section, as seen in the image */
    background-color: #fff; /* White background for the card itself, as seen in the image */
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 767px) {
        padding: 60px 20px;
    }
    @media (min-width: 768px) {
        padding: 100px 40px;
    }
    @media (min-width: 1024px) {
        padding: 120px 80px;
    }
`;

// Styled component for the card-like wrapper (this card should be white as in the image)
const ContactCard = styled.div`
    background: linear-gradient(to right, rgba(241, 201, 126, 0.5), rgba(209, 204, 130, 0.53), rgba(214, 206, 144, 0.71), rgba(147, 182, 213, 0.58));
    border-radius: 16px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1); /* Soft shadow as in the image */
    display: flex;
    flex-direction: row; /* Default for desktop: side-by-side */
    width: 100%; /* Flexible width within max-width */
    max-width: 1000px; /* Max width for the card, centered, as seen in the image */
    padding: 50px;
    gap: 60px; /* Space between the left and right sections */

    @media (max-width: 991px) {
        flex-direction: column; /* Stack vertically on tablets and mobiles */
        padding: 40px;
        gap: 40px;
    }

    @media (max-width: 767px) {
        padding: 30px;
        gap: 30px;
    }
`;

// Styled component for the left content area
const ContactLeft = styled.div`
    flex: 1; /* Takes up available space */
    display: flex;
    flex-direction: column;
    text-align: left; /* Text alignment as in the image */
    justify-content: space-between; /* Pushes elements apart if needed */
`;

const ContactTitle = styled.h2`
    font-size: 48px;
    font-weight: 700;
    color: #333; /* Dark color for contrast */
    margin-bottom: 20px;
    line-height: 1.2;

    @media (max-width: 767px) {
        font-size: 36px;
        margin-bottom: 15px;
    }
    @media (min-width: 768px) {
        font-size: 42px;
    }
`;

const ContactSubText = styled.p`
    font-size: 18px;
    color: #555;
    line-height: 1.6;
    margin-bottom: 30px;

    @media (max-width: 767px) {
        font-size: 16px;
        margin-bottom: 25px;
    }
`;

const ContactInfoItem = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;
    font-size: 18px;
    color: #333;
    font-weight: 500;

    svg {
        font-size: 24px;
        color: #333;
    }

    @media (max-width: 767px) {
        font-size: 16px;
        margin-bottom: 15px;
        svg {
            font-size: 20px;
        }
    }
`;

const SocialMediaSection = styled.div`
    margin-top: 40px;

    @media (max-width: 767px) {
        margin-top: 30px;
    }
`;

const SocialMediaTitle = styled.h3`
    font-size: 20px;
    font-weight: 600;
    color: #333;
    margin-bottom: 20px;

    @media (max-width: 767px) {
        font-size: 18px;
        margin-bottom: 15px;
    }
`;

const SocialIcons = styled.div`
    display: flex;
    gap: 20px;

    @media (max-width: 767px) {
        justify-content: center;
    }
`;

const SocialIconLink = styled.a`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333;
    font-size: 22px;
    text-decoration: none;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
        background-color: #e0e0e0;
        color: #000;
    }

    @media (max-width: 767px) {
        width: 40px;
        height: 40px;
        font-size: 20px;
    }
`;

// Styled component for the right form area
const ContactRight = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding-left: 20px;
    margin-top: 200px;

    @media (max-width: 991px) {
        padding-left: 0;
        width: 100%;
        max-width: 400px;
        margin: 0 auto;
    }
`;

const FormField = styled.div`
    width: 90%;
    input {
        width: 100%;
        padding: 18px 20px;
        border: 1px solid #ddd;
        border-radius: 10px;
        font-size: 16px;
        color: #333;
        background-color: #f8f8f8;

        &::placeholder {
            color: #888;
        }

        &:focus {
            outline: none; /* Remove default outline */
            border-color: #a0a0a0;
            box-shadow: 0 0 0 2px rgba(147, 182, 213, 0.3); /* Subtle blueish focus highlight */
        }

        @media (max-width: 767px) {
            padding: 15px 18px;
            font-size: 15px;
        }
    }
`;

const SubmitButton = styled.button`
    background-color: #333;
    color: #fff;
    padding: 18px 30px;
    border: none;
    border-radius: 10px;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
    width: 40%;

    &:hover {
        background-color: #555;
        transform: translateY(-2px);
    }

    @media (max-width: 767px) {
        padding: 15px 25px;
        font-size: 16px;
    }
`;

// --- General Styled Components for Section Headers (Reused) ---

const SectionHeader = styled.div`
    margin-bottom: 60px;
    max-width: 800px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

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

// --- Styled Components for FAQ Section ---

const FAQContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 20px;
    background-color: #ffffff; /* Consistent white background for the section */
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

const FAQList = styled.div`
    display: flex;
    flex-direction: column;
   
    gap: 20px; /* Space between FAQ items */
    width: 100%;
    max-width: 800px; /* Max width for the FAQ list */

    @media (max-width: 767px) {
        gap: 15px;
    }
`;

const FAQItemWrapper = styled.div`
    background-color: #fff;
    border-radius: 16px;
     border: 1px solid #ddd;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0);
    overflow: hidden; /* Ensures border-radius applies to content */
    transition: all 0.3s ease;
    position: relative; /* For the gradient border effect */

    ${props => props.isExpanded && `
        background: linear-gradient(to right, rgba(229, 167, 225, 0.29), rgba(187, 212, 191, 0.43), rgba(214, 206, 144, 0.58), rgba(147, 182, 213, 0.58));
        padding: 2px; /* This creates the visible border effect */
        box-shadow: 0 15px 40px  rgba(0, 0, 0, 0.15);
    `}
`;

const FAQInnerContent = styled.div`
    background-color: #fff; /* Inner white background to sit on top of the gradient border */
    border-radius: 14px; /* Slightly smaller radius to show the border */
    padding: 25px 30px;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%; /* Ensures it fills the wrapper */
    box-sizing: border-box;

    @media (max-width: 767px) {
        padding: 20px 25px;
    }
`;

const FAQQuestion = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    text-align: left;
    font-size: 20px;
    font-weight: 600;
    color: #333;
    margin-bottom: ${props => props.isExpanded ? '15px' : '0'}; /* Add margin when expanded */
    transition: margin-bottom 0.3s ease;

    &:focus {
        outline: none; /* Remove the black outline on focus */
        box-shadow: 0 0 0 2px rgba(252, 254, 255, 0.3); /* Add a subtle blueish focus highlight for accessibility */
    }

    @media (max-width: 767px) {
        font-size: 18px;
        margin-bottom: ${props => props.isExpanded ? '10px' : '0'};
    }
`;

const Icon = styled.span`
    font-size: 30px;
    font-weight: 300; /* Lighter weight for plus/minus */
    color: #333;
    margin-left: 20px;
    line-height: 1; /* Ensure icon is vertically centered */

    @media (max-width: 767px) {
        font-size: 24px;
        margin-left: 15px;
    }
`;

const FAQAnswer = styled.div`
    font-size: 16px;
    color: #666;
    line-height: 1.6;
    max-height: ${props => props.isExpanded ? '200px' : '0'}; /* Max height for animation */
    overflow: hidden;
    transition: max-height 0.4s ease-in-out; /* Smooth slide animation */
    padding-top: ${props => props.isExpanded ? '0' : '0'}; /* No top padding when collapsed */

    @media (max-width: 767px) {
        font-size: 15px;
    }
`;

const HomePageFive = () => {
    // State for FAQ section
    const [faqs, setFaqs] = React.useState([
        {
            id: 1,
            question: "How this UI Kit is different from others in market?",
            answer: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
            isExpanded: true,
        },
        {
            id: 2,
            question: "How long do you provide support?",
            answer: "We provide 24/7 support for all our UI Kits. Our team is dedicated to helping you with any issues or questions you might have.",
            isExpanded: false,
        },
        {
            id: 3,
            question: "Do I need any experience to work with Rareblocks?",
            answer: "No prior experience is needed! Our UI Kits are designed to be user-friendly and come with comprehensive documentation to guide you through the process.",
            isExpanded: false,
        },
        {
            id: 4,
            question: "What kind of files are included?",
            answer: "Our UI Kits include various file formats such as Figma, Sketch, Adobe XD, and clean HTML/CSS/JS files, ensuring compatibility with your preferred workflow.",
            isExpanded: false,
        },
    ]);

    const toggleFAQ = (id) => {
        setFaqs(faqs.map(faq =>
            faq.id === id ? { ...faq, isExpanded: !faq.isExpanded } : { ...faq, isExpanded: false } // Collapse others
        ));
    };

    return (
        <>
            {/* Contact Us Section */}
            <ContactContainer>
                <ContactCard>
                    <ContactLeft>
                        <ContactTitle>Let's get in touch!</ContactTitle>
                        <ContactSubText>
                            Got questions about Healix? Our team is here to help. Contact us for quick and friendly support.
                        </ContactSubText>

                        {/* Contact Info - Using react-icons if available, otherwise emojis */}
                        <div>
                            <ContactInfoItem>
                                {typeof FaPhone !== 'undefined' ? <FaPhone /> : '📞'} +012 345 6789
                            </ContactInfoItem>
                            <ContactInfoItem>
                                {typeof FaEnvelope !== 'undefined' ? <FaEnvelope /> : '✉️'} Hello@animaapp.com
                            </ContactInfoItem>
                        </div>

                        {/* Social Media - Using react-icons if available, otherwise emojis */}
                        <SocialMediaSection>
                            <SocialMediaTitle>Connect with us</SocialMediaTitle>
                            <SocialIcons>
                                <SocialIconLink href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                    {typeof FaInstagram !== 'undefined' ? <FaInstagram /> : '📷'}
                                </SocialIconLink>
                                <SocialIconLink href="https://dribbble.com/" target="_blank" rel="noopener noreferrer">
                                    {typeof FaDribbble !== 'undefined' ? <FaDribbble /> : '🏀'}
                                </SocialIconLink>
                                <SocialIconLink href="https://www.behance.net/" target="_blank" rel="noopener noreferrer">
                                    {typeof FaBehance !== 'undefined' ? <FaBehance /> : '🅱️'}
                                </SocialIconLink>
                                <SocialIconLink href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                                    {typeof FaTwitter !== 'undefined' ? <FaTwitter /> : '🐦'}
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialMediaSection>
                    </ContactLeft>

                    <ContactRight>
                        <FormField>
                            <input type="text" placeholder="Full Name" />
                        </FormField>
                        <FormField>
                            <input type="email" placeholder="Email" />
                        </FormField>
                        <SubmitButton>Submit</SubmitButton>
                    </ContactRight>
                </ContactCard>
            </ContactContainer>

            {/* Frequently Asked Questions Section */}
            <FAQContainer>
                <SectionHeader>
                    <SectionTitle>Frequently Asked Questions</SectionTitle>
                    <SectionSubText>
                        With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
                    </SectionSubText>
                </SectionHeader>

                <FAQList>
                    {faqs.map(faq => (
                        <FAQItemWrapper key={faq.id} isExpanded={faq.isExpanded}>
                            <FAQInnerContent>
                                <FAQQuestion onClick={() => toggleFAQ(faq.id)} isExpanded={faq.isExpanded}>
                                    {faq.question}
                                    <Icon>{faq.isExpanded ? '−' : '+'}</Icon> {/* Minus for expanded, plus for collapsed */}
                                </FAQQuestion>
                                <FAQAnswer isExpanded={faq.isExpanded}>
                                    {faq.answer}
                                </FAQAnswer>
                            </FAQInnerContent>
                        </FAQItemWrapper>
                    ))}
                </FAQList>
            </FAQContainer>
        </>
    );
};

export default HomePageFive;