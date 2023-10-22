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
import Register from '../Components/Register';
import bubble1 from '../assets/image 4.png';
import evilmask from '../assets/maskcropped.png';
import horsebadge from '../assets/horsdebadge.png';
import underwater from '../assets/underwatersponsors.png';
import mediabg from '../assets/bg_media_spons.gif';

import spskin from '../assets/spons/skinstory.webp';
import spvast from '../assets/spons/vastradi.png';
import sppeta from '../assets/spons/petaindia.svg';
import spreasemt from '../assets/spons/easemytrip.png';
import spknots from '../assets/spons/knotsbyamp.png';
import spsamaro from '../assets/spons/samaro.webp';
import sptooyumm from '../assets/spons/tooyumm.png';
import spkiaya from '../assets/spons/kiaya.webp';
import spsbi from '../assets/spons/sbi.jpg';
import spmogu from '../assets/spons/mogu.png';
import spvicco from '../assets/spons/vicco.jpg';
import spoatey from '../assets/spons/oatly.png';
import spgatsby from '../assets/spons/gatsby.png';
import spicici from '../assets/spons/icici.png';
import sprenaissance from '../assets/spons/renaissance.png';
import spsumo from '../assets/spons/sumo.png';
import spmay from '../assets/spons/maysixty.webp';
import spnestle from '../assets/spons/nestle.png';
import spclovia from '../assets/spons/clovia.png';
import spcorn from '../assets/spons/cornitos.webp';
import spfablabs from '../assets/spons/fablabs.png';

const MediaSponsors = [
  {
    key: 1,
    image: spskin,
    name: 'Skin Story',
    title: 'Festival Partner',
  },
  {
    key: 2,
    image: spvast,
    name: 'Vastrado',
    title: 'Festival Partner',
  },
  {
    key: 3,
    image: sppeta,
    name: 'PETA India',
    title: 'Official Animal Welfare Partner',
  },
  {
    key: 4,
    image: spreasemt,
    name: 'EaseMyTrip',
    title: 'Travel Partner',
  },
  {
    key: 5,
    image: spknots,
    name: 'KnotsByAMP',
    title: 'Official Photography Partner',
  },
  {
    key: 6,
    image: spsamaro,
    name: 'Samaro',
    title: 'Festival Partner',
  },
  {
    key: 7,
    image: sptooyumm,
    name: 'Too Yumm',
    title: 'Smacking Partner',
  },
  {
    key: 8,
    image: spkiaya,
    name: 'Kiaya',
    title: 'Official Anime Partner',
  },
  {
    key: 9,
    image: spsbi,
    name: 'SBI',
    title: 'Official Banking Partner',
  },
  {
    key: 10,
    image: spmogu,
    name: 'Mogu Mogu',
    title: 'Official Juice Partner',
  },
  {
    key: 11,
    image: spvicco,
    name: 'Vicco',
    title: 'Official Ayurveda Partner',
  },
  {
    key: 12,
    image: spoatey,
    name: 'Oatly',
    title: 'Official Sustainable Healthy Plant Based Milk Partner',
  },
  {
    key: 13,
    image: spgatsby,
    name: 'Gatsby',
    title: "Official Men's Grooming Partner of Searock",
  },
  {
    key: 14,
    image: spicici,
    name: 'ICICI',
    title: 'Festival Partner',
  },
  {
    key: 15,
    image: spsumo,
    name: 'Sumo Biscuit',
    title: 'Official Biscuit Partner',
  },
  {
    key: 16,
    image: sprenaissance,
    name: 'Renaissance',
    title: 'Festival Partner',
  },
  {
    key: 17,
    image: spmay,
    name: 'Maysixty',
    title: 'Title Sponsorship of the Bollywood Night',
  },
  {
    key: 18,
    image: spnestle,
    name: 'Nestle',
    title: 'Official Frappe Partner',
  },
  {
    key: 19,
    image: spclovia,
    name: 'Clovia',
    title: 'Official Clothing Partner',
  },
  {
    key: 20,
    image: spcorn,
    name: 'Cornitos',
    title: 'Gift Sponsor',
  },
  {
    key: 21,
    image: spfablabs,
    name: 'Fablabs',
    title: 'Waves Comedy Night Powered By Fablabs',
  },
];

const SponsorCards2 = MediaSponsors.map(el => (
  <Flex
    minW='20rem'
    width='27%'
    direction={'column'}
    borderRadius={'1rem'}
    p='2rem 4rem'
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
    <Flex flexDirection='column' height='11rem' justifyContent='space-around'>
      <Image maxH='8rem' objectFit='contain' src={el.image} borderRadius='lg' />
      <Text
        color='#FFF'
        fontSize='1.7rem'
        lineHeight={'2rem'}
        mb='0.5rem'
        mt='0.5rem'
        textAlign='center'
        style={{
          fontFamily: 'Junge',
          fontWeight: '400',
          wordWrap: 'break-word',
        }}
      >
        {el.name}
      </Text>
    </Flex>
    <Divider />
    <Text
      color='#FFD600'
      fontSize='1rem'
      lineHeight={'1.5rem'}
      mt='0.5rem'
      textAlign='center'
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
          SPONSORS
        </Text>
        <Flex w='100%' direction='row' wrap='wrap'>
          {SponsorCards2}
        </Flex>
      </Box>
    </ChakraProvider>
  );
}
