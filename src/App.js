import React from 'react';
import {
  AspectRatio,
  ChakraProvider,
  Box,
  theme,
  Flex,
  Spacer,
  Image,
  Button,
  color,
  background,
} from '@chakra-ui/react';
import Footer from './Components/Footer';
import RotateButton from './Components/RotateButton';
import waves_logo from './assets/Waves-logo.png';
import main_page_bg from './assets/main_page_bg.png';
function App() {
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
        <Box boxSize='10vh' bg='pink' w='100%'>
          <Button m='auto'>Register</Button>
        </Box>
        <Footer />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
