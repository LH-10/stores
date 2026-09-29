import express from "express";
import cors from "cors"

server=express()
server.use(cors())

const PORT=8044
server.listen(PORT,()=>{
    console.log("started on ",PORT)
})