import React from "react";
import "../responsive/footer.scss";
import { GiCargoCrate } from "react-icons/gi";

const Advantage = () => {
  return (
    <div>
      <section className="grid grid-cols-4 gap-[70px] mb-[150px] sc1" id="sc1">
        <div className="p-[20px] border rounded-xl text-center bg-red-50">
          <GiCargoCrate className="text-[40px] mb-[20px] mx-auto" />
          <h1 className="mb-[10px]">yetkazib berish bepul</h1>
          <h1>ozbekiston boylab yetkazib berish</h1>
        </div>
        <div className="p-[20px] border rounded-xl text-center bg-red-50">
          <GiCargoCrate className="text-[40px] mb-[20px] mx-auto" />
          <h1 className="mb-[10px]">foydali shartlar</h1>
          <h1>Foizsiz to'lovlar va foydali kreditlar</h1>
        </div>
        <div className="p-[20px] border rounded-xl text-center bg-red-50">
          <GiCargoCrate className="text-[40px] mb-[20px] mx-auto" />
          <h1 className="mb-[10px]">50 000 000 so'mgacha cheklov</h1>
          <h1>Skoringdan o'ting va 50 milliongacha limitga ega bo'ling</h1>
        </div>
        <div className="p-[20px] border rounded-xl text-center bg-red-50">
          <GiCargoCrate className="text-[40px] mb-[20px] mx-auto" />
          <h1 className="mb-[10px]">100% Kafolatlangan</h1>
          <h1>Hamma mahsulot uchun kafolat oling</h1>
        </div>
      </section>
      <section
        className="w-full border p-[20px] bg-red-50 rounded-xl flex  items-center relative justify-between"
        id="sc2"
      >
        <div>
          <h1 className="mb-[10px] text-xl font-semibold">
            ilovani yuklab oling
          </h1>
          <h1>
            Chegirmalar va aksiyalar haqida <br />
            birinchilardan bo'lib xabardor bo'ling!
          </h1>
          <div className="flex gap-[10px] mt-[10px]">
            <img
              src="https://1soft-download.com/uploads/posts/2020-08/1597372695_android-app-on-google-play_svg_.png"
              alt=""
              className="w-[200px]"
            />
            <img
              src="https://static.greenweez.it/assets/img/mobile-app-prefooter/app_store.png"
              alt=""
              className="w-[200px]"
            />
          </div>
        </div>
        <div>
          <img
            src="https://chakana.uz/_next/static/media/telgroup.32a8da78.png"
            alt=""
            className=" absolute left-[900px] -top-[100px]"
          />
        </div>
      </section>
    </div>
  );
};

export default Advantage;
