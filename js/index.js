function calcularTabuada() {
    // 1. Obter os valores dos inputs
    const multiplicandoInput = document.getElementById('multiplicando').value;
    const multiplicadorMaxInput = document.getElementById('multiplicadorMax').value;
    
    // Converter para números
    const multiplicando = parseInt(multiplicandoInput);
    const multiplicadorMax = parseInt(multiplicadorMaxInput);
    
    // Elementos de saída
    const feedback = document.getElementById('feedback');
    const resultadoDiv = document.getElementById('resultado');

    // 2. Validação dos Inputs
    if (isNaN(multiplicando) || isNaN(multiplicadorMax) || multiplicando <= 0 || multiplicadorMax <= 0) {
        feedback.textContent = "Por favor, insira números válidos e positivos em ambos os campos.";
        resultadoDiv.innerHTML = ''; // Limpa o resultado anterior
        return;
    }

    // 3. Preparar o Resultado
    let resultadoHTML = `<strong>Tabuada do ${multiplicando}:</strong>\n`;

    // 4. Loop para calcular a tabuada
    for (let i = 1; i <= multiplicadorMax; i++) {
        const resultado = multiplicando * i;
        resultadoHTML += `${multiplicando} x ${i} = ${resultado}\n`;
    }

    // 5. Exibir o Resultado e Limpar o Feedback
    resultadoDiv.textContent = resultadoHTML; // Usa textContent para preservar as quebras de linha
    feedback.textContent = "Valores calculados com sucesso!";
}