import React from 'react';
import MainPage from './Pages/MainPage';
import { Route, Routes } from 'react-router-dom';
import TeamsPage from './Pages/TeamsPage';
import MediaPage from './Pages/MediaPage';
import Carousel from './Pages/Carousel';
import Sponsors from './Pages/Sponsors';
function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}></Route>
      <Route path='/teams' element={<TeamsPage />}></Route>
      <Route path='/media' element={<MediaPage />}></Route>
      <Route path='/sponsors' element={<Sponsors />}></Route>
    </Routes>
  );
}
export default App;
