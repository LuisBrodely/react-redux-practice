import { createSlice } from '@reduxjs/toolkit' 

const initialState = [
    {
        id: '1',
        title: 'Task 1',
        description: 'Task 1 description'
    },
    {
        id: '2',
        title: 'Task 2',
        description: 'Task 2 description'
    },
]

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        //El state es el estado actual de la app, y el action lo que se enviaa
        addTask: (state, action) => {
            // console.log(state)
            // console.log(action)
            state.push(action.payload)
            // [...state, action.payload]
        },
        deleteTask: (state, action) => {
            const taskFound = state.find(task => task.id === action.payload)
            if (taskFound) {
                state.splice(state.indexOf(taskFound), 1)
            }
        },
    },
  })

  export const { addTask, deleteTask } = counterSlice.actions   

  export default counterSlice.reducer