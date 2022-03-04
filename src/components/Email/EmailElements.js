import styled from 'styled-components';
import ImgBg from '../Images/gym-3.jpeg';

export const EmailContainer = styled.div`
     background: linear-gradient(
        180deg, 
        rgba(0,0,0,0.6) 0%, 
        rgba(0,0,0,0.6) 35%, 
        rgba(0,0,0,0.1) 100%
    ),
    url(${ImgBg}) no-repeat center;
    background-size: cover;
    height: 450px;
    width: 100%;
    padding: 5rem calc((100vw - 1300px) / 2);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const EmailContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const EmailH1 = styled.h1`
    text-align: center;
    margin-bottom: 1rem;
    font-size: clamp(1rem, 5vw, 3rem);
    padding: 0 1rem;
`

export const EmailP = styled.p`
    text-align: center;
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    padding: 0 1rem;
    margin-bottom: 2rem;
`

export const EmailForm = styled.form`
    z-index: 10;

    input {
        padding: 1rem 1.5rem;
        outline: none;
        width: 350px;
        height: 50px;
        border: none;
        margin-right: 1rem;
        border-radius: 4px;
    }

    button {
        padding: 0.8rem 3rem 0.9rem;
        border: none;
        background: #f9032f;
        color: #fff;
        font-size: 1rem;
        text-decoration: none;
        cursor: pointer;
        outline: none;
        transition: 0.3s ease;
        border-radius: 4px;

        &:hover {
            transition: all 0.3s ease-in-out;
            background: transparent;
            outline: 2px solid #fff;
            font-size: 1.1rem;
        }
    }
`