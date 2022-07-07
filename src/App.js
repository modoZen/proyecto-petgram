import React, { useState } from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import { Logo } from './components/Logo'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { NavBar } from './components/NavBar';
import { Favs } from './pages/Favs';
import { NotRegisteredUser } from './pages/NotRegisteredUser';
import { User } from './pages/User';

const App = ()=>{
  const [isLogged, setIsLogged ] = useState(true);

  return (
    <>
      <GlobalStyle />
      <Logo />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail/:detailId' element={<Detail />} />
          <Route path='/pet/:id' element={<Home />} />
          <Route path='/favs' element={isLogged?<Favs />:<NotRegisteredUser />} ></Route>
          <Route path='/user' element={isLogged?<User />:<NotRegisteredUser />} ></Route>
        </Routes>
        <NavBar />
      </BrowserRouter>
    </>
  )
}

export { App }
