import { IoMdSend } from "react-icons/io";


const Footer = () => {
    return(
        <footer className="flex justify-between bg-black p-10 text-white">
            <div>
                <ul className="flex flex-col gap-4">
                    <li className="font-medium text-xl">Exclusive</li>
                    <li className="text-lg">Subscribe</li>
                    <li>Get 10% off your first order</li>
                    <div className="flex items-center border-white px-2 border">
                        <input type="text" className="bg-black py-1 text-sm" placeholder="Enter your email"/>
                        <IoMdSend />
                    </div>
                </ul>
            </div>
            <div className="flex flex-col gap-4">
                <p className="font-bold text-xl">Support</p>
                <p>11Bijoy Sarani, Dhaka,</p>
                <p>DH 1515, Bangladesh</p>
                <p>exclusive@gmail.com</p>
                <p>+88015-88888-9999</p>
            </div>
            <div className="flex flex-col gap-4">
                <p className="font-bold text-xl">Account</p>
                <p>Login / Register</p>
                <p>cart</p>
                <p>Wishlist</p>
                <p>Shop</p>
            </div>
            <div className="flex flex-col gap-4">
                <p className="font-bold text-xl">Quick Link</p>
                <p>Privacy Policy</p>
                <p>Terms Of Use</p>
                <p>Terms Of Use</p>
                <p>FAQ</p>
                <p>Contact</p>
            </div>
        </footer>
    )
}

export default Footer