const vetorDesordenado = [5, 3, 2, 4, 7, 1, 0, 6];

let bubbleSort = (vetor) => {
    let len = vetor.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (vetor[j] > vetor[j + 1]) {
                let aux = vetor[j];
                vetor[j] = vetor[j + 1];
                vetor[j + 1] = aux;
            }
        }
    }
    return vetor;
};

console.log(bubbleSort(vetorDesordenado));