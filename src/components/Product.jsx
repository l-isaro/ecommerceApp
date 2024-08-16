import { IoHeartOutline } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { add } from "../features/cart";
import { useSelector } from "react-redux";

const Product = (props) => {

    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart.value)
    console.log(cart);

    function handleClick() {
        dispatch(add(props.item))
    }

    return(
    <div className="flex flex-col gap-4">
        <div className="group relative flex flex-col items-center bg-WhiteSmoke p-10 w-60 h-52">
            <img src={props.item.imageUrl} alt="product image" className=""/>
            <button className="top-12 right-2 absolute p-2 bg-white rounded-full"><IoHeartOutline className="text-xs"/></button>
            <button className="p-2 bg-white top-4 right-2 absolute rounded-full"><FaRegEye className="text-xs"/></button>
            <p className="top-4 left-4 absolute bg-WebPink px-2 py-1 rounded-md text-sm text-white">-{props.item.discount} %</p>
            <button className="bg-black py-1 absolute bottom-0 w-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" onClick={handleClick}>Add To Cart</button>
        </div>
        <div>
            <p className="font-bold">{props.item.title}</p>
            <p className="text-WebPink"> ${props.item.price - (props.item.price * (props.item.discount / 100))}   <span className="text-gray-400 line-through">${props.item.price}</span></p>
        </div>
    </div>
    )
}

export default Product