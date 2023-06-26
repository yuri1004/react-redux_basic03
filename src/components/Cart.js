import {BiCart} from 'react-icons/bi';
import productList from '../productList.json';
import './Cart.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart,clearAllItems } from '../redux/CartSlice';

export default function Cart(){
    const {cartProductIds} = useSelector((state)=>state.cart);
    const productData = productList.products.filter((product)=>cartProductIds.includes(product.id));
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Item in cart</h1>
            <div className="boxCart">
                {productData.map((product)=>(
                    <figure key={product.id}>
                    <img src={product.imageUrl} alt={product.name}/>
                    <figcaption>
                        <dl>
                            <dt>{product.name}</dt>
                            <dd>
                                {product.detail}
                            </dd>
                            <dd>
                                <button type='button'
                                        onClick={()=>dispatch(removeFromCart(product.id))}>삭제</button>
                            </dd>
                        </dl>
                    </figcaption>
                    </figure>
                ))}
            </div>
            <footer>
                <p>
                    <button type='button'
                            onClick={()=>dispatch(clearAllItems())}>비우기</button>
                </p>
                {productData.length < 1 && (<div>
                   <BiCart/>
                   <p>
                    장바구니가 비었습니다.<br/>
                    카트에 항목을 추가하지 않았습니다.
                   </p>
                </div>)}
            </footer>
        </div>
    )
}