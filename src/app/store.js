import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/tasks/taskSlice'

export const store = configureStore({
  reducer: {
    tasks: counterReducer
  },
})