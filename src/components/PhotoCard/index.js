import React from "react";
import { useNearScreen } from "../../hooks/useNearScreen";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { FavButton } from "../FavButton";
import { useMuationToogleLike } from "../../hooks/useMuationToogleLike";
import { Link } from "react-router-dom";
import { Article, ImgWrapper, Img } from './styles'
import PropTypes from 'prop-types'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE, liked:likedServer}) =>{
  const [show, ref] = useNearScreen();
  const key = `key-${id}`;
  const [liked, setLiked ] = useLocalStorage(key,likedServer);
  const { mutation, mutationLoading, mutationError } = useMuationToogleLike();
  const handleFavClick = () =>{
    mutation({
      variables:{
        input:{id}
      }
    }).then(({data})=>{
      const { likePhoto : { liked } } = data;
      setLiked(liked);
    })
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

PhotoCard.propTypes = {
  id:     PropTypes.string.isRequired,
  liked:  PropTypes.bool.isRequired,
  src:    PropTypes.string.isRequired,
  likes:  function(props, propName, componentName){
    const propValue = props[propName]
    if(propValue === undefined){
      return new Error(`${propName} value must be defined`)
    }
    if(propValue<0){
      return new Error(`${propName} value must be greater than 0`)
    }
  }
}
