import { createSlice } from '@reduxjs/toolkit'

export interface IFile {
    name?: string
    cid: string
    size: string
    uploadedAt: number
}

export const sortFiles = (files: IFile[]) => {
    return files.sort((a, b) => {
        return b.uploadedAt - a.uploadedAt
    })
}

export const filesSlice = createSlice({
    name: 'files',
    initialState: [
        {
            name: "No name",
            size: "0.80 MB",
            cid: "bafybeifued2wl2nkkb4xddpmiusgv22rfsgxq23vg5dwyjvtczovpw6j4m",
            uploadedAt: new Date(1670051973608).getTime(),
        },
        {
            name: "No name",
            size: "0.80 MB",
            cid: "bafybeifued2wl2nkkb4xddpmiusgv22rfsgxq23vg5dwyjvtczovpw6j4m",
            uploadedAt: new Date(1670051973608).getTime()
        },
        {
            name: "No name",
            size: "0.80 MB",
            cid: "bafybeifued2wl2nkkb4xddpmiusgv22rfsgxq23vg5dwyjvtczovpw6j4m",
            uploadedAt: new Date(1670051973608).getTime()
        },
        {
            name: "No name",
            size: "0.80 MB",
            cid: "bafybeifued2wl2nkkb4xddpmiusgv22rfsgxq23vg5dwyjvtczovpw6j4m",
            uploadedAt: new Date(1670051973608).getTime()
        },
    ] as IFile[]
    ,
    reducers: {
        addFile: (state, action) => {
            state.push(action.payload)
            state = sortFiles(state)
        },

        removeFile: (state, action) => {
            state = state.filter(file => file.cid !== action.payload)
            state = sortFiles(state)
        },

        updateFile: (state, action) => {
            const index = state.findIndex(file => file.cid === action.payload.cid)
            state[index] = action.payload
            state = sortFiles(state)
        }
    }
})

export const { addFile, removeFile, updateFile } = filesSlice.actions

export default filesSlice.reducer