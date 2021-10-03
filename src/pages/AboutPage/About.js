import React from "react";
import "./About.css";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import cleanImage from "./clean-1.jpg";



export default function BasicTable() {

	return (
		<Container className={"container"}>
			<div>
				<section>
					<h1 className="display-4">
						ABOUT <span id="spanTitle">US </span>{" "}
					</h1>
					<p className="lead">
						{" "}
						I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.
					</p>
					<br></br>
				</section>
			</div>

			<Divider />
			<br></br>

			<br></br>
			<Container className="container">
				<div>
					<h3>Myinfo</h3>
				</div>

				<div>
					<img src={cleanImage} className="cleanImage" alt="Cleaning" />
					<p className="aboutUs">
						{" "}
						Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor
						sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet,
						consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur
						adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing
						elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem
						ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor
						sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet,
						consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur
						adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing
						elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem
						ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor
						sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet,
						consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur
						adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing
						elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem
						ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor
						sit amet, consectetur adipiscing elit{" "}
					</p>
				</div>
			</Container>
			<br></br>

			<br></br>
			<br></br>
		</Container>
	);
}
