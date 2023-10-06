import React, { useState } from 'react';
import { Box, Image } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import bgimg from './bgimg_phone.png';
import token1 from './token1.png';
import token2 from './token2.png';
import token3 from './token3.png';
import token4 from './token4.png';
import token5 from './token5.png';
// import token6 from './token6.png';

const EventsMobile = () => {
  const images = [token1, token2, token3, token4, token5]; //token6
  const text = [
    'FLORENCE',
    'FILM & PHOTOGRAPH',
    'BEAU VISTA',
    'THE QUIZ FEST',
    'EXTRAS',
  ];
  const variants = {
    enter: direction => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: direction => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = newDirection => {
    setPage([page + newDirection, newDirection]);
  };
  return (
    <Box position='relative'>
      <Image src={bgimg} height='100vh' width='200vw' />
      <Box
        position={'absolute'}
        top={'0%'}
        height={'100%'}
        width={'100%'}
        display={'flex'}
        flexDir={'column'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <div
          style={{
            color: 'white',
            fontFamily: 'Junge',
            fontSize: '10vw',
            fontWeight: '400',
            wordWrap: 'break-word',
            flex: 'auto',
            marginTop: '2rem',
          }}
        >
          E V E N T S
        </div>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            style={{
              position: 'absolute',
              backgroundImage: `url(${images[imageIndex]})`,
              backgroundSize: '6rem',
              backgroundRepeat: 'no-repeat',
              height: '12rem',
              width: '6rem',
              marginTop: '8rem',
            }}
            drag='x'
            dragConstraints={{ left: 0, right: 0 }}
            custom={direction}
            variants={variants}
            initial='enter'
            animate='center'
            exit='exit'
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          >
            <div
              style={{
                color: 'white',
                fontFamily: 'Junge',
                fontSize: '7vw',
                fontWeight: '400',
                wordWrap: 'normal',
                flex: 'auto',
                marginTop: '8rem',
                width: '300%',
                textAlign: 'center',
                marginLeft: '-100%',
              }}
            >
              {text[imageIndex]}
            </div>
          </motion.div>
        </AnimatePresence>
      </Box>
    </Box>
  );
};

export default EventsMobile;
