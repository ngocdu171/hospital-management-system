import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: String,
    password: String
});

export default mongoose.model('tbl_users', userSchema);