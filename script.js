document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("input-text");
    const resultado = document.getElementById("resultado");

    document.getElementById("btnMaiuscula").addEventListener("click", function () {
        resultado.innerHTML = input.value.toUpperCase();
    });

    document.getElementById("btnMinuscula").addEventListener("click", function () {
        resultado.innerHTML = input.value.toLowerCase();
    });
});
