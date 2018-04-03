import { observable, computed } from 'mobx'

class Store {
	@observable todos = [
		{ idx: 0, message: 'Hello', date: new Date(), completed: false },
		{ idx: 1, message: 'Foobar', date: new Date(), completed: true }
	]
	
	@computed get getCompletedCount () {
		const { todos } = this
		const count = todos.length
		const completed = todos.filter(task => task.completed === true)
		return `${completed.length > 0 ? completed.length : 0} / ${count}`
	}

	addTodo ({ message }) {
		this.todos.push({
			idx: this.todos.length,
			message,
			date: new Date(),
			completed: false
		})
	}
}

const initStore = new Store()

export default initStore