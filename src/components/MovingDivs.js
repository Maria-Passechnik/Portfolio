// import React from "react";
// import { useEffect } from 'react';

// const MovingDivs = () => {
//     useEffect(() => {
//         animateDiv('.a');
//         animateDiv('.b');
//         animateDiv('.c');
//         animateDiv('.d');
//         animateDiv('.e');
//         animateDiv('.f');
//         animateDiv('.g');
//         animateDiv('.h');
//         animateDiv('.i');
//     },[])

//     // Handlers
//     const makeNewPosition = () => {
//         // Get viewport dimensions (remove the dimension of the div)
//         const h = $(window).height() - 50;
//         const w = $(window).width() - 50;
        
//         const nh = Math.floor(Math.random() * h);
//         const nw = Math.floor(Math.random() * w);
        
//         return [nh,nw]; 
//     };

//     const animateDiv = (myclass) => {
//         const newq = makeNewPosition();
//         $(myclass).animate({ top: newq[0], left: newq[1] }, 6000,   function(){
//           animateDiv(myclass);        
//         });
        
//     };

//     return(
//         <div>
//             <div className='a'></div>
//             <div className='b'></div>
//             <div className='c'></div>
//             <div className='d'></div>
//             <div className='e'></div>
//             <div className='f'></div>
//             <div className='g'></div>
//             <div className='h'></div>
//             <div className='i'></div>
//         </div>
//     );

//     div.a {
//         width: 0;
//         height:0;
//         border-left: 25px solid transparent;
//         border-right: 25px solid transparent;
//         border-bottom: 50px solid #f9d2cc;
//         position:fixed; 
//        }
       
//        div.b {
//         width: 50px;
//         height:50px;
//         background-color:#f9d2cc;
//         position:fixed; 
//         border-radius:50%;
//        }
       
//        div.c {
//         width: 50px;
//         height:50px;
//         background-color:#f9d2cc;
//         position:fixed;
//        }
       
//        div.d {
//         width: 0;
//         height:0;
//         border-left: 25px solid transparent;
//         border-right: 25px solid transparent;
//         border-bottom: 50px solid #00ffbb;
//         position:fixed; 
//        }
       
//        div.e {
//         width: 50px;
//         height:50px;
//         background-color:#00ffbb;
//         position:fixed;
//        }
       
//        div.f {
//         width: 50px;
//         height:50px;
//         background-color:#00ffbb;
//         position:fixed;
//         border-radius:50%;
//        }
       
//        div.g {
//         width: 0;
//         height:0;
//         border-left: 25px solid transparent;
//         border-right: 25px solid transparent;
//         border-bottom: 50px solid #dbdbdb;
//         position:fixed; 
//        }
       
//        div.h {
//         width: 50px;
//         height:50px;
//         background-color:#dbdbdb;
//         position:fixed;
//         border-radius:50%;
//        }
       
//        div.i {  
//         width: 50px;
//         height:50px;
//         background-color:#dbdbdb;
//         position:fixed;   
//        }
       
       
// }