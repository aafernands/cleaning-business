import React from "react";
import "./About.css";
import Container from "@material-ui/core/Container";
import cleanImage from "./clean-1.jpg";
import Image from "./towel.jpg"; // Import using relative path

const styles = {
	paperContainer: {
		backgroundImage: `url(${Image})`,
		flexGrow: 1,
		width: "100%",
		height: 200,
		margin: 0,
		alignItems: "center",
		justifyContent: "center",
	},
};

export default function BasicTable() {
	return (
		<div className={"container"}>
			<div style={styles.paperContainer}>
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
		</div>
	);
}
