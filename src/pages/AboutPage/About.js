import React from "react";
import "./About.css";
import Container from "@material-ui/core/Container";
import Grid from "@mui/material/Grid";
import cleanImage from "./towel.jpg";
import Divider from "@mui/material/Divider";
import { makeStyles } from "@material-ui/core/styles";

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
					<p className="lead">
						{" "}
						My company is here to provide you the best solution possible.
					</p>
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
				<br></br>

				<br></br>
				<br></br>
			</Grid>
		</Container>
	);
}
