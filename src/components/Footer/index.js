import {
  FooterContainer,
  FooterWrapper,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink
} from './FooterElements';

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
        </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer