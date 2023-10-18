import React, { useEffect, useRef, useState } from 'react';
import { ChakraProvider, Box, Image } from '@chakra-ui/react';
import back_image from '../assets/back_image_page2.jpg';
import images from './images';
import './Carousel.css';
import bg_3 from '../assets/bg_3.png';

export default function Carousel() {
  const containerRef = useRef(null);
  const [isMouseOverCarousel, setIsMouseOverCarousel] = useState(false);

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = event => {
      if (isMouseOverCarousel && event.deltaMode === 0) {
        const scrollAmount = event.deltaY;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        let scrollDistance;

        console.log(container.clientWidth);
        console.log(container.scrollLeft);
        if (container.clientWidth >= 768) {
          scrollDistance = (container.clientWidth * 3874) / 768;
        } else {
          scrollDistance = (container.clientWidth * 6940) / 767;
        }

        if (container.scrollLeft + scrollAmount >= maxScrollLeft) {
          requestAnimationFrame(() => {
            container.scrollLeft = scrollDistance;
          });
          event.preventDefault();
        } else if (container.scrollLeft + scrollAmount <= 0) {
          requestAnimationFrame(() => {
            // container.scrollLeft = maxScrollLeft - scrollDistance;
            if (container.clientWidth >= 768) {
              container.scrollLeft = (container.clientWidth * 11914) / 1960;
            } else {
              container.scrollLeft = (container.clientWidth * 7725) / 767;
            }
          });
          event.preventDefault();
        } else {
          container.scrollLeft += scrollAmount;
          event.preventDefault();
        }
      }
    };

    const handleMouseEnter = () => {
      setIsMouseOverCarousel(true);
    };

    const handleMouseLeave = () => {
      setIsMouseOverCarousel(false);
    };

    container.addEventListener('wheel', handleScroll, { passive: false });
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('wheel', handleScroll);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isMouseOverCarousel]);

  return (
    <ChakraProvider>
      <Box
        textAlign='center'
        fontSize='xl'
        backgroundImage={bg_3}
        backgroundSize='cover'
        h='100vh'
        display='flex'
        flexDirection='column'
        alignContent='center'
        justifyContent='center'
        alignItems='center'
        overflow='hidden'
      >
        <div className='carousel-container'>
          <div
            ref={containerRef}
            style={{
              display: 'flex',
              overflowX: 'auto',
              width: '100%',
              whiteSpace: 'nowrap',
              marginTop: '10%',
              gap: '3%',
            }}
            className='carousel'
          >
            {images.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                flex='1'
                // aspectRatio={3 / 2}
                w={['60%', '60%', '35%']}
              />
            ))}
            {images.map((image, index) => (
              <Image
                key={index + 4}
                src={image.src}
                // aspectRatio={3 / 2}
                w={['60%', '60%', '35%']}
                flex='1'
              />
            ))}
          </div>
        </div>
      </Box>
    </ChakraProvider>
  );
}
