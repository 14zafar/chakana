import { Home } from "./Home";
import Kategori from "./kategori";
import Phones from "./catigories/phones";
import Tv from "./catigories/Tv";
import App from "./homeSwiper";
import Advantage from "./catigories/advantage";
import Konditsioner from "./catigories/sovutuvchi";
import Machine from "./catigories/washinmachines";
  
export const Card = () => {
  return (
    <div className="mx-auto max-w-[1400px]">
      <Home />
      <App />
      <Kategori />

      <h1 className="font-semibold text-[30px] mt-[40px] ml-[30px]">
        Phones and gadjets
      </h1>
      <div className="flex items-center justify-center m-[30px]">
        <Phones />
      </div>
      <h1 className="font-semibold text-[30px] mt-[40px] ml-[30px]">
        TV
      </h1>
      <div className="flex items-center justify-center m-[30px]">
        <Tv />
      </div>
      <h1 className="font-semibold text-[30px] mt-[40px] ml-[30px]">
        Washingcar
      </h1>
      <div className="flex items-center justify-center m-[30px]">
        <Machine />
      </div>
      <h1 className="font-semibold text-[30px] mt-[40px] ml-[30px]">
        Kanditsioner
      </h1>
      <div className="flex items-center justify-center m-[30px]">
        <Konditsioner />
      </div>
      <h1 className="font-semibold text-[30px] mt-[40px] ml-[30px] mb-[50px]">
        our adventeages
      </h1>
      <div>
        <Advantage />
      </div>
    </div>
  );
};
