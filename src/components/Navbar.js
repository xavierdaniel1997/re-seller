import Logo from "../assets/logo.png";
import { MdAdd } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
    return (
        <div className="bg-slate-200 flex justify-between items-center px-5 py-2">
            <div>
                <img src={Logo} alt="" className="w-20 bg-slate-200" />
            </div>
            <div className="flex w-11/12 justify-end gap-10">
            <div className="flex w-6/12">
                <input type="text" placeholder="seach items.." className="w-full outline-none border-2 border-black rounded-l-md px-3 text-lg"/>
                <button className="bg-black text-gray-50 text-2xl px-3 py-3 rounded-r-md"><IoSearchOutline/></button>
            </div>
            <div className="flex gap-10">
                <button className="text-md font-semibold underline">LOGIN</button>
                <div className="flex items-center gap-1 border-4 border-cyan-800 rounded-full px-5 py-1 mr-3 bg-white">
                    <span className="font-extrabold text-xl"><MdAdd /> </span>
                    <button className="text-md font-bold">SELL</button>
                </div>
            </div>
            </div>
        </div>
    ) 
}
export default Navbar;