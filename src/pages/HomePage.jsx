import React from 'react';
import { Center, Image } from '@chakra-ui/react';
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
        h='100vh'
        display='flex'
        flexDirection='column'
        alignContent='center'
        justifyContent='center'
        alignItems='center'
      >
        <Box marginTop='25%' maxWidth='85%'>
          <Image src={waves_logo}></Image>
        </Box>
      </Box>
    </ChakraProvider>
  );
}
