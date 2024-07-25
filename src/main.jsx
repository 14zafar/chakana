import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ProductProvider from "./ProductContext.jsx";
import BasketProvider, { BasketContext } from "./karzinkaContext.jsx";
import { Home } from "./Home.jsx";
import LikeProvider from "./likeContex.jsx";
import AuthProvider from "./context/AuthContext.jsx";
import SearchProvider from "./context/SearchContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <SearchProvider>
      <AuthProvider>
        <ProductProvider>
          <BasketProvider>
            <LikeProvider>
              <App />
            </LikeProvider>
          </BasketProvider>
        </ProductProvider>
      </AuthProvider>
    </SearchProvider>
  </BrowserRouter>
);
