import { createSlice } from '@reduxjs/toolkit'

export interface ICurrentFile{
    name: string,
    size: number,
    cid: string
}

export const currentFileSlice = createSlice({
    name: 'currentFile',
    initialState: {
        name: "No name",
        size: 0,
        cid: "...",
    } as ICurrentFile,
    reducers: {
        setCurrentFile: (state, action) => {
            state = action.payload
        },
        resetCurrentFile: (state) => {
            state = {
                name: "No name",
                size: 0,
                cid: "...",
            }
        }
    }
})

export const { setCurrentFile, resetCurrentFile } = currentFileSlice.actions

export default currentFileSlice.reducer