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
	text: {
		padding: "20px 80px 20px 80px",
		fontFamily: "Raleway",
		textAlign: "justify",
		color: "rgb(0, 0, 0)",
	},
}));

export default function Services() {
	const classes = useStyles();

	return (
		<Container className={useStyles.container}>
			<Grid container spacing={2}>
				<Grid item xs={12} lg={12}>
					{" "}
					<br></br>
					<br></br>
					<br></br>
					<h1 className="display-4">SERVICES</h1>
					<br></br>
					<br></br>
					<br></br>
					<div className={classes.text}>
						<p className="aboutUs">
							{" "}
							New Shine Pro Cleaning Services LLC is fully insured and provices
							detailed cleaning services to residential and comercial properties
							in Central Jersey area.
						</p>
					</div>
					<br></br>
					<br></br>
					<div>
						<Accordion />
					</div>
				</Grid>
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
