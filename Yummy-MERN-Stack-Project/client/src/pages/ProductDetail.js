import "./css/misc.css";
import Navbar from "../components/Navbar";
import { useLocation } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { addtoCart } from "../store/cartSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useEffect, useState } from "react";

function ProductDetail() {
    const dispatch = useDispatch()
    const location = useLocation()
    const props = location.state

    // check whether the product is already present in the cart or not => to show "added" or "add to cart" btn
    const cartItems = useSelector(state=>state.cart.cart)
    let inCart = false;
    var numberOfItemsInCart = cartItems.length;
    for (var i = 0; i < numberOfItemsInCart; i++) {
        if (cartItems[i].id === props.id) {
            inCart = true;
            break;
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, ["/product-detail"]);

    const defaultReview = [{
        "star": 5,
        "message": "Best Dish i have ever eaten, highly recommended 🤤😍😍"
    }]
    
    const [star, setStar] = useState("");
    const [message, setMessage] = useState("");
    const [reviews, setReview] = useState(defaultReview);

    function reviewSubmitted() {
        let starValue = star;
        if (star > 5)
            starValue = 5
        if (star < 0)
            starValue = 1
        const review = {"star":starValue, "message": message}
        setReview(prevReviews => [...prevReviews, review]);
        setStar("");
        setMessage("");
    }


   

    return (
        <div>
            <Navbar boxShadow={ true } />
            
            <div className="pd-wrap">
                <div className="container">
            
                    <div className="row">
                        <div className="col-md-6">
                            <div className="product-img-parent">
                                <img className = "product-img"
                                    src={require(`../images/foods/${props.image}`)} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="product-dtl">
                                <div className="product-info">
                                    <div className="product-name">{props.title}</div>
                                    <div className="reviews-counter">
                                        <div className="rate">
                                            <span className="rating">
                                                <i className="fa fa-star dark-red fa-2xl">({props.stats.rating})</i>
                                            </span>
                                        </div>
                                        <span>{props.stats.reviewCount} Reviews</span>
                                    </div>
                                    <div className="product-price-discount"><span>₹{ props.price}</span>
                                    </div>
                                </div>
                                <p> { props.info }</p>
                                
                                <div className="product-count">
                                    {/* <label for="size">Quantity</label>
                                    <form action="#" className="display-flex">
                                        <div className="qtyminus">-</div>
                                        <input type="text" name="quantity" value="1" className="qty" />
                                        <div className="qtyplus">+</div>
                                    </form> */}
                                    {inCart && <button className="added_to_cart_details">Added ✔</button>}
                                    {!inCart && !props.reorderBtn &&
                                        <button onClick={() => dispatch(addtoCart(props))} className="round-black-btn">Add to Cart</button>}
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    <br /><br />
                    <div className="product-info-tabs">
                        <div className="review-heading">Reviews</div>
                        
                        {
                            reviews.map((review, i) => (
                                <div key={i} className="review">
                                <span className="review-star">
                                    <i className="fa fa-star gold"> ({review.star})</i>
                                </span>
                                <span className="review-message">
                                    {review.message}
                                </span>
                                </div>
                            ))
                        }


                        <hr />
                        <div className="review-subheading">Add Your Review</div>
                        <div className="review-form">
                            <div className="form-group">
                                <label>Your rating</label>
                                <div className="reviews-counter">
                                    {/* <div className="rate">
                                        <input type="radio" id="star5" name="rate" value="5" onClick={(e) => setStar(e.target.value)} />
                                        <label for="star5" title="text">5 stars</label>
                                        <input type="radio" id="star4" name="rate" value="4" onClick={(e) => setStar(e.target.value)}/>
                                        <label for="star4" title="text">4 stars</label>
                                        <input type="radio" id="star3" name="rate" value="3" onClick={(e) => setStar(e.target.value)}/>
                                        <label for="star3" title="text">3 stars</label>
                                        <input type="radio" id="star2" name="rate" value="2" onClick={(e) => setStar(e.target.value)}/>
                                        <label for="star2" title="text">2 stars</label>
                                        <input type="radio" id="star1" name="rate" value="1" onClick={(e) => setStar(e.target.value)}/>
                                        <label for="star1" title="text">1 star</label>
                                    </div> */}
                                    <div className="form-group">
                                        <input
                                            min="1" max="5"
                                            type="number" className="review-rating" defaultValue={star}
                                            onChange={(e) => setStar(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <label>Your message</label>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="form-control" rows="10"></textarea>
                            </div>
                            {/* <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" name="" className="form-control" placeholder="Name*" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" name="" className="form-control" placeholder="Email Id*" />
                                    </div>
                                </div>
                            </div> */}
                            <button className="round-black-btn float-right" onClick={reviewSubmitted}>Submit Review</button>
                        </div>
                    </div>
                </div>
            </div>


            <br/><br/><br/><br/>
        </div>
    )
}

export default ProductDetail;