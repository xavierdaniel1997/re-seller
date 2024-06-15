import { signOut } from "firebase/auth";
import { auth } from "../util/firebaseConfig";
import { SearchContext } from "../context/SearchContext";
import { useContext } from "react";

const UserProfile = ({currentUser}) => {
  const {serachQuery, setSearchQuery} = useContext(SearchContext);
    const handleLogout = () => {
        signOut(auth)
          .then(() => {
            setSearchQuery("")
          })
          .catch((error) => {});
      };
  return (
    <div className="relative bg-white shadow-lg rounded-lg p-4 w-56">
      <div className="w-full p-4 rounded-md flex flex-col items-center">
        <img
          src="https://via.placeholder.com/50"
          alt="User Avatar"
          className="rounded-full mb-2"
        />
        <p className="font-bold text-lg mb-2">User Name</p>
      </div>
      <div className="mt-4">
        <p className="cursor-pointer hover:bg-gray-200 p-2 rounded-md">
          PROFILE
        </p>
        <p className="cursor-pointer hover:bg-gray-200 p-2 rounded-md">
          WISHLIST
        </p>
        <p className="cursor-pointer hover:bg-gray-200 p-2 rounded-md">SELL</p>
        <p className="cursor-pointer bg-blue-500 text-center mt-3 p-2 rounded-md text-white font-bold" onClick={handleLogout}>{currentUser ? "LOGOUT" : "LOGIN"}</p>
      </div>
      
    </div>
  );
};
export default UserProfile;
