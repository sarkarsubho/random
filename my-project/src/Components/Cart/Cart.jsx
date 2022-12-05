import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../ContextApi/Context";

export const Cart = () => {
  const globelState = useContext(CartContext);
  const state = globelState.state;
  const dispatch = globelState.dispatch;
  return (
    <div>
      <div className="flex justify-center">
        <div>
          {state.map((item, index) => (
            <div
              className="flex mx-11 my-3 box-conten border-2 border-indigo-200 rounded-md p-2"
              key={index}
            >
              <div className="mr-10">
                <img
                  className="rounded-md object-fill h-40 w-40"
                  src={item.image}
                  alt=""
                />
              </div>

              <div className="flex-1 pt-5">
                <div className="text-lg font-medium text-gray-900">
                  {item.title}
                </div>
                <div className="text-gray-500">{item.shipping}</div>
                <div className="flex">
                  <div className="flex">
                    <button
                      onClick={() =>
                        dispatch({ type: "INCREASE", payload: item })
                      }
                      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-6 border border-blue-500 hover:border-transparent rounded"
                    >
                      +
                    </button>
                    <div className="text-center	text-2xl pt-1">
                      {item.quantity}
                    </div>
                    <button
                      onClick={() => {
                        if (item.quantity > 1) {
                          dispatch({ type: "DECREASE", payload: item });
                        } else {
                          dispatch({ type: "REMOVE", payload: item });
                        }
                      }}
                      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-6 border border-blue-500 hover:border-transparent rounded"
                    >
                      -
                    </button>
                  </div>

                  <div className="ml-20">
                    <button
                      onClick={() =>
                        dispatch({ type: "REMOVE", payload: item })
                      }
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>

              <div className="ml-20 mr-8 pt-5 text-4xl font-medium text-gray-900">
                ₹{item.quantity * Math.floor(item.price)}
              </div>
            </div>
          ))}

          <div className="text-4xl font-bold px-10 text-right">
            <div className="bg-blue-500 text-right text-white text-4xl font-bold px-4 py-3">
              <div className="mr-[20px]">
                Total Price : &nbsp;
                {state.reduce(
                  (total, item) =>
                    total + Math.floor(item.price) * Math.floor(item.quantity),
                  0
                )}
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Order Summary</div>
              <p className="text-gray-700 text-xl">
                Total Product:&nbsp;{state.length}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-900 text-lg mr-2 mb-2">
                Order Total:&nbsp;
                {state.reduce(
                  (total, item) =>
                    total + Math.floor(item.price) * Math.floor(item.quantity),
                  0
                )}
              </span>
            </div>
          </div>
          <div className="bg-blue-500 text-center items-center text-white text-xl font-bold px-4 py-3 cursor-pointer">
            <Link to="/cart/suc" className="text-xl">
              Place your order
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
