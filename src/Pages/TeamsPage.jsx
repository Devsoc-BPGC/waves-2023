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
        photo:
          'https://media.licdn.com/dms/image/D4D03AQGsRX4iX1_B8g/profile-displayphoto-shrink_800_800/0/1685010770469?e=1703721600&v=beta&t=JIMTjQhVvfNu5_jXq8dxGFGYx7FF9LSBd8cmu-BkTO8',
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
        photo:
          'https://media.licdn.com/dms/image/D5603AQHcfjpM09NvbQ/profile-displayphoto-shrink_800_800/0/1675535324452?e=1703721600&v=beta&t=jD8cAbDfnylPPOU8aTfUkjIoxBSzM1CZc30akbB6siI',
        name: 'Rajdeep Singh',
        position: 'Waves Convener',
        club: ' ',
        contact: '9877382007',
      },
    ],
    [
      {
        photo:
          'https://media.licdn.com/dms/image/C4D03AQGgFS-WBo8TfQ/profile-displayphoto-shrink_800_800/0/1646298318902?e=1703721600&v=beta&t=lALJKWJqCZz4WsMLSiSL8x6o3DCsZeqGS_cB8ve7pc4',
        name: 'Lagan Saran',
        position: 'Treasurer',
        club: 'Council of Student Affairs',
        contact: '9910880595',
      },
      {
        photo:
          'https://media.licdn.com/dms/image/C5603AQGOCXk3GzFBFw/profile-displayphoto-shrink_800_800/0/1663740802114?e=1703721600&v=beta&t=E1GjeGc3sZE-ewbW61UChe375A5pc_mHKDB5sJtqOFU',
        name: 'Siddharth Porwal',
        position: 'Sports Secretary',
        club: 'Council of Student Affairs',
        contact: '9374511114',
      },
      {
        photo:
          'https://media.licdn.com/dms/image/D4E03AQGtLDZ3MdHglg/profile-displayphoto-shrink_800_800/0/1674348097534?e=1703721600&v=beta&t=NtBv2LJBB11E340poX-IbMfN1JioDGSVjUS1bQV_lb4',
        name: 'Abhyuday Singh',
        position: 'General Secretary',
        club: 'Council of Student Affairs',
        contact: '7007829779',
      },
    ],
    [
      {
        photo:
          'https://media.licdn.com/dms/image/C5603AQHzLcNiZCNPfw/profile-displayphoto-shrink_800_800/0/1659513923210?e=1703721600&v=beta&t=wQWijH6FUr17FK8ieBJGM4Vz8qNStwXAofbyPmBd0uU',
        name: 'Parth Keswani',
        position: 'Chief Coordinator',
        club: 'Waves Controls',
        contact: '6294238547',
      },
      {
        photo:
          'https://media.licdn.com/dms/image/D4D03AQGnDj_EpDuWaQ/profile-displayphoto-shrink_800_800/0/1696716572808?e=1703721600&v=beta&t=Mv63aSwJsBgasfzY43NIEhm8KHjjkaFZ1UmVR8GvExM',
        name: 'Vybhav Badrinarayan',
        position: 'Events Head',
        club: 'Waves Controls',
        contact: '9769331485',
      },
      {
        photo:
          'https://media.licdn.com/dms/image/C4D03AQFIj_f0uOmWYg/profile-displayphoto-shrink_800_800/0/1663663198812?e=1703721600&v=beta&t=BqyTNVisHKDH00w09fDzDzJD-HtCA9RcEPdz4nzw6Yo',
        name: 'Arya Jain',
        position: 'Operations Head',
        club: 'Waves Controls',
        contact: '6377843149',
      },
    ],
    [
      {
        photo:
          'https://media.licdn.com/dms/image/D5603AQH1UV6lzbTYmw/profile-displayphoto-shrink_800_800/0/1694456084261?e=1703721600&v=beta&t=O2hp8VdfF0816_CNl0aM9EpF8UXvIEumXbkQAY2J808',
        name: 'Sanyam Jain',
        position: 'Chief Coordinator',
        club: 'Department of Finance and Asset Management',
        contact: '6376565989',
      },
      {
        photo:
          'https://media.licdn.com/dms/image/D4D03AQGmcR-63n-8kA/profile-displayphoto-shrink_800_800/0/1666416645032?e=1703721600&v=beta&t=KoRfK7mWpO8cYHTGDAaDpwc0S8v7Qwaw8TWcVqLGnPQ',
        name: 'Nikhil Menon',
        position: 'Waves Finance Head',
        club: 'Department of Finance and Asset Management',
        contact: '9920981527',
      },
    ],
    [
      {
        photo:
          'https://media.licdn.com/dms/image/D4D03AQHL3ZWBWZUN-w/profile-displayphoto-shrink_800_800/0/1685097097853?e=1703721600&v=beta&t=DBOWb8j2bw67rKln_LtzzMqUZaj8fI9NCDjRicrY-5o',
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
        photo:
          'https://media.licdn.com/dms/image/D5603AQHO_MysnWFHvQ/profile-displayphoto-shrink_800_800/0/1678202238640?e=1703721600&v=beta&t=JK9LcTNHIXEoTIotliynwzu_xdf3gYEnk9MorkY8nLo',
        name: 'Chahak',
        position: 'Publicity Head',
        club: 'Department of Publicity and Public Relations',
        contact: '9829487780',
      },
    ],
    [
      {
        photo:
          'https://media.licdn.com/dms/image/C5603AQEXriLEE1ksFQ/profile-displayphoto-shrink_800_800/0/1640109809148?e=1703721600&v=beta&t=xtdSi1E-cTOlU0CV1OtwzsESCV0IgdqqMKqfdj0uyrM',
        name: 'Tejas Saraogi',
        position: 'Chief Coordinator',
        club: 'Department of Sponsorship and Marketing',
        contact: '9674458843',
      },
      {
        photo:
          'https://media.licdn.com/dms/image/D4D03AQH8jJF49wrhaw/profile-displayphoto-shrink_800_800/0/1685014659151?e=1703721600&v=beta&t=mQI0Nrt6t-a8djLMN8t9TSMvgPalIyWdZ6K2s9JW8ps',
        name: 'Ishani Chalke',
        position: 'Waves Coordinator',
        club: 'Department of Sponsorship and Marketing',
        contact: '8779213016',
      },
      {
        photo:
          'https://media.licdn.com/dms/image/D4D03AQG0aBeLn_d4DA/profile-displayphoto-shrink_800_800/0/1688991158905?e=1703721600&v=beta&t=A8J9UB00PVCDutwdWcZ13mxpTRCYZIMC0_cWyaiCwj8',
        name: 'Rachit Agarwal',
        position: 'Marketing Head',
        club: 'Department of Sponsorship and Marketing',
        contact: '9904406661',
      },
    ],
    [
      {
        photo:
          'https://media.licdn.com/dms/image/D4D03AQE378-SO2qXgw/profile-displayphoto-shrink_800_800/0/1687187740176?e=1703721600&v=beta&t=OmDQcwPzIxK8z0O5dO694wNmExlFM4arMMd-_iTXOq4',
        name: 'Preet Shah',
        position: 'Chief Coordinator',
        club: 'Department of Media and Coverage',
        contact: '9978489171',
      },
      {
        photo:
          'https://media.licdn.com/dms/image/C5603AQEQVE0iFienww/profile-displayphoto-shrink_800_800/0/1660578543966?e=1703721600&v=beta&t=DOa_FDBu-tYzl7D1sxaI2SAcNefsI4VT8Kr-giqRvuA',
        name: 'Rounak Sanpui',
        position: 'Waves Coordinator',
        club: 'Department of Media and Coverage',
        contact: '9441411313',
      },
    ],
    [
      {
        photo:
          'https://media.licdn.com/dms/image/C4E03AQGljx_oj0h_yg/profile-displayphoto-shrink_800_800/0/1645116928246?e=1703721600&v=beta&t=Ztn79sLgvKnoVF7UX5MuSm87jp_X2SgAzDc4X6o-snc',
        name: 'Shiven Saigal',
        position: 'Chief Coordinator',
        club: 'Department of Professional Nights',
        contact: '9871927434',
      },
      {
        photo:
          'https://media.licdn.com/dms/image/D4D03AQEiB51j6dq43Q/profile-displayphoto-shrink_800_800/0/1688911656057?e=1703721600&v=beta&t=E8sXRx6umTsFqz4Rxx3ZfwvirQqq335Am7rWFWM_xeQ',
        name: 'Yuvraj Kohli',
        position: 'Nights Head',
        club: 'Department of Professional Nights',
        contact: '8879728235',
      },
      {
        photo:
          'https://media.licdn.com/dms/image/D4D03AQF1f2uwDNdc7g/profile-displayphoto-shrink_800_800/0/1685681228615?e=1703721600&v=beta&t=j5qRcQ2Mky5otA3JFHS53vitVkCVnlI3KICgnwEzcmk',
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
        photo:
          'https://media.licdn.com/dms/image/D4D03AQGTrovSRtvWBA/profile-displayphoto-shrink_800_800/0/1669113494745?e=1703721600&v=beta&t=JglEw4eeLT9beCZnSYDSzXZpUQ0W5ankr00_BdEUNeg',
        name: 'Ayush Purbey',
        position: 'Waves Coordinator',
        club: 'Department of Backstage and Infrastructure Management',
        contact: '7992336041',
      },
      {
        photo:
          'https://media.licdn.com/dms/image/C4E03AQFEWiKxmLVDnA/profile-displayphoto-shrink_800_800/0/1657355907681?e=1703721600&v=beta&t=55X2yn3_Ec6HgUucEKCuSzXH1W6TSsZuOCTNkmXuyoA',
        name: 'Trisha Hitesh',
        position: 'Backstage Coordinator',
        club: 'Department of Backstage and Infrastructure Management',
        contact: '8422996938',
      },
    ],
    [
      {
        photo:
          'https://media.licdn.com/dms/image/D4D03AQEiZOAEL7TcUw/profile-displayphoto-shrink_800_800/0/1688250908342?e=1703721600&v=beta&t=A1isn2L20nPiedQJsHe7i4NtyJGeFOY6T6TSXtPU2Rk',
        name: 'Garvit Chittora',
        position: 'Chief Coordinator',
        club: 'Department of Photography',
        contact: '7073735177',
      },
      {
        photo:
          'https://media.licdn.com/dms/image/D4D03AQEwFfPe7tZy_A/profile-displayphoto-shrink_800_800/0/1694366521406?e=1703721600&v=beta&t=jj4Mc5IZD5mxk74hz5qIh5Q3nISbCBzQH0etKtr0S08',
        name: 'Ujjwal Jajoo',
        position: 'Waves Coordinator',
        club: 'Department of Photography',
        contact: '6289938162',
      },
    ],
    [
      {
        photo:
          'https://media.licdn.com/dms/image/C5603AQHAmYy96TJweA/profile-displayphoto-shrink_800_800/0/1657611621937?e=1703721600&v=beta&t=4W2wN6IEiG_Aa-AXXgnsWtc4By6f7sKOqD7P1xUZRsY',
        name: 'Manish Parla',
        position: 'Chief Coordinator',
        club: 'Department of Creative Works',
        contact: '9901985353',
      },
      {
        photo:
          'https://media.licdn.com/dms/image/D5603AQFgFJ4gjOdT5Q/profile-displayphoto-shrink_800_800/0/1688756392979?e=1703721600&v=beta&t=u70kx7CtFP0DAf5gVF3_OsQgMfjEHyUm4wgQn4g-LZg',
        name: 'Nikhil Kudva',
        position: 'Waves Coordinator',
        club: 'Department of Creative Works',
        contact: '8138888949',
      },
      {
        photo:
          'https://media.licdn.com/dms/image/C4D03AQEfAUZQvHczCg/profile-displayphoto-shrink_800_800/0/1658047705903?e=1703721600&v=beta&t=jSCy2qrPz-tcdn_z2-sm8Iu2rvzaAynhceg3V4T49uw',
        name: 'Viraj Bhojane',
        position: 'Head of Operations',
        club: 'Department of Creative Works',
        contact: '9604335795',
      },
      {
        photo:
          'https://media.licdn.com/dms/image/D4D03AQFI-X9lbOu2wA/profile-displayphoto-shrink_800_800/0/1677008756040?e=1703721600&v=beta&t=ewxd97c7TqMSR2ExVBkpqJjI7xlqb4wWKoYSa9QqClM',
        name: 'Aahan Nawab',
        position: 'Special Events Coordinator',
        club: 'Department of Creative Works',
        contact: '9893048311',
      },
    ],
    [
      {
        photo:
          'https://media.licdn.com/dms/image/C4D03AQGq3FRE9STkxA/profile-displayphoto-shrink_800_800/0/1656918679704?e=1703721600&v=beta&t=nNLpnOt-EakYyPhPaICeAXvIU0g2rk0JanYGAbwRY7M',
        name: 'Aditya Raj',
        position: 'Chief Coordinator',
        club: 'Arts n Decoration Department',
        contact: '7366862205',
      },
      {
        photo:
          'https://media.licdn.com/dms/image/C5603AQH9mt3y4z-xGQ/profile-displayphoto-shrink_800_800/0/1644223100062?e=1703721600&v=beta&t=KkuHs0hE_Hwkvu1AEkXvREpDoT6TZEsdbQL90OX4xbg',
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
        photo:
          'https://media.licdn.com/dms/image/D5603AQEPMipf0u8j_Q/profile-displayphoto-shrink_800_800/0/1685512843867?e=1703721600&v=beta&t=sRjHWksgs2gBJeFsRvcLK-mzIpqjwyVC74uszn8eEVQ',
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
                          img={f.photo}
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
