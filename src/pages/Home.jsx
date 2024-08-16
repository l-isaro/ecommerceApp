import { useState } from 'react'
import ProductData from '../../products'
import Product from '../components/Product'
import { useDispatch } from 'react-redux'

const Home = () => {

    const products = ProductData.map((item) => {
        return <Product item={item}/>
    })
    return(
        <div className='p-20'>
            <div className='flex justify-between'>
                {products}
            </div>
        </div>
    )
}

export default Home