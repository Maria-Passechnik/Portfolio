import React from "react";
// Component
import AboutMe from "../components/AboutMe";
import Tech from "../components/Tech";
// Framer Motion
import { motion } from "framer-motion";
// Animation
import { pageAnimation } from '../Animation';
// Scroll Top
import ScrollTop from "../components/ScrollTop";

const AboutPage = () => {
    return(
    <>
        <motion.div
            variants={pageAnimation} 
            initial='hidden' 
            animate='show' 
            exit='exit'
        >
            <AboutMe />
            <Tech />
            <ScrollTop />
        </motion.div>
    </>
    );
};

export default AboutPage;