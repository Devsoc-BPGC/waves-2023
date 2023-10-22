import React, { useState } from 'react';
import WaterWave from 'react-water-wave';
import {
  ChakraProvider,
  Box,
  theme,
  Flex,
  Spacer,
  Image,
  useMediaQuery,
} from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import RotateButton from '../Components/RotateButton';
import ModalDesktop from '../Components/ModalDesktop';
import MobileBurger from '../Components/MobileBurger';
import waves_logo from '../assets/Waves-logo.png';
import waves_background from '../assets/manwithTrident.mp4';
import main_page_bg_phone from '../assets/main_page_bg_phone.png';
import Register from '../Components/Register';
import trans from '../assets/1024px-HD_transparent_picture.png';

export default function HomePage() {
  const [isSmallerThan600] = useMediaQuery('(max-width: 600px)');
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = () => setModalOpen(!modalOpen);

  return (
    <ChakraProvider theme={theme}>
      <Box overflow={'hidden'} position={'relative'}>
        <Flex
          textAlign='center'
          fontSize='xl'
          bgSize='cover'
          bgRepeat='no-repeat'
          bgImg={isSmallerThan600 ? main_page_bg_phone : waves_background}
          minH='100vh'
          justify='space-between'
          flexDir='column'
        >
          {isSmallerThan600 ? (
            <></>
          ) : (
            <video
              loop
              autoPlay
              muted
              style={{
                zIndex: -1,
                position: 'absolute',
                top: '0px',
                left: '0px',
                objectFit: 'cover',
                minHeight: '100vh',
              }}
            >
              <source src={waves_background} type='video/mp4' />
            </video>
          )}
          <WaterWave
            imageUrl={trans}
            perturbance='0.03'
            dropRadius='25'
            resolution='1080'
            style={{
              height: '100vh',
              width: '100vw',
              backgroundSize: 'cover',
              position: 'absolute',
              top: '0px',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          >
            {methods => <></>}
          </WaterWave>
          <Flex flexDir='row' m='10px'>
            <Spacer></Spacer>
            <RotateButton onClick={handleClick} />
          </Flex>
          <Spacer></Spacer>
          <Image
            m='auto'
            src={waves_logo}
            maxW='60%'
            w='40%'
            objectFit='cover'
            marginBottom={'3rem'}
          />
          <Box boxSize='10vh' w='100%'>
            <Register />
          </Box>
        </Flex>
        <AnimatePresence>
          {modalOpen && !isSmallerThan600 && (
            <ModalDesktop handleClick={handleClick} />
          )}
          {modalOpen && isSmallerThan600 && (
            <MobileBurger handleClick={handleClick} />
          )}
        </AnimatePresence>
      </Box>
    </ChakraProvider>
  );
}
