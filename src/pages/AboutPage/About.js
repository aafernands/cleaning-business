import React from "react";
import "./About.css";
import CV_PDF from "./components/AlexFernandes_Resume.pdf";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";

import cleanImage from "./clean-1.jpg";

import LinearProgressWithLabel from "./components/LinearProgressWithLabel";

const useStyles = makeStyles({
	root: {
		color: "white",
		background: "#000000ea;",
		height: "76vh",
	},
	table: {
		minWidth: 650,
		backgroundColor: "#313131be",
		color: "white",
	},
	tableDiv: {
		padding: 30,
	},
	skill: {
		width: "100%",
		fontFamily: "Raleway",
		fontSize: "12px",
	},
	tableContent: {
		color: "white",
		fontFamily: "Raleway",
		fontSize: "12px",
		textAlign: "left",
		padding: "10px",
	},
});

function createData(dates, work) {
	return { dates, work };
}
const rows = [
	createData(
		"2010-2013	",
		"Lorem ipsum dolor quisquam minus dignissimos sit elit."
	),
	createData(
		"2013-2015",
		"Assumenda quisquam minus dignissimos cupiditate facere odit. Laborum consequuntur, cupiditate. Dolores aspernatur illo doloremque."
	),
	createData(
		"2015-2029",
		"Lorem ipsum dolor sit aliquam nihil amet! amet consectetur adipisicing elit."
	),
	createData("2020-present", "Started Coding Bootcamp at Rutgers."),
];

export default function BasicTable() {
	const classes = useStyles();

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
