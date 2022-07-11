import React from "react";
import "./Subtotal.css";
import { useStateValue } from "../../StateProvider";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../reducer";

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            {/* {pull the subtotal from the value} */}
                            Subtotal ({basket?.length} items):
                            <strong>{getBasketTotal(basket)}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />
                            This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                // {pull the value}
                value={0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Proceed to checkout</button>
        </div>
    );
}

export default Subtotal;
