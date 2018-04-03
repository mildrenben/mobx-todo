import { injectGlobal } from 'styled-components'
import { createMuiTheme } from 'material-ui/styles'
import blue from 'material-ui/colors/blue'
import blueGrey from 'material-ui/colors/blueGrey'
import grey from 'material-ui/colors/grey'

export const theme = createMuiTheme({
	palette: {
		primary: blue,
		secondary: blueGrey
	}
})

injectGlobal`
	html {
		background-color: ${grey[200]};
	}
  body {
    color: ${blueGrey[700]};
		font-family: sans-serif;
		background-color: ${grey[200]} !important;
  }
`
