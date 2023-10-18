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
        w='12rem'
        h='2rem'
        borderRadius='5vh'
        fontWeight='bolder'
        fontSize='1.5rem'
        fontFamily='"Dalek", cursive'
        bgImg={background_img}
        bgSize='cover'
        color='white'
        boxshadow='0px 0px 20px #add8e6'
        _hover={{
          height: '2.5rem',
          width: '14rem',
          fontSize: '1.7rem',
          color: 'yellow',
          transition: 'all 0.5s',
        }}
        onClick={openRegPortal}
      >
        Register
      </Button>
    </ChakraProvider>
  );
}
