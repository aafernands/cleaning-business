import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box } from "@material-ui/core";

import "./HomePage.css";
import InfoCard from "./components/infoCard/infoCard";
import Particles from "react-particles-js";

const userStyles = makeStyles((theme) => ({
	root: {
		position: "relative",
		color: "white",
		background: "#000000ea;",
	},
	particles: {
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		// height: 620,
	},
	paragraph: {
		width: 500,
	},
}));

function Home() {
	const classes = userStyles();

	return (
		<div className={classes.root}>
			<Particles
				className={classes.particles}
				params={{
					particles: {
						number: {
							value: 70,
						},
					},
				}}
			>
				<h1>testing</h1>
			</Particles>
			<Box alignItems="center" justifyContent="center">
				<div className="home">
					<Grid
						container
						direction="column"
						justify="center"
						alignItems="center"
					>
							<InfoCard />
 						
					</Grid>
				</div>
			</Box>
		</div>
	);
}

export default Home;
