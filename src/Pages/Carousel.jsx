import React, { useEffect, useRef, useState } from 'react';
import { ChakraProvider, Box, Image, useMediaQuery } from '@chakra-ui/react';
import back_image from '../assets/back_image_page2.jpg';
import images from './images';

import { Swiper, SwiperSlide } from 'swiper/react';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Carousel.css';

export default function Carousel() {
  const containerRef = useRef(null);
  const [isMouseOverCarousel, setIsMouseOverCarousel] = useState(false);
  const [isSmallerThan600] = useMediaQuery('(max-width: 600px)');
  const [centralImageIndex, setCentralImageIndex] = useState(1);

  // useEffect(() => {
  //   const script = document.createElement('script');

  //   script.src = "/magicscroll/magicscroll.js";
  //   script.async = true;

  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   }
  // }, []);

  // useEffect(() => {
  //   const container = containerRef.current;

  //   const handleScroll = event => {
  //     if (isMouseOverCarousel) {
  //       const containerWidth = container.clientWidth;
  //       const scrollLeft = container.scrollLeft;
  //       console.log(scrollLeft);
  //       // const percentageWidthScrolled = (scrollLeft / window.innerWidth) * 100;

  //       // console.log(percentageWidthScrolled);
  //       const imageWidth = containerWidth * (isSmallerThan600 ? 0.63 : 0.38);
  //       console.log(imageWidth);

  //       const newCentralImageIndex = Math.ceil(scrollLeft / imageWidth);
  //       setCentralImageIndex(newCentralImageIndex);
  //       console.log(centralImageIndex);
  //     }
  //     if (isMouseOverCarousel && event.deltaMode === 0) {
  //       const scrollAmount = event.deltaY;
  //       const maxScrollLeft = container.scrollWidth - container.clientWidth;
  //       let scrollDistance;

  //       // console.log(container.clientWidth);
  //       // console.log(container.scrollLeft);
  //       // console.log(1 / (container.clientWidth / container.scrollLeft));

  //       if (container.clientWidth >= 768) {
  //         scrollDistance = (container.clientWidth * 3874) / 768;
  //       } else {
  //         scrollDistance = (container.clientWidth * 6940) / 767;
  //       }

  //       if (container.scrollLeft + scrollAmount >= maxScrollLeft) {
  //         requestAnimationFrame(() => {
  //           container.scrollLeft = scrollDistance;
  //         });
  //         event.preventDefault();
  //       } else if (container.scrollLeft + scrollAmount <= 0) {
  //         requestAnimationFrame(() => {
  //           // container.scrollLeft = maxScrollLeft - scrollDistance;
  //           if (container.clientWidth >= 768) {
  //             container.scrollLeft = (container.clientWidth * 11914) / 1960;
  //           } else {
  //             container.scrollLeft = (container.clientWidth * 7725) / 767;
  //           }
  //         });
  //         event.preventDefault();
  //       } else {
  //         container.scrollLeft += scrollAmount;
  //         event.preventDefault();
  //       }
  //     }
  //   };

  //   const handleMouseEnter = () => {
  //     setIsMouseOverCarousel(true);
  //   };

  //   const handleMouseLeave = () => {
  //     setIsMouseOverCarousel(false);
  //   };

  //   container.addEventListener('wheel', handleScroll, { passive: false });
  //   container.addEventListener('mouseenter', handleMouseEnter);
  //   container.addEventListener('mouseleave', handleMouseLeave);

  //   return () => {
  //     container.removeEventListener('wheel', handleScroll);
  //     container.removeEventListener('mouseenter', handleMouseEnter);
  //     container.removeEventListener('mouseleave', handleMouseLeave);
  //   };
  // }, [isMouseOverCarousel, isSmallerThan600, centralImageIndex]);

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
        <Box position='relative' top='5%' right='0%'>
          <div
            className='titleFont'
            style={{
              color: 'white',
              fontSize: isSmallerThan600 ? '2.5rem' : 96,
              fontWeight: '200',
              wordWrap: 'break-word',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            G A L L E R Y
          </div>
        </Box>
        {/* <div className='carousel-container'>
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
                w={[
                  '60%',
                  '60%',
                  `${index === centralImageIndex ? '45%' : '35%'}`,
                ]}
                h={index === centralImageIndex ? 'auto' : '100%'}
                style={{
                  paddingTop: index !== centralImageIndex ? '3.16%' : 0,
                }}
              />
            ))}

            {images.map((image, index) => (
              <Image
                key={index + 16}
                src={image.src}
                flex='1'
                w={[
                  '60%',
                  '60%',
                  `${index + 16 === centralImageIndex ? '45%' : '35%'}`,
                ]}
                h={index + 16 === centralImageIndex ? 'auto' : '100%'}
                style={{
                  paddingTop: index + 16 !== centralImageIndex ? '3.16%' : 0,
                }}
              />
            ))}
          </div>
        </div> */}
        <div style={{ width: '100%' }}>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            longSwipe={true}
            shortSwipe={false}
            pagination={true}
            loop={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            navigation={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className='swiper'
          >
            {images.map(image => {
              return (
                <SwiperSlide className='swiper-slide'>
                  <img src={image.src} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </Box>
    </ChakraProvider>
  );
}
