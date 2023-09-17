import { React, useEffect, useRef } from 'react';
import { Button } from '@chakra-ui/react';
import background_img from '../assets/bt_background.png';
export default function Register() {
  return (
    <div>
      <Button
        w='8rem'
        h='2rem'
        borderRadius='5vh'
        fontWeight='bolder'
        fontSize='1.3rem'
        bgImg={background_img}
        bgSize='cover'
        color='white'
      >
        Register
      </Button>
    </div>
  );
}
