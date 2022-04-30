import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
    const location = useLocation();
    useEffect(() => {
        setTimeout(() => {
            window.scroll({
                top:0,
                left:0
            }) 
        }, 400)
    }, [location])
    return null;
};

export default ScrollTop;