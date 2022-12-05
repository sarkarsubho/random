import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../ContextApi/Context";
import { data } from "./Data";

export const ProductDetails = () => {
  const [item, setItem] = useState({});

  const { id } = useParams();

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    const newProduct = data.find((e) => e.id === parseInt(id));
    setItem(newProduct);
    // console.log(item);
  };

  const globelState = useContext(CartContext);
  const dispatch = globelState.dispatch;
  console.log(globelState);

  item.quantity = 1;
  item.shipping = "FREE Shipping";

  return (
    <div className="flex justify-center mt-10">
      {
        <div
          key={item.id}
          className="flex justify-center box-conten border-2 border-indigo-200 border-t-indigo-500 rounded-md p-2  bg-slate-300 cursor-pointer mx-[250px]"
        >
          <div className="flex-1">
            <img
              src={item.image}
              alt=""
              className="rounded-md object-fill h-96 w-96 "
            />
          </div>
          <div className="flex-1 box-content">
            <div className="font-bold text-4xl">{item.title}</div>
            <div className="font-bold text-3xl text-gray-900">
              ₹{item.price}
            </div>
            {/* <p>{e.description}</p> */}
            <div className="text-2xl font-medium text-orange-900">
              <span>{item.category}</span>

              {/* <span> &nbsp; &nbsp;{item.rating.rate}*</span> */}
            </div>

            <div className="text-teal-600">{item.description}</div>

            <button
              onClick={() => dispatch({ type: "ADD", payload: item })}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Add To Cart
            </button>
          </div>
        </div>
      }
    </div>
  );
};
