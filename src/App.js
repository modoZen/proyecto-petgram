import React from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './components/PhotoCardWithQuery';
import { Home } from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = ()=>{
  const urlParams = new URLSearchParams(location.search);
  const detailId = urlParams.get('detail');
  return (
    <>
      <GlobalStyle />
      <Logo />
      {
        detailId?
        <PhotoCardWithQuery id={detailId} />:
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pet/:id' element={<Home />} />
          </Routes>
        </BrowserRouter>

      }
    </>
  )
}

export { App }
