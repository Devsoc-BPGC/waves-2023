import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  theme,
  Flex,
  Spacer,
  Image,
  Grid,
  GridItem,
  SimpleGrid,
  useMediaQuery,
} from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import Footer from '../Components/Footer';
import RotateButton from '../Components/RotateButton';
import ModalDesktop from '../Components/ModalDesktop';
import waves_logo from '../assets/Waves-logo.png';
import main_page_bg from '../assets/main_page_bg.png';
import main_page_bg_phone from '../assets/main_page_bg_phone.png';
import Register from '../Components/Register';
import bubble1 from '../assets/image 4.png';
import evilmask from '../assets/maskcropped.png';
import horsebadge from '../assets/horsdebadge.png';
import underwater from '../assets/underwatersponsors.png';
export default function HomePage() {
  const [isSmallerThan600] = useMediaQuery('(max-width: 600px)');
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = () => setModalOpen(!modalOpen);

  return (
    <ChakraProvider theme={theme}>
      <Box
        overflow={'hidden'}
        position={'relative'}
        mt='0rem'
        bgImage={underwater}
        bgAttachment='fixed'
        bgRepeat='no-repeat'
        bgSize='cover'
      >
        <Grid templateColumns='repeat(10, 1fr)' p={0}>
          <GridItem colSpan={1}></GridItem>
          <GridItem colSpan={8}>
            <Image
              src={bubble1}
              style={{
                width: '35rem',
                objectFit: 'contain',
                marginRight: 'auto',
                marginLeft: 'auto',
                padding: '0',
              }}
            />
          </GridItem>
          <GridItem colSpan={1}></GridItem>
        </Grid>

        <Grid
          templateColumns='repeat(10, 1fr)'
          templateRows='repeat(2, 1fr)'
          p={0}
          gap={0}
        >
          <GridItem colSpan={4} rowSpan={2}>
            <Grid templateRows='repeat(2, 1fr)' p={0}>
              <GridItem rowSpan={1}>
                <Image
                  src={bubble1}
                  style={{
                    width: '27rem',
                    objectFit: 'contain',
                    marginRight: 'auto',
                    marginLeft: 'auto',
                    padding: '0',
                  }}
                />
              </GridItem>
              <GridItem rowSpan={1}>
                <Image
                  src={evilmask}
                  style={{
                    width: '20rem',
                    objectFit: 'contain',
                    marginLeft: 'auto',
                    marginTop: '4rem',
                  }}
                />
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem colSpan={6} rowSpan={2}>
            <Image
              src={bubble1}
              style={{
                width: '32rem',
                objectFit: 'contain',
                marginRight: 'auto',
                marginLeft: 'auto',
                padding: '0',
                marginTop: '5rem',
              }}
            />
          </GridItem>
        </Grid>

        <Grid templateColumns='repeat(10, 1fr)' p={0}>
          <GridItem colSpan={3}></GridItem>
          <GridItem colSpan={7}>
            <Image
              src={bubble1}
              style={{
                width: '35rem',
                objectFit: 'contain',
                marginRight: 'auto',
                marginLeft: 'auto',
                padding: '0',
              }}
            />
          </GridItem>
        </Grid>

        <Grid templateColumns='repeat(10, 1fr)' p={0}>
          <GridItem colSpan={5}>
            <Image
              src={bubble1}
              style={{
                width: '27rem',
                objectFit: 'contain',
                marginLeft: 'auto',
                padding: '0',
                marginTop: '0rem',
              }}
            />
          </GridItem>
          <GridItem colSpan={5}>
            <Image
              src={horsebadge}
              style={{
                width: '15rem',
                objectFit: 'contain',
                marginLeft: '5rem',
                marginTop: '18rem',
              }}
            />
          </GridItem>
        </Grid>

        <Grid templateColumns='repeat(10, 1fr)' p={0}>
          <GridItem colSpan={1}></GridItem>
          <GridItem colSpan={8}>
            <Image
              src={bubble1}
              style={{
                width: '35rem',
                objectFit: 'contain',
                marginRight: 'auto',
                marginLeft: 'auto',
                padding: '0',
              }}
            />
          </GridItem>
          <GridItem colSpan={1}></GridItem>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}
