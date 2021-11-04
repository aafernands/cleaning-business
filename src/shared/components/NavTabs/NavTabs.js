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
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
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
	topLine: {
		backgroundColor: "#44AC3B",
		color: "#44AC3B",
		fontSize: 4,
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
			<div className={classes.topLine}>New Shine Pro</div>
			<div className={classes.root}>
				<AppBar position="static">
					<Toolbar>
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
							<img className="logo" src={logo} alt="Logo" />
						</a>
						<IconButton
							href="tel:+9738363080"
							edge="start"
							className="menuButtonCall"
							color="inherit"
							aria-label="menu"
						>
							<PhoneIphoneIcon fontSize="large" />
						</IconButton>
					</Toolbar>
					<div className={classes.desktopBtn}>
						{/* <Button variant="containedPrimary" component={Link} to="/">
							HOME
						</Button>
						<Button variant="containedPrimary" component={Link} to="intro">
							INTRO
						</Button>

						<Button variant="containedPrimary" component={Link} to="/about">
							ABOUT
						</Button>

						<Button variant="containedPrimary" component={Link} to="/contact">
							CONTACT
						</Button>

						<Button variant="containedPrimary" component={Link} to="/faqs">
							FAQS
						</Button>

						<Button variant="containedPrimary" component={Link} to="/services">
							SERVICES
						</Button> */}
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
					{/* <MenuList>
						<List className={classes.linkColor}>
							<ListItem button component={Link} to="/">
								<ListItemIcon>
									<HomeIcon className={classes.iconStyle} />
								</ListItemIcon>
								<ListItemText primary={"HOME"} />
							</ListItem>
							<br></br>
							<ListItem button component={Link} to="intro">
								<ListItemIcon>
									<HomeIcon className={classes.iconStyle} />
								</ListItemIcon>
								<ListItemText primary={"INTRO"} />
							</ListItem>
							<br></br>
							<ListItem button component={Link} to="/about">
								<ListItemIcon>
									<PersonIcon className={classes.iconStyle} />
								</ListItemIcon>
								<ListItemText primary={"ABOUT"} />
							</ListItem>
							<br></br>
							<ListItem button component={Link} to="/faqs">
								<ListItemIcon>
									<PersonIcon className={classes.iconStyle} />
								</ListItemIcon>
								<ListItemText primary={"FAQS"} />
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
					</MenuList> */}
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
