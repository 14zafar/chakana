import { useConst } from "@chakra-ui/react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BasketContext } from "./karzinkaContext";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { LikeContext } from "./likeContex";
import "./responsive/dynamic.scss"

export let Dynamig = () => {
  const { getBasketData } = useContext(BasketContext);
  const {getLikedData} = useContext(LikeContext)

  let params = useParams();
  let [data, setData] = useState(null);
  let exit = useNavigate();

  useEffect(() => {
    const response = async () => {
      try {
        let res = await axios.get(
          `https://72af288291cb91cd.mokky.dev/phones/${params.id}`
        );
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    response();
  }, [params.id]);
  // console.log(data);
  return (
    <div className="flex items-center justify-center pt-[90px] w-full">
      {data ? (
        <div className="flex w-full justify-between text-center" id="lala">
          <div className="flex">
            <img src={data.img} alt={data.name} className="h-[400px]" />
          </div>
          <div>
            <h1 className="text-2xl">{data.name}</h1>
            <p className="mt-[20px]">
              sotuvchi: Raximberganov zafar
            </p>
            <img
              src={data.img}
              alt=""
              className="border-red-500 border rounded-md w-[100px] mt-[20px] mb-[20px]"
            />
            <h5 className="mt-[20px] text-[20px]">Briefly about the product</h5>
            <div className="flex w-[300px] justify-between">
              <p className="text-xl">color</p>
              <p className="text-gray-600">{data.rangi}</p>
            </div>
            <hr />
            <div className="flex w-[300px] justify-between">
              <p className="text-xl">type</p>
              <p className="text-gray-600">{data.tur}</p>
            </div>
            <hr />
            <div className="flex w-[300px] justify-between">
              <p className="text-xl">body type</p>
              <p className="text-gray-600">{data.korpus}</p>
            </div>
            <hr />
            <div className="flex w-[300px] justify-between">
              <p className="text-xl">SIM-card type</p>
              <p className="text-gray-600">{data.sim}</p>
            </div>
            <hr />
            <div className="flex w-[300px] justify-between">
              <p className="text-xl">body material</p>
              <p className="text-gray-600">{data.material}</p>
            </div>
          </div>
          <div className="border border-l-red-600 p-5 border-t-transparent border-r-transparent border-b-transparent relative mt-[15px]">
            <div className="mt-[20px]">
              <MdOutlineFavoriteBorder className="text-3xl absolute right-[20px] top-[10px]" onClick={()=>getLikedData(data)}/>
              <p className="">Product price:</p>
              <h4 className="text-2xl font-semibold ">
                {data.price.toLocaleString() + " som"}
              </h4>
              <p>24 oylik kredit narxi:</p>
              <h4 className="text-xl bg-red-200 text-red-700 rounded-lg mt-[5px]">
                {parseInt(data.price / 24).toLocaleString() + " so`mdan"}
              </h4>
              <button
                onClick={() => getBasketData(data)}
                className="bg-red-500 text-white px-7 py-3 mt-[20px] rounded-md"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
