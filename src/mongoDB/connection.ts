import mongoose from 'mongoose';

let isConnected = false;
const dataBaseUrl = process.env.MONGODB_URL;

export const connectToDatabase = async () => {
    if (isConnected) {
        return;
    }

    try {
        const uri = dataBaseUrl;
        if (!uri) throw new Error("Por favor define 'MONGODB_URI' en el archivo .env");

        await mongoose.connect(dataBaseUrl);

        isConnected = true;
        console.log('Conexión a MongoDB exitosa.');
    } catch (error) {
        console.error('Error conectándose a MongoDB:', error);
        throw new Error('Falló la conexión a MongoDB.');
    }
}