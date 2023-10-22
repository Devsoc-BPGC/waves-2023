import React, { useState } from 'react';
import { Flex, Image, Text, useMediaQuery } from '@chakra-ui/react';
import call from '../assets/call_icon.png';
import empty from '../assets/anon.png';

export default function TeamMemberCard(props) {
  const [isSmallerThan600] = useMediaQuery('(max-width: 600px)');
  const finalsrc = () => {
    if (props.img === '') {
      return empty;
    } else {
      return props.img;
    }
  };
  return (
    <Flex
      flexDir='column'
      bgColor='rgba(0, 0, 0, 0.22)'
      justify='center'
      alignItems='center'
      borderRadius='20px'
      backdropFilter='auto'
      backdropBlur='6px'
      width={isSmallerThan600 ? '90%' : 'auto'}
      p='10px'
      margin='5px'
    >
      <Image
        src={finalsrc()}
        width='50%'
        height='50%'
        objectFit='fill'
        pt='20px'
      ></Image>
      <Text
        fontFamily='Junge'
        fontSize={isSmallerThan600 ? '2rem' : '2rem'}
        p={isSmallerThan600 ? '5px' : '13px'}
        color='white'
      >
        {props.name}
      </Text>
      <Text
        fontFamily='Junge'
        fontSize={isSmallerThan600 ? '1.5rem' : '1.5rem'}
        p={isSmallerThan600 ? '5px' : '13px'}
        color='white'
      >
        {props.position}
      </Text>
      <Text
        fontFamily='Junge'
        fontSize={isSmallerThan600 ? '1rem' : '1rem'}
        p={isSmallerThan600 ? '5px' : '13px'}
        color='white'
      >
        {props.club}
      </Text>
      <a href={'tel: ' + props.contact}>
        <Image src={call} width='20px'></Image>
      </a>
    </Flex>
  );
}
