import {
  MembershipContainer,
  MembershipH1,
  MembershipP,
  MembershipWrapper,
  MembershipCard,
  MembershipIcon,
  MembershipInfo,
  MembershipTitle,
  MembershipDesc,
  MembershipPrice,
  MembershipButton,
} from './MembershipElements';

function Membership({ data }) {
  return (
    <MembershipContainer>
        <MembershipH1>Our Membership Plans</MembershipH1>
        <MembershipP>Get started today and receive 50% off your first month</MembershipP>
        <MembershipWrapper>
          {data.map((membership, index) => {
            return (
              <MembershipCard key={index}>
                <MembershipIcon>{membership.icon}</MembershipIcon>
                <MembershipInfo>
                  <MembershipTitle>{membership.title}</MembershipTitle>
                  <MembershipDesc>{membership.desc1}</MembershipDesc>
                  <MembershipDesc>{membership.desc2}</MembershipDesc>
                  <MembershipDesc>{membership.desc3}</MembershipDesc>
                </MembershipInfo>
                  <MembershipPrice>{membership.price}</MembershipPrice>
                  <MembershipButton>{membership.button}</MembershipButton>
              </MembershipCard>
            )
          })}
        </MembershipWrapper>
    </MembershipContainer>
  )
}

export default Membership