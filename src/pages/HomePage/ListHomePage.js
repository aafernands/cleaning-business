import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import Container from "@material-ui/core/Container";

export default function ListHomePage() {
	return (
		<div class="bloc2k">
			{" "}
			<h1> CLEANING SERVICES</h1>
			<div class="contactInfo">
				<h4>Couch Cleaning</h4>
				<h4>Chair Cleaning</h4>
				<h4>Vehicle Cleaning</h4>
				<h4>Mattress Cleaning</h4>
				<h4>Armchair Cleaning</h4>
			</div>
		</div>
	);
}
