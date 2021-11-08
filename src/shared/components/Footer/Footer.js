import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FacebookIcon from "@mui/icons-material/Facebook";

function Footer() {
	return (
		<footer class="footerInfo">
			<h5>GET IN TOUCH</h5>

			<a id="icons" href="https://www.facebook.com/">
				<FacebookIcon color="action" />
			</a>
			<a id="icons" href="https://www.instagram.com/newshinepro/">
				<InstagramIcon color="action" />
			</a>
			<a id="icons" href="mailto:newshinepro@gmail.com">
				<MailOutlineIcon color="action" />
			</a>

			<p>
				<span className="credits-footer">
					© Copyright 2021 New Shine Pro | Cleaning Services
				</span>
			</p>
		</footer>
	);
}

export default Footer;
