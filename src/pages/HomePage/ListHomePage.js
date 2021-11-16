import * as React from "react";
import "./HomePage.css";
import Divider from "@mui/material/Divider";

export default function ListHomePage() {
	return (
		<div class="bloc2k">
			<br></br>
			<br></br>
			<h2> CLEANING SERVICES</h2>
			<br></br>
			<br></br> <Divider variant="middle" />
			<div class="contactInfo">
				<h3>Sofa Cleaning</h3>
				<h3>Mattress Cleaning</h3>
				<h3>Upholstery Cleaning</h3>
				<h3>Carpet Cleaning</h3>
				<h3>Mobile Car Wash</h3>
				<br></br>
				<br></br>
			</div>
		</div>
	);
}
