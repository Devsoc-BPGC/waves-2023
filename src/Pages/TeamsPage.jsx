import {
  ChakraProvider,
  Flex,
  theme,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import React from 'react';
import teamsbg from '../assets/our_teams_bg.png';
import { Grid, GridItem, Box } from '@chakra-ui/react';
import TeamMemberCard from '../Components/TeamMemberCard';
import team_mem_1 from '../assets/team_member.png';
import RotateButton from '../Components/RotateButton';
export default function TeamsPage() {
  const [isSmallerThan600] = useMediaQuery('(max-width: 600px)');
  return (
    <ChakraProvider theme={theme}>
      <Box bgSize='cover' bgRepeat='no-repeat' bgImg={teamsbg}>
        <a href='/'>
          <RotateButton />
        </a>
        <Text
          height='5rem'
          fontFamily='Junge'
          fontSize='64'
          color='white'
          textAlign='center'
        >
          OUR TEAM
        </Text>
        <Flex
          textAlign='center'
          fontSize='xl'
          h='100vh'
          justify='space-between'
          flexDir='column'
          alignItems='center'
          style={{ overflowY: 'scroll', height: '100vh' }}
        >
          <Grid
            templateColumns='repeat(1, 1fr)'
            placeItems='center'
            justifyItems='center'
            gap={6}
            h='100%'
            m='10%'
          >
            <TeamMemberCard
              img={team_mem_1}
              name='Rajat'
              position='QUARK DESIGN TEAM HEAD'
            />
          </Grid>
          <Grid
            templateColumns={
              isSmallerThan600 ? 'repeat(1, 1fr)' : 'repeat(2, 1fr)'
            }
            w='100%'
            placeItems='center'
            justifyItems='center'
            gap={6}
          >
            <TeamMemberCard
              img={team_mem_1}
              name='Rajat'
              position='QUARK DESIGN TEAM HEAD'
            />
            <TeamMemberCard
              img={team_mem_1}
              name='Rajat'
              position='QUARK DESIGN TEAM HEAD'
            />
            <TeamMemberCard
              img={team_mem_1}
              name='Rajat'
              position='QUARK DESIGN TEAM HEAD'
            />
            <TeamMemberCard
              img={team_mem_1}
              name='Rajat'
              position='QUARK DESIGN TEAM HEAD'
            />
          </Grid>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}
