import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import Container from "@material-ui/core/Container";
import { autoPlay } from "react-swipeable-views-utils";
import "./HomePage.css";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import ListHomePage from "./ListHomePage";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import Carousel from "../../pages/HomePage/components/Carousel/Carousel";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
	{
		label: "",
		imgPath: "https://via.placeholder.com/300",
	},
	{
		label: "",
		imgPath: "https://via.placeholder.com/300",
	},
	{
		label: "",
		imgPath: "https://via.placeholder.com/300",
	},
	{
		label: "",
		imgPath: "https://via.placeholder.com/300",
	},
];

function SwipeableTextMobileStepper() {
	const theme = useTheme();
	const [activeStep, setActiveStep] = React.useState(0);
	const maxSteps = images.length;

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleStepChange = (step) => {
		setActiveStep(step);
	};

	return (
		<Container>
			<br></br>
			<Divider variant="middle" />
			<br></br>
			<Grid container spacing={2}>
				<Grid item xs={12} md={8} lg={8}>
					<Carousel />
				</Grid>

				<Grid item xs={12} md={4} lg={4}>
					<ListHomePage />
				</Grid>
			</Grid>
			<br></br>
			<div class="howItWorksContainer">
				<br></br>
				<Container>
					<br></br> <Divider variant="middle" />
					<h1>HOW IT WORKS</h1>
					<div class="block">
						{" "}
						<br></br>
						<br></br>
						<br></br>

						<CalendarTodayIcon fotnSize="iconStyle" />
						<br></br>
						<h4>SCHEDULE AN APPOINTMENT</h4>
						<Button href="tel:+9738363080" variant="outlined">
							CALL US
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
						<LocalShippingIcon fotnSize="iconStyle" />
						<br></br>
						<h4>OUR TEAM WITH COME TO YOU</h4>
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

						<AssignmentTurnedInIcon fotnSize="iconStyle" />
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
					<HealthAndSafetyIcon />
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
