
export const fototypeData = {
    labels: ['Fototipo I', 'Fototipo II', 'Fototipo III', 'Fototipo IV', 'Fototipo V', 'Fototipo VI'],
    datasets: [
        {
            label: 'Distribución de Fototipos',
            data: [16.66, 16.66, 16.66, 16.66, 16.66, 16.66],
            backgroundColor: [
                'rgb(253, 221, 202)',
                'rgb(252, 220, 201)',
                'rgb(249, 221, 203)',
                'rgb(249, 197, 178)',
                'rgb(234, 184, 161)',
                'rgb(141, 91, 62)',
            ],
            borderColor: 'rgb(141, 91, 62)',
            borderWidth: 0.5,
        },
    ],
};

export const fototypeOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: true,
            position: 'bottom' as const,
        }
    },
};

export interface FototypeProps {
    id: number;
    label: string;
    med: number
};

export const fototypesInputs: FototypeProps[] = [
    { id: 1, label: 'I - Muy clara', med: 200 },
    { id: 2, label: 'II - Clara', med: 250 },
    { id: 3, label: 'III - Morena clara', med: 350 },
    { id: 4, label: 'IV - Morena moderada', med: 450 },
    { id: 5, label: 'V - Morena oscura', med: 600 },
    { id: 6, label: 'VI - Negra', med: 1000 },
]