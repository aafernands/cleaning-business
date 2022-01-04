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

export default function CarpetCleaning() {
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

				<h1 className="display-4">CARPET CLEANING</h1>
				<br></br>
				<br></br>
				<br></br>
			</div>

			<br></br>
			<br></br>

			<Grid container spacing={2}>
				<Grid item xs={12} md={6} lg={4}>
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
									src={upholstery}
									alt="couch"
								/>
								<CardContent>
									<p className="aboutUs" variant="body2" color="text.secondary">
										Always accompanied by our dry disinfection process, it is
										ideal for removing difficult stains, bad smells and fungi
										present in your mattresses, carpets or furniture, recovering
										its color with an unmatched aesthetic and aroma. We use
										specialized and hypoallergenic products, steam equipment and
										state-of-the-art injection and suction. We guarantee the
										quality of our services by leaving your mattresses, carpets
										and furniture completely dry and ready to use.
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
