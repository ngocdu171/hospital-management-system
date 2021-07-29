import mongoose from "mongoose";

const bookappointmentSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    blood: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        require: true
    },
    date: {
        type: String,
        require: true
    },
    time: {
        type: String,
        require: true
    },
    department: {
        type: String,
        require: true
    },
    doctor: {
        type: String,
        require: true
    },
});

export default mongoose.model('tbl_appointments', bookappointmentSchema);