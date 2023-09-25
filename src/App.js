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
import HomePage from './pages/HomePage';
import Carousel from './pages/Carousel';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <HomePage />
      <Carousel />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
