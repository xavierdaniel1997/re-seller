import {collection, doc, getDocs} from "firebase/firestore";
import {db} from "../util/firebaseConfig";
import {createContext, useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({item}) => {
   const navigate = useNavigate();

   const handleProductMain = (id) => {
    navigate(`/product/${id}`)
   }
  return (
    <>
    <div className="w-64 p-2 rounded-md shadow-2xl bg-white" onClick={() => handleProductMain(item.id)}>
      <div className="w-full">
        <img
          src={item?.imageUrl}
          alt=""
          className="w-full h-52 object-contain"
        />
        <div className="">
          <p className="text-xl font-bold">₹ {item?.price}</p>
          <p className="text-sm">{item?.title}</p>
          <div className="flex justify-between">
            <p>{item?.description}</p>
            <p>Today</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
export default ProductCard;
