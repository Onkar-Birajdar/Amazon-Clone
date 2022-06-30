import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
function App() {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="checkout">
                        <h1>Checkout</h1>
                    </Route>
                    <Route path="login">
                        <h1>Login</h1>
                    </Route>
                    <Route exact path="/" element={<Header />} />
                </Routes>
                <Header />
            </div>
        </Router>
    );
}

export default App;
