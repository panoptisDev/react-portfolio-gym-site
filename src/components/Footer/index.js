import {
  FooterContainer,
  FooterWrapper,
  FooterDescription,
  FooterTitle,
  FooterInfo,
  AddressIcon,
  FooterAddress,
  PhoneIcon,
  FooterPhone,
  FooterHours,
  ClockIcon,
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
  FaYelp,
  FaYoutube
} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';



function Footer() {
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <FooterContainer>
        <FooterWrapper>
          <FooterDescription>
            <FooterTitle to='/' onClick={toggleHome}>
              214 Fitness
            </FooterTitle>
            <FooterInfo>Full-service fitness gym located in Downtown Dallas</FooterInfo>
            <FooterAddress>
              <AddressIcon />
              1500 Jackson Street, Dallas, TX 75201
            </FooterAddress>
            <FooterPhone>
              <PhoneIcon />
              (214) - FITNESS
            </FooterPhone>
            <FooterHours>
              <ClockIcon />
              Mon: <span style={{ marginLeft: '5px' }}>7:00am - 10:00pm</span>
              <p>Tue: <span style={{ marginLeft: '10px' }}>7:00am - 10:00pm</span></p>
              <p>Wed: <span style={{ marginLeft: '3px' }}>7:00am - 10:00pm</span></p>
              <p>Thu: <span style={{ marginLeft: '10px' }}>7:00am - 10:00pm</span></p>
              <p>Fri: <span style={{ marginLeft: '20px' }}>7:00am - 9:00pm</span></p>
              <p>Sat: <span style={{ marginLeft: '11px' }}>8:00am - 8:00pm</span></p>
              <p>Sun: <span style={{ marginLeft: '7px' }}>8:00am - 6:00pm</span></p>
            </FooterHours>
          </FooterDescription>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About</FooterLinkTitle>
                  <FooterLink to='/#'>Testimonials</FooterLink>
                  <FooterLink to='/#'>Accessibility</FooterLink>
                  <FooterLink to='/#'>Privacy Policy</FooterLink>
                  <FooterLink to='/#'>Terms of Service</FooterLink>
                </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Contact</FooterLinkTitle>
                  <FooterLink to='/#'>Sign Up</FooterLink>
                  <FooterLink to='/#'>Support</FooterLink>
                  <FooterLink to='/#'>Legal</FooterLink>
                  <FooterLink to='/#'>Sitemap</FooterLink>
                </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Membership</FooterLinkTitle>
                  <FooterLink to='/#'>Pricing</FooterLink>
                  <FooterLink to='/#'>Plans</FooterLink>
                  <FooterLink to='/#'>FAQ</FooterLink>
                  <FooterLink to='/#'>Gift Cards</FooterLink>
                </FooterLinkItems>
              </FooterLinksWrapper>
          </FooterLinksContainer>
          </FooterWrapper>
          <SocialMediaContainer>
            <SocialMediaWrapper>
              <WebsiteRights>
                214 Fitness LLC &copy; {new Date().getFullYear()} All rights reserved.
              </WebsiteRights>
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
                  href='//www.yelp.com/' 
                  target='_blank'
                  aria-label='Yelp'
                >
                  <FaYelp />
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
    </FooterContainer>
  )
}

export default Footer