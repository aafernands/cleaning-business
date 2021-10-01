import React from "react";
import Accordion from "@mui/material/Accordion";
import Container from "@mui/material/Container";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { makeStyles } from "@material-ui/core/styles";
import "./Projects.css";

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
	thumbnail: {
		marging: "20px",
		padding: "20px",
		textAlign: "center",
		background: "#313131be",
		boxShadow: "2.5px 5px 4px #fff",
		color: "white",
	},
}));

function Projects(props) {
	const classes = useStyles();

	return (
		// Render a Thumbnail component
		<Container>
			{/* <h1>Projects</h1> */}
			<Grid container spacing={2}>
				<Accordion>
					<AccordionSummary
						expandIcon={<ArrowDropDownIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<Typography>Accordion 1</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
							eget.
						</Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary
						expandIcon={<ArrowDropDownIcon />}
						aria-controls="panel2a-content"
						id="panel2a-header"
					>
						<Typography>Accordion 2</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
							eget.
						</Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion disabled>
					<AccordionSummary
						expandIcon={<ArrowDropDownIcon />}
						aria-controls="panel3a-content"
						id="panel3a-header"
					>
						<Typography>Disabled Accordion</Typography>
					</AccordionSummary>
				</Accordion>
			</Grid>
		</Container>
	);
}

export default Projects;
