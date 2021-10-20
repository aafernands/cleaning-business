import { Route, HashRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";


import NavTabs from "./shared/components/NavTabs/NavTabs";
import Footer from "./shared/components/Footer/Footer";

import Home from "./pages/HomePage/Home";
import About from "./pages/AboutPage/About";
import Contact from "./pages/ContactPage/Contact.js";
import Services from "./pages/ServicesPage/Services.js";
import Submitted from "./pages/ContactPage/SubmittedPage/Submitted.js";
import Faqs from "./pages/FaqsPage/Faqs.js";

import "./shared/style/global.css";
import Container from "@material-ui/core/Container";

const userStyles = makeStyles(() => ({
	test: {
		paddingLeft: "0px",
		paddingRight: "0px",
	},
}));

function App() {
	const classes = userStyles();
	return (
		<HashRouter>
			<Container className={classes.test}>
				<NavTabs />
				<Route exact path="/" component={Home} />
				<Route exact path="/about" component={About} />
				<Route exact path="/contact" component={Contact} />
				<Route path="/services" component={Services} />
				<Route path="/footer" component={Footer} />
				<Route path="/submitted" component={Submitted} />
				<Route path="/faqs" component={Faqs} />
				<Footer />
			</Container>
		</HashRouter>
	);
}

export default App;
