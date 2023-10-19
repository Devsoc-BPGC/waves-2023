import React, { useState } from 'react';
import { ChakraProvider, Flex, useMediaQuery } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import scrollimg from './scroll.png';
import scrollLeft from './scrollLeft.png';
import scrollRight from './scrollRight.png';
import teer from './teer.png';
import Fonts from '../Fonts';
import theme from '../theme';
import './scroll.css';

const Scroll = props => {
  const [index, setIndex] = useState(0);
  const [isSmallerThan530] = useMediaQuery('(max-width: 530px)');
  const clickHandler = () => {
    props.setShowScroll(!props.showScroll);
    setIndex(0);
  };
  return (
    <ChakraProvider theme={theme}>
      <AnimatePresence>
        <Fonts />
        {props.showScroll && (
          <Flex
            width='100%'
            minH='100vh'
            position='fixed'
            zIndex='2'
            top='0'
            left='0%'
            bgColor='rgba(0,0,0,0.5)'
            justify='center'
            alignItems='center'
            className='scrollFont'
            fontSize='5xl'
          >
            <Flex
              width='100%'
              minH='100vh'
              position='absolute'
              top='0'
              left='0%'
              justify='center'
              alignItems='center'
              onClick={clickHandler}
            ></Flex>
            <motion.div
              style={{
                zIndex: '3',
                position: 'absolute',
                backgroundImage: `url(${scrollLeft})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center left',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transitionDuration: '0.5s',
              }}
              initial={{ height: '69vh', width: '0vh' }}
              animate={{ height: '69vh', width: '99vh' }}
              exit={{
                height: '69vh',
                width: '0vh',
                transitionDuration: '0.8s',
              }}
            ></motion.div>
            <motion.div
              style={{
                zIndex: '4',
                backgroundImage: `url(${scrollimg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transitionDuration: '0.8s',
              }}
              initial={{ height: '69vh', width: '0vh' }}
              animate={{ height: '69vh', width: '99vh' }}
              exit={{
                height: '69vh',
                width: '0vh',
                transitionDuration: '0.5s',
              }}
            >
              <Flex
                flexDir='column'
                justify='start'
                align='center'
                width={isSmallerThan530 ? '85%' : '60%'}
                height='70%'
              >
                <Flex width='100%' height='20%'>
                  <Flex
                    style={{
                      width: '95%',
                      justifyContent: 'space-evenly',
                      alignItems: 'center',
                      flexDirection: 'column',
                    }}
                  >
                    <h1>{props.scrollHead}</h1>
                  </Flex>
                  <Flex onClick={clickHandler} cursor='pointer'>
                    &times;
                  </Flex>
                </Flex>
                <Flex width='100%' height='80%' justify='center' align='center'>
                  <Flex
                    width='35%'
                    height='100%'
                    flexDir='column'
                    justify='start'
                    align='center'
                    overflowX='hidden'
                    overflowY='scroll'
                  >
                    {props.eventsList.map((e, ind) => {
                      return (
                        <Flex
                          key={ind}
                          justify='center'
                          align='center'
                          flexDir='column'
                        >
                          <Flex
                            width='100%'
                            fontSize='2xl'
                            px='5'
                            cursor='pointer'
                            onClick={() => {
                              setIndex(ind);
                            }}
                          >
                            {e.name}
                          </Flex>
                          <img width='100%' src={teer} alt='arrow'></img>
                        </Flex>
                      );
                    })}
                  </Flex>
                  <Flex height='100%' width='65%' flexDir='column'>
                    <Flex
                      fontSize={isSmallerThan530 ? '2.25rem' : '2.5rem'}
                      height='20%'
                      width='100%'
                    >
                      {props.eventsList[index].name}
                    </Flex>
                    <Flex
                      height='80%'
                      width='100%'
                      fontSize='1.5rem'
                      overflowX='hidden'
                      overflowY='scroll'
                      justify='start'
                    >
                      {props.eventsList[index].desc}
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </motion.div>
            <motion.div
              style={{
                zIndex: '3',
                position: 'absolute',
                backgroundImage: `url(${scrollRight})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center right',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transitionDuration: '0.5s',
              }}
              initial={{ height: '69vh', width: '0vh' }}
              animate={{ height: '69vh', width: '99vh' }}
              exit={{
                height: '69vh',
                width: '0vh',
                transitionDuration: '0.8s',
              }}
            ></motion.div>
          </Flex>
        )}
      </AnimatePresence>
    </ChakraProvider>
  );
};

export default Scroll;
