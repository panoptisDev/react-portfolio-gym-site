import styled from 'styled-components';
import { FaPhoneAlt } from 'react-icons/fa';
import { BsGeoAltFill, BsClockFill } from 'react-icons/bs';

export const FooterContainer = styled.footer`
    background-color: #f9032f;
    color: #fff;
`
export const FooterWrapper = styled.div`
    /* padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto; */
    padding: 5rem calc((100vw - 1100px) / 2);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`
export const FooterDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`
export const FooterTitle = styled.h1`
    font-size: 2rem;
    margin-bottom: 2rem;
`
export const FooterInfo = styled.p`
    font-size: 1rem;
    margin-bottom: 2rem;
`
export const AddressIcon = styled(BsGeoAltFill)`
    display: inline-block;
    vertical-align: middle;
    padding-bottom: 0.1rem;
    margin-right: 0.7rem;
`
export const FooterAddress = styled.p`
    font-size: 1rem;
    margin-bottom: 1rem;
`
export const PhoneIcon = styled(FaPhoneAlt)`
    display: inline-block;
    vertical-align: middle;
    padding-bottom: 0.1rem;
    margin-right: 0.6rem;
`
export const FooterPhone = styled.p`
    font-size: 1rem;
    margin-bottom: 1rem;
`
export const FooterHours = styled.p`
    font-size: 1rem;

    p {
        margin-left: 1.7rem;
    }
`

export const ClockIcon = styled(BsClockFill)`
    display: inline-block;
    vertical-align: middle;
    padding-bottom: 0.1rem;
    margin-right: 0.7rem;
`

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;
    
    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`
export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`
export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    
    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`
export const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
`
export const FooterLink = styled.p`
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover {
        color: #010606;
        transition: 0.3s ease-out;
        cursor: pointer;
    }
`

export const SocialMediaContainer = styled.section`
    width: 100%;
    padding-bottom: 24px;
`;

export const SocialMediaWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
    padding: 16px 64px;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const WebsiteRights = styled.small`
    margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 400px;
`;

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
    padding: 1rem;
    transition: 0.5s;

    &:hover {
        color: #010606;
        transform: translateY(-10px);
    }
`;