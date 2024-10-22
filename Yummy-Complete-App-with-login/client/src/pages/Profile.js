import React from "react";
import "./css/misc.css"
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import ProductCard from "../components/ProductCard";
import RECENTORDERS from "../recentOrders";

function Profile() {

    const [recentOrders, setRecentOrders] = React.useState(RECENTORDERS)

    const recentOrdersCards = recentOrders.map(product => {
        return <ProductCard key={product.id} {...product} />
    })


    return (
        <div>
            <Navbar boxShadow={ true } />
            
            <section>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="card col-8" style={{ width: "18rem", height: "31rem" }}>
                            <ProfileCard />
                        </div>
                        <br /><br />
                        <div className="orders col-8">
                            <br />
                            <h2 className = "text-center">Recent Orders</h2>
                            <div className="grid-3">
                                {recentOrdersCards}                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <br/><br/><br/>
        </div>
    )
}

export default Profile;