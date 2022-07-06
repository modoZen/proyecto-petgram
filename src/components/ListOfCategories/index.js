import React, { useEffect, useState } from "react";
import { Category } from '../Category'
import { List, Item } from './styles'

export const ListOfCategories = ()=>{
  const [categories, setCategories ] = useState([]);
  useEffect(()=>{
    async function getData(){
      const response = await fetch('https://petgram-server-max-seven.vercel.app/categories');
      const data = await response.json();
      setCategories(data);
    }
    getData();
  },[])
  return (
    <List>
      {
        categories.map(category=><Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )
}
