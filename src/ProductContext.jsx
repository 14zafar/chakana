import { createContext, useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export const ProductContext = createContext([]);

const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);

  let allData = async () => {
    try {
      let defender = await axios.get("https://72af288291cb91cd.mokky.dev/phones");
      setProduct(defender.data);
    } catch (error) {
      console.log(error);
    }
  };

  const onDelete = (id) => {
    const del = item.filter((value) => value.id !== id);  
    setProduct(del);
  };

  useEffect(() => {
    allData();
  }, []);

  return (
    <ProductContext.Provider value={[product, onDelete]}>
      {children}
    </ProductContext.Provider>
  );
};
export default ProductProvider;
