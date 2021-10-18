import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";

export default function ListHomePage() {
	return (
		<div>
			{" "}
			<h1>Our Cleaning Services</h1>
			<List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
				<ListItem>
					<ListItemText primary="Sofa Cleaning" secondary="" />
				</ListItem>
				<ListItem>
					<ListItemText primary="Chair Cleaning" secondary="" />
				</ListItem>
				<ListItem>
					<ListItemText primary="Vehicle Cleaning" secondary="" />
				</ListItem>
				<ListItem>
					<ListItemText primary="Matress Cleaning" secondary="" />
				</ListItem>
				<ListItem>
					<ListItemText primary="Airmchair Cleaning" secondary="" />
				</ListItem>
			</List>
		</div>
	);
}
