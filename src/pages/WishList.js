import { useSelector } from "react-redux";
import WishlistItem from "../components/WishlistItem";

const Wishlist = () => {
  const wishListItem = useSelector(store => store.wishList.items)
  const productId = Math.floor(Math.random()*1000000000)
  console.log("kfjkldjfkdjfkjdkofjodkjfokdsjfkjjjkjkjlkj",productId)
  return (
    <div className="max-w-2xl mx-auto py-10">
      <h2 className="text-2xl font-bold my-4">My Wishlist {wishListItem.length}</h2>
      {wishListItem.map((wishListData) => (<WishlistItem listItem={wishListData}/>))}
    </div>
  );
};

export default Wishlist;