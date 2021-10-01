import React from "react";
import "./services.css";
import "./services.css";
import Accordion from "./Accordion.js";

export default function Services() {
	return (
		<div className="container">
			<h1 className="display-4">SERVICES</h1>
			<p className="lead">
				{" "}
				<i>HERE YOU CAN HAVE A GLIMPSE OF MY WORK </i>
			</p>
			<div>
				<Accordion />
			</div>
		</div>
	);
}
