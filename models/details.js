import mongoose from "mongoose";

const detailsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        required: true,
    },
})

const Details =  mongoose.models.Details || mongoose.model("Details", detailsSchema);

export default Details;