import React, { useState } from 'react';
import { Flex, useMediaQuery } from '@chakra-ui/react';
import gif from '../assets/WavesAnimGIF_DevSoc.gif';
import HomePage from './HomePage';
import highBg from '../assets/highBg.png';
import highBgPhone from '../assets/highBgPhone.png';
import kaalabg from '../assets/kaalabg.png';

export default function StartPage() {
  const [bgChange, setBgChange] = useState(false);
  setTimeout(() => {
    console.log('sup bitch');
    setBgChange(true);
  }, 1000);
  const [isSmallerThan600] = useMediaQuery('(max-width: 600px)');
  const moddedImg = isSmallerThan600 ? highBgPhone : highBg;
  return (
    <Flex
      width='100vw'
      height='100vh'
      alignItems='center'
      justifyContent='center'
      overflow='hidden'
      transitionDuration='6900ms'
      backgroundImage={bgChange ? moddedImg : kaalabg}
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
