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
  Center,
  Heading,
  Text,
  Divider,
} from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import Footer from '../Components/Footer';
import RotateButton from '../Components/RotateButton';
import ModalDesktop from '../Components/ModalDesktop';
import waves_logo from '../assets/Waves-logo.png';
import waves_background from '../assets/waves_background.jpg';
import main_page_bg_phone from '../assets/main_page_bg_phone.png';
import Register from '../Components/Register';
import bubble1 from '../assets/image 4.png';
import evilmask from '../assets/maskcropped.png';
import horsebadge from '../assets/horsdebadge.png';
import underwater from '../assets/underwatersponsors.png';
import mediabg from '../assets/mediabg.png';

import spface from '../assets/Associate Magazine Partner + Magazine Partner of Fashion Parade.jpg';
import spedtimes from '../assets/Backlinks/Associate Media Partner_.jpg';
import spinshorts from '../assets/Backlinks/Associate Media Partner_.png';
import sprecordso from '../assets/Backlinks/Associate Media Partner_(1).jpg';
import spcampust from '../assets/Backlinks/Associate Media Partner_(1).png';
import sphumara from '../assets/Backlinks/Associate Media Partner_(2).jpg';
import spvygr from '../assets/Backlinks/Associate Media Partner_(2).png';
import spknow from '../assets/Backlinks/Associate Media Partner_(3).jpg';
import spznews from '../assets/Backlinks/Associate Media Partner_(3).png';
import spgoan from '../assets/Backlinks/Associate Media Partner_(4).png';
import spcurr from '../assets/Backlinks/Associate Media Partner_(4).jpg';
import spcampusv from '../assets/Backlinks/Associate Media Partner_(5).jpg';
import spgroove from '../assets/Backlinks/Associate Media Partner_(5).png';
import spcampustpune from '../assets/Backlinks/Associate Media Partner_(6).jpg';
import spnewsreach from '../assets/Backlinks/Associate Media Partner_(6).png';
import sprdx from '../assets/Backlinks/Associate Media Partner_(7).jpg';
import speve from '../assets/Backlinks/Associate Media Partner_(7).png';
import spdub from '../assets/Backlinks/Associate Media Partner_(8).jpg';
import spinterview from '../assets/Backlinks/Associate Media Partner_(8).png';
import spindcolfest from '../assets/Backlinks/Associate Media Partner_(9).png';
import spawesong from '../assets/Backlinks/Associate Media Partner+ Associate Media Partner of Jukebox.png';
import spawctopus from '../assets/Backlinks/Associate Media Partner+ Associate Media Partner of Moot Court_.jpg';
import spawctopuslaw from '../assets/Backlinks/Knowledge Partner_.png';
import spindianexp from '../assets/Backlinks/Official Media Partner + Official Media Partner of Searock.jpg';
import spclout from '../assets/Backlinks/Official Talent Partner_.jpg';
import spindigo from '../assets/Backlinks/Radio Partner_.jpg';
import spviva from '../assets/Backlinks/Viva Goa Associate media partner.jpg.JPG';

const MediaSponsors = [
  {
    key: 1,
    image: spface,
    name: 'FACE Magazine',
    title: 'Associate Magazine Partner + Magazine Partner of Fashion Parade',
  },
  {
    key: 2,
    image: spedtimes,
    name: 'ED Times',
    title: 'Associate Media Partner+ Associate Media Partner of Jukebox',
  },
  {
    key: 3,
    image: spinshorts,
    name: 'InShorts',
    title: 'Associate Media Partner+ Associate Media Partner of Moot Court',
  },
  {
    key: 4,
    image: sprecordso,
    name: 'RECORDSO',
    title: 'Associate Media Partner',
  },
  {
    key: 5,
    image: spcampust,
    name: 'Campus Times',
    title: 'Associate Media Partner',
  },
  {
    key: 6,
    image: sphumara,
    name: 'Humara Movie',
    title: 'Associate Media Partner',
  },
  {
    key: 7,
    image: spvygr,
    name: 'VYGR',
    title: 'Associate Media Partner',
  },
  {
    key: 8,
    image: spznews,
    name: 'Zee News',
    title: 'Associate Media Partner',
  },
  {
    key: 9,
    image: spknow,
    name: 'Knowafest.com',
    title: 'Associate Media Partner',
  },
  {
    key: 10,
    image: spgoan,
    name: 'The Goan Everyday',
    title: 'Associate Media Partner',
  },
  {
    key: 11,
    image: spcampusv,
    name: 'Campusvarta',
    title: 'Associate Media Partner',
  },
  {
    key: 12,
    image: spcurr,
    name: 'Currciulum Media',
    title: 'Associate Media Partner',
  },
  {
    key: 13,
    image: spgroove,
    name: 'Groovenexus',
    title: 'Associate Media Partner',
  },
  {
    key: 14,
    image: spcampustpune,
    name: 'Campus Times Pune',
    title: 'Associate Media Partner',
  },
  {
    key: 15,
    image: spnewsreach,
    name: 'News Reach',
    title: 'Associate Media Partner',
  },
  {
    key: 16,
    image: sprdx,
    name: 'RDX Goa',
    title: 'Associate Media Partner',
  },
  {
    key: 17,
    image: spdub,
    name: 'DU Beat',
    title: 'Associate Media Partner',
  },
  {
    key: 18,
    image: spinterview,
    name: 'Interview Buddy',
    title: 'Associate Media Partner',
  },
  {
    key: 19,
    image: spindcolfest,
    name: 'India College Fest',
    title: 'Associate Media Partner',
  },
  {
    key: 20,
    image: speve,
    name: 'Evepaper',
    title: 'Associate Media Partner',
  },
  {
    key: 21,
    image: spawesong,
    name: 'Awesong',
    title: 'Associate Media Partner+ Associate Partner of Jukebox',
  },
  {
    key: 22,
    image: spawctopus,
    name: 'Awctopus',
    title: 'Associate Media Partner+ Associate Media Partner of Moot Court',
  },
  {
    key: 23,
    image: spawctopuslaw,
    name: 'Awctopus Law School',
    title: 'Knowledge Partner',
  },
  {
    key: 24,
    image: spindianexp,
    name: 'The Indian Express',
    title: 'Official Media Partner+ Official Media Partner of Searock',
  },
  {
    key: 25,
    image: spclout,
    name: 'Clout',
    title: 'Official Talent Partner',
  },
  {
    key: 26,
    image: spindigo,
    name: 'Indigo 91.9fm',
    title: 'Radio Partner',
  },
  {
    key: 27,
    image: spviva,
    name: 'Viva Goa',
    title: 'Associate Media Partner',
  },
];

const SponsorCards2 = MediaSponsors.map(el => (
  <Flex
    minW='20rem'
    width='35%'
    direction={'column'}
    borderRadius={'1rem'}
    p='2rem 6rem'
    backdropFilter='auto'
    backdropSaturate='3'
    backdropContrast='50%'
    filter
    backdropBlur='8px'
    ml='auto'
    mr='auto'
    mt='2rem'
    mb='2rem'
    justifyContent={'space-around'}
  >
    <Image maxH='20rem' objectFit='contain' src={el.image} borderRadius='lg' />
    <Text
      color='#FFF'
      fontSize='2.2rem'
      lineHeight={'2rem'}
      mt='1rem'
      mb='0.5rem'
      style={{
        fontFamily: 'Junge',
        fontWeight: '400',
        wordWrap: 'break-word',
      }}
    >
      {el.name}
    </Text>
    <Divider />
    <Text
      color='#FFD600'
      fontSize='1.7rem'
      lineHeight={'1.5rem'}
      mt='0.5rem'
      style={{
        fontFamily: 'Junge',
        fontWeight: '400',
        wordWrap: 'break-word',
      }}
    >
      {el.title}
    </Text>
  </Flex>
));

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
        bgImage={mediabg}
        bgAttachment='fixed'
        bgRepeat='no-repeat'
        bgSize='cover'
      >
        <Text
          mt='3rem'
          mb='2rem'
          textAlign='center'
          bgGradient='linear(to-b, #FFC700,40%, #00FFF0,60% , #FFC700)'
          bgClip='text'
          fontWeight={'bold'}
          lineHeight='6rem'
          style={{
            fontSize: isSmallerThan600 ? '3.85rem' : 96,
            fontFamily: 'Junge',
            fontWeight: '400',
            wordWrap: 'break-word',
          }}
        >
          MEDIA PARTNERS
        </Text>
        <Flex w='100%' direction='row' wrap='wrap'>
          {SponsorCards2}
        </Flex>
      </Box>
    </ChakraProvider>
  );
}
