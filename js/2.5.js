let formulario = document.querySelector("#formulario");
let radioInput = document.querySelector("#radio");
let alturaInput = document.querySelector("#altura");
let tabla = document.querySelector("#tabla");
let msgerror = document.querySelector("#error");
let cilindros = [];

let calcularAreaBase = (radio) => {
    return 3.14156 * radio * radio;
}

let calcularVolumen = (radio, altura) => {
    return calcularAreaBase(radio) * altura;
}

let imprimir = (cilindros) => {
    let msg = "<table class='table table-bordered'><thead><th>No</th><th>Radio</th><th>Altura</th><th>Área de la base</th><th>Volumen</th></thead>";
    msg += "<tbody>";
    let i = 0;
    while (i < cilindros.length) {
        let radio = parseFloat(cilindros[i].radio);
        let altura = parseFloat(cilindros[i].altura);
        msg += "<tr>";
        msg += `<td>${i + 1}</td>`;
        msg += `<td>${radio}</td>`;
        msg += `<td>${altura}</td>`;
        msg += `<td>${calcularAreaBase(radio).toFixed(2)}</td>`;
        msg += `<td>${calcularVolumen(radio, altura).toFixed(2)}</td>`;
        msg += "</tr>";
        i++;
    }
    msg += "</tbody></table>";
    tabla.innerHTML = msg;
}

formulario.addEventListener("submit", (event) => {
    let centinela = false;
    let error = "";
    if (radioInput.value.trim().length === 0 || alturaInput.value.trim().length === 0) {
        error = "Ingrese el radio y la altura del cilindro";
        centinela = true;
    }

    if (centinela) {
        msgerror.innerHTML = error;
    } else {
        let cilindro = {
            radio: radioInput.value,
            altura: alturaInput.value
        };
        cilindros.push(cilindro);
        imprimir(cilindros);
        limpiar();
    }

    event.preventDefault();
});

let limpiar = () => {
    radioInput.value = "";
    alturaInput.value = "";
    radioInput.focus();
}
