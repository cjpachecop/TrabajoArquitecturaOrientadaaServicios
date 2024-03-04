import express from "express";
import { env } from "./default.js";
import route from "../routes/index.routes.js";

export default class server{

constructor(){
   this.app = express();
   this.port = env.port;


}

conectionDB(){}
middlewares(){}


routes(){
 this.app.use(route);

}


runServer(){
   this.app.listen(this.port, ()=>{
    console.log(`estoy por el puerto ${this.port}`);

   })


}

load(){
    this.conectionDB();
    this.middlewares();
    this.routes();
    this.runServer();
}



}