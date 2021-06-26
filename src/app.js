//configure all the server in this file then export the file 
import cors from 'cors'

import express from "express"
import logger from './helpers/logger.js'
const app = express()



app.use(cors())

app.get('/',(req,res) =>{
    res.status(200).json({hello  :"We dont sleep in Zion"})

    logger.info("bang someone is homme..")
    logger.info(process.env.PORT)

})




export default app














