
import moment from "moment/moment"

export const getCurrentTimeStamp=(timeFormate)=>{
   return moment().format(timeFormate);
}