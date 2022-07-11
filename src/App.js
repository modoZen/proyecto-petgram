import React from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import { Logo } from './components/Logo'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { NavBar } from './components/NavBar';
import { Favs } from './pages/Favs';
import { NotRegisteredUser } from './pages/NotRegisteredUser';
import { User } from './pages/User';
import { useSelector } from 'react-redux';
import { NotFound } from './pages/NotFound';

const App = ()=>{
  // const [isLogged, setIsLogged ] = useState(true);
  const isLogged = useSelector(state=>state.auth.isAuth)

  return (
    <>
      <GlobalStyle />
      <Logo />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail/:detailId' element={<Detail />} />
          <Route path='/pet/:id' element={<Home />} />
          <Route path='/favs' element={isLogged?<Favs />:<Navigate replace to='/login' />} ></Route>
          <Route path='/user' element={isLogged?<User />:<Navigate replace to='/login' />} ></Route>
          <Route path='/login' element={!isLogged?<NotRegisteredUser />:<Navigate replace to='/' />}></Route>
          <Route path='*' element={<NotFound />} ></Route>
        </Routes>
        <NavBar />
      </BrowserRouter>
    </>
  )
}

export { App }
