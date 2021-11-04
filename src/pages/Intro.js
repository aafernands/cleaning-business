import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	test: {
		color: "red",
	},
});

export default function Intro() {
	const classes = useStyles();

	return (
		<div>
			<script src="https://apps.elfsight.com/p/platform.js" defer></script>
			<div class="elfsight-app-65db918c-b622-4965-b5c0-82faf520d340"></div>
			<div class="elfsight-app-44aa7011-14f3-4de5-adde-b76aeaf4995f"></div>
		</div>
	);
}
