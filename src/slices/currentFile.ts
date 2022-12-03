import { createSlice } from '@reduxjs/toolkit'
import { IFile as ICurrentFile } from "./file"

export const currentFileSlice = createSlice({
    name: 'currentFile',
    initialState: {
        name: "No name",
        size: "0.00 MB",
        cid: "...",
        uploadedAt: new Date(0),
    } as ICurrentFile,
    reducers: {
        setCurrentFile: (state, action) => {
            state = action.payload
        },
        resetCurrentFile: (state) => {
            state = {
                name: "No name",
                size: "0.00 MB",
                cid: "...",
                uploadedAt: new Date(0),
            }
        }
    }
})

export const { setCurrentFile, resetCurrentFile } = currentFileSlice.actions

export default currentFileSlice.reducer