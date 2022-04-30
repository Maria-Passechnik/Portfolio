import React from "react";
// import styled from "styled-components";
 
// Router
import {Link} from 'react-router-dom';
const Nav = () => {
    return(
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Maria's Portfolio</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <Link to='/' className="nav-link active">About</Link>
                        <Link to='/projects' className="nav-link active">Projects</Link>
                        <Link to='/contact' className="nav-link active">Contact</Link>
                    </ul>
                </div>
            </div>
        </nav>


/* 
    //    <NavSection>
    //         <h1><a id="logo" href="#">Portfolio</a></h1>
    //         <ul>
    //             <li>
    //                 <Link to='/'>About</Link>
    //             </li>
    //             <li>
    //                 <Link to='/projects'>Projects</Link>
    //             </li>
    //             <li>
    //                 <Link to='/contact'>Contact</Link>
    //             </li>
    //         </ul>
    //     </NavSection> */
    );
};

// const NavSection = styled.div`
//     background-color: #282828;
//     min-height: 10vh;
//     display: flex;
//     align-items: center;
//     padding: 1rem 10rem;
//     margin: auto;
//     justify-content: space-between;
//     position: sticky;
//     top: 0;
//     z-index: 10;
//     a{
//         color:white;
//         text-decoration: none;
//     }
//     ul{
//         display: flex;
//         list-style: none;
//     }
//     #logo{
//         display: flex;
//         font-size: 1.5rem;
//     }
//     li{
//         padding-left: 10rem;
//         position: relative;
//     }
//     @media (max-width: 1300px) {
//         flex-direction: column;
//         padding: 2rem 1rem;;
//         #logo{
//             display: inline-block;
//             margin: 2rem;
//         }
//         ul{
//             padding: 2rem;
//             justify-content: space-around;
//             width: 100%;
//         }
//         li{
//             padding: 0;
//         }
//         @media (max-width: 1300px) {
//             flex-direction: column;
//             padding: 2rem 0rem;
//             #logo{
//                 padding: 2rem;
//             }
//             ul{
//                 padding: 2rem;
//                 justify-content: space-around;
//                 width: 100%;
//                 li{
//                     padding: 0;
//                 }
//             }
//         }
//     }
// `;

export default Nav;