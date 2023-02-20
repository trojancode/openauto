import mongoose from "mongoose";
const crypto = require('crypto');
const uuidv1 = require('uuidv1');

export const userSchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        required: true,
    },

    email: {
        type: String,
        trim: true,
        required: true,
        unique: 100
    },

}, {
    timestamps: true
});

// mongoose.models = {};
var User = mongoose.models.User ?? mongoose.model('User', userSchema);

export default User;