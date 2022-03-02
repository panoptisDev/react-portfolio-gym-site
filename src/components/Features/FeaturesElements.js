import styled from 'styled-components';
import { AiFillCheckCircle } from 'react-icons/ai'
import FeatureImg from '../Images/gym-2.jpeg';

export const FeaturesContainer = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.1)), url(${FeatureImg});
    height: 100vh;
    max-height: 650px;
    background-position: center;
    background-size: cover;
    /* display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center; */
    color: #fff;
    padding: 0 1rem;
`

export const FeaturesH1 = styled.h1`
    font-size: clamp(3rem, 5vw, 5rem);
    padding-top: 50px;
    margin-bottom: 1rem;
    margin-left: 100px;
`

export const FeaturesList = styled.div`
    list-style: none;
    margin-left: 150px;
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