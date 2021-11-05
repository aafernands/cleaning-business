import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "./Accordion.js";
import Divider from "@mui/material/Divider";
import Container from "@material-ui/core/Container";
import Grid from "@mui/material/Grid";
import logo from "./logo.png";
import couch from "./couch.jpeg";
import carWash from "./carWash.jpeg";
import upholstery from "./upholstery.jpeg";
import "./services.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

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
}));

export default function Services() {
	const classes = useStyles();

	// const Item = styled()(({ theme }) => ({
	// 	...theme.typography.body2,
	// 	padding: theme.spacing(1),
	// 	textAlign: "center",
	// 	color: theme.palette.text.secondary,
	// }));

	return (
		<Container>
			<div>
				<br></br>
				<br></br>

				<h1 className="display-4">SERVICES</h1>
				<br></br>
				<br></br>
				<br></br>
			</div>
			<Grid>
				<div className={classes.text}>
					<p className="aboutUs">
						{" "}
						New Shine Pro Cleaning Services LLC is fully insured and provices
						detailed cleaning services to residential and comercial properties
						in Central Jersey area.
					</p>
				</div>
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
					{" "}
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
									<Typography gutterBottom variant="h5" component="div">
										Dry disinfection
									</Typography>
									<Typography variant="body2" color="text.secondary">
										30 minutes and up Eliminate dust, mites (and their
										excrement), viruses, bacteria, dead skin and fungal spores
										through specialized equipment that uses industrial power
										pulsating vacuum equipped with HEPA filters and 11 times
										more powerful than a household vacuum cleaner. Our medical
										grade germicidal filter-free UV light technology deactivates
										the DNA of microorganisms including mites, bed bugs,
										bacteria, mold and other pathogens, to prevent their
										proliferation and leave your mattresses, carpets and
										furniture protected with our acaricide for up to 6 months
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</div>
				</Grid>
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
									src={carWash}
									alt="couch"
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										Vehicle Dry Washing
									</Typography>
									<Typography variant="body2" color="text.secondary">
										We leave your car like new, show off the interiors of your
										car! with our #Interior Wash packages for your vehicle! All
										without leaving your place of work or home! 😉 Quote any
										commitment from our package. We have two packages for your
										car: 👌Basic Package: Disinfection and Clothes Washing.
										⚡PREMIUM Package: Disinfection, laundry, headliner, carpet,
										dashboard, belts, trim and trunk. Duration Varies Price
										varies
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</div>
				</Grid>

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
									<Typography gutterBottom variant="h5" component="div">
										Deep washing service
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Always accompanied by our dry disinfection process, it is
										ideal for removing difficult stains, bad smells and fungi
										present in your mattresses, carpets or furniture, recovering
										its color with an unmatched aesthetic and aroma. We use
										specialized and hypoallergenic products, steam equipment and
										state-of-the-art injection and suction. We guarantee the
										quality of our services by leaving your mattresses, carpets
										and furniture completely dry and ready to use.
									</Typography>
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
