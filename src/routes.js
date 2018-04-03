import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomeScreen from './components/HomeScreen'
import PageHeader from './components/PageHeader'
import CssBaseline from 'material-ui/CssBaseline'
import { MuiThemeProvider } from 'material-ui/styles'
import { theme } from './styles/global'

import './styles/global'

const Routes = () => (
	<MuiThemeProvider theme={theme}>
		<CssBaseline />
		<PageHeader />
		<Switch>
			<Route exact path='/' component={HomeScreen} />
		</Switch>
	</MuiThemeProvider>
)

const Router = () => (
	<BrowserRouter>
		<Routes />
	</BrowserRouter>
)

export default Router
