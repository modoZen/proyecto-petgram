import React from "react";
import { useNearScreen } from "../../hooks/useNearScreen";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { FavButton } from "../FavButton";
import { useMuationToogleLike } from "../../hooks/useMuationToogleLike";
import { Link } from "react-router-dom";
import { Article, ImgWrapper, Img } from './styles'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE}) =>{
  const [show, ref] = useNearScreen();
  const key = `key-${id}`;
  const [liked, setLiked ] = useLocalStorage(key,false);
  const { mutation, mutationLoading, mutationError } = useMuationToogleLike();
  const handleFavClick = () =>{
    !liked && mutation({
      variables:{
        input:{id}
      }
    })
    setLiked(!liked)
  }
  return (
    <Article ref={ref}>
      {show && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <FavButton likes={likes} onClick={handleFavClick} liked={liked}/>
        </>
      )}
    </Article>
  )
}
