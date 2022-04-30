import React from "react";
// styles components lib
import styled from "styled-components";
// framer motion lib
import { motion } from "framer-motion";

const Wave = () => {
    return(
        <WaveSvg 
            viewBox="0 0 1400 363"
            fill="none" 
            xmlns="http://www.w3.org/2000/svg">
            <motion.path 
                initial={{ pathLength: 0, pathOffset: 1 }}
                animate={{ pathLength: 1, pathOffset: 0 }}
                transition={{ duration: 1 }}
                d="M1400 27.4774C1352.73 19.8184 1122.41 49.0556 899.331 227.276C620.48 450.052 354.282 355.647 170.328 185.318C23.165 49.0556 -4.21721 8.32998 0.487081 5" 
                stroke="#ef4075" 
                strokeOpacity="0.3" 
                strokeWidth="8"
            />
        </WaveSvg>
    );
};

const WaveSvg = styled.svg`
    position: absolute;
    left: 0;
    z-index: 1;
`;

export default Wave;