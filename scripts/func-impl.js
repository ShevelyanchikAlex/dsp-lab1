function createHarmonicSignal(A, N, n, startPhase, frequency) {
    let result = new Array(n);
    for (let i = 0; i <= n; i++) {
        result[i] = A * Math.sin((2 * Math.PI * frequency * i) / N + startPhase);
    }
    return result;
}

function createPolyHarmonicSignal(A, N, n, phases, frequencies) {
    const K = 5;
    let result = new Array(n);
    for (let i = 0; i <= n; i++) {
        let sum = 0;
        for (let j = 0; j < K; j++) {
            sum += A * Math.sin((2 * Math.PI * frequencies[j] * i) / N + phases[j]);
        }
        result[i] = sum;
    }
    return result;
}

function createPolyHarmonicSignalWithLinearFunction(A, N, n, phases, frequencies) {
    const K = 5;
    const MAX_CHANGE_LEVEL = 0.2;

    let result = new Array(n);
    for (let i = 0; i <= n; i++) {
        let sum = 0;
        for (let j = 0; j < K; j++) {
            sum += linearFunction(A[j], n / N) * Math.sin((2 * Math.PI * linearFunction(frequencies[j], n / N) * i) / N + linearFunction(phases[j], n / N));
        }
        result[i] = sum;
    }

    function linearFunction(k, x) {
        return MAX_CHANGE_LEVEL * k * x + k;
    }
    return result;
}