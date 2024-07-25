import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { FaRegUser } from "react-icons/fa";
import { TbGitCompare } from "react-icons/tb";
import { SlBasketLoaded } from "react-icons/sl";
import Search from "./Search";
import Katalog from "./katalog";
import { BasketContext } from "./karzinkaContext";
import { LikeContext } from "./likeContex";
import "./header.scss";
import "./responsive/headerr.scss"

const Header = () => {
  const { basket } = useContext(BasketContext);
  const { like } = useContext(LikeContext);
  const [state, setState] = useState(false);
 

  const onState = () => {
    setState(!state);
  };

  return (
    <div className="max-w-[1400px] m-auto ">
      <header className="flex items-center gap-[27px] p-5 px-[35px] bg-white w-full py-[40px] ">
        <Link to="/" id="s1">
          <img
            src="https://www.gazeta.uz/media/img/2022/09/kLwV5A16629763473184_b.jpg"
            alt=""
            className="max-w-[250px]"
          />
        </Link>

        {state ? <Katalog /> : ""}

        <Link to="/kirish" id="s2">
          <button className="skoring">The score</button>
        </Link>

        <div className="flex gap-2" id="s3">
          <Search />
        </div>

        <Link to="/compare" id="s4">
          <button className="flex gap-1 items-center">
            <TbGitCompare className="text-[24px]" />
            Comparison
          </button>
        </Link>

        <Link to="/like" className="relative" id="s4">
          <button className="flex gap-1 items-center">
            <img
              src="https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-63-512.png"
              alt=""
              className="w-[24px]"
            />
            Favorites
          </button>
          <div className="flex justify-center items-center text-center w-[25px] h-[25px] bg-red-600 text-white rounded-full absolute top-[-10px] right-[-15px]">
            {like.length}
          </div>
        </Link>

        <Link to="/karzinka" className="relative" id="s5">
          <button className="flex gap-1 items-center">
            <SlBasketLoaded className="text-[24px]" />
            Basket
          </button>
          <div className="flex justify-center items-center text-center w-[25px] h-[25px] rounded-full bg-red-600 text-white  absolute top-[-10px] right-[-15px]">
            {basket.length}
          </div>
        </Link>

        <button id="s6" onClick={onState}>Catalog</button>
      </header>
      
    </div>
  );
};

export { Header };