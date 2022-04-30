import React, { useState, useEffect } from "react";
// Routing
import { useLocation } from "react-router-dom";
// Styled-component
import styled from "styled-components";
// Project state
import {ProjectState} from '../ProjectState';
import Projects from "./Projects";
// Framer Motion
import { motion } from "framer-motion";
// Animation
import { pageAnimation } from '../Animation';
// images
import arrow from '../images/arrow.png';


const ProjectDetail = () => {
    const location = useLocation();
    const url = location.pathname;
    const [projects, setProjects]  = useState(ProjectState);
    const [project, setProject] = useState(null);

    // Load Project Information
    useEffect(() => {
        const currProject = projects.filter((stateProject) =>  stateProject.url === url);
        setProject(currProject[0]);
    }, [Projects, url]);
    return(
        <>
        {
            project && (
                <Details 
                    variants={pageAnimation} 
                    initial='hidden' 
                    animate='show' 
                    exit='exit'
                    style={{background: '#fff'}}
                >
                <Headline>
                    <h2>{project.title}</h2>
                    <img src={project.mainImg} alt="project"/>
                </Headline>
                <Descriptions>
                    <Description>
                        <h3>{project.descTitle}</h3>
                        <div className="line"></div>
                        <p>{project.description.Build}</p>
                        <p>{project.description.Styled}</p>
                        <p>{project.description.ExternalLib}</p>
                        <a href={project.description.siteUrl}>Try Out</a>
                        <img src={arrow} alt="arrow" style={{width: '4rem' , height: '4rem'}}/>
                    </Description>
                    <Image>
                        <img src={project.secondaryImg}/>
                    </Image>
                </Descriptions>
                </Details>
            )
        }
        </>
    );
};

const Details = styled(motion.div)`
    color: black;
    background-color: white !important;
`;

const Headline = styled.div`
    min-height: 70vh;
    padding-top: 25vh;
    position: relative;
    h2{
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%);
    }
    img{
        max-width: 90%;
        height: auto;
        object-fit: fit;
        display: block;
        margin-left: auto;
        margin-right: auto;
        border-radius: 10px;
    }
`;

const Descriptions = styled.div`
    min-height: 80vh;
    display: flex;
    margin: 2rem 10rem;
    align-items: center;
    justify-content: space-around;
    @media (max-width: 1300px) {
        display: block;
        margin: 2rem 2rem;
    }
`;

const Description = styled.div`
    padding: 5px;
    h3{
        font-size: 3rem;
        font-weight: bold;
        color:black;
    }
    .line{
        width: 100%;
        background: #e09191;
        height: 0.4rem;
        margin: 1rem 0rem;
    }
    p{
        padding: 0.5rem 0rem;
        color:black;
        font-weight: bold;
    }
    a{
        font-size: 3rem;
        padding: 0.25rem;
        font-weight:bold;
        text-decoration: none;
        color: #e5444f !important;
        font-family: 'Oleo Script', cursive;
    }
`;

const Image = styled.div`
    img{
        padding-top: 10px;
        width: 100%;
        height: 60vh;
        object-fit: fit;
        border-radius: 20px;
    }
    @media(max-width: 1300px) {
        img{
            width: 100%;
            height: auto;
            object-fit: fit;
        }
    }
`;


export default ProjectDetail;