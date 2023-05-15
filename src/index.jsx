import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import Error from "./pages/Error/error";
import Apropos from "./pages/Apropos/apropos";
import Logement from "./pages/Logement/logement"
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="apropos" element={<Apropos />} />
				<Route exact path="logement/:id" element={<Logement/>} />
				<Route path="404" element={<Error />} />
				<Route path="*" element={<Error />} />
			</Routes>
			<Footer />
		</Router>
	</React.StrictMode>
);
