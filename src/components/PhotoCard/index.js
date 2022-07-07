import React, { useEffect, useRef, useState } from "react";
import { Article, ImgWrapper, Img, Button, LikeIcon } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useNearScreen } from "../../hooks/useNearScreen";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE}) =>{
  const [show, ref] = useNearScreen();
  const key = `key-${id}`;
  const [liked, setLiked ] = useLocalStorage(key,false);
  const Icon = liked?LikeIcon:MdFavoriteBorder;

  return (
    <Article ref={ref}>
      {show && (
        <>
          <a href={`/?detail=${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <Button onClick={()=>{setLiked(!liked)}}>
            <Icon size='32px' /> {likes} likes!
          </Button>
        </>
      )}
    </Article>
  )
}
