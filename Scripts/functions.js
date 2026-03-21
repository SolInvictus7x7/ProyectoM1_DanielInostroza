function tipoColor() {
    const checkbox = document.querySelector(".tipo-color");
    let colorSeleccionado = checkbox.checked;
    return colorSeleccionado
}

function cantidadColor() {
    const cantidadSelect = document.querySelector('input[name="outputs"]:checked');
    return cantidadSelect ? cantidadSelect.value : null;
}