import { useEffect, useState } from "react";

export function useCategoriesData() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading ] = useState(false);
  useEffect(()=>{
    async function getData(){
      setLoading(true);
      const response  = await fetch('https://petgram-server-max-seven.vercel.app/categories');
      const data      = await response.json();
      setCategories(data);
      setLoading(false);
    }
    getData();
  },[])
  return { categories, loading }
}
