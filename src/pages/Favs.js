import React from "react"
import { ListOfFavs } from "../components/ListOfFavs"
import { useGetFavPhotos } from "../hooks/useGetFavPhotos";

export const Favs = ()=>{
  const { loading, data, error } = useGetFavPhotos();
  if(loading) return <p>Loading...</p>
  if(error)   return <p>Error...</p>
  const {favs} = data;
  return (
    <>
      <ListOfFavs favs={favs} />
    </>
  )
}
