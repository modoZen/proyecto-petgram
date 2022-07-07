import React, { useEffect, useState } from "react";
import { Category, CategorySkeleton } from '../Category'
import { List, Item } from './styles'
import { useCategoriesData } from '../../hooks/useCategoriesData'

export const ListOfCategories = ()=>{
  const { categories, loading } = useCategoriesData();
  const [ showFixed, setShowFixed ] = useState(false);
  useEffect(()=>{
    const onScroll = e => {
      const newShowFixed = window.scrollY>200
      showFixed !== newShowFixed &&
      setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll',onScroll)

    return ()=>{
      document.removeEventListener('scroll',onScroll)
    }
  },[showFixed]);

  const renderList = (fixed)=>(
    <List className={fixed?'fixed':''}>
      {
      loading?
      [1,2,3,,4,5,6].map(category=><Item key={category}><CategorySkeleton /></Item>):
      categories.map(category=><Item key={category.id}><Category {...category} path={`/pet/${category.id}`} /></Item>)
      }
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
