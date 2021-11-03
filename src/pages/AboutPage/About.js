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

const useStyles = makeStyles((theme) => ({
	container: {
		paddingLeft: 20,
		paddingRight: 20,
	},
	avatar: {
		width: theme.spacing(50),
		height: theme.spacing(50),
		margin: theme.spacing(1),
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
		boxShadow: "0 0 5px #0000005e",
		color: "rgb(0, 0, 0)",
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
							Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum
							dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit
							amet, consectetur adipiscing elitLorem ipsum dolor sit amet,
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
							ipsum dolor sit amet, consectetur adipiscing elit{" "}
						</p>{" "}
					</div>
				</Grid>

				<Grid className={classes.avatarBox} item xs={12} lg={6}>
					{" "}
					<Avatar className={classes.avatar} src={Logo} alt="Alex" />
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
