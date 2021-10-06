import React from "react";
import "./About.css";
import Container from "@material-ui/core/Container";
import Grid from "@mui/material/Grid";
import cleanImage from "./towel.jpg";

const styles = {
	container: {
		paddingLeft: 0,
		paddingRight: 0,
	},
};

export default function BasicTable() {
	return (
		<Grid>
			<div className="paperContainer">
				<img src={cleanImage} alt="Cleaning" />

				<h1 className="display-4">
					ABOUT <span id="spanTitle">US </span>{" "}
				</h1>
				<p className="lead">
					{" "}
					My company is here to provide you the best solution possible.
				</p>
			</div>
			<br></br>

			<br></br>
			<Container className="container">
				<p className="aboutUs">
					{" "}
					Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor
					sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet,
					consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur
					adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing
					elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum
					dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet,
					consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur
					adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing
					elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum
					dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet,
					consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur
					adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing
					elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum
					dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet,
					consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur
					adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit{" "}
				</p>
			</Container>
			<br></br>

			<br></br>
			<br></br>
		</Grid>
	);
}
