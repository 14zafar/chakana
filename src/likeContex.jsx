import { createContext, useEffect } from "react";
import { useState } from "react";

export const LikeContext = createContext();

const LikeProvider = ({ children }) => {

  let storage = JSON.parse(localStorage.getItem('liked'))
  
  const [like, setLike] = useState(storage || []);

  const getLikedData = (data) => {
    const isExist = like.some((item) => item.id === data.id);
    if (!isExist) {
      setLike([...like, data]);
    }
  };
  const onDel = (id) => {
    const del = like.filter((value) => value.id !== id);
    setLike(del);
  };

  useEffect(()=>{
   localStorage.setItem('liked',JSON.stringify(like))
  },[like])

  return (
    <LikeContext.Provider value={{ getLikedData, onDel, like }}>
      {children}
    </LikeContext.Provider>
  );
};
export default LikeProvider;
