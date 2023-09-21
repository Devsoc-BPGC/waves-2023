import { React, useEffect, useRef } from 'react';
import { Button, ChakraProvider } from '@chakra-ui/react';
import background_img from '../assets/bt_background.png';
import Fonts from './Fonts';
import theme from './theme';
export default function Register() {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Button
        w='14rem'
        h='2.7rem'
        borderRadius='5vh'
        fontWeight='bolder'
        fontSize='1.7rem'
        bgImg={background_img}
        bgSize='cover'
        color='white'
      >
        Register
      </Button>
    </ChakraProvider>
  );
}
