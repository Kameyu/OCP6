import "./utils/styles/index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Apropos from "./pages/Apropos";
import Header from "./components/Header";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="apropos" element={<Apropos />} />
				<Route path="*" element={<Error />} />
			</Routes>
			<Footer />
		</Router>
	</React.StrictMode>
);
