'use server';



import { connectToDatabase, indexUv } from '@/mongoDB';

export const getIndexUv = async (): Promise<Number> => {

    try {
        await connectToDatabase();
        const { uvIndex } = await indexUv.findOne().sort({ timestamp: -1 }).exec();
        console.log(uvIndex);
        return uvIndex;
    } catch (error) {
        return -1;
    };
}