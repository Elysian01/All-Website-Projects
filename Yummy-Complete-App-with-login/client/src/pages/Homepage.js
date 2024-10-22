import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import "./css/misc.css";
// import productsData from "../productsData";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { BASEURL } from "../config";

function Homepage() {
	const [products, setProducts] = useState([]);
	const [productsCards, setProductsCards] = useState([]);

	useEffect(() => {
		axios.get(BASEURL + "/products")
			.then((response) => {
				const data = response.data;
				setProducts(data);

				const cards = data.map((product) => (
					<ProductCard key={product.id} {...product} />
				));

				setProductsCards(cards);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, []);

	// console.log("Products:", products);
	// console.log("Cards:", productsCards);

	return (
		<div>
			<section className="landing-page" id="one">
				<Navbar boxShadow={false} />

				<div className="content">
					<div className="text-content">
						<h1 className="white text-center">
							It's not just food it's an{" "}
							<strong>Experience!</strong>
						</h1>
						<h4 className="white">
							The best delicious food that meet your needs,
							order now
						</h4>
						<div className="landing-page-button">
							<button className="order-now">
								<a href="#products">
									Order Now{" "}
									<i className="fa fa-arrow-right"></i>
								</a>
							</button>
						</div>
					</div>
				</div>
			</section>

			<br />
			<br />

			<div className="heading-center">
				<label className="hompage-heading">
					<b>Order Fresh Food</b>
				</label>
			</div>

			<section className="products-section">
				<div className="container">
					<div className="grid">{productsCards}</div>
				</div>
			</section>

			<br />
			<br />
			<br />
			<br />

			<Footer />
		</div>
	);
}

export default Homepage;
