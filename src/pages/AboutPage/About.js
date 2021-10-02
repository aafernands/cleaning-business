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
			{/* <div className="test">
				<h3>Work Experience</h3>

				<TableContainer>
					<Table className={classes.table} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell className={classes.tableContent}>Dates</TableCell>
								<TableCell className={classes.tableContent} align="right">
									Work
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row) => (
								<TableRow key={row.dates}>
									<TableCell
										className={classes.tableContent}
										component="th"
										scope="row"
									>
										{row.dates}
									</TableCell>
									<TableCell className={classes.tableContent} align="right">
										{row.work}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div> */}

			<Divider />
			<br></br>
			<div className="test">
				<h3>Skils</h3>

				<div className={classes.skill}>
					<LinearProgressWithLabel label="React" value={60} />
					<LinearProgressWithLabel label="Javascript" value={60} />
					<LinearProgressWithLabel label="HTML and CSS" value={80} />
					<LinearProgressWithLabel label="MongoDB" value={60} />
					<LinearProgressWithLabel label="Material-UI" value={80} />
					<LinearProgressWithLabel label="JWT" value={70} />
					<LinearProgressWithLabel label="Bootstrap" value={80} />
				</div>
			</div>
			<br></br>
			<div className="test">
				<div>
					<h3>Myinfo</h3>
				</div>

				<div className={classes.skill}>
					<p>First Name: Alex</p>
					<p>Last Name: Fernandes</p>
					<p>Birthdate: 04 April 1987</p>
					<p>Nationality: Brazilian</p>
					<p>Experience: Entry Level</p>
					<p>Address: New Jersey, US</p>
					<p>Freelance: Available</p>
					<p>Languages: English - Portuguese</p>
					<p>Phone: 9738363080</p>
					<p>Email: alexfernands@outlook.com</p>
					<p>GitHub: aafernands</p>
					<p>Twitter: alexafernands</p>
				</div>
			</div>
			<br></br>
			<div className="test">
				<Button
					size="large"
					style={{ fontSize: 12, padding: 18 }}
					variant="contained"
					color="primary"
					href={CV_PDF}
					position="center"
				>
					DOWNLOAD MY CV
				</Button>
			</div>
			<br></br>
			<br></br>
		</Container>
	);
}
