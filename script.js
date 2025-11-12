document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("input-text");
    const resultado = document.getElementById("resultado");

    document.getElementById("btnMaiuscula").addEventListener("click", function () {
        resultado.innerHTML = input.value.toUpperCase();
    });

    document.getElementById("btnMinuscula").addEventListener("click", function () {
        resultado.innerHTML = input.value.toLowerCase();
    });

    document.getElementById("btnPrimeiraLetra").addEventListener("click", function () {
        let texto = input.value.trim();
        let palavras = texto.split(" ");
        let resultadoFinal = [];

        for (let palavra of palavras) {
            if (palavra.length === 0) continue;

            
            let primeiraLetra = palavra.charAt(0).toUpperCase();
            let resto = palavra.slice(1).toLowerCase();

            resultadoFinal.push(primeiraLetra + resto);
        }

        
        resultado.innerHTML = resultadoFinal.join(" ");
    });

    document.getElementById("btnLimpar").addEventListener("click", function () {
        input.value = "";        
        resultado.innerHTML = ""; 
    });
    
    document.getElementById("btnMontanha").addEventListener("click", function () {
        let texto = input.value.toLowerCase();
        let resultadoMontanha = "";

        for (let i = 0; i < texto.length; i++) {
            if (i % 2 === 0) {
                resultadoMontanha += texto[i].toLowerCase(); 
            } else {
                resultadoMontanha += texto[i].toUpperCase(); 
            }
        }

        resultado.innerHTML = resultadoMontanha;
    });    
});
