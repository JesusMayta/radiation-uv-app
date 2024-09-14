'use client';

import { useEffect, useState } from 'react';

// Definir el tipo de los datos del sensor
type SensorData = {
    uvIndex: number;
    timestamp: string;
};

// Obtener datos del sensor desde la API
async function getSensorData(): Promise<SensorData[]> {
    const res = await fetch('/api/sensor-data');
    const data = await res.json();
    return data;
}

export default function SensorDataPage() {
    const [sensorData, setSensorData] = useState<SensorData[]>([]);

    useEffect(() => {
        async function fetchData() {
            const data = await getSensorData();
            setSensorData(data);
        }
        fetchData();
    }, []);

    return (
        <div>
            <h1>Datos del Sensor UV</h1>
            <ul>
                {sensorData.map((data, index) => (
                    <li key={index}>
                        Índice UV: {data.uvIndex}, Timestamp: {new Date(data.timestamp).toLocaleString()}
                    </li>
                ))}
            </ul>
        </div>
    );
};