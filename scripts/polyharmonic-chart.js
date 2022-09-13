const N = 512;
const n = 511;
const FREQUENCIES = [1, 2, 3, 4, 5];
const PHASES = [Math.PI / 4, 3 * Math.PI / 4, 2 * Math.PI / 3, Math.PI / 2, Math.PI / 3];
const LABELS = Array.from(Array(N).keys());

function createPolyHarmonicChart() {
    const A = 3;
    const polyHarmonicChart = new Chart(
        document.getElementById('poly-harmonic-chart-a'),
        initConfig('Polyharmonic signal', initPolyHarmonicDataset('', LABELS, 'rgb(36,137,204)', createPolyHarmonicSignal(A, N, n, PHASES, FREQUENCIES)))
    );
}

function createPolyHarmonicChartWithLinearFunction() {
    const A = [8, 3, 2, 1, 4];
    const polyHarmonicChartWithLinearFunction = new Chart(
        document.getElementById('poly-harmonic-chart-b'),
        initConfig('Polyharmonic signal with linear function', initPolyHarmonicDataset('', LABELS, 'rgb(36,137,204)', createPolyHarmonicSignalWithLinearFunction(A, N, n, PHASES, FREQUENCIES)))
    );
}

function initPolyHarmonicDataset(datasetLabel, labels, color, polyHarmonicElements) {
    return {
        labels: labels,
        datasets: [
            {
                label: datasetLabel,
                backgroundColor: color,
                borderColor: color,
                data: polyHarmonicElements,
            }
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

createPolyHarmonicChart();
createPolyHarmonicChartWithLinearFunction();