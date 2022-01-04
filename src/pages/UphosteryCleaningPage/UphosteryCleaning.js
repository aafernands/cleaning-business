import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@mui/material/Divider";
import Container from "@material-ui/core/Container";
import Grid from "@mui/material/Grid";
import logo from "./logo.png";
import couch from "./couch.jpeg";
import carWash from "./carWash.jpeg";
import Accordion from "./Accordion.js";

import upholstery from "./upholstery.jpeg";
import "./services.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const useStyles = makeStyles((theme) => ({
	container: {
		paddingLeft: 20,
		paddingRight: 20,
	},
	text: {
		padding: "20px 80px 20px 80px",
		fontFamily: "Raleway",
		textAlign: "justify",
		color: "rgb(0, 0, 0)",
	},
	textServices: {
		fontFamily: "Raleway",
	},
}));

export default function UphosteryCleaning() {
	const classes = useStyles();

	// const Item = styled()(({ theme }) => ({
	// 	...theme.typography.body2,
	// 	padding: theme.spacing(1),
	// 	textAlign: "center",
	// 	color: theme.palette.text.secondary,
	// }));

	const [value, setValue] = React.useState("one");

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Container>
			<div>
				<br></br>
				<br></br>

				<h1 className="display-4">UPHOLSTERY CLEANING</h1>
				<br></br>
				<br></br>
				<br></br>
			</div>
			<Grid>
				
			</Grid>
			<br></br>
			<br></br>

			<Grid container spacing={2}>
				<Grid
					style={{
						padding: 30,
					}}
					item
					xs={12}
					md={6}
					lg={4}
				>
					<div
						style={{
							minHeight: "60vh",
							display: "flex",
							justifyContent: "center",
						}}
					>
						<Card sx={{ maxWidth: 345 }}>
							<CardActionArea>
								<CardMedia
									component="img"
									height="140"
									src={couch}
									alt="couch"
								/>
								<CardContent>
									
									<p className="aboutUs" variant="body2" color="text.secondary">
										Eliminate dust, bed bugs (and their excrement), viruses,
										bacteria, dead skin and fungal spores through specialized
										equipment that uses industrial power pulsating vacuum
										equipped with HEPA filters and 11 times more powerful than a
										household vacuum cleaner. Our medical grade germicidal
										filter-free UV light technology deactivates the DNA of
										microorganisms including mites, bed bugs, bacteria, mold and
										other pathogens, to prevent their proliferation and leave
										your mattresses, carpets and furniture protected with our
										acaricide for up to 6 months
									</p>
								</CardContent>
							</CardActionArea>
						</Card>
					</div>
				</Grid>
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
