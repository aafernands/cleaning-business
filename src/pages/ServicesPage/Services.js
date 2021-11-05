import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "./Accordion.js";
import Divider from "@mui/material/Divider";
import Container from "@material-ui/core/Container";
import Grid from "@mui/material/Grid";
import logo from "./logo.png";
import couch from "./couch.jpeg";
import "./services.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

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

	return (
		<Container className={useStyles.container}>
			<Grid container spacing={2}>
				<Grid item xs={12} lg={12}>
					{" "}
					<br></br>
					<br></br>
					<br></br>
					<h1 className="display-4">SERVICES</h1>
					<br></br>
					<br></br>
					<br></br>
					<div className={classes.text}>
						<p className="aboutUs">
							{" "}
							New Shine Pro Cleaning Services LLC is fully insured and provices
							detailed cleaning services to residential and comercial properties
							in Central Jersey area.
						</p>
					</div>
					<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia component="img" height="140" src={couch} alt="couch" />
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
					<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia component="img" height="140" src={couch} alt="couch" />
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									Vehicle Interior Washing
								</Typography>
								<Typography variant="body2" color="text.secondary">
									We leave your car like new, show off the interiors of your
									car! with our #Interior Wash packages for your vehicle! All
									without leaving your place of work or home! 😉 Quote any
									commitment from our package. We have two packages for your
									car: 👌Basic Package: Disinfection and Clothes Washing.
									⚡PREMIUM Package: Disinfection, laundry, headliner, carpet,
									dashboard, belts, trim and trunk.
									Duration Varies Price varies
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
					<br></br>
					<br></br>
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
