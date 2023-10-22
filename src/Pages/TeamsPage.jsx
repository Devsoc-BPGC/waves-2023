import {
  ChakraProvider,
  Flex,
  theme,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import teamsbg from '../assets/our_teams_bg.png';
import { Grid, GridItem, Box } from '@chakra-ui/react';
import TeamMemberCard from '../Components/TeamMemberCard';
import RotateButton from '../Components/RotateButton';
import ModalDevSocMobile from '../Components/ModalDevSocMobile';
import ModalDevSocDesktop from '../Components/ModalDevSocDesktop';
export default function TeamsPage() {
  const [isSmallerThan600] = useMediaQuery('(max-width: 600px)');

  const teamMembers = [
    [
      {
        photo: '',
        name: 'Kanishk',
        position: 'President',
        club: 'Council of Student Affairs',
        contact: '9829487780',
      },
      {
        photo: '',
        name: 'Shorya Pratap Singh',
        position: 'Vice President',
        club: 'Council of Student Affairs',
        contact: '8102105306',
      },
      {
        photo: '',
        name: 'Rajdeep Singh',
        position: 'Waves Convener',
        club: ' ',
        contact: '9877382007',
      },
    ],
    [
      {
        photo: '',
        name: 'Lagan Saran',
        position: 'Treasurer',
        club: 'Council of Student Affairs',
        contact: '9910880595',
      },
      {
        photo: '',
        name: 'Siddharth Porwal',
        position: 'Sports Secretary',
        club: 'Council of Student Affairs',
        contact: '9374511114',
      },
      {
        photo: '',
        name: 'Abhyuday Singh',
        position: 'General Secretary',
        club: 'Council of Student Affairs',
        contact: '7007829779',
      },
    ],
    [
      {
        photo: '',
        name: 'Parth Keswani',
        position: 'Chief Coordinator',
        club: 'Waves Controls',
        contact: '6294238547',
      },
      {
        photo: '',
        name: 'Vybhav Badrinarayan',
        position: 'Events Head',
        club: 'Waves Controls',
        contact: '9769331485',
      },
      {
        photo: '',
        name: 'Arya Jain',
        position: 'Operations Head',
        club: 'Waves Controls',
        contact: '6377843149',
      },
    ],
    [
      {
        photo: '',
        name: 'Sanyam Jain',
        position: 'Chief Coordinator',
        club: 'Department of Finance and Asset Management',
        contact: '6376565989',
      },
      {
        photo: '',
        name: 'Nikhil Menon',
        position: 'Waves Finance Head',
        club: 'Department of Finance and Asset Management',
        contact: '9920981527',
      },
    ],
    [
      {
        photo: '',
        name: 'Pranshul Garg',
        position: 'Chief Coordinator',
        club: 'Department of Publicity and Public Relations',
        contact: '9829487780',
      },
      {
        photo: '',
        name: 'Rishabh Jain',
        position: 'Waves Coordinatior',
        club: 'Department of Publicity and Public Relations',
        contact: '9829487780',
      },
      {
        photo: '',
        name: 'Chahak',
        position: 'Publicity Head',
        club: 'Department of Publicity and Public Relations',
        contact: '9829487780',
      },
    ],
    [
      {
        photo: '',
        name: 'Tejas Saraogi',
        position: 'Chief Coordinator',
        club: 'Department of Sponsorship and Marketing',
        contact: '9674458843',
      },
      {
        photo: '',
        name: 'Ishani Chalke',
        position: 'Waves Coordinator',
        club: 'Department of Sponsorship and Marketing',
        contact: '8779213016',
      },
      {
        photo: '',
        name: 'Rachit Agarwal',
        position: 'Marketing Head',
        club: 'Department of Sponsorship and Marketing',
        contact: '9904406661',
      },
    ],
    [
      {
        photo: '',
        name: 'Preet Shah',
        position: 'Chief Coordinator',
        club: 'Department of Media and Coverage',
        contact: '9978489171',
      },
      {
        photo: '',
        name: 'Rounak Sanpui',
        position: 'Waves Coordinator',
        club: 'Department of Media and Coverage',
        contact: '9441411313',
      },
    ],
    [
      {
        photo: '',
        name: 'Shiven Saigal',
        position: 'Chief Coordinator',
        club: 'Department of Professional Nights',
        contact: '9871927434',
      },
      {
        photo: '',
        name: 'Yuvraj Kohli',
        position: 'Nights Head',
        club: 'Department of Professional Nights',
        contact: '8879728235',
      },
      {
        photo: '',
        name: 'Lakshin Nagpal',
        position: 'Searock Head',
        club: 'Department of Professional Nights',
        contact: '7977944702',
      },
    ],
    [
      {
        photo: '',
        name: 'Sudarshan Nabira',
        position: 'Chief Coordinator',
        club: 'Department of Backstage and Infrastructure Management',
        contact: '9421039393',
      },
      {
        photo: '',
        name: 'Ayush Purbey',
        position: 'Waves Coordinator',
        club: 'Department of Backstage and Infrastructure Management',
        contact: '7992336041',
      },
      {
        photo: '',
        name: 'Trisha Hitesh',
        position: 'Backstage Coordinator',
        club: 'Department of Backstage and Infrastructure Management',
        contact: '8422996938',
      },
    ],
    [
      {
        photo: '',
        name: 'Garvit Chittora',
        position: 'Chief Coordinator',
        club: 'Department of Photography',
        contact: '7073735177',
      },
      {
        photo: '',
        name: 'Ujjwal Jajoo',
        position: 'Waves Coordinator',
        club: 'Department of Photography',
        contact: '6289938162',
      },
    ],
    [
      {
        photo: '',
        name: 'Manish Parla',
        position: 'Chief Coordinator',
        club: 'Department of Creative Works',
        contact: '9901985353',
      },
      {
        photo: '',
        name: 'Nikhil Kudva',
        position: 'Waves Coordinator',
        club: 'Department of Creative Works',
        contact: '8138888949',
      },
      {
        photo: '',
        name: 'Viraj Bhojane',
        position: 'Head of Operations',
        club: 'Department of Creative Works',
        contact: '9604335795',
      },
      {
        photo: '',
        name: 'Aahan Nawab',
        position: 'Special Events Coordinator',
        club: 'Department of Creative Works',
        contact: '9893048311',
      },
    ],
    [
      {
        photo: '',
        name: 'Aditya Raj',
        position: 'Chief Coordinator',
        club: 'Arts n Decoration Department',
        contact: '7366862205',
      },
      {
        photo: '',
        name: 'Siddhesh Mandhana',
        position: 'Waves Coordinator',
        club: 'Arts n Decoration Department',
        contact: '7021690277',
      },
      {
        photo: '',
        name: 'Karthik Chinta',
        position: 'Special Events Coordinator',
        club: 'Arts n Decoration Department',
        contact: '9731123478',
      },
    ],
    [
      {
        photo: '',
        name: 'Avinash Reddy',
        position: 'Chief Coordinator',
        club: 'Department of Surveillance and Registration',
        contact: '7386209259',
      },
      {
        photo: '',
        name: 'Hardav Raval',
        position: 'Fest Coordinator',
        club: 'Department of Surveillance and Registration',
        contact: '7600131404',
      },
      {
        photo: '',
        name: 'Sriraj Janmanchi',
        position: 'Surveillance and Technical Head',
        club: 'Department of Surveillance and Registration',
        contact: '7386209259',
      },
    ],
  ];
  const [modalOpen, setModalOpen] = useState(false);
  const handleClick = () => setModalOpen(!modalOpen);
  return (
    <ChakraProvider
      theme={theme}
      style={{ minHeight: '100vh', maxHeight: '100vh' }}
    >
      <AnimatePresence
        style={{
          position: 'absolute',
          top: '0px',
          left: '0px',
          minH: '100vh',
          maxH: '100vh',
        }}
      >
        {modalOpen && !isSmallerThan600 && (
          <ModalDevSocDesktop handleClick={handleClick} />
        )}
        {modalOpen && isSmallerThan600 && (
          <ModalDevSocMobile handleClick={handleClick} />
        )}
      </AnimatePresence>
      <Flex position='absolute' top='10px' right='10px'>
        <RotateButton onClick={handleClick} />
      </Flex>
      <Box
        bgSize='cover'
        overflow='hidden'
        minH='100vh'
        maxH='100vh'
        bgRepeat='no-repeat'
        bgImg={teamsbg}
      >
        <a style={{ position: 'absolute', top: '0px', left: '0px' }} href='/'>
          <RotateButton />
        </a>
        <Text
          height='5rem'
          fontFamily='Junge'
          fontSize={isSmallerThan600 ? '2.5rem' : '64'}
          color='white'
          textAlign='center'
        >
          OUR TEAM
        </Text>
        <Flex
          textAlign='center'
          fontSize='xl'
          maxH='100vh'
          minH='100vh'
          justify='start'
          flexDir='column'
          alignItems='center'
          overflow='scroll'
          width='100%'
        >
          <Flex flexDir={'column'} justify='center' align='center' width='100%'>
            {teamMembers.map((e, ind) => {
              return (
                <Flex
                  width='95%'
                  flexDir={isSmallerThan600 ? 'column' : 'row'}
                  justify='center'
                  alignItems={isSmallerThan600 ? 'center' : 'start'}
                >
                  {e.map((f, ind2) => {
                    return (
                      <Flex
                        width={isSmallerThan600 ? '80%' : '100%'}
                        justify='center'
                        alignItems='center'
                      >
                        <TeamMemberCard
                          img=''
                          name={f.name}
                          position={f.position}
                          club={f.club}
                          contact={f.contact}
                        />
                      </Flex>
                    );
                  })}
                </Flex>
              );
            })}
          </Flex>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}
