import { React } from 'react';
import { Button, ChakraProvider } from '@chakra-ui/react';
import background_img from '../assets/bt_background.png';
import Fonts from './Fonts';
import theme from './theme';
function openRegPortal() {
  window.open('https://register.wavesbits.org/', '_blank');
}
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
        fontFamily='"Dalek", cursive'
        bgImg={background_img}
        bgSize='cover'
        color='white'
        boxShadow='0px 0px 20px #add8e6'
        _hover={{
          height: '3rem',
          fontSize: '2rem',
          width: '16rem',
          transition: 'all 0.5s',
        }}
        onClick={openRegPortal}
      >
        Register
      </Button>
    </ChakraProvider>
  );
}
