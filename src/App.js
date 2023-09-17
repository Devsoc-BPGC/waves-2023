import React from 'react';
import { Image } from '@chakra-ui/react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Footer from './Components/Footer';
import waves_background from './assets/waves_background.jpg';
import waves_logo from './assets/waves_logo.png';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box
        textAlign='center'
        fontSize='xl'
        backgroundImage={waves_background}
        backgroundSize='cover'
        minH='95vh'
        display='flex'
        flexDirection='column'
      >
        <Grid minH='47.45vh' p={3}></Grid>
        <Box minH='20vh'>
          <Image src={waves_logo} margin='auto' paddingTop='8vh'></Image>
        </Box>
        <Box bg='black' color='white'>
          <Footer bottom='0px' pos='relative' marginTop='auto' minH='5vh' />
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
