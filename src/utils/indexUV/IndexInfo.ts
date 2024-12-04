
export const indexInfo = [
    { name: 'Baja y moderada', number: '0 a 5', color: 'from-green-900 via-green-300 to-green-500', type: 'Riesgo bajo' },
    { name: 'Alta', number: '6 a 7', color: 'from-orange-900 via-orange-300 to-orange-500', type: 'Riesgo moderado' },
    { name: 'Muy alta', number: '8 a 10', color: 'from-red-900 via-red-300 to-red-500', type: 'Alto riesgo' },
    { name: 'Extremadamente alta', number: '11 a +', color: 'from-fuchsia-900 via-fuchsia-300 to-fuchsia-500', type: 'Muy peligroso' },
];

export const indexValues = {
    labels: [
        "07:00",
        "08:00",
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
    ],
    datasets: [
        {
            label: "Índice UV",
            data: [2, 2, 5, 12, 14, 16, 14, 12, 8, 4, 2],
            backgroundColor: "rgb(250, 215, 160)",
            borderColor: "rgb(243, 156, 18)",
            borderWidth: 2,
            fill: true,
        },
    ],
};

export const IndexValueOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: true,
            position: "top" as const,
        },
        tooltip: {
            enabled: true,
        },
    },
    scales: {
        x: {
            title: {
                display: true,
                text: "Hora del día",
            },
        },
        y: {
            title: {
                display: true,
                text: "Índice UV",
            },
            beginAtZero: true, // Inicia desde 0
            max: 20, // Escala hasta 12
        },
    },
};