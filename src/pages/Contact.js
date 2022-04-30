import React from "react";
// Framer Motion
import { motion } from "framer-motion";
// Animation
import { pageAnimation, titleAnimation } from '../Animation';
// Style
import styled from "styled-components";
// Scroll Top
import ScrollTop from "../components/ScrollTop";
// icons
import phone from '../images/phone.png';
import message from '../images/message.png';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';

const Contact = () => {
    return(
       <ContactStyle
            variants={pageAnimation} 
            initial='hidden' 
            animate='show' 
            exit='exit'
       >
           <TitleStyle>
               <Hide>
                   <motion.h2 variants={titleAnimation}>Get In Touch</motion.h2>
                   <div className="line"></div>
               </Hide>
           </TitleStyle>
           <div>
                <Hide>
                    <Social variants={titleAnimation}>
                        <Circle>
                            <img src={phone} alt='icon'/>
                        </Circle>
                        <a href="#">052-6950869</a>
                    </Social>
                </Hide> 
               <Hide>
                    <Social variants={titleAnimation}>
                        <Circle>
                            <img src={message} alt='icon'/>
                        </Circle>
                        <a href="#">Maria320.ps@gmail.com</a>
                    </Social>
                </Hide>
               <Hide>
                    <Social variants={titleAnimation}>
                        <Circle>
                            <img src={linkedin} alt='icon'/>
                        </Circle> 
                        <a href="https://www.linkedin.com/in/maria-pasechnik-20">Linkedin Profile</a>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnimation}>
                        <Circle>
                            <img src={github} alt='icon'/>
                        </Circle> 
                        <a href="https://github.com/Maria-Passechnik">GitHub Profile</a>
                    </Social>
                </Hide>
           </div>
           <ScrollTop />
       </ContactStyle>
    );
};

const ContactStyle = styled(motion.div)`
    padding: 5rem 10rem;
    min-height: 90vh;
    background: #212121 !important;
    color: #ffffff;
    text-align: center;
    @media (max-width: 1300px) {
        padding: 2rem;
        font-size: 0.5rem;
    }
`;

const TitleStyle = styled.div`
    margin-bottom: 4rem;
    font-weigth: bold;
    .line {
        width: 100%;
        background: #b7b7b7;
        height: 0.3rem;
        maring; 1rem 0rem;
    }
    @media (max-width: 1300px) {
        margin-top: 5rem;
    }
`;

const Hide = styled.div`
    overflow: hidden;
`;

const Circle = styled.div`
    img{
        width: 1.5rem;
        margin: 1.25rem;
    }
    border-radius: 50%;
    background-color: #00ffbb;
`;

const Social = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    a{
        margin: 2rem;
        font-size: 2rem;
        font-weight:bold;
        text-decoration: none;
        color: #ffffff;
    }
`;

export default Contact;