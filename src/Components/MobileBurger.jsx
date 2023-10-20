import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Flex } from '@chakra-ui/react';
import logo from '../assets/Waves-logo.png';
import trans from '../assets/1024px-HD_transparent_picture.png';
import './Events/events.css';

export default function MobileBurger(props) {
  return (
    <AnimatePresence>
      <motion.div
        className='titleFont'
        initial={{ opacity: 0, left: '100%' }}
        animate={{ opacity: 1, left: '0%' }}
        style={{
          background: { trans },
          position: 'absolute',
          top: '0px',
          zIndex: 2,
          backdropFilter: 'blur(8px)',
          color: 'white',
          fontSize: '2rem',
        }}
      >
        <Flex
          position='absolute'
          top='2%'
          left='2%'
          zIndex='3'
          fontSize='2.5rem'
          onClick={props.handleClick}
        >
          &times;
        </Flex>
        <Flex
          height='100vh'
          width='100vw'
          justify='space-evenly'
          align='center'
          flexDirection='column'
        >
          <Flex width='90%' justify='center'>
            <a href='/'>
              <img src={logo} alt='Logo' />
            </a>
          </Flex>
          <Flex width='90%' justify='center' align='center'>
            <a href='/teams'>Our Team</a>
          </Flex>
          <Flex width='90%' justify='center' align='center'>
            <a href='/media'>Media Partners</a>
          </Flex>
          <Flex width='90%' justify='center' align='center'>
            <a href='/sponsors'>Sponsors</a>
          </Flex>
        </Flex>
      </motion.div>
    </AnimatePresence>
  );
}
