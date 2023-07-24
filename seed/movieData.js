import db from '../db/mongo.js'
import MovieData from '../models/MovieData.js'
import movieRawData from "./json/JSON_Ready.json" assert {type: "json"}

const insertData =  async() => {

    await MovieData.create(movieRawData);
    console.log("data sent");


}


insertData();
