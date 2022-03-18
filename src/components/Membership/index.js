
import {
  MembershipContainer,
  MembershipH1,
  MembershipP,
  MembershipWrapper,
  MembershipCard,
  ListIcon,
  MembershipInfo,
  MembershipTitle,
  MembershipDesc,
  MembershipPrice,
  MembershipButton,
} from './MembershipElements';


function Membership({ data }) {

  return (
    <MembershipContainer id='plans'>
        <MembershipH1>Our Membership Plans</MembershipH1>
        <MembershipP>Get started today and receive <span style={{ fontWeight: 'bold' }}>50% off</span> your <span style={{ borderBottom: '2px solid #f9032f' }}>first month</span></MembershipP>
        <MembershipWrapper>
          {data.map((membership, index) => {
            return (
              <MembershipCard key={index}>
                  <MembershipTitle>{membership.title}</MembershipTitle>
                  <MembershipInfo>
                    <MembershipDesc>
                      <ListIcon />
                      {membership.desc1}
                    </MembershipDesc>
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