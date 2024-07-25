import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [state, setState] = useState([]);
  const [data, setData] = useState("");

  const getIndex = async () => {
    try {
      const response = await axios.get(
        "https://72af288291cb91cd.mokky.dev/phones"
      );
      setState(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getData = (data) => {
    setData(data);
  };

  useEffect(() => {
    getIndex();
  }, [data]);

  return (
    <SearchContext.Provider value={{ getData, data, state }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
