import { useState } from 'react';
import {
  HeroContainer,
  HeroContent,
  HeroHeader,
  HeroInfo,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from './HeroElements';
import { Button } from '../ButtonElement';


function Hero() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <>
        <HeroContainer id='home'>
          <HeroContent>
            <HeroHeader>Open Everyday</HeroHeader>
            <HeroInfo>
              Join Now for only $29/Month
            </HeroInfo>
            <HeroBtnWrapper>
              <Button
                to='signup' 
                onMouseEnter={onHover} 
                onMouseLeave={onHover}
                primary='true'
                dark='true'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                Get Started {hover ? <ArrowForward /> : <ArrowRight />}
              </Button>
            </HeroBtnWrapper>
          </HeroContent>
        </HeroContainer>
    </>
  )
}

export default Hero