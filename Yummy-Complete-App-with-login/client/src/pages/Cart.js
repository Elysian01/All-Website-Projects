import Navbar from "../components/Navbar";
import CartProductCard from "../components/CartProductCard";
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Link } from "react-router-dom";


function Cart() {
    const cartItems = useSelector(state => state.cart.cart)
    var total_amount = useSelector(state => state.cart.total_amount)
    
    const cartProductItems = cartItems.map(item => {
        return (
            <CartProductCard key={item.id} {...item} />
        )
    })
    let showCart = false;
    if (cartItems.length > 0) {
        showCart = true;
    }

    return (
        <div>
            <Navbar boxShadow={true} />
            
            <br />
            

            {/* <br/><br/><br/> */}
            {!showCart && (
                <div className="cart-head text-center">
                <label className="text-dark" style={{ fontSize: "34px" }}>
                    <b>Your food bucket is empty, <Link to="/"><u style ={{color: "blue"}}>Shop Now</u></Link></b>
                </label>
            </div>
            )}
            {showCart && (
                <div className="container">
                    <div className="cart-head text-center">
                        <label className="text-dark" style={{ fontSize: "34px" }}>
                            <b>Food Bucket</b>
                        </label>
                    </div>
                    <br/><br/><br/>
                    <div className="shopping-cart">
                    
                        <div className="column-labels">
                            <label className="product-image">Image</label>
                            <label className="product-details">Product</label>
                            <label className="product-price">Price</label>
                            <label className="product-quantity">Quantity</label>
                            <label className="product-removal">Remove</label>
                            <label className="product-line-price">Total</label>
                        </div>

                        {cartProductItems}
                    
                        <div className="totals">
                            <div className="totals-item">
                                <label>Subtotal</label>
                                <h5 className="totals-value" id="cart-subtotal">{ total_amount }</h5>
                            </div>
                            {/* <div className="totals-item">
                                <label>Tax (5%)</label>
                                <h5 className="totals-value" id="cart-tax">1.00</h5>
                            </div> */}
                            <div className="totals-item">
                                <label>Shipping</label>
                                <h5 className="totals-value" id="cart-shipping">15.00</h5>
                            </div>
                            <div className="totals-item totals-item-total">
                                <label style={{ fontSize: "large" }}><b>Grand Total</b></label>
                                <h4 className="totals-value" id="cart-total"><b>{ total_amount + 15 }</b></h4>
                            </div>
                        </div>
                    
                        <button className="checkout">Checkout</button>
                    
                    </div>
                </div>
            )}
        </div>
    )
}

export default Cart;