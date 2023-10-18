import React from 'react';
import { Flex, Image, Text } from '@chakra-ui/react';

export default function TeamMemberCard(props) {
  return (
    <Flex
      flexDir='column'
      style={{ height: '30rem', width: '25rem' }}
      bgColor='rgba(0, 0, 0, 0.22)'
      alignItems='center'
      borderRadius='20px'
      backdropFilter='auto'
      backdropBlur='6px'
    >
      <Image
        src={props.img}
        width='55%'
        height='55%'
        objectFit='fill'
        pt='20px'
      ></Image>
      <Text fontFamily='Junge' fontSize='40' p='13px' color='white'>
        {props.name}
      </Text>
      <Text fontFamily='Junge' fontSize='32' p='13px' color='white'>
        {props.position}
      </Text>
    </Flex>
  );
}
