import { useState,useEffect } from "react";
const getSavedValue = (key, initialValue) => {
  const lsgData = JSON.parse(localStorage.getItem(key));
  if (lsgData) return lsgData;
  if (initialValue instanceof Function) return initialValue();
  return initialValue;
};
const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => getSavedValue(key, initialValue));
  useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
    }, [value]);
    return [value, setValue];
};
export default useLocalStorage