import { Link } from "react-router-dom";
import { data } from "./Data";
import { useState } from "react";

export const Product = () => {
  const [item, setItem] = useState(data);
  console.log(item);
  return (
    <div className="grid grid-cols-4 gap-6 justify-items-center mx-auto w-[1200px] mt-5">
      {item.map((e) => (
        <div
          key={e.id}
          className="box-conten border-2 border-indigo-200 border-t-indigo-500 rounded-md p-2  bg-slate-300 cursor-pointer"
        >
          <div className="box-content">
            <Link to={`/${e.id}`}>
              <img
                src={e.image}
                alt=""
                className="rounded-md object-fill h-96 w-96 "
              />
              <div className="font-medium text-sm">{e.title}</div>
              <div className="font-bold text-lg">₹{e.price}</div>
              {/* <p>{e.description}</p> */}
              <div>
                <span>{e.category}</span>

                <span> &nbsp; &nbsp;{e.rating.rate}*</span>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
