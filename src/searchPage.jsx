import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BasketContext } from "./karzinkaContext";
import { LikeContext } from "./likeContex";
import { SearchContext } from "./context/SearchContext";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { TbBasketPlus } from "react-icons/tb";
import { TbAlignBoxLeftStretch } from "react-icons/tb";
import "./responsive/HomeCards.scss"


const SearchPage = () => {
  const { getLikedData } = useContext(LikeContext);
  const { getBasketData } = useContext(BasketContext);
  const { data, state } = useContext(SearchContext);

  return (
    <div className="grid grid-cols-6 gap-3 max-w-[1400px] mx-auto pt-[90px]" id="telefonlar">
      {state.map((product) => {
        const value = product.name;
        const capitalizeUp = data.charAt(0).toUpperCase() + data.slice(1);
        const capitalizeDown = data.charAt(0).toLowerCase() + data.slice(1);
        const capitalizeUp2 = data.charAt(1).toUpperCase() + data.slice(2);
        const capitalizeDown2 = data.charAt(1).toLowerCase() + data.slice(2);
        if (
          value.includes(capitalizeUp) ||
          value.includes(capitalizeDown) ||
          value.includes(capitalizeUp2) ||
          value.includes(capitalizeDown2)
        ) {
          return (
            <div
              key={product.id}
              className="relative text-center  p-[10px] rounded-2xl border-gray-300 border-[1px] hover:border-red-500 transition-all"
            >
              <button
                id="likeq"
                className="absolute top-[10px] bg-white right-[10px] border-gray-200 border-[1px] p-[6px] rounded-lg hover:border-red-500 transition-all"
                onClick={() => getLikedData(product)}
              >
                <MdOutlineFavoriteBorder />
              </button>
              <button
                id="like"
                className="bg-white absolute rotate-[-90deg] top-[50px] right-[10px] translate-[260deg] border-gray-200 border-[1px] p-[6px] rounded-lg hover:border-red-500 transition-all"
                onClick={() => getLikedData(product)}
              >
                <TbAlignBoxLeftStretch />
              </button>
              <Link to={`/Card/${product.id}`}>
                <img className="p-[10px]" src={product.img} alt={product.name} />
                <h1 className="text-[15px] text-left">{product.name}</h1>
                <div className="flex gap-[2px] w-[70px] mt-[5px]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <h2 className="text-[16px] text-left mt-[5px]">{`${product.price} so'm`}</h2>
                <h1 className=" bg-red-200 text-red-700 rounded-lg mt-[5px]">
                  {"oyiga " + parseInt(product.price / 12) + " so`mdan"}
                </h1>
                <hr className="mt-[20px]" />
              </Link>
              <div className=" flex items-center justify-between">
                <div>1 ta Taklif</div>
                <div>
                  <button
                    onClick={() => getBasketData(product)}
                    className="p-2 tetx-[30px] transition-all hover:scale-110"
                  >
                    <TbBasketPlus className="text-[25px]"/>
                  </button>
                  {/* Uncomment if implementing like functionality */}
                  {/* <button onClick={() => toggleLike(item.id)} className="p-2 w-[100px] m-[10px] rounded-2xl">
                    {likedItems.includes(item.id) ? <FcLike /> : <MdFavoriteBorder />}
                  </button> */}
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default SearchPage;
