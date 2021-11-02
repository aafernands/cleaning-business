import React, { useState, useCallback } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import ReCAPTCHA from "react-google-recaptcha";
import Divider from "@mui/material/Divider";
import logo from "./logo.png";
import "./Contact.css";

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: "white",
		color: "black",
	},
	label: {
		textTransform: "capitalize",
		textAlign: "center",
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
		color: "white",
		fontWeight: 500,
		textTransform: "capitalize",
	},
	container: {
		paddingLeft: 20,
		paddingRight: 20,
	},
}));

const services = [
	{
		value: "default",
		label: "",
	},
	{
		value: "sofa",
		label: "Sofa Cleaning",
	},
	{
		value: "couch",
		label: "Couch Cleaning",
	},
	{
		value: "vehicle",
		label: "Vehicle Detailing",
	},
	{
		value: "Mattress",
		label: "Mattress Cleaning",
	},
	{
		value: "armchair",
		label: "Armchair Cleaning",
	},
	{
		value: "chair",
		label: "Chair Cleaning",
	},
	{
		value: "rug",
		label: "Rug Cleaning",
	},
	{
		value: "Other",
		label: "other",
	},
];

export default function Contact() {
	const [service, setService] = React.useState("default");
	const handleChange = (event) => {
		setService(event.target.value);
	};
	const classes = useStyles();

	function sendEmail(e) {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_dfojucd",
				"template_lsgav8r",
				e.target,
				"user_zh5QsjFDwO8o1tCY9tkoy"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	}
	function onChange(value) {
		console.log("Captcha value:", value);
	}

	const [disableSubmit, setDisableSubmit] = useState(true);

	return (
		<Container className={useStyles.container}>
			<div>
				<h1 className="display-4">
					CONTACT <span id="spanTitle">US </span>
				</h1>
				
				<Divider variant="middle" />
				<br></br>
				<br></br>
			</div>
			<Grid container spacing={2}>
				<Grid item xs={12} lg={6}>
					<div className="contactBox">
						<form
							onSubmit={sendEmail}
							id="outlined-required"
							className={classes.root}
							noValidate
							autoComplete="off"
						>
							<TextField
								required
								className={classes.textField}
								id="outlined-required outlined-textarea "
								variant="outlined"
								label="Name"
								placeholder="Enter your Name"
								InputProps={{}}
								type="text"
								name="from_name"
							/>
							<TextField
								required
								className={classes.textField}
								id="outlined-textarea outlined-required"
								variant="outlined"
								label="Email"
								type="email"
								placeholder="Enter your Email"
								name="user_email"
								InputProps={{}}
							/>
							<TextField
								className={classes.textField}
								id="outlined-required outlined-textarea "
								type="text"
								placeholder="Enter your Telephone"
								label="Telephone"
								variant="outlined"
								InputProps={{}}
								name="telephone"
							/>
							<TextField
								// helperText="Please select what service you need"
								id="outlined-textarea outlined-required"
								className={classes.textField}
								variant="outlined"
								select
								label="Please select what type service you need"
								value={service}
								name="service"
								onChange={handleChange}
							>
								{services.map((option) => (
									<MenuItem key={option.value} value={option.value}>
										{option.label}
									</MenuItem>
								))}
							</TextField>

							<TextField
								required
								className={classes.textField}
								id="outlined-textarea outlined-required"
								label="Message"
								multiline
								rows={6}
								placeholder="Enter your message"
								variant="outlined"
								InputProps={{}}
								name="message"
							/>
							<br></br>

							<br></br>

							<div className={classes.textField}>
								<ReCAPTCHA
									sitekey="6LehMqgcAAAAALM_me6xU5o6UvAO-UhnN-Fj4gX1"
									onChange={useCallback(() => setDisableSubmit(false))}
								/>
							</div>

							<Button
								className={classes.textField}
								size="large"
								style={{ fontSize: 12, padding: 18 }}
								variant="contained"
								color="primary"
								value="Submit"
								position="left"
								type="submit"
								disabled={disableSubmit}
							>
								SEND MESSAGE
							</Button>
						</form>
					</div>
				</Grid>
				<Grid item xs={12} lg={6}>
					<div class="contactInfo">
						<h5>
							NEW SHINE PRO
							<br></br>
							<br></br>
							Cleaning Services
						</h5>
						<h2>+1 9738363080</h2>

						<p component={Link} to="mailto:newshinepro@gmail.com">
							newshinepro@gmail.com"
						</p>
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
