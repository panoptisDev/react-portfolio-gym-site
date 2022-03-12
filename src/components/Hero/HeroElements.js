import styled from 'styled-components';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';
import ImgBg from '../Images/gym-1.jpeg'


export const HeroContainer = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.1)), url(${ImgBg});
    height: 100vh;
    background-position: center;
    background-size: cover;
`

export const HeroContent = styled.div`
    /* height: calc(100vh - 10px); */
    height: 100vh;
    max-height: 100%;
    width: 100vw;
    padding: 0rem calc((100vw - 1300px) /2);
`

export const HeroItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    max-height: 100%;
    padding: 0 2rem;
    width: 100%;
    color: #fff;
    line-height: 1;

    @media screen and (max-width: 650px) {
        width: 100%;
    }
`

export const HeroH1 = styled.h1`
    font-size: clamp(2.5rem, 10vw, 5rem);
    margin-bottom: 2rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    border-bottom: 3px solid #f9032f;

    &:hover {
        font-size: clamp(3rem, 11vw, 6rem);
        border-bottom: 4px solid #f9032f;
    }

    @media screen and (max-width: 650px) {
        width: 65%;
    }
`

export const HeroP = styled.p`
    font-size: clamp(2rem, 2.5vw, 3rem);
    margin-bottom: 1rem;
`

export const HeroBtnWrapper = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;