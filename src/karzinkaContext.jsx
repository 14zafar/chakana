import { createContext, useEffect } from "react";
import { useState } from "react";

export const BasketContext = createContext();

const BasketProvider = ({ children }) => {

  let storage = JSON.parse(localStorage.getItem('products'))
  
  const [basket, setBasket] = useState(storage || []);

  const getBasketData = (data) => {
    const isExist = basket.some((item) => item.id === data.id);
    if (!isExist) {
      setBasket([...basket, data]);
    }
  };
  const onDelete = (id) => {
    const del = basket.filter((value) => value.id !== id);
    setBasket(del);
  };

  useEffect(()=>{
   localStorage.setItem('products',JSON.stringify(basket))
  },[basket])

  return (
    <BasketContext.Provider value={{ getBasketData, onDelete, basket }}>
      {children}
    </BasketContext.Provider>
  );
};
export default BasketProvider;
