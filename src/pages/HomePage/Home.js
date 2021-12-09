import React from "react";
import Button from "@mui/material/Button";
import Container from "@material-ui/core/Container";
import "./HomePage.css";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import ListHomePage from "./ListHomePage";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import Carousel from "../../pages/HomePage/components/Carousel/Carousel";
import calendar from "./calendar.jpeg";
import truck from "./truck.jpeg";
import done from "./done.jpeg";

function SwipeableTextMobileStepper() {
	return (
		<Container>
			<div className="homeBox">
				<Grid container spacing={0}>
					<Grid item xs={12} md={8} lg={8}>
						<Carousel />
					</Grid>
					<Grid item xs={12} md={4} lg={4}>
						<ListHomePage />
					</Grid>
				</Grid>
			</div>
			<div class="howItWorksContainer">
				<Container>
					<br></br> <Divider variant="middle" />
					<h1>HOW IT WORKS</h1>
					<div class="block">
						{" "}
						<br></br>
						<br></br>
						<br></br>
						<img className="iconStyleCalendar" src={calendar} alt="Calendar" />
						<h4>SCHEDULE AN APPOINTMENT</h4>
						<Button
							href="https://squareup.com/appointments/book/8sbhitchkbxxoc/9X56AMMFQFXS6/start"
							variant="outlined"
						>
							BOOK ONLINE
						</Button>
						<br></br>
						<br></br>
					</div>
					<br></br>
					<br></br>
				</Container>
				<Container>
					<div class="block">
						{" "}
						<br></br>
						<br></br>
						<br></br>
						<br></br>
						<img className="iconStyleTruck" src={truck} alt="truck" />
						<br></br>
						<h4>OUR TEAM WIll COME TO YOU</h4>
						<br></br>
						<br></br>
					</div>
					<br></br>
					<br></br>
				</Container>
				<Container>
					<div class="block">
						{" "}
						<br></br>
						<br></br>
						<br></br>
						<br></br>
						<img className="iconStyleDone" src={done} alt="done" />
						<br></br>
						<br></br>
						<h4>AFTER 1-2 HOURS WE FINISH*</h4>
						<br></br>
						<br></br>
						<br></br>
					</div>
					<br></br>
					<br></br>
				</Container>
				<Divider variant="middle" />
				<br></br>
				<p className="covid">
					<HealthAndSafetyIcon className="covidIcon" />
					<br></br>
					The covid19 measures are well <br></br>
					respected: masks, gloves, protective slippers, distance
				</p>
				<br></br> <Divider variant="middle" />
				<br></br>
			</div>
			<br></br>
			<div class="elfsight-app-2364efd9-898d-48f0-a0b6-02ce3ce75c17">here</div>
			<p className="notes">
				*Depending on type of service. Click <a href="/about">here</a> for more
				info more here{" "}
			</p>
		</Container>
	);
}

export default SwipeableTextMobileStepper;
