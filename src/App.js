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
import HomePage from './pages/homePage';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box
        textAlign='center'
        fontSize='xl'
        display='flex'
        flexDirection='column'
      ></Box>
      <HomePage />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
