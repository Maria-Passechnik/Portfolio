
import React from "react";
import aboutimg1 from '../images/aboutimg1.png';
// Style
import { About, Description, Image, Hide } from "../Styles";
// Framer Motion
import { motion } from "framer-motion";
// Animation
import { titleAnimation, fade, imgAnimation } from '../Animation';
// Components
import Wave from "./Wave";
// react-router-dom
import { Link } from "react-router-dom";

const AboutMe = () => {
    return(
        <About>
            <Description>
                <div className="title">
                   <Hide>
                        <motion.h2 variants={titleAnimation}><span>ME, MYSELF & I</span></motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h3  variants={titleAnimation}>Pasechnik Maria</motion.h3>
                    </Hide>
                    <Hide>
                        <motion.h3  variants={titleAnimation}><span>Frontend developer</span></motion.h3>
                    </Hide>
                </div>
                <motion.p variants={fade}>I'm a Front-End Develper located in Tel-Aviv Israel.
                I Have serious passion for Development, UI effects,
                animations and creating intuitive, dynamic user experiences.
                <br></br>
                <br></br>
                Well-organised person, problem solver, independent with high attention to detail.
                Fan of pilates reformer, outdoor activities, and dogs.
                <br></br>
                <br></br>
                Interested in the entire frontend spectrum and working on ambitious projects with positive people.
                </motion.p>
                <Link to='/contact'>
                    <motion.button variants={fade}>Contact Me</motion.button>
                </Link>
                
                
            </Description>
            <Image>
                <motion.img variants={imgAnimation} src={aboutimg1} alt="Italy-2020" />
            </Image>
            <Wave />
        </About>
    );
};



export default AboutMe;