import Logo from "../assets/logo.png";
import {MdAdd} from "react-icons/md";
import {IoSearchOutline} from "react-icons/io5";
import {useContext, useState} from "react";
import {AuthContext} from "../context/AuthContextProvider";
import {Link, useNavigate} from "react-router-dom";
import {signOut} from "firebase/auth";
import {auth} from "../util/firebaseConfig";
import UserProfile from "./UserProfile";
import { FaUserCircle } from "react-icons/fa";
import { UserContext } from "../context/UserContext";
import { SearchContext } from "../context/SearchContext";


const Navbar = () => {
  const {currentUser} = useContext(AuthContext);
  const {userData} = useContext(UserContext)
  const [search, setSearch] = useState("")
  const {serachQuery, setSearchQuery} = useContext(SearchContext)
  const [openPopup, setOpenPopup] = useState(false);
  const navigate = useNavigate();


  const navigateToLogin = () => {
    navigate("/login");
  };

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  const handleClickSearchBtn = () => {
    setSearchQuery(search)
    navigate("/")
  }
  return (
    <div className="bg-slate-200 flex justify-between items-center px-5 py-2 ">
      <Link to="/">
        <div>
          <img src={Logo} alt="" className="w-20 bg-slate-200" />
        </div>
      </Link>
      <div className="flex w-11/12 justify-end gap-10">
        <div className="flex w-6/12">
          <input
            type="text"
            placeholder="seach items.."
            className="w-full outline-none border-2 border-black rounded-l-md px-3 text-lg"
            value={search}
            onChange={(e) => handleSearch(e)}
          />
          <button className="bg-black text-gray-50 text-2xl px-3 py-3 rounded-r-md" onClick={handleClickSearchBtn}>
            <IoSearchOutline />
          </button>
        </div>
        <div className="flex gap-10">
          {currentUser ? (
            <>
              <div
                className="flex gap-3 items-center cursor-pointer"
                onClick={() => setOpenPopup(!openPopup)}
                
              >
                <span className="font-semibold text-base"> Hi {userData?.fname} </span>
                <span className="text-3xl"><FaUserCircle/></span>
              </div>
            </>
          ) : (
            <button
              className="text-md font-semibold underline"
              onClick={navigateToLogin}
            >
              LOGIN
            </button>
          )}
          <Link to="/addItem">
            <div className="flex items-center gap-1 border-4 border-cyan-800 rounded-full px-5 py-1 mr-3 bg-white">
              <span className="font-extrabold text-xl">
                <MdAdd />{" "}
              </span>
              <button className="text-md font-bold">SELL</button>
            </div>
          </Link>
        </div>
      </div>
      {openPopup && (
        <div className="absolute top-16 right-20">
          <UserProfile currentUser={currentUser}/>
        </div>
      )}
    </div>
  );
};
export default Navbar;
