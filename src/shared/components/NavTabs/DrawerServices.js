import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";

import ChairIcon from "@mui/icons-material/Chair";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

import { Link } from "react-router-dom";

import "./NavTabs.css";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		position: "relative",
		zIndex: 2,
	},

	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up("sm")]: {
			display: "none",
		},
	},
	contactButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up("sm")]: {
			display: "none",
		},
	},
	desktopBtn: {
		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
		[theme.breakpoints.up("md")]: {
			display: "block",
		},
	},

	root: {
		flexGrow: 1,
	},

	title: {
		flexGrow: 1,
	},
	drawer: {
		width: 300,
		backgroundColor: "white;",
	},
	fullList: {
		width: "auto",
	},
	linkColor: {
		color: "gray",
	},

	socialIcons: {
		textAlign: "center",
		position: "relative",
		zIndex: 280,
		paddingBottom: "20px",
		paddingTop: "200px",
		height: "100%",
	},
	outlined: {
		"&:hover": {
			backgroundColor: "#35C37D",
		},
	},
	topLine: {
		backgroundColor: "#44AC3B",
		color: "#44AC3B",
		fontSize: 4,
	},
}));
export default function Drafts() {
	const classes = useStyles();

	const [open, setOpen] = React.useState(true);

	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<List
			sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
			component="nav"
			aria-labelledby="nested-list-subheader"
		>
			<Collapse in={open} timeout="auto" unmountOnExit>
				{/* <List component="div" disablePadding>
					<ListItemButton
						component={Link}
						to="/UphosteryCleaningPage"
						sx={{ pl: 4 }}
					>
						<ListItemIcon>
							<ChairIcon className="iconStyle" />
						</ListItemIcon>
						<ListItemText primary="Upholstery" />
					</ListItemButton>
				</List>
				<List component="div" disablePadding>
					<ListItemButton
						component={Link}
						to="/CarpetCleaningPage"
						sx={{ pl: 4 }}
					>
						<ListItemIcon>
							<CleaningServicesIcon className="iconStyle" />
						</ListItemIcon>
						<ListItemText primary="Carpet Cleaning" />
					</ListItemButton>
				</List>
				<List component="div" disablePadding>
					<ListItemButton
						component={Link}
						to="/MobileCarWashPage"
						sx={{ pl: 4 }}
					>
						<ListItemIcon>
							<DirectionsCarIcon className="iconStyle" />
						</ListItemIcon>
						<ListItemText primary="Mobile Car Wash" />
					</ListItemButton>
				</List> */}
			</Collapse>
		</List>
	);
}
