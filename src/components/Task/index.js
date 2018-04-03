import React from 'react'
import PropTypes from 'prop-types'
import { ListItem, ListItemText } from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'
import { observer } from 'mobx-react'

@observer
class Task extends React.Component {
	toggle = this.toggle.bind(this)

	toggle () {
		this.props.todo.completed = !this.props.todo.completed
	}
	
	render () {
		const { completed, message, date } = this.props.todo
		return (
			<ListItem button onClick={this.toggle}>
				<Checkbox checked={completed} />
				<ListItemText primary={message} secondary={date.toDateString()} />
			</ListItem>
		)
	}
}	
	
Task.propTypes = {
	todo: PropTypes.object.isRequired
}

export default Task