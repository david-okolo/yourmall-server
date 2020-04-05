import Mongoose, { Schema } from "mongoose";

const userSchemaDefinition = new Schema({
    name: String,
    userName: String,
    password: String,
    followers: Number
});