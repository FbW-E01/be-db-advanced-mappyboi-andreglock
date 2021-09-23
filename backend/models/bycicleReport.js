import mongoose from 'mongoose';

const bikeSchema = new mongoose.Schema ({
    position: {
        lat: Number,
        lng: Number
    },
    description: String
})

const BikeReport = mongoose.model("reportedBicycles", bikeSchema);

export default BikeReport;