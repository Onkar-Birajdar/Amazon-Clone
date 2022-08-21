import React from "react";
import { useStateValue } from "../../StateProvider";
import { Link } from "react-router-dom";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import "./Payment.css";
function Payment() {
    const [{ basket, user }] = useStateValue();

    return (
        <div className="payment">
            <div className="payment__container">
                <h2>
                    Checkout <Link to="/checkout">{basket?.length} Items</Link>{" "}
                </h2>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>

                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    {/* {Product Will show here} */}
                    <div className="checkout__items">
                        {basket.map((item) => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details"></div>
                </div>
            </div>
        </div>
    );
}

export default Payment;
