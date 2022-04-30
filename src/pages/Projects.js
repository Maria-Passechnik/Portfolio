import React from "react";
// Routing
import {Link} from 'react-router-dom';
// Styled components
import styled from "styled-components";
// Projects Images
import waves1 from '../images/waves1.png';
import robo1 from '../images/robo1.png';
import illuminate1 from '../images/illuminate1.png';
// Framer Motion
import { motion } from "framer-motion";
// Animation
import { pageAnimation, imgAnimation, fade, lineAnimation, sliderContainer, slider } from '../Animation';
// Scroll Animation
import { UseScroll } from '../components/UseScroll';
// Scroll Top
import ScrollTop from "../components/ScrollTop";

const Projects = () => {
    const [ element, controls ] = UseScroll();
    const [ element2, controls2 ] = UseScroll();

    return(
           <ProjectSection
                variants={pageAnimation} 
                initial='hidden' 
                animate='show' 
                exit='exit'
                style={{background: '#212121'}}
            >
                <motion.div variants={sliderContainer}>
                    <Frame1 variants={slider}></Frame1>
                    <Frame2 variants={slider}></Frame2>
                    <Frame3 variants={slider}></Frame3>
                    <Frame4 variants={slider}></Frame4>
                </motion.div>

                <Project>
                    <motion.h2 variants={fade}>Waves - Music Player</motion.h2>
                    <motion.div variants={lineAnimation} className="line"></motion.div>
                    <Link to='/projects/waves'>
                        <Hide>
                            <motion.img variants={imgAnimation} src={waves1} alt="waves"></motion.img>
                        </Hide>                    
                    </Link>
                </Project>
                <Project ref={element} variants={fade} animate={controls} initial="hidden">
                    <h2>RoboFriends - Robots Search</h2>
                    <motion.div variants={lineAnimation} className="line"></motion.div>
                    <Link to='/projects/robo-friends'>
                        <img src={robo1} alt="robo-friends"></img>
                    </Link>
                </Project>
                <Project ref={element2} variants={fade} animate={controls2} initial="hidden">
                    <h2>Illuminate - Video Games Informer</h2>
                    <motion.div variants={lineAnimation} className="line"></motion.div>
                    <Link to='/projects/illuminate'>
                        <img src={illuminate1} alt="illuminate"></img>
                    </Link>
                </Project>
                <ScrollTop />
           </ProjectSection>
    );
};

const ProjectSection = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    @media (max-width: 1300px) {
        padding: 2rem 2rem;
    }
    h2{
        padding: 1rem 0rem;
        color: #F8F5F8;
        font-size: 2.5rem;
        font-weight: bold;
    }
`;

const Project = styled(motion.div)`
    padding-bottom: 10rem;
    .line{
        height: 0.25rem;
        background: #00FFBB;
        margin-bottom: 3rem;
        border-radius: 5px;
    }
    img{
        max-width: 100%;
        height: auto;
        object-fit: fit;
        border-radius: 20px;
    } 
`;

const Hide = styled.div`
    overflow: hidden;
`;

// Frame animation
const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 5%;
    width: 100%;
    height: 100vh;
    background: #f9d2cc;
    z-index: 2;
`;

const Frame2 = styled(Frame1)`
    background: #e09191;
`;
const Frame3 = styled(Frame1)`
    background: #e5444f;
`;
const Frame4 = styled(Frame1)`
    background: #ea0e3a;
`;
export default Projects;