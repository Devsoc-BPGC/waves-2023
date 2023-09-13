import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
} from '@chakra-ui/react';
import Footer from './Components/Footer';
import Events from './Components/Events/events';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Events />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
