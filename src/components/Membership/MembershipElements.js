import styled from 'styled-components';


export const MembershipContainer = styled.div`
    height: 800px;
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

export const MembershipH1 = styled.h1`
    margin-bottom: 1rem;
    font-size: clamp(2rem, 5vw, 3rem);
    padding: 0 1rem;
    color: #fff;
`

export const MembershipP = styled.p`
    margin-bottom: 2rem;
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    padding: 0 1rem;
    color: #fff;
`

export const MembershipWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
`

export const MembershipCard = styled.div`
    padding: 2rem;
    margin: 2rem;
    min-height: 450px;
    width: 325px;
    background: #fff;
    color: #010606;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const MembershipIcon = styled.img`
    height: 200px;
    min-width: 200px;
    max-width: 100%;
    /* color: #f9032f; */
`

export const MembershipInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    text-align: center;
    height: 100%;
`

export const MembershipTitle = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 1rem;
`

export const MembershipDesc = styled.p`
    margin-bottom: 1rem;
`

export const MembershipPrice = styled.p`
    margin-bottom: 1rem;
    top: 0;
    bottom: 0;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
`

export const MembershipButton = styled.button`
    font-size: 1rem;
    padding: 1rem 4rem;
    border: none;
    border-radius: 5px;
    background: #f9032f;
    color: #fff;
    transition: 0.2 ease-out;

    &:hover {
        background: #010606;
        transition: 0.2s ease-out;
        cursor: pointer;
    }
`