import React, {useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { auth } from "./firebase";
import { db } from "./firebase";
import { useStateValue } from "./StateProvider";

import Header from "./components/Header/Header";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
function App() {
    const [{}, dispatch] = useStateValue();
   
    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            console.log(authUser);
            if (authUser) {
                console.log("User is logged in");
                dispatch({
                    type: "SET_USER",
                    user: authUser,
                })
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
                        path="/checkout"
                        element={[<Header />, <Checkout />]}
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
