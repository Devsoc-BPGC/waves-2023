import { React, useState } from 'react';
import { motion } from 'framer-motion';
import { CloseButton, Image, Show, Heading } from '@chakra-ui/react';
import picture from '../assets/Waves_logo2.png';
import styles from './ModalDesktop.module.css';
import { useHref } from 'react-router-dom';
const CenterText = layer => {
  if (layer === 0) {
    return '';
  } else if (layer === 1) {
    return 'Sponsors';
  } else if (layer === 2) {
    return 'Our Team';
  } else if (layer === 3) {
    return 'Media Partners';
  } else if (layer === 4) {
    return '';
  }
};
const ModalDesktop = props => {
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
  const [CircleCol, setCircleCol] = useState('');
  const handleMouseEnter = e => {
    setCircleCol(CenterText(e));
  };
  const handleMouseLeave = e => {
    setCircleCol(CenterText(e - 1));
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
    <>
      <Show above='750px'>
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
              <a href='/sponsors'>
                <motion.div
                  style={style('transparent')}
                  variants={circleVariant3(149)}
                  onMouseEnter={() => handleMouseEnter(1)}
                  onMouseLeave={() => handleMouseLeave(1)}
                >
                  <a href='/teams'>
                    <motion.div
                      style={style({ bgColour: 'transparent', isActive: 0 })}
                      variants={circleVariant2(122)}
                      onMouseEnter={() => handleMouseEnter(2)}
                      onMouseLeave={() => handleMouseLeave(2)}
                    >
                      <a href='/media'>
                        <motion.div
                          style={style({
                            bgColour: 'transparent',
                            isActive: 0,
                          })}
                          variants={circleVariant2(95)}
                          onMouseEnter={() => handleMouseEnter(3)}
                          onMouseLeave={() => handleMouseLeave(3)}
                        >
                          <a href='/'>
                            <motion.div
                              style={style({
                                bgColour: 'transparent',
                                isActive: 0,
                              })}
                              variants={circleVariant2(68)}
                              onMouseEnter={() => handleMouseEnter(4)}
                              onMouseLeave={() => handleMouseLeave(4)}
                            >
                              {/* <motion.div
                          style={style({
                            bgColour: 'transparent',
                            isActive: 0,
                          })}
                          variants={circleVariant2(68)}
                          onMouseEnter={() => handleMouseEnter(5)}
                          onMouseLeave={() => handleMouseLeave(5)}
                        ></motion.div> */}
                            </motion.div>
                          </a>
                        </motion.div>
                      </a>
                    </motion.div>
                  </a>
                </motion.div>
              </a>
            </motion.div>
          </motion.div>
          <CloseButton
            onClick={props.handleClick}
            style={{ position: 'absolute' }}
            left='1%'
            top='1%'
            color={'white'}
            size='2xl'
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
                CircleCol === 'Sponsors'
                  ? style('rgba(217, 217, 217, 0.15)', 2, 1)
                  : style('rgba(217, 217, 217, 0.15)', 2, 0)
              }
              variants={circleVariant(149)}
              boxShadow='dark-lg'
            >
              <motion.div
                style={
                  CircleCol === 'Our Team'
                    ? style('rgba(217, 217, 217, 0.20)', 3, 1)
                    : style('rgba(217, 217, 217, 0.20)', 3, 0)
                }
                variants={circleVariant(122)}
              >
                <motion.div
                  style={
                    CircleCol === 'Media Partners'
                      ? style('rgba(217, 217, 217, 0.25)', 4, 1)
                      : style('rgba(217, 217, 217, 0.25)', 4, 0)
                  }
                  variants={circleVariant(95)}
                  boxShadow='dark-lg'
                >
                  <motion.div
                    style={
                      CircleCol === ''
                        ? style('rgba(217, 217, 217, 0.60)', 6, 1)
                        : style('rgba(217, 217, 217, 0.60)', 6, 0)
                    }
                    variants={circleVariant(68)}
                  >
                    <Heading
                      size='3xl'
                      color='black'
                      fontFamily='"Dalek", cursive'
                    >
                      {CircleCol}
                    </Heading>
                    {CircleCol === '' ? <Image src={picture} /> : null}
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </Show>
      <Show below='749px'>
        <div id='overlay' className={styles['overlay']}>
          <CloseButton
            onClick={props.handleClick}
            style={{ position: 'block', left: '1rem', top: '1rem' }}
            size='lg'
            color='white'
          />
          <div>Implement for mobile</div>
        </div>
      </Show>
    </>
  );
};

export default ModalDesktop;
