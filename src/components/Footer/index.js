import {
  FooterContainer,
  FooterWrapper,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMediaContainer,
  SocialMediaWrapper,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './FooterElements';
import { 
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa';


function Footer() {
  return (
    <FooterContainer>
        <FooterWrapper>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About</FooterLinkTitle>
                  <FooterLink to='/#'>Link</FooterLink>
                </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Contact</FooterLinkTitle>
                  <FooterLink to='/#'>Link</FooterLink>
                </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Membership</FooterLinkTitle>
                  <FooterLink to='/#'>Link</FooterLink>
                </FooterLinkItems>
              </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMediaContainer>
            <SocialMediaWrapper>
              <WebsiteRights>214 Fitness &copy; {new Date().getFullYear()} All rights reserved.</WebsiteRights>
              <SocialIcons>
                <SocialIconLink
                  href='//www.facebook.com/' 
                  target='_blank'
                  aria-label='Facebook'
                >
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink
                  href='//www.instagram.com/' 
                  target='_blank'
                  aria-label='Instagram'
                >
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink
                  href='//www.twitter.com/' 
                  target='_blank'
                  aria-label='Twitter'
                >
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink
                  href='//www.tiktok.com/' 
                  target='_blank'
                  aria-label='Tiktok'
                >
                  <FaTiktok />
                </SocialIconLink>
                <SocialIconLink
                  href='//www.youtube.com/' 
                  target='_blank'
                  aria-label='Youtube'
                >
                  <FaYoutube />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrapper>
          </SocialMediaContainer>
        </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer