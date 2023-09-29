import React, { useEffect, useRef, useState } from 'react';
import { ChakraProvider, Box, Image } from '@chakra-ui/react';
import back_image from '../assets/back_image_page2.jpg';
import images from './images';
import './Carousel.css';

export default function Carousel() {
  const containerRef = useRef(null);
  const [isMouseOverCarousel, setIsMouseOverCarousel] = useState(false);

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = event => {
      if (isMouseOverCarousel && event.deltaMode === 0) {
        const scrollAmount = event.deltaY;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;

        if (container.scrollLeft + scrollAmount >= maxScrollLeft) {
          requestAnimationFrame(() => {
            container.scrollLeft = 0;
          });
          event.preventDefault();
        } else if (container.scrollLeft + scrollAmount <= 0) {
          requestAnimationFrame(() => {
            container.scrollLeft = maxScrollLeft;
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
        backgroundImage={`url(${back_image})`}
        backgroundSize='cover'
        h='100vh'
        display='flex'
        flexDirection='column'
        alignContent='center'
        justifyContent='center'
        alignItems='center'
        overflow='hidden'
      >
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
        >
          {images.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              w={['100%', '100%', '35%']}
              flex='1'
            />
          ))}
        </div>
      </Box>
    </ChakraProvider>
  );
}
