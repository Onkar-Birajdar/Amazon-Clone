import React from "react";
import "./Subtotal.css";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../reducer";


function Subtotal() {
    const navigate = useNavigate();
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            {/* {pull the subtotal from the value} */}
                            Subtotal ({basket?.length} items):
                            <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />
                            This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                // {pull the value}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button onClick={e => navigate("/payment")}>Proceed to checkout</button>
        </div>
    );
}

export default Subtotal;
