import { useSelector } from "react-redux"
import CartProduct from "../components/CartProduct"
import { Link } from "react-router-dom"

const Cart = () => {
    const cartProducts = useSelector((state) => state.cart.value)
    const products = cartProducts.map((product) => <CartProduct item={product}/>)
    //console.log(products)
    console.log(cartProducts)

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
            <div>
                <Link to="/">Return To Shop</Link>
                <button>Update Cart</button>
            </div>
        </div>
    )
}

export default Cart