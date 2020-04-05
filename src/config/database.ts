import mongoose from 'mongoose';

const uri = process.env.NODE_ENV === "test" ? process.env.MONGODB_TEST_URI : process.env.MONGODB_URI;

export const connect = () => {

    mongoose.connect(uri, {useNewUrlParser: true});

    mongoose.connection.on("error", (err) => {
        console.log("MongoDB Error: "+err)
    });

    mongoose.connection.on("connected", () => {
        console.log("MongoDB connected ["+process.env.NODE_ENV+"]");
    })
}
