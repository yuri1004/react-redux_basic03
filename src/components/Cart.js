import {BiCart} from 'react-icons/bi';
import productList from '../productList.json';
import './Cart.css';

export default function Cart(){
    return (
        <div>
            <h1>Item in cart</h1>
            <div className="boxCart">
                {productList.products.map((product)=>(
                    <figure key={product.id}>
                    <img src={product.imageUrl} alt={product.name}/>
                    <figcaption>
                        <dl>
                            <dt>{product.name}</dt>
                            <dd>
                                {product.detail}
                            </dd>
                            <dd>
                                <button type='button'>삭제</button>
                            </dd>
                        </dl>
                    </figcaption>
                    </figure>
                ))}
            </div>
            <footer>
                <p>
                    <button type='button'>비우기</button>
                </p>
                <div>
                   <BiCart/>
                   <p>
                    장바구니가 비었습니다.<br/>
                    카트에 항목을 추가하지 않았습니다.
                   </p>
                </div>
            </footer>
        </div>
    )
}