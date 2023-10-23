import React, { useEffect, useRef, useState } from 'react';
import { ChakraProvider, Box, Image, useMediaQuery } from '@chakra-ui/react';
import images from './images';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import back_image from '../assets/back_image_page2.jpg';
import Slider from 'react-slick';
import './Carousel.css';

export default function NewCarousel() {
  const [isSmallerThan600] = useMediaQuery('(max-width: 600px)');
  const settings = {
    infinite: true,
    slidesToShow: 3,
    // slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    dots: false,
    centerMode: true,
    centerPadding: '10%',
    mobileFirst: true,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    useTransform: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '0%',
          dots: false,
          mobileFirst: true,
          swipe: true,
          swipeToSlide: true,
          touchMove: true,
        },
      },
    ],
  };

  return (
    <ChakraProvider>
      <Box
        backgroundImage={back_image}
        backgroundSize='cover'
        h='100vh'
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
        <div
          className='slick-carousel'
          style={{
            width: '100%',
            overflowX: 'auto',
            position: 'relative',
            top: isSmallerThan600 ? '25%' : '12%',
            minHeight: '60vh',
          }}
        >
          <Slider {...settings}>
            {images.map(image => (
              <div key={image.id} className='image-container'>
                <img src={image.src} alt={`Image ${image.id}`} />
              </div>
            ))}
          </Slider>
        </div>
      </Box>
    </ChakraProvider>
  );
}
// export default function Carousel() {
//   const containerRef = useRef(null);
//   const [isMouseOverCarousel, setIsMouseOverCarousel] = useState(false);
//   const [isSmallerThan600] = useMediaQuery('(max-width: 600px)');
//   const [centralImageIndex, setCentralImageIndex] = useState(1);

//   const touchStartX = useRef(0);
//   const touchEndX = useRef(0);

//   useEffect(() => {
//     const container = containerRef.current;

//     const handleScroll = event => {
//       if (isMouseOverCarousel) {
//         const containerWidth = container.clientWidth;
//         const scrollLeft = container.scrollLeft;
//         console.log(scrollLeft);
//         // const percentageWidthScrolled = (scrollLeft / window.innerWidth) * 100;

//         // console.log(percentageWidthScrolled);
//         const imageWidth = containerWidth * (isSmallerThan600 ? 0.63 : 0.38);
//         console.log(imageWidth);

//         const newCentralImageIndex = Math.ceil(scrollLeft / imageWidth);
//         setCentralImageIndex(newCentralImageIndex);
//         console.log(centralImageIndex);
//       }
//       if (isMouseOverCarousel && event.deltaMode === 0) {
//         const scrollAmount = event.deltaY;
//         const maxScrollLeft = container.scrollWidth - container.clientWidth;
//         let scrollDistance;

//         // console.log(container.clientWidth);
//         // console.log(container.scrollLeft);
//         // console.log(1 / (container.clientWidth / container.scrollLeft));

//         if (container.clientWidth >= 768) {
//           scrollDistance = (container.clientWidth * 3874) / 768;
//         } else {
//           scrollDistance = (container.clientWidth * 6940) / 767;
//         }

//         if (container.scrollLeft + scrollAmount >= maxScrollLeft) {
//           requestAnimationFrame(() => {
//             container.scrollLeft = scrollDistance;
//           });
//           event.preventDefault();
//         } else if (container.scrollLeft + scrollAmount <= 0) {
//           requestAnimationFrame(() => {
//             // container.scrollLeft = maxScrollLeft - scrollDistance;
//             if (container.clientWidth >= 768) {
//               container.scrollLeft = (container.clientWidth * 11914) / 1960;
//             } else {
//               container.scrollLeft = (container.clientWidth * 7725) / 767;
//             }
//           });
//           event.preventDefault();
//         } else {
//           container.scrollLeft += scrollAmount;
//           event.preventDefault();
//         }
//       }
//     };

//     const handleMouseEnter = () => {
//       setIsMouseOverCarousel(true);
//     };

//     const handleMouseLeave = () => {
//       setIsMouseOverCarousel(false);
//     };

//     const handleTouchStart = event => {
//       // Store the starting touch position
//       touchStartX.current = event.touches[0].clientX;
//     };

//     const handleTouchMove = event => {
//       touchEndX.current = event.touches[0].clientX;
//     };
//     console.log(touchStartX.current - touchEndX.current);

//     const handleTouchEnd = () => {
//       // Determine if there was a swipe gesture and adjust centralImageIndex accordingly
//       if (touchStartX.current - touchEndX.current > 240) {
//         // Swipe left, increment centralImageIndex
//         setCentralImageIndex(
//           prevIndex =>
//             prevIndex +
//             Math.floor((touchStartX.current - touchEndX.current) / 240)
//         );
//       } else if (touchEndX.current - touchStartX.current > 240) {
//         // Swipe right, decrement centralImageIndex
//         setCentralImageIndex(prevIndex =>
//           prevIndex - 1 >= 0
//             ? prevIndex -
//               Math.floor((touchEndX.current - touchStartX.current) / 240)
//             : 0
//         );
//       }
//     };

//     // Add touch event listeners
//     container.addEventListener('touchstart', handleTouchStart);
//     container.addEventListener('touchmove', handleTouchMove);
//     container.addEventListener('touchend', handleTouchEnd);

//     container.addEventListener('wheel', handleScroll, { passive: false });
//     container.addEventListener('mouseenter', handleMouseEnter);
//     container.addEventListener('mouseleave', handleMouseLeave);

//     return () => {
//       container.removeEventListener('wheel', handleScroll);
//       container.removeEventListener('mouseenter', handleMouseEnter);
//       container.removeEventListener('mouseleave', handleMouseLeave);

//       container.removeEventListener('touchstart', handleTouchStart);
//       container.removeEventListener('touchmove', handleTouchMove);
//       container.removeEventListener('touchend', handleTouchEnd);
//     };
//   }, [isMouseOverCarousel, isSmallerThan600, centralImageIndex]);

//   return (
//     <ChakraProvider>
//       <Box
//         textAlign='center'
//         fontSize='xl'
//         backgroundImage={`url(${back_image})`}
//         backgroundSize='cover'
//         h='100vh'
//         display='flex'
//         flexDirection='column'
//         alignContent='center'
//         justifyContent='center'
//         alignItems='center'
//         overflow='hidden'
//       >
//         <Box position='relative' top='5%' right='0%'>
//           <div
//             className='titleFont'
//             style={{
//               color: 'white',
//               fontSize: isSmallerThan600 ? '2.5rem' : 96,
//               fontWeight: '200',
//               wordWrap: 'break-word',
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}
//           >
//             G A L L E R Y
//           </div>
//         </Box>
//         <div className='carousel-container'>
//           <div
//             ref={containerRef}
//             style={{
//               display: 'flex',
//               overflowX: 'auto',
//               width: '100%',
//               whiteSpace: 'nowrap',
//               marginTop: '10%',
//               gap: '3%',
//             }}
//             className='carousel'
//           >
//             {images.map((image, index) => (
//               <Image
//                 key={index}
//                 src={image.src}
//                 flex='1'
//                 w={[
//                   '95%',
//                   '95%',
//                   `${
//                     isSmallerThan600
//                       ? '35%'
//                       : index === centralImageIndex
//                       ? '45%'
//                       : '35%'
//                   }`,
//                 ]}
//                 h={
//                   isSmallerThan600
//                     ? 'auto'
//                     : index === centralImageIndex
//                     ? 'auto'
//                     : '100%'
//                 }
//                 style={{
//                   paddingTop: index !== centralImageIndex ? '3.16%' : 0,
//                 }}
//               />
//             ))}

//             {images.map((image, index) => (
//               <Image
//                 key={index + 16}
//                 src={image.src}
//                 flex='1'
//                 w={[
//                   '95%',
//                   '95%',
//                   `${index + 16 === centralImageIndex ? '45%' : '35%'}`,
//                 ]}
//                 h={index + 16 === centralImageIndex ? 'auto' : '100%'}
//                 style={{
//                   paddingTop: index + 16 !== centralImageIndex ? '3.16%' : 0,
//                 }}
//               />
//             ))}
//           </div>
//         </div>
//       </Box>
//     </ChakraProvider>
//   );
// }
