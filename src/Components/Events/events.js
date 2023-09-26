import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  theme,
  Image,
  Flex,
  Text,
} from '@chakra-ui/react';
import bgimage from './bgimage.png';
import jellyfish from './jellyfish.svg';
import horsewheel from './horsewheel.svg';
import spartanhelmet from './spartanhelmet.svg';
import helmet_animated from './helmet_animated.svg';
import swords from './sword.svg';
import sword_animated from './sword_animated.svg';
import box from './box.svg';
import box_animated from './box2.svg';
import seaweed from './seaweed.svg';

function Events() {
  const [isHoveringSword, setIsHoveringSword] = useState(false);
  const [isHoveringBox, setIsHoveringBox] = useState(false);
  const [isHoveringHelmet, setIsHoveringHelmet] = useState(false);
  const zoomInOnHover = {
    transform: 'scale(1)',
    transition: 'transform 0.5s',
  };

  const zoomOutOnHover = {
    transform: 'scale(1.3)',
    transition: 'transform 0.5s',
    top: '8%',
  };

  const [jellyfishStyle, setJellyfishStyle] = useState(zoomInOnHover);
  return (
    <ChakraProvider theme={theme}>
      <Box position='relative'>
        <Image
          src={bgimage}
          alt='Background Image'
          width='100vw'
          height='105vh'
          backgroundSize='cover'
        />
        <Flex direction='column'>
          <Box position='absolute' top='5%' right='35%'>
            <div
              style={{
                color: 'white',
                fontSize: 96,
                fontFamily: 'Junge',
                fontWeight: '400',
                wordWrap: 'break-word',
              }}
            >
              E V E N T S
            </div>
          </Box>
          <Box position='absolute' top='5%' right='5%'>
            <Image
              src={jellyfish}
              alt='Jellyfish'
              width='314px'
              height='221px'
              zIndex='1'
              style={jellyfishStyle}
              onMouseEnter={() => {
                setJellyfishStyle(zoomOutOnHover);
              }}
              onMouseLeave={() => {
                setJellyfishStyle(zoomInOnHover);
              }}
            />
            <Text
              fontSize='22'
              fontWeight='400'
              fontFamily='Inknut Antiqua'
              wordBreak='break-word'
              color='white'
            >
              {' '}
              FLORENCE{' '}
            </Text>
          </Box>
        </Flex>
        <Flex direction='column'>
          <Box position='absolute' top='2%' left='5%'>
            <Image
              src={horsewheel}
              alt='Horsewheel'
              width='135.40px'
              height='117.10px'
              zIndex='1'
            />
            <Text
              fontSize='22'
              fontWeight='400'
              fontFamily='Inknut Antiqua'
              wordBreak='break-word'
              color='white'
            >
              {' '}
              EXTRAS{' '}
            </Text>
          </Box>
        </Flex>
        <Flex>
          <Box position='absolute' bottom='2%' right='5%'>
            <Image
              src={isHoveringHelmet ? helmet_animated : spartanhelmet}
              alt='Spartan'
              width='251.582px'
              height='280.858px'
              zIndex='1'
              onMouseEnter={() => setIsHoveringHelmet(true)}
              onMouseLeave={() => setIsHoveringHelmet(false)}
              style={{
                transition: '0.5s',
              }}
            />
            <Text
              fontSize='22'
              fontWeight='400'
              fontFamily='Inknut Antiqua'
              wordBreak='break-word'
              color='white'
            >
              {' '}
              FILM & PHOTOGRAPHY{' '}
            </Text>
          </Box>
        </Flex>
        <Flex direction='column'>
          <Box position='absolute' bottom='23%' left='10%'>
            <Image
              src={isHoveringSword ? sword_animated : swords}
              alt='Swords'
              width='141.403px'
              height='213.193px'
              zIndex='1'
              onMouseEnter={() => setIsHoveringSword(true)}
              onMouseLeave={() => setIsHoveringSword(false)}
              style={{
                transition: '0.5s',
              }}
            />
            <Text
              fontSize='22'
              fontWeight='400'
              fontFamily='Inknut Antiqua'
              wordBreak='break-word'
              color='white'
            >
              {' '}
              THE QUIZ FEST{' '}
            </Text>
          </Box>
        </Flex>
        <Flex>
          <Box position='absolute' bottom='0%' left='27%'>
            <Image
              src={isHoveringBox ? box_animated : box}
              alt='Box'
              width='235px'
              height='200px'
              zIndex='1'
              onMouseEnter={() => setIsHoveringBox(true)}
              onMouseLeave={() => setIsHoveringBox(false)}
              style={{
                transition: '3s',
              }}
            />
            <Text
              fontSize='22'
              fontWeight='400'
              fontFamily='Inknut Antiqua'
              wordBreak='break-word'
              color='white'
            >
              {' '}
              BEAU VISTA{' '}
            </Text>
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default Events;

