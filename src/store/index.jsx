import { configureStore } from '@reduxjs/toolkit'
import profileSlice from '../features/profile'

export const Store =  configureStore({
  reducer: {
    profile: profileSlice,
  },
})