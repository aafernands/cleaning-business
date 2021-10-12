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
import InstagramEmbed from "react-instagram-embed";

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
			<br></br> <Divider variant="middle" />
			<Grid container spacing={2}>
				<Grid item lg={6} md={6} xs={12}>
					<Box sx={{ maxWidth: 500, flexGrow: 1 }}>
						<AutoPlaySwipeableViews
							axis={theme.direction === "rtl" ? "x-reverse" : "x"}
							index={activeStep}
							onChangeIndex={handleStepChange}
							enableMouseEvents
						>
							{images.map((step, index) => (
								<div key={step.label}>
									{Math.abs(activeStep - index) <= 2 ? (
										<Box
											component="img"
											sx={{
												height: 400,
												display: "block",
												maxWidth: 500,
												overflow: "hidden",
												width: "100%",
											}}
											src={step.imgPath}
											alt={step.label}
										/>
									) : null}
								</div>
							))}
						</AutoPlaySwipeableViews>
						<MobileStepper
							steps={maxSteps}
							position="static"
							activeStep={activeStep}
							nextButton={
								<Button
									size="small"
									onClick={handleNext}
									disabled={activeStep === maxSteps - 1}
								>
									Next
									{theme.direction === "rtl" ? (
										<KeyboardArrowLeft />
									) : (
										<KeyboardArrowRight />
									)}
								</Button>
							}
							backButton={
								<Button
									size="small"
									onClick={handleBack}
									disabled={activeStep === 0}
								>
									{theme.direction === "rtl" ? (
										<KeyboardArrowRight />
									) : (
										<KeyboardArrowLeft />
									)}
									Back
								</Button>
							}
						/>
					</Box>
				</Grid>

				<Grid item xs={12} lg={6}>
					<ListHomePage />

					{/* <div class="contactInfo">
						<br></br>
						<h1>Our Cleaning Services</h1>
						<h4>Couches</h4>
						<h4>Chairs</h4>
						<h4>Mattress</h4>
						<h4>Armchair</h4>
					</div> */}
				</Grid>
			</Grid>
			<br></br>
			<br></br>
			<div class="elfsight-app-2364efd9-898d-48f0-a0b6-02ce3ce75c17">here</div>
		</Container>
	);
}

export default SwipeableTextMobileStepper;
