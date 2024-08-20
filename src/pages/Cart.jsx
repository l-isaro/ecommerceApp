import { useSelector } from "react-redux"
import CartProduct from "../components/CartProduct"
import { Link } from "react-router-dom"
import { subtotals } from "../components/CartProduct"
import { useEffect, useState } from "react"

const Cart = () => {
    const cartProducts = useSelector((state) => state.cart.value)
    const products = cartProducts.map((product) => <CartProduct item={product}/>)
    //console.log(products)
    console.log(cartProducts)

    const [subtotal, setSubtotal] = useState(subtotals.reduce((a, b) => a + b, 0))

    useEffect(() => {
        setSubtotal(subtotals.reduce((a, b) => a + b, 0));
    }, [subtotals])

    return(
        <div className="flex flex-col gap-4 px-20 py-10">
            <div className="flex justify-between shadow-md p-5">
                <p>Product</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Subtotal</p>
            </div>
            <div>
                {products}
            </div>
            <div className="flex justify-between mt-4">
                <Link to="/" className="px-6 py-2 border border-black">Return To Shop</Link>
                <button className="px-6 py-2 border border-black">Update Cart</button>
            </div>
            <div className="mt-10">
                <div className="flex gap-4">
                    <input type="text" className="px-6 py-2 border border-black rounded-md text-sm" placeholder="Coupon Code"/>
                    <button className="bg-WebPink px-6 py-2 rounded-md text-sm text-white">Apply Coupon</button>
                </div>
                <div>
                    <h3>Cart Total</h3>
                    <div>
                        <p>Subtotal</p>
                        <p>{subtotal}</p>
                    </div>
                    <div>
                        <p>Shipping</p>
                        <p>Free</p>
                    </div>
                    <div>
                        <p>Total</p>
                        <p>{}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart