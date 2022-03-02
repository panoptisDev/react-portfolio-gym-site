import { useState } from 'react';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
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
            <HeroItems>
              <HeroH1>Open Everyday</HeroH1>
              <HeroP>Join Now for only $19/Month</HeroP>
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
            </HeroItems>
          </HeroContent>
        </HeroContainer>
    </>
  )
}

export default Hero