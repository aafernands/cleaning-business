import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Particles from "react-particles-js";

const userStyles = makeStyles((theme) => ({
	root: {
		position: "relative",
		color: "white",
		background: "#000000ea;",
		height: "76vh",
	},
	particles: {
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		// height: 620,
	},
	message: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
}));
export default function Submitted() {
	const classes = userStyles();

	return (
		<Container className={classes.root}>
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
			<h1
				style={{
					display: "flex",
					textAlign: "center",
					justifyContent: "center",
					position: "absolute",
					left: "50%",
					top: "50%",
					transform: "translate(-50%, -50%)",
				}}
			>
				THANK YOU FOR CONTACTING ME!
			</h1>{" "}
			<span>
				<p
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						position: "absolute",
						left: "50%",
						top: "65%",
						transform: "translate(-50%, -50%)",
					}}
					className="lead"
				>
					{" "}
					I WILL GET BACK TO YOU AS SOON AS POSSIBLE{" "}
				</p>
			</span>
		</Container>
	);
}
