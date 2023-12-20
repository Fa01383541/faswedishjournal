/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import mongoose from 'mongoose';

const subscriberSchema = new mongoose.Schema({
    email:String,
});

const Subscriber = mongoose.model('Subscriber', subscriberSchema);

export default Subscriber;