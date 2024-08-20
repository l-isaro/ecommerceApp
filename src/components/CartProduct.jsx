import { useState } from "react"

const CartProduct = (props) => {
    
    const discountedPrice = props.item.price - (props.item.price * (props.item.discount / 100))
    const [subtotal, setSubtotal] = useState(discountedPrice)
    const [quantity, setQuantity] = useState(1)
    const subtotals = [];

    function handleInput(event) {
        const newQuantity = event.target.value || 1
        setQuantity(newQuantity)
        setSubtotal(discountedPrice * newQuantity);
        subtotals.push(discountedPrice * newQuantity);
    }

    return(
    <div className="flex justify-between shadow-md p-5">
        <img src={props.item.imageUrl} alt="product image" className="w-10 h-10 object-contain"/>
        <p>${discountedPrice}</p>
        <input type="number" value={quantity} className="border-gray-300 px-2 border w-20 focus:outline-none" onChange={handleInput}/>
        <p>${subtotal}</p>
    </div>
    )
}

export default CartProduct
export {subtotals} 