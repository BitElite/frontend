import { createSlice } from '@reduxjs/toolkit'

export interface IFile{
    name?: string
    cid: string
    size: string
    uploadedAt: Date
}

export const filesSlice = createSlice({
    name: 'files',
    initialState: {
        files: [
            {
                name: "No name",
                size: "0.80 MB",
                cid: "bafybeifued2wl2nkkb4xddpmiusgv22rfsgxq23vg5dwyjvtczovpw6j4m",
                uploadedAt: new Date(1670051973608),
            },
            {
                name: "No name",
                size: "0.80 MB",
                cid: "bafybeifued2wl2nkkb4xddpmiusgv22rfsgxq23vg5dwyjvtczovpw6j4m",
                uploadedAt: new Date(1670051973608),
            },
            {
                name: "No name",
                size: "0.80 MB",
                cid: "bafybeifued2wl2nkkb4xddpmiusgv22rfsgxq23vg5dwyjvtczovpw6j4m",
                uploadedAt: new Date(1670051973608),
            },
            {
                name: "No name",
                size: "0.80 MB",
                cid: "bafybeifued2wl2nkkb4xddpmiusgv22rfsgxq23vg5dwyjvtczovpw6j4m",
                uploadedAt: new Date(1670051973608),
            },
        ] as IFile[]
    },
    reducers: {
        addFile: (state, action) => {
            state.files.push(action.payload)
        },

        removeFile: (state, action) => {
            state.files = state.files.filter(file => file.cid !== action.payload)
        },

        updateFile: (state, action) => {
            const index = state.files.findIndex(file => file.cid === action.payload.cid)
            state.files[index] = action.payload
        }
    }
})

export const { addFile, removeFile, updateFile } = filesSlice.actions

export default filesSlice.reducer