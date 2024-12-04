'use server';

import { connectToDatabase, indexUv } from '@/mongoDB';

export const getIndexUv = async (): Promise<number> => {

    try {
        await connectToDatabase();
        const { uvIndex } = await indexUv.findOne().sort({ timestamp: -1 }).exec();
        return uvIndex;
    } catch (error) {
        console.log(error);
        return -1;
    };
}