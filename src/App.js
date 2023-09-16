import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import Footer from './Components/Footer';
import RotateButton from './Components/RotateButton';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign='center' fontSize='xl'>
        <RotateButton />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
