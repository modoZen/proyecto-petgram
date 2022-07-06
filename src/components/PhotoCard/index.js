import React, { useEffect, useRef, useState } from "react";
import { Article, ImgWrapper, Img, Button, LikeIcon } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE}) =>{
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  const key = `key-${id}`
  const [liked, setLiked ] = useState(()=>{
    try {
      const like = localStorage.getItem(key);
      return JSON.parse(like);
    } catch (err) {
      return false;
    }
  })

  useEffect(()=>{
    const observer = new IntersectionObserver(entries=>{
      const { isIntersecting } = entries[0];
      console.log(isIntersecting)
      if(isIntersecting){
        setShow(isIntersecting);
        observer.disconnect();
      }
    });
    observer.observe(ref.current)
  },[ref]);

  const Icon = liked?LikeIcon:MdFavoriteBorder;
  
  const setLocalStorage = (value)=>{
    try {
      localStorage.setItem(key,JSON.stringify(value));
      setLiked(value);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <Article ref={ref}>
      {show && (
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <Button onClick={()=>{setLocalStorage(!liked)}}>
            <Icon size='32px' /> {likes} likes!
          </Button>
        </>
      )}
    </Article>
  )
}
