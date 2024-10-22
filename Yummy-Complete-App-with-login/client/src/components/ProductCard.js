import "./css/card.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addtoCart } from "../store/cartSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";

function ProductCard(props) {
    const cartItems = useSelector(state=>state.cart.cart)
    const dispatch = useDispatch();
    let inCart = false;
    var numberOfItemsInCart = cartItems.length;
    for (var i = 0; i < numberOfItemsInCart; i++) {
        if (cartItems[i].id === props.id) {
            inCart = true;
            break;
        }
    }
    
    return (
        <div>
            <div className="card">
                <Link to='/product-detail' state={props}>
                    <img className="card__image" src={require(`../images/foods/${props.image}`)} />
                </Link>
                <div className="card__data">
                    <div className="card_info_container">
                        <Link to='/product-detail' state={props}>
                        <div className="card__info">
                            <h2>{props.title}</h2>
                            <p>{ props.description}</p>
                            </div>
                        </Link>

                        {/* {props.reorderBtn && <button onClick={() => dispatch(addtoCart(props))} className="add_to_cart">Reorder</button>} */}
                        {inCart && <button className="added_to_cart">Added ✔</button>}
                        {!inCart && !props.reorderBtn && <button onClick={() => dispatch(addtoCart(props))} className="add_to_cart">Add to Cart</button>}
                    </div>
                    <div className="rating">
                        <h3 className="card__price">₹{ props.price}</h3>
                        <br/><br/>
                        <i className="fa fa-star dark-red">({props.stats.rating})</i>
                    </div>
                </div>
                {/* </Link> */}
                </div>
        </div>
    )
}

export default ProductCard;