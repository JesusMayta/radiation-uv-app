import { NextRequest, NextResponse } from 'next/server';
import { envVariables } from '@/config';

import mongoose from 'mongoose';

const sensorSchema = new mongoose.Schema({
    uvIndex: Number,
    timestamp: { type: Date, default: Date.now }
});

const MONGODB_URI = "mongodb+srv://rimverse:rimverse04041998@radiationuvdb.evbgd.mongodb.net/";

const indexUv = mongoose.models.indexUv || mongoose.model('indexUv', sensorSchema, 'indexUv');

// Conexión a la base de datos
async function connectToDatabase() {
    if (!mongoose.connection.readyState) {
        await mongoose.connect(MONGODB_URI);
    }
}

// POST handler
export async function POST(req: NextRequest) {
    const { uvIndex } = await req.json();

    if (typeof uvIndex !== 'number') {
        return NextResponse.json({ error: 'El índice UV debe ser un número' }, { status: 400 });
    }

    try {
        await connectToDatabase();
        const sensorData = new indexUv({ uvIndex });
        await sensorData.save();
        return NextResponse.json({ message: 'Datos recibidos y almacenados' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error al almacenar los datos' }, { status: 500 });
    }
}

// GET handler
export async function GET() {
    try {
        await connectToDatabase();
        const sensorData = await indexUv.find();
        return NextResponse.json(sensorData, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error al obtener los datos' }, { status: 500 });
    };
};