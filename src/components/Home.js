import productList from '../productList.json';
import './Home.css';
import { addToCart,removeFromCart } from '../redux/CartSlice';
import { useDispatch, useSelector } from 'react-redux';

// fetch데이터 사용 - 비동기통신 사용
import { fetchAllProducts } from '../redux/ProductList';
import { useEffect } from 'react';


export default function Home(){
    const dispatch = useDispatch();
    // const state = useSelector((state)=>state);
    // console.log(state)
    // const {cartProductIds} = useSelector((state)=>state.cart);
    // const {cartProductIds} = useSelector((state)=>state);
    const state = useSelector((state)=>state);
    const {cart,products} = state;

    // 비동기통신
    useEffect(() => {
        dispatch(fetchAllProducts('./productList.json/products'))
    },[dispatch])


    return (
        <div className='boxHome'>
            {products.data?.map((product)=>(
                <figure key={product.id}>
                <img src={product.imageUrl} alt={product.name}/>
                <figcaption>
                    <dl>
                        <dt>{product.name}</dt>
                        <dd>{product.price}</dd>
                        <dd>
                            {!cart.cartProductIds.includes(product.id) && (<button type='button' className='plus'
                            onClick={()=>{dispatch(addToCart(product.id))}}>추가</button>)}
                            {cart.cartProductIds.includes(product.id) && (<button type='button' className='del'
                            onClick={()=>{dispatch(removeFromCart(product.id))}}>삭제</button>)}
                        </dd>
                    </dl>
                </figcaption>
                </figure>
            ))}
        </div>
    )
}