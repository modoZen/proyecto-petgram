import { useState } from "react";


export const useLocalStorage = (key,initialValue)=>{
  const [storedValue, setStoredValue ] = useState(()=>{
    try {
      const like = localStorage.getItem(key);
      return like? JSON.parse(like):initialValue;
    } catch (err) {
      return false;
    }
  })

  const setLocalStorage = (value)=>{
    try {
      localStorage.setItem(key,JSON.stringify(value));
      setStoredValue(value);
    } catch (err) {
      console.error(err);
    }
  }
  return [storedValue, setLocalStorage]
}
