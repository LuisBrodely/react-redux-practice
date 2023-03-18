import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask } from '../features/tasks/taskSlice'
import { v4 as uuidv4 } from 'uuid'

const TaskForm = () => {

	const dispatch = useDispatch()

	const [task, setTask] = useState({
		title: '',
		description: ''
	})

	const handleChange = e => {
		// console.log(e.target.name, e.target.value)
		setTask({
			...task,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = e => {
		e.preventDefault()
		dispatch(addTask({
			...task,
			id: uuidv4()
		}))
	}

  return (
    <div>
      <h2>FORMULARIO</h2>

			<form onSubmit={handleSubmit}>
				<input name='title' type='text' placeholder='Title' onChange={handleChange}/>
				<br />
				<br />
				<textarea name='description' onChange={handleChange}></textarea>
				<br />
				<br />
				<button>Save</button>
			</form>
    </div>
  )
}

export default TaskForm
