import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  theme,
  Flex,
  Spacer,
  Image,
  useMediaQuery,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import scrollimg from './scroll.png';
import scrollLeft from './scrollLeft.png';
import scrollRight from './scrollRight.png';

const Scroll = props => {
  const clickHandler = () => {
    props.setShowScroll(!props.showScroll);
  };
  return (
    <AnimatePresence>
      {props.showScroll && (
        <Flex
          width='100%'
          minH='100vh'
          position='fixed'
          zIndex='2'
          top='0'
          left='0%'
          bgColor='rgba(0,0,0,0.5)'
          justify='center'
          alignItems='center'
        >
          <Flex
            width='100%'
            minH='100vh'
            position='absolute'
            top='0'
            left='0%'
            justify='center'
            alignItems='center'
            onClick={clickHandler}
          ></Flex>
          <motion.div
            style={{
              zIndex: '3',
              position: 'absolute',
              backgroundImage: `url(${scrollLeft})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center left',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              transitionDuration: '0.5s',
            }}
            initial={{ height: '69vh', width: '0vh' }}
            animate={{ height: '69vh', width: '99vh' }}
            exit={{ height: '69vh', width: '0vh', transitionDuration: '0.8s' }}
          ></motion.div>
          <motion.div
            style={{
              zIndex: '4',
              backgroundImage: `url(${scrollimg})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              transitionDuration: '0.8s',
            }}
            initial={{ height: '69vh', width: '0vh' }}
            animate={{ height: '69vh', width: '99vh' }}
            exit={{ height: '69vh', width: '0vh', transitionDuration: '0.5s' }}
          >
            <Flex justify='center' align='start' width='60%' height='70%'>
              <Flex
                style={{
                  width: '90%',
                  height: '90%',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}
              >
                <h1>{props.scrollHead}</h1>
                <p>{props.scrollContent}</p>
              </Flex>
              <Flex onClick={clickHandler} cursor='pointer'>
                &times;
              </Flex>
            </Flex>
          </motion.div>
          <motion.div
            style={{
              zIndex: '3',
              position: 'absolute',
              backgroundImage: `url(${scrollRight})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center right',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              transitionDuration: '0.5s',
            }}
            initial={{ height: '69vh', width: '0vh' }}
            animate={{ height: '69vh', width: '99vh' }}
            exit={{ height: '69vh', width: '0vh', transitionDuration: '0.8s' }}
          ></motion.div>
        </Flex>
      )}
    </AnimatePresence>
  );
};

export default Scroll;
