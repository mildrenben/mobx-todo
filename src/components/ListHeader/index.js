import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import IconButton from 'material-ui/IconButton'
import CheckIcon from 'material-ui-icons/Check'
import styled from 'styled-components'
import { observer } from 'mobx-react'

const SRoot = styled.div`
  padding: 0 1.5em 1em;
  display: flex;
  justify-content: space-between;
`

const SCompleted = styled.p`
  display: inline-block;
  margin-right: 2em;
`

@observer
class ListHeader extends Component {
	add = this.add.bind(this)
	
	add () {
  	const message = this.input.value
		this.props.store.addTodo({ message })
		this.input.value = ''
	}
	
	render () {
  	const { getCompletedCount } = this.props.store
  	return (
  		<SRoot>
  			<SCompleted>{getCompletedCount} completed</SCompleted>
  			<TextField 
  				type='text' 
  				inputRef={input => this.input = input}
  				placeholder='Add new task'
  			/>
  			<IconButton aria-label='Confirm' onClick={this.add}>
  				<CheckIcon />
  			</IconButton>
  		</SRoot>
  	)
	}
}
  
ListHeader.propTypes = {
	store: PropTypes.object.isRequired
}
  
export default ListHeader