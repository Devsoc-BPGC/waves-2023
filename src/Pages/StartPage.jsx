import React from 'react';
import gif from '../assets/WavesAnimGIF_DevSoc.gif';

export default function StartPage () {
    return (
        <div
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <img
          src={gif}
          alt="Animated Waves"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            width: 'auto',
            height: 'auto',
          }}
        />
      </div>
    );
};


