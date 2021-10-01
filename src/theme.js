import { createMuiTheme } from "@material-ui/core/styles";
import { deepPurple, amber } from "@material-ui/core/colors";


const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#1a237e",
		},
		secondary: {
			main: amber[500],
			contrastText:deepPurple[900]
		},
		
	},
});

export default theme;
