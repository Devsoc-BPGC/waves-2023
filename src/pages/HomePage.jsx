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
import waves_logo from '../assets/waves_logo.png';
import waves_background from '../assets/waves_background.jpg';

export default function HomePage() {
  return (
    <ChakraProvider theme={theme}>
      <Box
        textAlign='center'
        fontSize='xl'
        backgroundImage={waves_background}
        backgroundSize='cover'
        minH='1rem'
        display='flex'
        flexDirection='column'
      >
        <Grid minH='20.5rem' p={3}></Grid>
        <Box minH='11rem'>
          <Image src={waves_logo} margin='auto' paddingTop='3.45rem'></Image>
        </Box>
      </Box>
    </ChakraProvider>
  );
}
