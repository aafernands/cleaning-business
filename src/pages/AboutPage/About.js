import React from "react";
import "./About.css";
import Container from "@material-ui/core/Container";
import Grid from "@mui/material/Grid";
import cleanImage from "./towel.jpg";
import Divider from "@mui/material/Divider";
import { makeStyles } from "@material-ui/core/styles";
import logo from "./logo.png";
import "./About.css";

const useStyles = makeStyles((theme) => ({
	container: {
		paddingLeft: 20,
		paddingRight: 20,
	},
}));

export default function BasicTable() {
	const classes = useStyles();

	return (
		<Container className={useStyles.container}>
			<Grid>
				<div className="paperContainer">
					{/* <img src={cleanImage} alt="Cleaning" /> */}

					<h1 className="display-4">
						ABOUT <span id="spanTitle">US </span>{" "}
					</h1>
				</div>
				<Divider variant="middle" />

				<br></br>
				<br></br>
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
			</Grid>

			<div class="elfsight-app-1663a24b-88ce-4155-b5e5-602984121622"></div>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<img className="logoBottom" src={logo} alt="Logo" />
			<br></br>
			<br></br>
			<br></br>
			<br></br>
		</Container>
	);
}
