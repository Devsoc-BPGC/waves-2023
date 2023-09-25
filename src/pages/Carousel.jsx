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
  Flex,
} from '@chakra-ui/react';
import back_image from '../assets/back_image_page2.jpg';
import ChakraCarousel from '../Components/ChakraCarousel';
// import ImageSlider from '../Components/ImageSlider';
import images from './images';

export default function Carousel() {
  return (
    <ChakraProvider theme={theme}>
      <Box
        textAlign='center'
        fontSize='xl'
        backgroundImage={back_image}
        backgroundSize='cover'
        h='100vh'
        display='flex'
        flexDirection='column'
        alignContent='center'
        justifyContent='center'
        alignItems='center'
      >
        {/* <Box marginTop='25%' margin='auto' h='20vh'> */}
        <ChakraCarousel gap={32}>
          {images.map(image => (
            <Image src={image.src}></Image>
          ))}
        </ChakraCarousel>
        {/* </Box> */}
      </Box>
    </ChakraProvider>
  );
}
