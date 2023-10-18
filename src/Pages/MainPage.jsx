import { React, useState, useEffect } from 'react';
import { ChakraProvider, Box, theme, Show, Fade } from '@chakra-ui/react';
import EventsMobile from '../Components/Events/EventsMobile';
import Events from '../Components/Events/events';
import HomePage from '../Pages/HomePage';
import '../App.css';
import Footer from '../Components/Footer';
import StartPage from '../Pages/StartPage';
import Carousel from './Carousel';
import MediaPage from './MediaPage';
export default function MainPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6900);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      {isLoading ? (
        <Fade in={isLoading} duration={0.2} transition='ease'>
          <StartPage />
        </Fade>
      ) : (
        <Box className='app-container' textAlign='center' fontSize='xl'>
          <div style={{ overflowX: 'hidden' }}>
            <HomePage />
          </div>
          <Show above='750px'>
            <Events />
          </Show>
          <Show below='749px'>
            <EventsMobile />
          </Show>
          <Carousel />
          <MediaPage />
          <Footer />
        </Box>
      )}
    </ChakraProvider>
  );
}
