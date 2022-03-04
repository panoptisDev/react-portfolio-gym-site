import { useState } from "react";
import { 
  TeamContainer,
  SlideImage, 
  SlideTitle,
  StyledSlider,
} from './TeamElements';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Team = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <TeamContainer>
      <StyledSlider>
        <FaChevronLeft
          className="left-arrow"
          onClick={prevSlide}
          style={{ color: '#fff' }}
        />
        {slides.map((slide, index) => {
          return (
            <div key={index}>
              {index === current && (
                <SlideImage src={slide.image} alt="" />
              )}
              <SlideTitle>{slide.title}</SlideTitle>
            </div>
          );
        })}
        <FaChevronRight
          className="right-arrow"
          onClick={nextSlide}
          style={{ color: '#fff' }}
        />
      </StyledSlider>
    </TeamContainer>
  );
};

export default Team;
