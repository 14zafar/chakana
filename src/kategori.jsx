// import { Link } from "react-scroll"

// import { Link } from "react-router-dom"
import { Link } from "react-scroll";
import "./responsive/kategori.scss"

const Kategori = () => {
  return (
    <div className="kategori">
      <div className="grid grid-cols-6 gap-[10px]">
        <Link
          to="telefonlar"
          spy={true}
          smooth={true}
          offset={-90}
          duration={250}
          className="flex flex-col bg-red-500 p-[20px] rounded-md"
        >
          <img
            src="https://assets.chakana.uz/category/image/655353550f8e45.13594145.png"
            alt=""
            className="hover:scale-110 transition-all"
          />
          <h1 className="text-center font-bold text-white mt-[10px]">
          Phone and gadgets
          </h1>
          <div className="m-auto mt-[20px]">
            <button className="text-white border-[1px] border-white w-20">
            See
            </button>
          </div>
        </Link>
        <Link
          to="telvizorlar"
          spy={true}
          smooth={true}
          offset={-90}
          duration={250}
          className="flex flex-col bg-[rgb(234,234,232)] p-[20px] rounded-md"
        >
          <img
            src="https://assets.chakana.uz/category/image/6553545fab1f56.07895893.png"
            alt=""
            className="hover:scale-110 transition-all"
          />
          <h1 className="text-center font-bold text-[rgb(112,112,112)] mt-[10px]">
            Tv
          </h1>
          <div className="m-auto mt-[20px]">
            <button className="text-[rgb(112,112,112)] border-[1px] border-[rgb(112,112,112)] w-20">
              See
            </button>
          </div>
        </Link>
        <Link
          to="klimat"
          spy={true}
          smooth={true}
          offset={-90}
          duration={250}
          className="flex flex-col bg-[rgba(32,63,93,0.83)] p-[20px] rounded-md"
        >
          <img
            src="https://assets.chakana.uz/category/image/6412b9cd76b6f9.75491329.png"
            alt=""
            className="hover:scale-110 transition-all"
          />
          <h1 className="text-center font-bold text-white mt-[10px]">
            Vintelyator
          </h1>
          <div className="m-auto mt-[20px]">
            <button className="text-white border-[1px] border-white w-20">
              See
            </button>
          </div>
        </Link>
        <Link
          to="kirmashin"
          spy={true}
          smooth={true}
          offset={-90}
          duration={250}
          className="flex flex-col bg-[rgb(234,234,232)] p-[20px] rounded-md"
        >
          <img
            src="https://assets.chakana.uz/category/image/6553560687ec28.09839309.png"
            alt=""
            className="hover:scale-110 transition-all"
          />
          <h1 className="text-center font-bold text-[rgb(112,112,112)] mt-[10px]">
            Washing machine
          </h1>
          <div className="m-auto mt-[20px]">
            <button className="text-center font-bold text-[rgb(112,112,112)] mt-[10px] border-[rgb(112,112,112)] w-20">
              See
            </button>
          </div>
        </Link>
        <div className="flex flex-col bg-red-500 p-[20px] rounded-md">
          <img
            src="https://assets.chakana.uz/category/image/655353550f8e45.13594145.png"
            alt=""
            className="hover:scale-110 transition-all"
          />
          <h1 className="text-center font-bold text-white mt-[10px]">
          Phone and gadgets
          </h1>
          <div className="m-auto mt-[20px]">
            <button className="text-white border-[1px] border-white w-20">
              See
            </button>
          </div>
        </div>
        <div className="flex flex-col bg-red-500 p-[20px] rounded-md">
          <img
            src="https://assets.chakana.uz/category/image/655353550f8e45.13594145.png"
            alt=""
            className="hover:scale-110 transition-all"
          />
          <h1 className="text-center font-bold text-white mt-[10px]">
          Phone and gadgets
          </h1>
          <div className="m-auto mt-[20px]">
            <button className="text-white border-[1px] border-white w-20">
              See
            </button>
          </div>
        </div>
        
        
        
        
      </div>
    </div>
  );
};

export default Kategori;
