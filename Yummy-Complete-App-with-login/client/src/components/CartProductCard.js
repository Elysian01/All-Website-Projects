import "./css/cart.css";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/cartSlice";
import { changeQuantity } from "../store/cartSlice";

function CartProductCard(props) {
    const dispatch = useDispatch();

    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value, 10); // Parse the value as an integer
        var product = { ...props }
        product['quantity'] = newQuantity
        dispatch(changeQuantity(product));
    };
    return (
        <div className="product">
            <div className="product-image">
                <img src={require(`../images/foods/${props.image}`)} alt="product" />
            </div>
            <div className="product-details">
                <h2 className="product-title">{props.title}</h2>
                <p className="product-description">{ props.description}</p>
            </div>
            <h5 className="product-price">{ props.price}</h5>
            <div className="product-quantity">
                <input onChange={handleQuantityChange}
                    name="qty" type="number" defaultValue="1" min="1" />
            </div>
            <div className="product-removal">
                <button onClick={() => dispatch(removeFromCart(props))}
                    className="remove-product">
                    {/* <i className="fa fa-trash"></i>    */}
                    Remove
                </button>
            </div>
            <h5 className="product-line-price">{ props.total_price}</h5>
        </div>
    )
}

export default CartProductCard;