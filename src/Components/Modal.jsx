import React from 'react';
import { motion } from 'framer-motion';
import { CloseButton, Image } from '@chakra-ui/react';
import picture from '../assets/Waves_logo2.png';

const Modal = props => {
  const style = bgColour => {
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
    };
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
            variants={circleVariant3(203)}
          >
            <motion.div
              style={style('transparent')}
              variants={circleVariant2(176)}
            >
              <motion.div
                style={style('transparent')}
                variants={circleVariant2(149)}
              >
                <motion.div
                  style={style('transparent')}
                  variants={circleVariant2(122)}
                >
                  <motion.div
                    style={style('transparent')}
                    variants={circleVariant2(95)}
                  >
                    <motion.div
                      style={style('transparent')}
                      variants={circleVariant2(68)}
                    ></motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      <CloseButton
        onClick={props.handleClick}
        style={{ position: 'absolute' }}
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
          style={style('rgba(217, 217, 217, 0.10)')}
          variants={circleVariant(203)}
        >
          <motion.div
            style={style('rgba(217, 217, 217, 0.15)')}
            variants={circleVariant(176)}
          >
            <motion.div
              style={style('rgba(217, 217, 217, 0.20)')}
              variants={circleVariant(149)}
            >
              <motion.div
                style={style('rgba(217, 217, 217, 0.25)')}
                variants={circleVariant(122)}
              >
                <motion.div
                  style={style('rgba(217, 217, 217, 0.30)')}
                  variants={circleVariant(95)}
                >
                  <motion.div
                    style={style('rgba(217, 217, 217, 0.60)')}
                    variants={circleVariant(68)}
                  >
                    <Image src={picture} />
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
