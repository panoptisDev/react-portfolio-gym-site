import styled from 'styled-components'
import { motion } from 'framer-motion';


// export const TrainerContainer = styled(motion.div)`
//     height: 800px;
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     background: #010606;

//     @media screen and (max-width: 768px) {
//         height: 1100px;
//     }

//     @media screen and (max-width: 480px) {
//         height: 1300px;
//     }
// `

export const TrainerH1 = styled(motion.h1)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 2rem;
    font-size: clamp(2rem, 5vw, 3rem);
    padding: 0 1rem;
    color: #fff;
`

export const Carousel = styled(motion.div)`
    overflow: hidden;
    cursor: pointer;
    background-color: #010606;
`

export const InnerCarousel = styled(motion.div)`
    display: flex;
    background-color: #010606;
`

export const ImageCarousel = styled(motion.div)`
    min-height: 250px;
    min-width: 450px;
    margin-bottom: 5rem;

    img {
        width: 100%;
        height: 100%;
        padding: 25px;
        border-radius: 3rem;
        pointer-events: none;

        &:hover {
            opacity: 0.3;
        }
    }
`