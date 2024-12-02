
export const fototypeData = {
    labels: ['Fototipo I', 'Fototipo II', 'Fototipo III', 'Fototipo IV', 'Fototipo V', 'Fototipo VI'],
    datasets: [
        {
            label: 'Distribución de Fototipos',
            data: [14.28, 14.28, 14.28, 14.28, 14.28, 14.28, 14.28],
            backgroundColor: [
                'rgb(253, 221, 202)',
                'rgb(252, 220, 201)',
                'rgb(249, 221, 203)',
                'rgb(249, 197, 178)',
                'rgb(234, 184, 161)',
                'rgb(212, 167, 110)',
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


export const fototypesList = [
    { id: 1, name: 'Fotitpo I' },
    { id: 2, name: 'Fotitpo II' },
    { id: 3, name: 'Fotitpo III' },
    { id: 4, name: 'Fotitpo IV' },
    { id: 5, name: 'Fotitpo V' },
    { id: 6, name: 'Fotitpo VI' },
    { id: 7, name: 'Fotitpo VII' }
];