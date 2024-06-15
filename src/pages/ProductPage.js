import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { FaHeart, FaShareAlt } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { db } from '../util/firebaseConfig';

const ProductPage = () => {
  const {id} = useParams();
  const [productDetial, setProductDetial] = useState(null);

  console.log("id in detaial page", id)
  const getProductDetial = async () => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);
    if(docSnap.exists()){
      const data = docSnap.data();
        const UserCollection = collection(db, "users");
        const q = query(UserCollection, where("uid", "==", data.userId));
        const userSnap = await getDocs(q);
        const userDetails = userSnap.docs[0]?.data();

        const itemData = {
          ...data,
          user: userDetails
        }
        setProductDetial(itemData)
    }else{
      console.log("No such document")
    }
  }

  useEffect(() => {
    getProductDetial()
  }, [id])

  const getMapUrl = () => {
    if (productDetial?.place && productDetial?.zipCode) {
      const place = encodeURIComponent(productDetial.place);
      const zipCode = encodeURIComponent(productDetial.zipCode);
      return `https://maps.google.com/maps?q=${place},${zipCode}&z=15&output=embed`;
    }
    return "https://maps.google.com/maps?q=11.660893,92.742933&z=15&output=embed"; // Default location
  }
  console.log("from productDetails and product", productDetial)
  return (
    <div className="flex justify-center items-center py-10">
      <div className="flex rounded-md overflow-hidden w-10/12">
        <div className="w-3/5 flex justify-center items-center bg-black max-h-96">
          <img
            src={productDetial?.imageUrl}
            alt="Product"
            className="object-contain w-full max-h-96"
          />
        </div>
        <div className="w-2/5 px-4">
          <div className="flex justify-between items-center mb-4 p-4 shadow-md">
            <h1 className="text-2xl font-bold">₹ {productDetial?.price}</h1>
            <div className="flex space-x-3">
              <FaShareAlt className="text-gray-600" />
              <FaHeart className="text-gray-600" />
            </div>
          </div>
          <div className="mb-4 p-4 shadow-md">
            <p className="text-gray-600 mb-4">2019 - 38,000 km</p>
            <p className="text-gray-600 mb-4"><span className='font-semibold'>{productDetial?.brand}</span> {productDetial?.description}</p>
            <p className="text-gray-600 mb-4">Urgent sale</p>
            <div>
              <p className="text-gray-800">{productDetial?.state} {productDetial?.place} {productDetial?.zipCode}</p>
              <p className="text-gray-400 text-sm">{productDetial?.date}</p>
            </div>
          </div>
          <div className="flex items-center mb-6 shadow-md p-4">
            <div className="bg-gray-300 rounded-full h-16 w-16 flex items-center justify-center mr-4">
              <img
                src="https://via.placeholder.com/50"
                alt="User"
                className="rounded-full"
              />
            </div>
            <div>
              <p className="font-semibold">{productDetial?.username}</p>
              <p className='text-emerald-800 font-bold'>{productDetial?.phone}</p>
            </div>
          </div>
          <div className="mb-6 mb-4 p-4 shadow-md">
            <h2 className="font-semibold">Posted in  {productDetial?.date}</h2>
            <p className="text-gray-800">{productDetial?.state} {productDetial?.place} {productDetial?.zipCode}</p>
          </div>
          <button className="mb-6 mb-4 p-4 shadow-md bg-black text-white w-full">MAKE THE DEAL</button>
          <div className="border-t border-gray-300 pt-4">
            <iframe
              // src="https://maps.google.com/maps?q=11.660893,92.742933&z=15&output=embed"
              src={getMapUrl}
              width="100%"
              height="200"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
