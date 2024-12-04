import mongoose from 'mongoose';

const sensorSchema = new mongoose.Schema({
    uvIndex: Number,
    time: { type: Date, default: Date.now }
});

export const indexUv = mongoose.models.indexUv || mongoose.model('indexUv', sensorSchema, 'indexUv');
