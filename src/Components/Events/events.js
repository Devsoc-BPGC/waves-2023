import React, {useState} from "react";
import {
    ChakraProvider,
    Box,
    theme,
    Image,
} from '@chakra-ui/react';
import bgimage from './bgimage.png';  
import jellyfish from './jellyfish.svg'
import horsewheel from './horsewheel.svg'
import spartanhelmet from './spartanhelmet.svg'
import swords from './sword.svg'
import box from './box.svg'
import seaweed from './seaweed.svg'

function Events() {
    const zoomInOnHover = {
        transform: "scale(1)",
        transition: "transform 0.5s",
    };

    const zoomOutOnHover = {
        transform: "scale(1.5)",
        transition: "transform 0.5s",
        top: "8%",
    };

    const [jellyfishStyle, setJellyfishStyle] = useState(zoomInOnHover);
    return (
        <ChakraProvider theme={theme}>
            <Box position="relative">
                <Image
                    src={bgimage}
                    alt="Background Image"
                    width="100vw"
                    height="100vh"
                    objectFit="cover"
                />
                <Image
                    src={jellyfish}
                    alt="Jellyfish"
                    position="absolute"
                    top="5%"
                    right="5%"
                    width="314px"     
                    height="221px"
                    zIndex="1"
                    style={jellyfishStyle}
                    onMouseEnter={() => {
                        setJellyfishStyle(zoomOutOnHover);
                    }}
                    onMouseLeave={() => {
                        setJellyfishStyle(zoomInOnHover);
                    }}
                />
                <Image
                    src={horsewheel}
                    alt="Horsewheel"
                    position="absolute"
                    top="2%"        
                    left="5%"
                    width="135.40px"     
                    height="117.10px"
                    zIndex="1"
                />
                <Image
                    src={spartanhelmet}
                    alt="Spartan"
                    position="absolute"
                    bottom="2%"     
                    right="5%"
                    width="251.582px"    
                    height="280.858px"
                    zIndex="1"
                />
                <Image
                    src={swords}
                    alt="Swords"
                    position="absolute"
                    bottom="15%"                       
                    left="15%"
                    width="141.403px"      
                    height="213.193px"
                    zIndex="1"
                />
                <Image
                    src={box}
                    alt="Box"
                    position="absolute"
                    bottom="3%"     
                    left="30%"
                    width="235px"     
                    height="200px"
                    zIndex="1"
                />
                <Image
                   src={seaweed}
                   alt="Seaweed"
                   position="absolute"
                   bottom="3.5%"
                   left="48.5%"
                   width="300px"
                   height="162px"
                   zIndex="1" 
                />
            </Box> 
        </ChakraProvider>
    );
}

export default Events;

