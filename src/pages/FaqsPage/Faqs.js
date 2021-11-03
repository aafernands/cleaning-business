import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "./Accordion.js";
import Divider from "@mui/material/Divider";
import Container from "@material-ui/core/Container";
import Grid from "@mui/material/Grid";
import logo from "./logo.png";
import "./services.css";

const useStyles = makeStyles((theme) => ({
	container: {
		paddingLeft: 20,
		paddingRight: 20,
	},
	display4: {
		fontFamily: "Poppins",
		color: "rgb(51, 51, 51)",
		fontSize: "40px",
		padding: "10px",
		margin: "0",
		textAlign: "center",
	},
}));

export default function Services() {
	const classes = useStyles();

	return (
		<Container className={useStyles.container}>
			<Grid>
				<br></br>
				<br></br>

				<h1 className={classes.display4}>
					FREQUENTLY ASKED <span id="spanTitle"> QUESTIONS </span>{" "}
				</h1>
				<br></br>
				<br></br>
				<br></br>

				<Divider variant="middle" />
				<br></br>
				<br></br>
				<div>
					<Accordion />
				</div>
			</Grid>
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
