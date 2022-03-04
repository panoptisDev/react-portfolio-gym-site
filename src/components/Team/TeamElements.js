import styled from 'styled-components';

export const TeamContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f9032f;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }
    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`


export const SlideImage = styled.img`
    width: 500px;
    height: 600px;
    object-fit: cover;
    border-radius: 20px;
`;

export const SlideTitle = styled.h1`
    color: #fff;
`

export const StyledSlider = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
     align-items: center;
`;