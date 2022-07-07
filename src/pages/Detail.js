import React from "react"
import { useParams } from 'react-router-dom'
import { ListOfCategories } from '../components/ListOfCategories';
import { ListOfPhotoCards } from '../components/ListOfPhotoCards';
import { PhotoCardWithQuery } from "../components/PhotoCardWithQuery";


export const Detail = ()=>{
  const params = useParams();
  const { detailId } = params;
  return (
    <>
      <PhotoCardWithQuery id={detailId} />
    </>
  )
}
