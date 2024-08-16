import { IoIosSearch } from "react-icons/io";
import { IoHeartOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header  = () => {
    return(
        <div>
            <p className="bg-black p-2 w-full text-center text-sm text-white">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!  <span className="ml-2 underline">ShopNow</span></p>
            <nav className="flex justify-between items-center px-10 pt-5">
                <h1 className="font-bold text-2xl">EXCLUSIVE</h1>
                <ul className="flex gap-4">
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About</li>
                    <li>Sign Up</li>
                </ul>
                <div className="flex items-center gap-5">
                    <div className="flex justify-between items-center gap-2 bg-gray-200 px-4 rounded-md">
                        <input type="text" className="bg-gray-200 py-1 rounded-md w-full text-sm" placeholder="What are you looking for?"/>
                        <IoIosSearch />
                    </div>
                    <div className="flex gap-4">
                        <IoHeartOutline />
                        <Link to="cart"><BsCart3 /></Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header