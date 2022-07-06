import React, { useEffect, useState } from "react";
import { Category } from '../Category'
import { List, Item } from './styles'

export const ListOfCategories = ()=>{
  const [categories, setCategories ] = useState([]);
  const [showFixed, setShowFixed ] = useState(false);
  useEffect(()=>{
    async function getData(){
      const response = await fetch('https://petgram-server-max-seven.vercel.app/categories');
      const data = await response.json();
      setCategories(data);
    }
    getData();
  },[]);
  useEffect(()=>{
    const onScroll = e => {
      const newShowFixed = window.scrollY>200
      console.log(window.screenY)
      showFixed !== newShowFixed &&
      setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll',onScroll)

    return ()=>{
      document.removeEventListener('scroll',onScroll)
    }
  },[showFixed]);

  const renderList = (fixed = false)=>(
    <List className={fixed?'fixed':''}>
      {
        categories.map(category=><Item key={category.id}><Category {...category} /></Item>)
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
