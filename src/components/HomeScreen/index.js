import React from 'react'
import PropTypes from 'prop-types'
import List from 'material-ui/List'
import Divider from 'material-ui/Divider'
import TextField from 'material-ui/TextField'
import Task from '../Task'
import ListHeader from '../ListHeader'
import store from '../../store'
import { observer } from 'mobx-react'
import styled from 'styled-components'

const SList = styled.div`
	margin: 2em 1em 0;
	background: white;
`

@observer
class HomeScreen extends React.Component {
	render() {
		const { todos } = this.props.store
		return (
			<main>
				<SList>
					<List>
						<ListHeader store={this.props.store} />
						<Divider />
						{
							todos.map(todo => (
								<Task 
									key={todo.idx}
									todo={todo}
								/>
							))
						}
					</List>
				</SList>
			</main>
		)
	}
}

HomeScreen.propTypes = {
	store: PropTypes.object.isRequired
}
	
const HomeWithStore = () => <HomeScreen store={store} />

export default HomeWithStore