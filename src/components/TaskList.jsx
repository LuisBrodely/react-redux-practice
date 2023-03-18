import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask } from '../features/tasks/taskSlice'

const TaskList = () => {

  const tasks = useSelector(state => state.tasks)
	const dispatch = useDispatch()

	const handleDelete = (id) => {
		// console.log(id)
		dispatch(deleteTask(id))
	}

  return (
    <div>
			<h2>TAREAS</h2>
      {tasks.map((task) => (
				<div key={task.id}>
					<h3>{task.title}</h3>
					<p>{task.description}</p>
					<button onClick={() => handleDelete(task.id)}>Delete</button>
				</div>
			))}  
    </div>
  )
}

export default TaskList
