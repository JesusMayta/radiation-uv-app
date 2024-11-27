import mongoose from 'mongoose';

const sensorSchema = new mongoose.Schema({
    uvIndex: Number,
    time: { type: Date, default: Date.now }
});

export const SensorData = mongoose.model('SensorData', sensorSchema, 'SensorData');