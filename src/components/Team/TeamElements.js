import styled from 'styled-components';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";

export const TeamContainer = styled.div`
    height: 800px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }
    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`

export const TeamH1 = styled.h1`
    margin-bottom: 1rem;
    font-size: clamp(2rem, 5vw, 3rem);
    padding: 0 1rem;
    color: #fff;
`

export const CarouselWrapper = styled.div`
    display: flex;
    width: 100%;
    position: relative;
`

export const CarouselContentWrapper = styled.div`
    overflow: hidden;
    width: 100%;
    height: 100%;
    margin: 2rem;
`

export const CarouselContent = styled.div`
    display: flex;
    transition: all 250ms linear;
`

export const SlideImage = styled.img`
    width: 400px;
    height: 500px;
    object-fit: cover;
    border-radius: 20px;
    margin: 1.5rem;

    &:hover {
        opacity: 0.3;
        color: #fff;
        font-size: 1rem;
        display: flex;
        text-align: center;
    }
`;

export const LeftArrow = styled(BsFillArrowLeftCircleFill)`
    left: 24px;
    position: absolute;
    z-index: 1;
    transform: translateY(-50%);
    background-color: #fff;
    outline: 1px solid #fff;
    top: 50%;
    height: 48px;
    width: 48px;
    border-radius: 24px;
    cursor: pointer;
`

export const RightArrow = styled(BsFillArrowRightCircleFill)`
    right: 24px;
    position: absolute;
    z-index: 1;
    transform: translateY(-50%);
    background-color: #fff;
    outline: 1px solid #fff;
    top: 50%;
    height: 48px;
    width: 48px;
    border-radius: 24px;
    cursor: pointer;
`