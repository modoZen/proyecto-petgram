import React from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { Button, LikeIcon } from "./styles"

export const FavButton = ({onClick, likes, liked}) =>{

  const Icon = liked?LikeIcon:MdFavoriteBorder;

  return (
    <Button onClick={onClick}>
      <Icon size='32px' /> {likes} likes!
    </Button>
  )
}
