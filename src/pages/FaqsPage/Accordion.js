import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Accordion.css";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

export default function ControlledAccordions() {
	const [expanded, setExpanded] = React.useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<div>
			<Accordion
				expanded={expanded === "panel1"}
				onChange={handleChange("panel1")}
			>
				<AccordionSummary
					expandIcon={
						<FontAwesomeIcon icon={faAngleDoubleDown} color="black" size="1x" />
					}
					aria-controls="panel1bh-content"
					id="panel1bh-header"
				>
					<Typography className="questionsTitle" sx={{ width: "100%", flexShrink: 0 }}>
						How much does cleaning cost?
					</Typography>
					<Typography sx={{ color: "text.secondary" }}></Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						There's a couple of fators that will determin the cost of the
						service such as: tasks you want done, type of stains on surfaces,
						pets, etc. Contact us and will can set up a meeting at your home ot
						office for a quote specific to your needs. Also in some cases
						providing picutres can be a quick way for us to decide what would be
						the best solution for the type service you need.
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion
				expanded={expanded === "panel2"}
				onChange={handleChange("panel2")}
			>
				<AccordionSummary
					expandIcon={
						<FontAwesomeIcon icon={faAngleDoubleDown} color="black" size="1x" />
					}
					aria-controls="panel2bh-content"
					id="panel2bh-header"
				>
					<Typography sx={{ width: "100%", flexShrink: 0 }}>
						Do I have to do anything before you come to clean?
					</Typography>
					<Typography sx={{ color: "text.secondary" }}></Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						We ask our costumers a power outlet to connect our cleaning machines
						and a source of water could be from kitchen sink or bathroom.
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion
				expanded={expanded === "panel3"}
				onChange={handleChange("panel3")}
			>
				<AccordionSummary
					expandIcon={
						<FontAwesomeIcon icon={faAngleDoubleDown} color="black" size="1x" />
					}
					aria-controls="panel3bh-content"
					id="panel3bh-header"
				>
					<Typography sx={{ width: "100%", flexShrink: 0 }}>
						What type of cleaning do your offer?
					</Typography>
					<Typography sx={{ color: "text.secondary" }}></Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Currently we offer the following services: carpet, mattress, chairs,
						airmchairs, sofa and couch cleaning. We also perform dry car wash
						and interior car detailing.
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion
				expanded={expanded === "panel4"}
				onChange={handleChange("panel4")}
			>
				<AccordionSummary
					expandIcon={
						<FontAwesomeIcon icon={faAngleDoubleDown} color="black" size="1x" />
					}
					aria-controls="panel4bh-content"
					id="panel4bh-header"
				>
					<Typography sx={{ width: "100%", flexShrink: 0 }}>
						What if I need to Cancel the service?
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						In case of cancellation, notify within 24hrs before the scheduled
						time. Otherwise a $40 fee will be charged.
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion
				expanded={expanded === "panel5"}
				onChange={handleChange("panel5")}
			>
				<AccordionSummary
					expandIcon={
						<FontAwesomeIcon icon={faAngleDoubleDown} color="black" size="1x" />
					}
					aria-controls="panel5bh-content"
					id="panel5bh-header"
				>
					<Typography sx={{ width: "100%", flexShrink: 0 }}>
						What are the payment options?
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						We are currently accepting cash, venmo or cash. Payment is due at
						the time of service.
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}

// import * as React from "react";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// export default function SimpleAccordion() {

// const [expanded, setExpanded] = React.useState(false);

//   const handleChange = (panel) => (event, isExpanded) => {
//     setExpanded(isExpanded ? panel : false);
//   };

// 	return (
// 		<div className="accordionStyle">
//       <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
// 				<AccordionSummary
// 					expandIcon={<ExpandMoreIcon />}
// 					aria-controls="panel1a-content"
// 					id="panel1a-header"
// 				>

// 					<Typography sx={{ width: '33%', flexShrink: 0 }}>
//             How much does cleaning cost?
//           </Typography>
// 				</AccordionSummary>
// 				<AccordionDetails>
// 					<Typography>
// 						There's a couple of cators that will determin the cost of the service such as: tasks you want done, type of stains on surfaces, pets, etc. Contact us and will can set up a meeting at your home ot office for a quote specific to your needs. Also in some cases providing picutres can be a quick way for us to decide what would be the best solution for the type service you need.
// 					</Typography>
// 				</AccordionDetails>
// 			</Accordion>

// 			<Accordion>
// 				<AccordionSummary
// 					expandIcon={<ExpandMoreIcon />}
// 					aria-controls="panel2a-content"
// 					id="panel2a-header"
// 				>
// 					<Typography>Do I have to do anything before you come to clean? </Typography>
// 				</AccordionSummary>
// 				<AccordionDetails>
// 					<Typography>
// 						We ask our costumers a power outlet to connect our cleaning machines and a source of water could be from kitchen sink or bathroom.
// 					</Typography>
// 				</AccordionDetails>
// 			</Accordion>

// 			<Accordion>
// 				<AccordionSummary
// 					expandIcon={<ExpandMoreIcon />}
// 					aria-controls="panel2a-content"
// 					id="panel2a-header"
// 				>
// 					<Typography>What type of cleaning do your offer?</Typography>
// 				</AccordionSummary>
// 				<AccordionDetails>
// 					<Typography>
// 						Currently we offer the following services: carpet, mattress, chairs, airmchairs, sofa and couch cleaning. We also perform dry car wash and interior car detailing.
// 					</Typography>
// 				</AccordionDetails>
// 			</Accordion>

// 			<Accordion>
// 				<AccordionSummary
// 					expandIcon={<ExpandMoreIcon />}
// 					aria-controls="panel2a-content"
// 					id="panel2a-header"
// 				>
// 					<Typography>What if I need to Cancel the service?</Typography>
// 				</AccordionSummary>
// 				<AccordionDetails>
// 					<Typography>
// 						In case of cancellation, notify within 24hrs before the scheduled time. Otherwise a $40 fee will be charged.
// 					</Typography>
// 				</AccordionDetails>
// 			</Accordion>

// 			<Accordion>
// 				<AccordionSummary
// 					expandIcon={<ExpandMoreIcon />}
// 					aria-controls="panel2a-content"
// 					id="panel2a-header"
// 				>
// 					<Typography>What are the payment options?</Typography>
// 				</AccordionSummary>
// 				<AccordionDetails>
// 					<Typography>
// 						We are currently accepting cash, venmo or cash. Payment is due at the time of service.
// 					</Typography>
// 				</AccordionDetails>
// 			</Accordion>
// 		</div>
// 	);
// }
