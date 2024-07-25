import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BasketContext } from "./karzinkaContext";
import "./responsive/karzinka.scss"

const Karzinka = () => {
  const { basket, onDelete } = useContext(BasketContext);

  const [counts, setCounts] = useState({});
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalSavings, setTotalSavings] = useState(0);

  useEffect(() => {
    const total = basket.reduce((sum, item) => {
      const count = counts[item.id] || 1;
      return sum + item.price * count;
    }, 0);
    setTotalPrice(total);

    const savings =
      basket.reduce((sum, item) => {
        const count = counts[item.id] || 1;
        return sum + item.price * count;
      }, 0) *
        2 -
      total;
    setTotalSavings(savings);
  }, [basket, counts]);

  const handleMinus = (id) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: Math.max(prevCounts[id] - 1, 1),
    }));
  };

  const handlePlus = (id) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: (prevCounts[id] || 0) + 1,
    }));
  };

  return (
    <div className="max-w-[1300px] mx-auto pt-[90px]">
      {basket.length > 0 ? (
        <>
          <h1 className="text-[24px] font-bold pb-[20px]">
            sizning savatingiz, <span>{basket.length}</span>
          </h1>
          <div className="max-w-[100%] flex flex-col 2xl:flex-row gap-[20px]">
            <div className="flex flex-col gap-[20px] p-[20px]  max-w-[100%] 2xl:w-[950px]">
              <div className="px-[20px]"></div>

              {basket.map((item) => {
                const count = counts[item.id] || 1;
                return (
                  <div
                    className="flex sm:flex-row items-center justify-between max-w-[100%] border-b p-[20px]"
                    key={item.id}
                  >
                    <div className="flex items-center justify-between w-full" id="scvAll" >
                      <div className="flex" id="scv1">
                        <img
                          className="w-[120px] h-[120px]"
                          src={item.img}
                          alt={item.name}
                        />
                        <div className="flex flex-col gap-[10px] self-start">
                          <span className="pb-2 block text-md">
                            {item.name}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-[40px]" id="scv2">
                        <div className="flex items-center w-[150px] h-[40px] justify-between p-[5px]">
                          <button
                            className="text-[30px] bg-gray-300 rounded-md w-[30px] h-[30px] flex items-center justify-center"
                            onClick={() => handleMinus(item.id)}
                          >
                            -
                          </button>
                          <p className="font-bold text-[24px]">{count}</p>
                          <button
                            className="text-[30px] bg-gray-300 rounded-md w-[30px] h-[30px] flex items-center justify-center"
                            onClick={() => handlePlus(item.id)}
                          >
                            +
                          </button>
                        </div>
                        <div className="flex flex-col items-end w-[120px] text-red-600">
                          <b className="rounded-lg mb-[20px] text-[16px]">
                            {parseInt(item.price * count).toLocaleString()} som
                          </b>

                          <button
                            onClick={() => onDelete(item.id)}
                            className="px-[5px] py-[2px]"
                          >
                            <img
                              src="https://www.pngplay.com/wp-content/uploads/7/Delete-Icon-Transparent-Background.png"
                              alt=""
                              className="w-[30px]"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="2xl:max-w-[350px] w-[100%] h-[300px] border p-[10px] flex flex-col gap-[20px] font-[600] rounded sticky top-[90px]">
              <h1>Sale: 0</h1>
              <div className="flex items-center justify-between font-[600]">
                <p>
                  Product({basket.length}): {totalPrice} som
                </p>
              </div>
              <hr />
              <div className="flex justify-between font-[600] gap-">
                <p className="font-bold text-xl">
                  All: {parseInt(totalPrice).toLocaleString()} som
                </p>
              </div>

              <button className="w-[100%] h-[35px] rounded-[10px]  text-white text-[20px] mt-[30px]">
                Placing an order
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center flex flex-col justify-center items-center pt-[60px] gap-[10px] mb-[300px] h-[75vh]">
          <img
            src="https://www.nicepng.com/png/full/84-848362_grocery-cart-shopping-cart-icon.png"
            alt="image"
            className="w-[140px] mb-[50px]"
          />
          <p className="font-bold text-[24px]">
          There are no products in your cart yet
          </p>
          <p>
          Go to the home page or search for it</p>
          <Link
            to="/"
            className="py-2 px-3 h-[45px] rounded-[10px] bg-red-600 text-white text-[20px] mt-[30px]"
          >
            Go to home page
          </Link>
        </div>
      )}
    </div>
  );
};
export default Karzinka;
