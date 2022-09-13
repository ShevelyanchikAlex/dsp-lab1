function createHarmonicCharts() {
    //constituent functions
    const A = 8;
    const N = 512;
    const n = 511;
    const FREQUENCY_A = 4;
    const FREQUENCY_B = 2;
    const PHASE = 0;

    //changing parameters
    const PHASES = [Math.PI / 6, Math.PI / 3, 2 * Math.PI / 3, Math.PI / 4, 0];
    const FREQUENCIES = [8, 1, 5, 3, 9];
    const AMPLITUDES = [8, 3, 2, 1, 4];

    //graphic components
    const LABELS_A = ['ƒ1', 'ƒ2', 'ƒ3', 'ƒ4', 'ƒ5'];
    const LABELS_B = ['f1', 'f2', 'f3', 'f4', 'f5'];
    const LABELS_C = ['A1', 'A2', 'A3', 'A4', 'A5'];
    const COLORS = ['rgb(36,137,204)', 'rgb(60,239,60)', 'rgb(137,36,204)', 'rgb(255, 99, 132)', 'rgb(112,111,111)'];
    const LABELS = Array.from(Array(N).keys());


    let arrWithPhases = PHASES.map(phase => createHarmonicSignal(A, N, n, phase, FREQUENCY_A));
    let arrWithFrequencies = FREQUENCIES.map(frequency => createHarmonicSignal(A, N, n, PHASE, frequency));
    let arrWithAmplitudes = AMPLITUDES.map(amplitude => createHarmonicSignal(amplitude, N, n, PHASE, FREQUENCY_B));

    const harmonicChartA = new Chart(
        document.getElementById('harmonic-chart-a'),
        initConfig('Harmonic signal with variable phases', initHarmonicDataset(LABELS_A, LABELS, COLORS, arrWithPhases))
    );

    const harmonicChartB = new Chart(
        document.getElementById('harmonic-chart-b'),
        initConfig('Harmonic signal with variable frequencies', initHarmonicDataset(LABELS_B, LABELS, COLORS, arrWithFrequencies))
    );

    const harmonicChartC = new Chart(
        document.getElementById('harmonic-chart-c'),
        initConfig('Harmonic signal with variable amplitudes', initHarmonicDataset(LABELS_C, LABELS, COLORS, arrWithAmplitudes))
    );
}


function initHarmonicDataset(datasetLabels, labels, colors, harmonicElements) {
    return {
        labels: labels,
        datasets: [
            {
                label: datasetLabels[0],
                backgroundColor: colors[0],
                borderColor: colors[0],
                data: harmonicElements[0],
            },
            {
                label: datasetLabels[1],
                backgroundColor: colors[1],
                borderColor: colors[1],
                data: harmonicElements[1],
            },
            {
                label: datasetLabels[2],
                backgroundColor: colors[2],
                borderColor: colors[2],
                data: harmonicElements[2],
            },
            {
                label: datasetLabels[3],
                backgroundColor: colors[3],
                borderColor: colors[3],
                data: harmonicElements[3],
            },
            {
                label: datasetLabels[4],
                backgroundColor: colors[4],
                borderColor: colors[4],
                data: harmonicElements[4],
            },
        ]
    };
}

function initConfig(title, dataset) {
    return {
        type: 'line',
        data: dataset,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: title
                }
            }
        }
    };
}

createHarmonicCharts();