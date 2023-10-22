import { React, useState } from 'react';
import { motion } from 'framer-motion';
import { CloseButton, Image, Flex } from '@chakra-ui/react';
import picture from '../assets/Waves_logo2.png';
import { Text, useMediaQuery } from '@chakra-ui/react';
import aryan from '../assets/aryan.png';
import bera from '../assets/bera.png';
import uishubh from '../assets/shubh.png';
import bharai from '../assets/ruchik.png';
import adikool from '../assets/adikul.png';
const sayantan = {
  img: bera,
  name: 'Sayantan Bera',
  position: 'Chief Coordinator',
  club: `Developers' Society of BITS Goa`,
};
const bhosale = {
  img: aryan,
  name: 'Aryan Bhosale',
  position: 'Web Development Head',
  club: `Developers' Society of BITS Goa`,
};
const ruchik = {
  img: bharai,
  name: 'Ruchik Bharai',
  position: 'Sub-Coordinator',
  club: `Developers' Society of BITS Goa`,
};
const shubh = {
  img: uishubh,
  name: 'Shubh Agarwal',
  position: 'UI/UX Head',
  club: `Developers' Society of BITS Goa`,
};
const adikul = {
  img: adikool,
  name: 'Aditya Kulkarni',
  position: 'App Development Head',
  club: `Developers' Society of BITS Goa`,
};
const empty = {};
const Content = layer => {
  if (layer === 0) {
    return sayantan;
  } else if (layer === 1) {
    return bhosale;
  } else if (layer === 2) {
    return ruchik;
  } else if (layer === 3) {
    return shubh;
  } else if (layer === 4) {
    return adikul;
  }
};

const ModalDevSocMobile = props => {
  const [isSmallerThan600] = useMediaQuery('(max-width: 600px)');
  const style = (bgColour, zI, isActive) => {
    var radius = '0px 0px 0px 0px red';
    if (isActive === 1) {
      radius = '1px 1px 30px 4px black';
    }
    return {
      backgroundColor: bgColour,
      height: 0,
      width: 0,
      borderRadius: '50%',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: zI,
      boxShadow: radius,
      cursor: 'pointer',
    };
  };
  const [currentContent, setCurrentContent] = useState(sayantan);
  const handleClick = e => {
    setCurrentContent(Content(e));
  };
  const handleMouseEnter = e => {
    setCurrentContent(Content(e));
  };
  const handleMouseLeave = e => {
    setCurrentContent(Content(e - 1));
  };
  const variants = {
    open: {
      height: '200vh',
      width: '100%',
      borderRadius: [
        '50% 0 50% 50%',
        '40% 0 40% 40%',
        '30% 0 30% 30%',
        '20% 0 20% 20%',
        '10% 0 10% 10%',
        '5% 0 5% 5%',
        '2% 0 2% 2%',
        '0 0 100% 100%',
      ],
      transition: { duration: 0.5, ease: 'easeOut', delayChildren: 0.5 },
    },
    close: {
      height: '0px',
      width: '0px',
      borderRadius: [
        '0 0 0 0',
        '2% 0 2% 2%',
        '5% 0 5% 5%',
        '20% 0 20% 20%',
        '30% 0 30% 30%',
        '10% 0 10% 10%',
        '40% 0 40% 40%',
      ],
      transition: { duration: 0.5, ease: 'easeOut', when: 'afterChildren' },
    },
  };

  const circleVariant = r => {
    return {
      open: {
        height: `${r}vh`,
        width: `${r}vh`,
        transition: {
          duration: 0.5,
          delayChildren: 0.2,
        },
      },
      close: {
        height: 0,
        width: 0,
        transition: { duration: 0.2, when: 'afterChildren' },
      },
    };
  };

  const circleVariant2 = r => {
    return {
      open: {
        height: `${r}vh`,
        width: `${r}vh`,
        outline: '2px dotted #FFF',
        transition: {
          duration: 0.5,
          delayChildren: 0.2,
        },
      },
      close: {
        height: 0,
        width: 0,
        transition: { duration: 0.2, when: 'afterChildren' },
      },
    };
  };

  const circleVariant3 = r => {
    return {
      open: {
        height: `${r}vh`,
        width: `${r}vh`,
        outline: '2px dotted #FFF',
        transition: {
          delay: 1.3,
          duration: 0.5,
          delayChildren: 1.2,
        },
      },
      close: {
        height: 0,
        width: 0,
        transition: { duration: 0.2, when: 'afterChildren' },
      },
    };
  };

  return (
    <Flex
      overflow='hidden'
      position='absolute'
      top='0px'
      left='0px'
      width='100%'
      maxH='100vh'
      minH='100vh'
    >
      <motion.div
        animate='open'
        style={{
          backgroundColor: 'rgba(137, 137, 137, 0.04)',
          position: 'absolute',
          height: 0,
          width: 0,
          top: 0,
          right: 0,
          zIndex: 2,
          borderRadius: '0 50% 50% 50%',
          opacity: '95%',
          overflow: 'hidden',
        }}
        variants={variants}
        exit='close'
      >
        <motion.div
          style={{
            zIndex: 3,
            position: 'absolute',
            top: '0px',
            left: '3%',
            height: '100%',
            width: '94%',
            backgroundColor: 'transparent',
          }}
        >
          <motion.div
            style={{
              marginTop: '-50vh',
              display: 'flex',
              alignContent: 'center',
              flexDirection: 'column',
              flexWrap: 'wrap',
              justifyContent: 'center',
              height: '200vh',
            }}
          >
            <motion.div
              style={style('transparent')}
              variants={circleVariant3(100)}
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={() => handleMouseLeave(1)}
              onClick={e => {
                handleClick(1);
                e.stopPropagation();
              }}
            >
              <motion.div
                style={style({ bgColour: 'transparent', isActive: 0 })}
                variants={circleVariant2(85)}
                onMouseEnter={() => handleMouseEnter(2)}
                onMouseLeave={() => handleMouseLeave(2)}
                onClick={e => {
                  handleClick(2);
                  e.stopPropagation();
                }}
              >
                <motion.div
                  style={style({
                    bgColour: 'transparent',
                    isActive: 0,
                  })}
                  variants={circleVariant2(70)}
                  onMouseEnter={() => handleMouseEnter(3)}
                  onMouseLeave={() => handleMouseLeave(3)}
                  onClick={e => {
                    handleClick(3);
                    e.stopPropagation();
                  }}
                >
                  <motion.div
                    style={style({
                      bgColour: 'transparent',
                      isActive: 0,
                    })}
                    variants={circleVariant2(50)}
                    onMouseEnter={() => handleMouseEnter(4)}
                    onMouseLeave={() => handleMouseLeave(4)}
                    onClick={e => {
                      handleClick(4);
                      e.stopPropagation();
                    }}
                  ></motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        <CloseButton
          onClick={props.handleClick}
          style={{ position: 'absolute' }}
          left='1%'
          top='1%'
          color={'black'}
          size='2xl'
          zIndex='22'
        />
        <motion.div
          style={{
            marginTop: '-50vh',
            display: 'flex',
            alignContent: 'center',
            flexDirection: 'column',
            flexWrap: 'wrap',
            justifyContent: 'center',
            height: '200vh',
          }}
        >
          <motion.div
            style={
              currentContent === bhosale
                ? style('rgba(217, 217, 217, 0.25)', 2, 1)
                : style('rgba(217, 217, 217, 0.25)', 2, 0)
            }
            variants={circleVariant(100)}
            boxShadow='dark-lg'
          >
            <motion.div
              style={
                currentContent === ruchik
                  ? style('rgba(217, 217, 217, 0.50)', 3, 1)
                  : style('rgba(217, 217, 217, 0.50)', 3, 0)
              }
              variants={circleVariant(85)}
            >
              <motion.div
                style={
                  currentContent === shubh
                    ? style('rgba(217, 217, 217, 0.75)', 4, 1)
                    : style('rgba(217, 217, 217, 0.75)', 4, 0)
                }
                variants={circleVariant(70)}
                boxShadow='dark-lg'
              >
                <motion.div
                  style={
                    currentContent === adikul
                      ? style('rgba(217, 217, 217, 1)', 6, 1)
                      : style('rgba(217, 217, 217, 1)', 6, 0)
                  }
                  variants={circleVariant(50)}
                >
                  <Image
                    src={currentContent.img}
                    width='50%'
                    height='50%'
                    pt='10px'
                    borderRadius='50%'
                  ></Image>
                  <Text
                    fontFamily='Junge'
                    fontSize={isSmallerThan600 ? '2rem' : '2rem'}
                    p='5px'
                    color='black'
                  >
                    {currentContent.name}
                  </Text>
                  <Text
                    fontFamily='Junge'
                    fontSize={isSmallerThan600 ? '1.5rem' : '1.5rem'}
                    p='10px'
                    color='black'
                  >
                    {currentContent.position}
                  </Text>
                  <Text
                    fontFamily='Junge'
                    fontSize={isSmallerThan600 ? '1rem' : '1rem'}
                    p='10px'
                    color='black'
                  >
                    {currentContent.club}
                  </Text>
                  {currentContent === empty ? <Image src={picture} /> : null}
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </Flex>
  );
};

export default ModalDevSocMobile;
