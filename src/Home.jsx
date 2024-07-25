import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import HomeSwiper from "./homeSwiper";
import App from "./homeSwiper";
import Kategori from "./kategori";
import Swiper from "swiper";
import { SwiperSlide } from "swiper/react";
import { Link } from "react-scroll";

export let Home = () => {
  return (
    <div>
      {/*         
      <Accordion className="mx-auto w-[300px] p-[30px]">
        <AccordionItem
          className="border-[1px] border-neutral-950"
          header="salom"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </AccordionItem>
        <AccordionItem
          className="border-[1px] border-neutral-950"
          header="salom2"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </AccordionItem>
        <AccordionItem
          className="border-[1px] border-neutral-950"
          header="salom3"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </AccordionItem>
      </Accordion> */}

      <section className="flex overflow-x-auto gap-[50px] pt-[90px] p-[20px] mx-auto cursor-pointer">
        <Link
          to="telefonlar"
          spy={true}
          smooth={true}
          offset={-90}
          duration={250}
          className="w-[200px]"
        >
          Phones
        </Link>
        <Link
          to="telvizorlar"
          spy={true}
          smooth={true}
          offset={-90}
          duration={250}
          className="w-[100px]"
        >
          Tv
        </Link>

        <Link
          to="klimat"
          spy={true}
          smooth={true}
          offset={-90}
          duration={250}
          className="w-[200px]"
        >
          Vintelyator
        </Link>
        <Link
          to="kirmashin"
          spy={true}
          smooth={true}
          offset={-90}
          duration={250}
          className="w-[100px]"
        >
          Washing
        </Link>
      </section>
    </div>
  );
};
