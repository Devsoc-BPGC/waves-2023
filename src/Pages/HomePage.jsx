import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
  Flex,
  Spacer,
  Image,
  Button,
} from '@chakra-ui/react';
import Footer from '../Components/Footer';
import RotateButton from '../Components/RotateButton';
import waves_logo from '../assets/Waves-logo.png';
import main_page_bg from '../assets/main_page_bg.png';
import Register from '../Components/Register';
export default function HomePage() {
  return (
    <ChakraProvider theme={theme}>
      <Flex
        textAlign='center'
        fontSize='xl'
        bgSize='cover'
        bgRepeat='no-repeat'
        bgImg={main_page_bg}
        minH='100vh'
        justify='space-between'
        flexDir='column'
      >
        <Flex flexDir='row' m='10px'>
          <Spacer></Spacer>
          <RotateButton />
        </Flex>
        <Spacer></Spacer>
        <Image m='auto' src={waves_logo} maxW='70%' objectFit='cover' />
        <Box boxSize='10vh' w='100%'>
          <Register />
        </Box>
        <Footer />
      </Flex>
    </ChakraProvider>
  );
}
