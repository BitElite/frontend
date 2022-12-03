import { createSlice } from "@reduxjs/toolkit";


export interface IFiles{
    name: string;
    cid:string;
    createdAt:Date;
    size:number;
}