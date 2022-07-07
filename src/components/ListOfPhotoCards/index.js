import React from "react";
import { useGetPhotos } from "../../hooks/useGetPhotos";
import { PhotoCard } from "../PhotoCard";

export const ListOfPhotoCards = ({categoryId})=>{
  const { loading, error, data } = useGetPhotos(categoryId);
  if (error) {
    return <h2>Internal Server Error</h2>;
  }
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul >
      {data.photos.map(photo=><PhotoCard key={photo.id} {...photo} />)}
    </ul  >
  )
}
