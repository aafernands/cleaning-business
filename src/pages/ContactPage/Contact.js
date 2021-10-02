import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import "./Contact.css";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";


const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: "white",
		color: "black",
	},
	label: {
		textTransform: "capitalize",
	},
	input: {
		width: "100%",
		marginLeft: "auto",
		marginRight: "auto",
		paddingBottom: 0,
		marginTop: 0,
		fontWeight: 500,
		color: "black",
	},

	textField: {
		width: "90%",
		marginLeft: "auto",
		marginRight: "auto",
		paddingBottom: 0,
		marginTop: 10,
		color: "black",
		fontWeight: 500,
	},
}));

const services = [
	{
		value: "sofa",
		label: "Sofa Cleaning",
	},
	{
		value: "couch",
		label: "Cleaning",
	},
	{
		value: "vehicle",
		label: "Vehicle",
	},
	{
		value: "Mmttress",
		label: "Mattress",
	},
	{
		value: "armchair",
		label: "Armchair",
	},
	{
		value: "chair",
		label: "Chair",
	},
	{
		value: "rug",
		label: "Rugs",
	},
	{
		value: "Other",
		label: "other",
	},
];

export default function Contact() {
	const classes = useStyles();
	const [currency, setCurrency] = React.useState("EUR");
	const handleChange = (event) => {
		setCurrency(event.target.value);
	};

	<a href="mailTo:alexfernands@outlook.com"> Contact Me </a>;

	return (
		<Container className="container">
			<div>
				<section>
					<h1 className="display-4">
						CONTACT <span id="spanTitle">US </span>{" "}
					</h1>
					<p className="lead">
						{" "}
						Feel free to call us directly if you have any questions.
					</p>
				</section>
			</div>
			<div className="contactBox">
				<form
					id="outlined-required"
					className={classes.root}
					noValidate
					autoComplete="off"
				>
					<TextField
						className={classes.textField}
						id="outlined-required"
						label="First Name"
						variant="outlined"
						InputProps={{}}
					/>
					<TextField
						className={classes.textField}
						id="outlined-required"
						label="Last Name"
						variant="outlined"
						placeholder="Last Name"
						InputProps={{}}
					/>
					<TextField
						className={classes.textField}
						id="outlined-required outlined-textarea "
						label="Telephone"
						variant="outlined"
						InputProps={{}}
					/>

					<TextField
						className={classes.textField}
						id="outlined-textarea outlined-required"
						label="Your Email"
						variant="outlined"
						placeholder="Your Email"
						InputProps={{}}
					/>
					<br></br>
					<br></br>

					<TextField
						// helperText="Please select what service you need"
						id="outlined-textarea outlined-required"
						className={classes.textField}
						variant="outlined"
						select
						label="Please select what type service you need"
						value={currency}
						onChange={handleChange}
					>
						{services.map((option) => (
							<MenuItem key={option.value} value={option.value}>
								{option.label}
							</MenuItem>
						))}
					</TextField>
					<br></br>

					<TextField
						id="outlined-textarea outlined-required"
						className={classes.textField}
						label="Your Message"
						multiline
						rows={6}
						placeholder="Enter your message"
						variant="outlined"
						InputProps={{}}
					/>
				</form>

				<br></br>

				<Button
					value="Submit"
					size="large"
					style={{ fontSize: 12, padding: 18 }}
					variant="contained"
					color="primary"
					href="/submitted"
					position="left"
				>
					SEND
				</Button>

				<div class="contactInfo">
					<h5>My Cleaning Business</h5>
					<h6>
						502 Willow Dr <br></br> Ocean Township 07712
					</h6>
					<h2>+1 9738363080</h2>

					<p component={Link} to="mailto:alexfernands@outlook.com">
						alexfernands@outlook.com"
					</p>
				</div>
			</div>
			<br></br>
		</Container>
	);
}
