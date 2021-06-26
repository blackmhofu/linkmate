// this file is the entry point of the server
import dotenv from 'dotenv'
dotenv.config()

import app from "./src/app.js";
import logger from "./src/helpers/logger.js";

// remember that first you have to  connect to the  database first before you spin the server



app.listen(process.env.PORT,()=>{
    try {
        logger.info(`server running on port ${process.env.PORT}`)
    } catch (error) {
        logger.error(error)
    }

})