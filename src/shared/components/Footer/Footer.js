import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
	return (
		<footer class="footerInfo">
			<h5>GET IN TOUCH</h5>

			<a class="icons" href="https://www.instagram.com/aafernands/">
				<FontAwesomeIcon icon={faFacebook} color="white" size="1x" />
			</a>
			<a class="icons" href="https://www.instagram.com/aafernands">
				<FontAwesomeIcon icon={faInstagram} color="white" size="1x" />
			</a>
			<a class="icons" href="mailto:alexfernands@outlook.com">
				<FontAwesomeIcon icon={faEnvelope} color="white" size="1x" />
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
