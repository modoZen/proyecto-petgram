import React from 'react';
import { Anchor, Image } from './styles';
const DEAFULT_IMAGE = 'https://imgur.com/dJa0Hpl.jpg';

const Category = ({ cover = DEAFULT_IMAGE, path, emoji = '!'})=>{
  return (
    <Anchor href={path} >
      <Image src={cover} />
      Slava URSS
      {emoji}
    </Anchor>
  );
}

export { Category }
