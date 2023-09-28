import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import Events from './Pages/events';
import './App.css';
import HomePage from './Pages/HomePage';
import './App.css';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box className='app-container' textAlign='center' fontSize='xl'>
        <div style={{ overflowX: 'hidden' }}>
          <HomePage />
        </div>
        <Events />
      </Box>
    </ChakraProvider>
  );
}
export default App;
