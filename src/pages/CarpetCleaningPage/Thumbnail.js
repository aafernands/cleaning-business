import React from "react"; // Import the Component component from React
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
		backgroundColor: "#424242",
		boxShadow: "2.5px 5px 4px #000",
	},
	media: {
		height: 200,
	},
});
function Thumbnail(props) {
	const classes = useStyles();
	return (
		<Container>
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia
						className={classes.media}
						image={props.image}
						title="Contemplative Reptile"
					/>
					<CardContent>
						<Typography
							style={{ color: "gray" }}
							gutterBottom
							variant="h5"
							component="h2"
						>
							{props.title}
						</Typography>
						<Typography variant="body2" component="p">
							{props.description}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button
						href={props.linkGithub}
						variant="contained"
						size="small"
						style={{ fontSize: 12, padding: 18 }}
						color="primary"
					>
						View Details
					</Button>

					<Button
						variant="contained"
						href={props.linkLive}
						size="small"
						color="primary"
						style={{ fontSize: 12, padding: 18 }}
					>
						Live Demo
					</Button>
				</CardActions>
			</Card>
		</Container>
	);
}

export default Thumbnail;
