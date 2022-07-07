import React from 'react'
import { useGetPhotWithQuery } from '../../hooks/useGetPhotoWithQuery';
import { PhotoCard } from '../PhotoCard';

export const PhotoCardWithQuery = ({ id }) => {
  console.log(id)
  const { loading, error, data } = useGetPhotWithQuery(id);

  if (error) {
    return <h2>Internal Server Error</h2>
  }
  if (loading) {
    return <h2>Loading...</h2>
  }

  const { photo = {} } = data;

  return (
    <PhotoCard {...photo} />
  )
}
