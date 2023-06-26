import productList from '../productList.json';
import './Home.css';
import { addToCart,removeFromCart } from '../redux/CartSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Home(){
    const dispatch = useDispatch();
    // const state = useSelector((state)=>state);
    // console.log(state)
    const {cartProductIds} = useSelector((state)=>state.cart);


    return (
        <div className='boxHome'>
            {productList.products.map((product)=>(
                <figure key={product.id}>
                <img src={product.imageUrl} alt={product.name}/>
                <figcaption>
                    <dl>
                        <dt>{product.name}</dt>
                        <dd>{product.price}</dd>
                        <dd>
                            {!cartProductIds.includes(product.id) && (<button type='button' className='plus'
                            onClick={()=>{dispatch(addToCart(product.id))}}>추가</button>)}
                            {cartProductIds.includes(product.id) && (<button type='button' className='del'
                            onClick={()=>{dispatch(removeFromCart(product.id))}}>삭제</button>)}
                        </dd>
                    </dl>
                </figcaption>
                </figure>
            ))}
        </div>
    )
}