import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media (max-width: 1700px){
            font-size: 80%;
        }
    }

    body{
        overflow-x: hidden;
        background: #000201;
        color: white;
        font-family: 'Montserrat', sans-serif;
    }
    nav{
        background-color: #212121;
        color: #F8F5F8 !important;
    }
    button{
        font-weight: bold;
        font-family: 'Montserrat', sans-serif;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #ff3059;
        border-radius: 10px;
        background: transparent;
        color: white;
        transition: all 0.5s ease;
        &:hover {
            background-color: #e09191;
            color: white;
        }
    }
    h2{
        font-size: 3.5rem;
        padding-top: 1rem;
        font-family: 'Quicksand', sans-serif;
        padding-bottom: 2rem;
    }

    @media(max-width: 1300px){
        h2{
            font-size: 2.5rem;
        }
        h3{
            font-size: 2.5rem;
        }
        h4{
            font-size: 2.5rem;
        }
    }
    h3{
        font-size: 3rem;
        color: white;
        font-weight: bolder;
        font-family: 'Quicksand', sans-serif;
    }
    h4{
        font-weight: bold;
        color: #e09191;
    }
    a{
        font-size: 1.1rem;
    }
    span{
        font-weight: bold;
        color: #ff3059;
    }
    p{
        padding: 3rem 0rem;
        color: white;
        font-size: 1.4rem;
        line-height: 150%
    }
`;

export default GlobalStyle;