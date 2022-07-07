import React from "react";
import { MdHome, MdFavoriteBorder, MdPersonOutline } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { Link, Nav } from "./styles";

const SIZE = '32px';

export const NavBar = () =>{
  const { pathname } = useLocation();
  console.info(pathname)
  return (
    <Nav>
      <Link to="/" className={pathname==='/'?'selected':''} ><MdHome size={SIZE} /></Link>
      <Link to="/favs" className={pathname==='/favs'?'selected':''}  ><MdFavoriteBorder size={SIZE} /></Link>
      <Link to="/user" className={pathname==='/user'?'selected':''}  ><MdPersonOutline size={SIZE} /></Link>
    </Nav>
  )
}
