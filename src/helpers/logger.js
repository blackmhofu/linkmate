 import  pino from "pino";
 import dayjs from "dayjs";

 const logger = pino({
   prettyPrint:true,
   base:{
       pid:false
   },
   timestamp:false

 })
 
 export default logger;
