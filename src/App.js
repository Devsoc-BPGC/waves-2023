import React from 'react';
import { ChakraProvider, Box, theme, Show } from '@chakra-ui/react';
import EventsMobile from './Components/Events/EventsMobile';
import Events from './Components/Events/events';
import './App.css';
import HomePage from './Pages/HomePage';
import './App.css';
import Footer from './Components/Footer';
function App() {
  return (
    <ChakraProvider theme={theme}>
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
        <Footer />
      </Box>
    </ChakraProvider>
  );
}
export default App;
