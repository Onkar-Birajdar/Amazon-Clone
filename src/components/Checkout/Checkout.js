import React from "react";
import "./Checkout.css";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";

import Subtotal from "../Subtotal/Subtotal.js";

function Checkout({ id, title, image, price, rating }) {
    const [{ basket,user } ] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt="amazon"
                />

                {basket?.length === 0 ? (
                    <div>
                        <h3>Hello, {user?.email}</h3>
                        <h2>Your Shopping Basket is empty</h2>
                        <p>
                            You have no items in your basket. To buy one or more
                            items, click "Add to Basket" next to the item.
                        </p>
                    </div>
                ) : (
                    <div>
                        <h2 className="checkout__title">
                            Your Shopping Basket
                        </h2>

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
                )}
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    );
}

// eslint-disable-next-line no-lone-blocks

export default Checkout;
