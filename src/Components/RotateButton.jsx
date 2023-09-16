import React from 'react';
import {
  Box,
  Image,
  keyframes,
  usePrefersReducedMotion,
} from '@chakra-ui/react';
import bt_circle from '../assets/bt_circle.png';
export const RotateButton = props => {
  const spin = keyframes`
                            from { transform: rotate(0deg); }
                            to { transform: rotate(360deg); }`;
  const prefersReducedMotion = usePrefersReducedMotion();
  const animation = prefersReducedMotion
    ? undefined
    : `${spin} infinite 20s linear`;
  return (
    <div>
      <Box as='button' boxSize='2.5rem'>
        <Image src={bt_circle} alt='WavesCircle' animation={animation} />
      </Box>
    </div>
  );
};

export default RotateButton;
