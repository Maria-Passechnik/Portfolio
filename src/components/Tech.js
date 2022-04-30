import React from "react";
// Images
import tech from '../images/tech.svg';
import techimg1 from "../images/techimg1.png";
// Style
import { About, Description, Image } from "../Styles";
import styled from "styled-components";
import { fade } from '../Animation';
// Scroll animation
import { UseScroll } from "./UseScroll";

const Tech = () => {
    const [ element, controls ] = UseScroll();
    return(
       <TechSection variants={fade} animate={controls} initial="hidden" ref={element} >
           <Description>
                <h2>Tech Stack</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={tech} alt="tech"/>
                            <h3>FroneEnd</h3>
                        </div>
                        <p>HTML, CSS, JavaScript, ReactJS, Redux, Angular</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={tech} alt="tech"/>
                            <h3>BackEnd</h3>
                        </div>
                        <p>NodeJS, Exspress, MongoDB</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={tech} alt="tech"/>
                            <h3>Style Libraries</h3>
                        </div>
                        <p>Bootstrap, SCSS, Semantic UI, Material UI, Styled Components, Framer Motion</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={tech} alt="tech"/>
                            <h3>Miscellaneous</h3>
                        </div>
                        <p>Git & GitHub, Postman, Heroku</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src={techimg1} alt="#"></img>
            </Image>
        </TechSection>
    );
};

const TechSection = styled(About)`
    h2{
        padding-bottom: 5rem;
    }
    p{
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 1300px) {
        justify-content: center;
    }
`;

const Card = styled.div`
    flex-basis: 20rem;
    .icon{
        display: flex;
        align-items: center;
        h3{
            margin-left: 1rem;
            font-weight: bolder;
            font-size: 20px;
            background: black;
            color: white;
            padding: 1rem;
        }
    }
`;

export default Tech;