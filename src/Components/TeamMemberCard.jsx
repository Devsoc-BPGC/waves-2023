import React from 'react';
import { Flex, Image, Text, useMediaQuery } from '@chakra-ui/react';

export default function TeamMemberCard(props) {
  const [isSmallerThan600] = useMediaQuery('(max-width: 600px)');
  return (
    <Flex
      flexDir='column'
      style={{
        height: isSmallerThan600 ? '23rem' : '30rem',
        width: isSmallerThan600 ? '17rem' : '25rem',
      }}
      bgColor='rgba(0, 0, 0, 0.22)'
      alignItems='center'
      borderRadius='20px'
      backdropFilter='auto'
      backdropBlur='6px'
      margin='5px'
    >
      <Image
        src={props.img}
        width='55%'
        height='55%'
        objectFit='fill'
        pt='20px'
      ></Image>
      <Text
        fontFamily='Junge'
        fontSize={isSmallerThan600 ? '33' : '40'}
        p='13px'
        color='white'
      >
        {props.name}
      </Text>
      <Text
        fontFamily='Junge'
        fontSize={isSmallerThan600 ? '27' : '32'}
        p='13px'
        color='white'
      >
        {props.position}
      </Text>
    </Flex>
  );
}
