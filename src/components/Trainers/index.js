import {
    TrainerH1,
    Carousel,
    InnerCarousel,
    ImageCarousel,
  } from './TrainerElements';
  import { useRef, useEffect, useState } from 'react';
  import images from './images-data';
  
  function Trainers() {
    const [width, setWidth] = useState(0);
    const carousel = useRef()
  
    useEffect(() => {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])
  
    return (
        <>
            <Carousel id='trainers' ref={carousel}>
                <TrainerH1>Meet Our Trainers</TrainerH1> 
                <InnerCarousel 
                    drag='x'
                    dragConstraints={{ right: 0, left: -width }}
                >
                {images.map((image) => {
                    return(
                    <ImageCarousel key={image}>
                        <img src={image} alt='' />
                    </ImageCarousel>
                    );
                })}
                </InnerCarousel>
            </Carousel>
        </>
    );
  }
  
  export default Trainers;