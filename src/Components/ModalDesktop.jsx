import React from 'react';
import { motion } from 'framer-motion';
import { CloseButton, Image, Show, Box } from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';
import picture from '../assets/Waves_logo2.png';
import styles from './ModalDesktop.module.css';

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

const ModalDesktop = props => {
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
          when: 'beforeChildren',
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
            backgroundColor: '#48494a',
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
          <CloseButton
            onClick={props.handleClick}
            style={{ position: 'absolute', left: '1rem', top: '1rem' }}
            size='lg'
            color='white'
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
            <motion.div style={style('#5d5e5e')} variants={circleVariant(203)}>
              <motion.div
                style={style('#797a7a')}
                variants={circleVariant(176)}
              >
                <motion.div
                  style={style('#9a9b9c')}
                  variants={circleVariant(149)}
                >
                  <motion.div
                    style={style('#b6b6b8')}
                    variants={circleVariant(122)}
                  >
                    <motion.div
                      style={style('#cfd0d1')}
                      variants={circleVariant(95)}
                    >
                      <motion.div
                        style={style('#ededed')}
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
