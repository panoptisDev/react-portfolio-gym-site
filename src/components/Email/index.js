import { useState, useEffect } from 'react';
import {
  EmailContainer,
  CarouselWrapper,
  CarouselContentWrapper,
  CarouselContent,
  SlideImage,
  LeftArrow,
  RightArrow,
} from './EmailElements';

function Email({ slides, show }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(slides.length)
    const [touchPosition, setTouchPosition] = useState(null)

    useEffect(() => {
        setLength(slides.length)
    }, [slides])

    const next = () => {
        if (currentIndex < (length - show)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }

    const prev = () => {
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
            next()
        }

        if (diff < -5) {
            prev()
        }

        setTouchPosition(null)
    }

  
  return (
    <EmailContainer>
      <CarouselWrapper>
        { currentIndex > 0 &&
          <LeftArrow onClick={prev} />
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
                  <SlideImage src={slide.image} alt="" />
              </div>
            );
          })}
          </CarouselContent>
        </CarouselContentWrapper>
        { currentIndex < (length - show) && 
          <RightArrow onClick={next} />
        }
      </CarouselWrapper>
    </EmailContainer>
  )
}

export default Email