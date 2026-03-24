export function tipoColor() {
    const checkbox = document.querySelector(".tipo-color");
    let colorSeleccionado = checkbox.checked;
    return colorSeleccionado
}

export function generar() {
    const template = document.querySelector('.paleta-temp');
    const target = document.querySelector('article');
    const clonar = template.content.cloneNode(true);
    const cantidad = document.querySelector('input[name="outputs"]:checked').value;

    if (cantidad === "6") {
        clonar.querySelectorAll('#c2, #c3').forEach(el => el.remove());
    } else if (cantidad === "8") {
        clonar.querySelectorAll('#c3').forEach(el => el.remove());
    }

    target.appendChild(clonar);
}