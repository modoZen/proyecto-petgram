import React from 'react';
import { Link, CategoryImage, CategoryTitle, ContainerCategorySkeleton, Image } from './styles';
const DEAFULT_IMAGE = 'https://imgur.com/dJa0Hpl.jpg';

export const CategorySkeleton = props => {
  return (
      <ContainerCategorySkeleton>
          <CategoryImage light={props.light} />
          <CategoryTitle light={props.light} />
      </ContainerCategorySkeleton>
  )
}

const Category = ({ cover = DEAFULT_IMAGE, path, emoji = '!'})=>{
  return (
    <Link to={path} >
      <Image src={cover} />
      Slava URSS
      {emoji}
    </Link>
  );
}

export { Category }
