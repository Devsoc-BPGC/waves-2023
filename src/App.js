import React from 'react';
import MainPage from './Pages/MainPage';
import { Route, Routes } from 'react-router-dom';
import TeamsPage from './Pages/TeamsPage';
function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}></Route>
      <Route path='/teams' element={<TeamsPage />}></Route>
    </Routes>
  );
}
export default App;
