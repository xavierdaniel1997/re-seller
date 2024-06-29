import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWishListItem } from '../redux/wishListSlice';

const WishlistItem = ({listItem}) => {
  const dispatch = useDispatch()

  const handleRemoveItem = (productId) => {
    dispatch(removeWishListItem(productId))
    console.log("dfdsfsdfdsfsdf", productId)
  }
  return (
    <div className="flex items-center p-4 border-b border-gray-200">
      <img src={listItem?.imageUrl} alt="Product" className="w-32 h-32 object-contain" />
      <div className="ml-4 flex-grow">
        <h3 className="text-lg font-semibold">{listItem?.brand}, {listItem?.description}, {listItem?.state}</h3>
        <div className="text-gray-500">Assured</div>
      </div>
      <div className="text-right">
        <div className="text-lg font-semibold text-gray-900">₹{listItem?.price}</div>
        <div className="text-sm text-green-600 cursor-pointer" onClick={() => handleRemoveItem(listItem?.productId)}>Remove</div>
      </div>
    </div>
  );
};

export default WishlistItem;
