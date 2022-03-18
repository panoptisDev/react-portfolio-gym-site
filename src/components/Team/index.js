import { useState, useEffect } from 'react';
import {
  TeamContainer,
  TeamH1,
  CarouselWrapper,
  CarouselContentWrapper,
  CarouselContent,
  SlideImage,
  LeftArrow,
  RightArrow,
} from './TeamElements';

function Team({ slides, show }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(slides.length)
    const [touchPosition, setTouchPosition] = useState(null)
    const [hover, setHover] = useState(false);

    const onHover = () => {
      setHover(true);
    }

    const onLeave = () => {
      setHover(false);
    }

    useEffect(() => {
        setLength(slides.length)
    }, [slides])

    const nextSlide = () => {
        if (currentIndex < (length - show)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    const handleTouchMove = (e) => {
        const touchDown = touchPosition

        if(touchDown === null) {
            return
        }

        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch

        if (diff > 5) {
            nextSlide()
        }

        if (diff < -5) {
            prevSlide()
        }

        setTouchPosition(null)
    }

  
  return (
    <TeamContainer id='trainers'>
      <TeamH1>Meet Our Trainers</TeamH1>
      <CarouselWrapper>
        { currentIndex > 0 &&
          <LeftArrow onClick={prevSlide} />
        }
        <CarouselContentWrapper
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <CarouselContent
            style={{ transform: `translateX(-${currentIndex * (100 / show)}%)` }}
          >
          {slides.map((slide, index) => {
            return (
              <div key={index}>
                  <SlideImage 
                    src={slide.image} 
                    alt="" 
                    onMouseEnter={onHover}
                    onMouseLeave={onLeave}
                  />
                  {hover && (<h1>{slide.title}</h1>)}
              </div>
            );
          })}
          </CarouselContent>
        </CarouselContentWrapper>
        { currentIndex < (length - show) && 
          <RightArrow onClick={nextSlide} />
        }
      </CarouselWrapper>
    </TeamContainer>
  )
}

export default Team