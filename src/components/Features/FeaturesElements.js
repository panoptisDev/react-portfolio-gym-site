import styled from 'styled-components';
import { AiFillCheckCircle } from 'react-icons/ai'
import FeatureImg from '../Images/gym-2.jpeg';

export const FeaturesContainer = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.1)), url(${FeatureImg});
    height: 100%;
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    color: #fff;
    padding-bottom: 50px;
`

export const FeaturesH1 = styled.h1`
    font-size: clamp(3rem, 5vw, 5rem);
    padding-top: 50px;
    margin-bottom: 1rem;
    margin-left: 100px;

    @media screen and (max-width: 480px) {
        margin-left: 50px;
    }
`

export const FeaturesList = styled.div`
    list-style: none;
    margin-left: 120px;

    @media screen and (max-width: 480px) {
        margin-left: 60px;
    }
`

export const FeaturesItem = styled.p`
    font-size: clamp(1rem, 5vw, 1.2rem);
    margin-bottom: 1.5rem;
`

export const ListIcon = styled(AiFillCheckCircle)`
    color: #f9032f;
    margin-right: 5px;
    display: inline-block;
    vertical-align: middle;
    padding-bottom: 0.1rem;
    font-size: 1.5rem;
`