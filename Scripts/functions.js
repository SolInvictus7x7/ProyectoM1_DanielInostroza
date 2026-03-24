export function tipoColor() {
    const checkbox = document.querySelector(".tipo-color");
    let colorSeleccionado = checkbox.checked;
    return colorSeleccionado
}

export function cantidadColor() {
    const cantidadSelect = document.querySelector('input[name="outputs"]:checked');
    return cantidadSelect ? cantidadSelect.value : null;
}

export function generar() {
    const template = document.querySelector('.paleta-temp');
    const target = document.querySelector('article');
    const clonar = template.content.cloneNode(true);
    target.appendChild(clonar);
}