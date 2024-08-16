const CartProduct = (props) => {
    return(
    <div className="flex justify-between shadow-md p-5">
        <img src={props.item.imageUrl} alt="product image" className="w-10 h-10 object-contain"/>
        <p>${props.item.price}</p>
        <input type="number" value={1} className="border-gray-300 px-2 border w-20 focus:outline-none"/>
        <p>${props.item.price}</p>
    </div>
    )
}

export default CartProduct