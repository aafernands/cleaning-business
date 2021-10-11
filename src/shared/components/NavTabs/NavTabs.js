import React, { useState } from "react";
import { MenuList } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import WorkIcon from "@material-ui/icons/Work";
import PersonIcon from "@material-ui/icons/Person";
import HomeIcon from "@material-ui/icons/Home";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FacebookIcon from "@mui/icons-material/Facebook";
import "./NavTabs.css";
import logo from "./logoWhite.png";
import Grid from "@mui/material/Grid";
import CallIcon from "@mui/icons-material/Call";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		position: "relative",
		zIndex: 2,
	},
	logo: {
		height: 50,
		width: 100,
		alignItems: "right",
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
	iconStyle: {
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
}));

function NavTabs({ onToggle }) {
	const classes = useStyles();
	const [isOpen, setIsOpen] = useState(false);
	const toggleDrawer = (open) => () => {
		setIsOpen(open);
	};

	return (
		<div>
			<div className={classes.root}>
				<AppBar position="static">
					<Toolbar>
						<Grid container justify="center" alignItems="flex-end">
							<IconButton
								onClick={toggleDrawer(true)}
								edge="start"
								className={classes.menuButton}
								color="inherit"
								aria-label="menu"
							>
								<MenuIcon />
							</IconButton>
							<a className="anchorCenter" href="/">
								<img className={classes.logo} src={logo} alt="Logo" />
							</a>
							<IconButton
								label="CALL US"
								href="tel:+15555551212"
								edge="start"
								className={classes.menuButton}
								color="inherit"
								aria-label="menu"
							>
								<CallIcon />
							</IconButton>
						</Grid>
					</Toolbar>
					<div className={classes.desktopBtn}>
						<Button variant="containedPrimary" component={Link} to="/">
							HOME
						</Button>

						<Button variant="containedPrimary" component={Link} to="/about">
							ABOUT
						</Button>

						<Button variant="containedPrimary" component={Link} to="/contact">
							CONTACT US
						</Button>

						<Button variant="containedPrimary" component={Link} to="/services">
							SERVICES
						</Button>
					</div>
				</AppBar>
			</div>

			<Drawer
				classes={{ paper: classes.drawer }}
				open={isOpen}
				onClose={toggleDrawer(false)}
			>
				<div
					className={classes.fullList}
					role="presentation"
					onClick={toggleDrawer(false)}
					onKeyDown={toggleDrawer(false)}
				>
					<MenuList>
						<List className={classes.linkColor}>
							<ListItem button component={Link} to="/">
								<ListItemIcon>
									<HomeIcon className={classes.iconStyle} />
								</ListItemIcon>
								<ListItemText primary={"HOME"} />
							</ListItem>
							<br></br>
							<ListItem button component={Link} to="/about">
								<ListItemIcon>
									<PersonIcon className={classes.iconStyle} />
								</ListItemIcon>
								<ListItemText primary={"ABOUT"} />
							</ListItem>
							<br></br>
							<ListItem button component={Link} to="/services">
								<ListItemIcon>
									<WorkIcon className={classes.iconStyle} />
								</ListItemIcon>
								<ListItemText primary={"SERVICES"} />
							</ListItem>
							<br></br>
						</List>

						<Button
							class="buttonNavTab"
							component={Link}
							to="/contact"
							variant="outlined"
						>
							CONTACT US
						</Button>
					</MenuList>
				</div>
				<div className={classes.socialIcons}>
					<a class="icons" href="https://www.facebook.com/">
						<FacebookIcon color="action" />
					</a>
					<a class="icons" href="https://www.facebook.com/">
						<InstagramIcon color="action" />
					</a>
					<a class="icons" href="https://www.facebook.com/">
						<MailOutlineIcon color="action" />
					</a>
				</div>
			</Drawer>
		</div>
	);
}

export default NavTabs;
