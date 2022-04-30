// Images
import waves4 from './images/waves4.png';
import waves3 from './images/waves3.png';
import robo1 from './images/robo1.png';
import robo2 from './images/robo2.png';
import illuminate2 from './images/illuminate2.png';
import illuminate3 from './images/illuminate3.png';


export const ProjectState = () => {
    return[
        {
            title: "Waves",
            mainImg: waves4,
            secondaryImg: waves3,
            url: "/projects/waves",
            descTitle: "Music Player",
            description:{
                Build: 'Built with ReactJS',
                Styled: 'Styled by Sass & Font Aewsome',
                ExternalLib: 'External: Chillhop API & UUID',
                siteUrl: 'https://m-waves.herokuapp.com/'
            }                 
        },
        {
            title: "Robo-Friends",
            mainImg: robo1,
            secondaryImg: robo2,
            url: "/projects/robo-friends",
            descTitle: "Robot Search",
            description:{
                Build: 'Built with ReactJS',
                Styled: 'Styled by  CSS & Tachyons',
                ExternalLib: 'External: RoboHash',
                siteUrl:'https://m-robofriend.herokuapp.com/'
            }
        },
        {
            title: "Illuminate",
            mainImg: illuminate2,
            secondaryImg: illuminate3,
            url: "/projects/illuminate",
            descTitle: "Video Games Informer",
            description:{
                Build: 'Built with ReactJS & Redux',
                Styled: 'Styled by Styled Components & Framer Motion',
                ExternalLib: 'External: Rawg.io API',
                siteUrl:'https://m-illuminate.herokuapp.com/'
            }
        },
    ];
}