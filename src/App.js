import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { auth } from "./firebase";
import { db } from "./firebase";
import { useStateValue } from "./StateProvider";

import Header from "./components/Header/Header";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Payment from "./components/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements} from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51LZF1LSHwP10zuQSha4t2gTIDDxqH7Nwrl06xKTM0hGwHjUw5dEFw6Z8zgZAKACpY9EvLUvuGW7PQxYqiL1NlK4q003ofxQDQv"
);

function App() {
    const [{}, dispatch] = useStateValue();

    // const stripe = useStripe();	    
    // const elements = useElements();

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            console.log(authUser);
            if (authUser) {
                console.log("User is logged in");
                dispatch({
                    type: "SET_USER",
                    user: authUser,
                });
            } else {
                console.log("User is logged out");
                dispatch({
                    type: "SET_USER",
                    user: null,
                });
            }
        });
    }, []);
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route
                        exact
                        path="/checkout"
                        element={[<Header />, <Checkout />]}
                    ></Route>
                    <Route
                        
                        path="/payment"
                        element={[
                            <Header />,
                            <Elements stripe={promise}>
                                <Payment />
                            </Elements>,
                        ]}
                    ></Route>
                    <Route exact path="login" element={<Login />}></Route>
                    <Route
                        exact
                        path="/"
                        element={[<Header />, <Home />]}
                    ></Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
