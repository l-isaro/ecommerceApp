import ProductData from '../../products'
import Product from '../components/Product'

const Home = () => {

    const products = ProductData.map((item) => {
        return <Product item={item} key={item.id}/>
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