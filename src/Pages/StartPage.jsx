import React, { useState } from 'react';
import { Flex } from '@chakra-ui/react';
import gif from '../assets/WavesAnimGIF_DevSoc.gif';
import HomePage from './HomePage';
import highBg from '../assets/highBg.png';
import kaalabg from '../assets/kaalabg.png';

export default function StartPage() {
  const [bgChange, setBgChange] = useState(false);
  setTimeout(() => {
    console.log('sup bitch');
    setBgChange(true);
  }, 1000);
  return (
    <Flex
      width='100vw'
      height='100vh'
      alignItems='center'
      justifyContent='center'
      overflow='hidden'
      transitionDuration='6900ms'
      backgroundImage={bgChange ? highBg : kaalabg}
      backgroundSize='cover'
    >
      <img
        src={gif}
        alt='Animated Waves'
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
          width: 'auto',
          height: 'auto',
        }}
      />
      <div
        style={{
          opacity: '0%',
          position: 'absolute',
          top: '0px',
          zIndex: '-10',
        }}
      >
        <HomePage />
      </div>
    </Flex>
  );
}
