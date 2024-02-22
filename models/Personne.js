import { Schema, model } from "mongoose";

const PersonneSchema = new Schema({
    nom:{type:String, required:true},
    prenom: String,
    age:Number
})

export default model('personne', PersonneSchema)