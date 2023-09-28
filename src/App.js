import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
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
        <Events />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}
export default App;
