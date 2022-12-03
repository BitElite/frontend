import { configureStore } from '@reduxjs/toolkit'
import filesSlicer from './slices/file'
import currentFileSlicer from './slices/currentFile'

export const store = configureStore({
  reducer: {
    files: filesSlicer,
    currentFile: currentFileSlicer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch