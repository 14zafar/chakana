import React from "react";
import { GiCargoCrate } from "react-icons/gi";
import "./responsive/footer.scss"

const Footer = () => {
  return (
    <div>

     
      <section className="w-full flex justify-between items-start mt-[100px] text-white bg-gray-900 p-[20px] text-center" id="sc3">
        <div>
          <h1 className="text-2xl mb-[20px]">Contacts</h1>
          <p>Phone: +998 94 992 45 15</p>
          <p>Gmail adress: info@chakana.uz</p>
          <p className="mb-[20px]">Adress: 100096, Toshkent sh. Muqimi 43</p>
        </div>
        <div>
          <h1 className="text-2xl mb-[20px]">For customers</h1>
          <p>How to buy</p>
          <p>Return and exchange products</p>
          <p>Delivery</p>
          <p className="mb-[20px]">Purchase of products on credit</p>
        </div>
        <div>
          <h1 className="text-2xl mb-[20px]">For suppliers</h1>
          <p>To sellers</p>
          <p className="mb-[20px]">Cooperation:Zafar</p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
