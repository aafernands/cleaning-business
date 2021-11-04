import React from "react";
import "./About.css";
import Container from "@material-ui/core/Container";
import Grid from "@mui/material/Grid";
import cleanImage from "./towel.jpg";
import Divider from "@mui/material/Divider";
import { makeStyles } from "@material-ui/core/styles";
import logo from "./logo.png";
import "./About.css";
import { Link } from "react-router-dom";
import { Box, Avatar, Typography } from "@material-ui/core";
import Logo from "./alex.png";
import Image from "./image.png";

const useStyles = makeStyles((theme) => ({
	container: {
		paddingLeft: 20,
		paddingRight: 20,
	},
	avatar: {
		width: theme.spacing(40),
		height: theme.spacing(40),
		margin: theme.spacing(1),
	},
	image: {
		width: theme.spacing(40),
		height: theme.spacing(40),
		margin: theme.spacing(9),
	},
	avatarBox: {
		fontFamily: "Raleway",
		textAlign: "justify",
		color: "rgb(0, 0, 0)",
		justifyContent: "center",
		display: "flex",
	},
	facebookBox: {
		fontFamily: "Raleway",
		color: "rgb(0, 0, 0)",
		justifyContent: "center",
		display: "flex",
		boxShadow: "0 0 5px #0000005e",
	},
	contactBox: {
		padding: "20px 80px 20px 80px",
		fontFamily: "Raleway",
		textAlign: "justify",
		// boxShadow: "0 0 5px #0000005e",
		color: "rgb(0, 0, 0)",
		justifyContent: "center",
		display: "flex",
	},
}));

export default function BasicTable() {
	const classes = useStyles();

	return (
		<Container className={useStyles.container}>
			<div className="paperContainer">
				<br></br>
				<br></br>
				<h1 className="display-4">
					ABOUT <span id="spanTitle">US </span>{" "}
				</h1>
			</div>
			<br></br>
			<br></br>
			<br></br>

			<Grid container spacing={2}>
				<Grid item xs={12} lg={6}>
					<div className={classes.contactBox}>
						<p className="aboutUs">
							{" "}
							<h2>Our Company</h2>
							<br></br>
							New Shine Pro is a company that provides ultimate cleaning
							solutions. We serve in Central New Jersey area. Our vision is to
							offer a high quality service and create clean environments with
							the highest sanitary standards, as well as to establish memorable
							relationships with our clients.
							<br></br>
							<br></br>
							From your home to your office at New Shine Pro we offer an
							exclusive range of cleaning services.
							<br></br>
							<br></br>
							We are characterized by teamwork and trained professionals. This
							allows us to provide the best possible service and meet all the
							needs of our customers.
							<h4>**We are fuly insured</h4>
							<br></br>
							<br></br>
							{/* <h2>Meet Our Team</h2>
							<br></br>
							<br></br>
							<Avatar className={classes.avatar} src={Logo} alt="Alex" />
							<br></br>
							<br></br>
							<h4> Alex Fernandes </h4>
							<br></br>
							<br></br>
							<Avatar className={classes.avatar} src={Logo} alt="Alex" />
							<br></br>
							<br></br>
							<h4> David Tawil </h4>
							<br></br>
							<br></br> */}
						</p>{" "}
					</div>
				</Grid>

				<Grid className={classes.avatarBox} item xs={12} lg={6}>
					{" "}
					<Avatar className={classes.image} src={Image} alt="Alex" />
				</Grid>
			</Grid>
			<br></br>
			<br></br>
			<Grid className={classes.facebookBox} item xs={12} lg={12}>
				<div class="elfsight-app-1663a24b-88ce-4155-b5e5-602984121622"></div>
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
