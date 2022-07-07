import React from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import { Logo } from './components/Logo'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { NavBar } from './components/NavBar';

const App = ()=>{
  return (
    <>
      <GlobalStyle />
      <Logo />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail/:detailId' element={<Detail />} />
          <Route path='/pet/:id' element={<Home />} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </>
  )
}

export { App }
