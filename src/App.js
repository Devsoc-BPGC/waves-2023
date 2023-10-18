import React from 'react';
import MainPage from './Pages/MainPage';
import { Route, Routes } from 'react-router-dom';
import TeamsPage from './Pages/TeamsPage';
import MediaPage from './Pages/MediaPage';
import Carousel from './Pages/Carousel';
function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}></Route>
      <Route path='/teams' element={<TeamsPage />}></Route>
    </Routes>
  );
}
export default App;
