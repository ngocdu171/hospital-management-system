import mongoose from 'mongoose';

const patientSchema = mongoose.Schema({
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
    username: {
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
    dob: {
        type: Date,
        require: true
    },
});

export default mongoose.model('tbl_patients', patientSchema);