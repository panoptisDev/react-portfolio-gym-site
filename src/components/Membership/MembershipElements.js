import styled from 'styled-components';
import { AiOutlineCheckCircle } from 'react-icons/ai'


export const MembershipContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;
`

export const MembershipH1 = styled.h1`
    margin-bottom: 1rem;
    font-size: clamp(2rem, 5vw, 3rem);
    padding: 0 1rem;
    color: #fff;
    margin-top: 2rem;
`

export const MembershipP = styled.p`
    margin-bottom: 2rem;
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    color: #fff;
`

export const MembershipWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 2rem;
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

export const MembershipTitle = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid #f9032f;
    display: flex;
    flex-direction: column;
    text-align: center;
`

export const ListIcon = styled(AiOutlineCheckCircle)`
    color: #f9032f;
    margin-right: 5px;
    display: inline-block;
    vertical-align: middle;
    padding-bottom: 0.1rem;
    font-size: 1.5rem;
`

export const MembershipInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    height: 100%;
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