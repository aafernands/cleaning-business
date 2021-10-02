import Logo from "./alex.png";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Avatar, Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Container from "@material-ui/core/Container";

import Typical from "react-typical";

const userStyles = makeStyles((theme) => ({
	root: {
		position: "relative",
	},
	avatar: {
		// position: "absolute",
		// bottom: "50%",
		width: theme.spacing(30),
		height: theme.spacing(30),
		margin: theme.spacing(1),
		// zIndex: 1,
	},
	title: {
		color: "white",
		// position: "absolute",
		// top: 400,
		// width: 400,
	},
	paragraph: {
		color: "#ffffff",
		fontSize: "12px",
		textAlign: "center",
		fontFamily: "Raleway",
		padding: "20px",
		marginBottom: 20,
	},
	typical: {
		minHeight: 100,
		fontFamily: "Poppins",
		padding: "20px",
		fontSize: "40px",
		textAlign: "center",
		margin: 0,
	},
	hiThre: {
		margin: 0,
	},
}));

function InfoCard() {
	const classes = userStyles();

	return (
		<div className={classes.root}>
			<Grid container justify="center">
				<Avatar className={classes.avatar} src={Logo} alt="Alex" />
			</Grid>
			<Box className={classes.typedContainer}>
				<Container maxWidth="sm">
					<Box className="infoCard">
						<Typography className={classes.title} variant="h4">
							<h5 className={classes.hiThre}>HI THERE</h5>
							<Typical
								className={classes.typical}
								steps={[
									"I am alex fernandes",
									1500,
									"I am a web developer!",
									2300,
									"I am a web designer!",
									2300,
								]}
								loop={Infinity}
								wrapper="p"
							/>
						</Typography>

						<p className={classes.paragraph}>
							I'm a Web Developer student based in New Jersey, United States. I
							strive to build immersive and beautiful web applications through
							carefully crafted code and user-centric design.
						</p>

						<Button
							size="large"
							style={{ fontSize: 12, padding: 18 }}
							variant="contained"
							color="primary"
							href="/about"
							position="center"
						>
							MORE ABOUT US
						</Button>
					</Box>
				</Container>
			</Box>
		</div>
	);
}

export default InfoCard;
