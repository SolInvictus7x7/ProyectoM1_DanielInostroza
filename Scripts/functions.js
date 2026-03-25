export function generar() {
    const template = document.querySelector('.paleta-temp');
    const target = document.querySelector('article');
    const clonar = template.content.cloneNode(true);
    const cantidad = document.querySelector('input[name="outputs"]:checked').value;
    const tipoColor = document.querySelector('.tipo-color').checked;

    if (cantidad === "6") {
        clonar.querySelectorAll('#c2, #c3').forEach(el => el.remove());
    } else if (cantidad === "8") {
        clonar.querySelectorAll('#c3').forEach(el => el.remove());
    }

    clonar.querySelectorAll('.color').forEach(li => {
        const color = tipoColor ? 
            `hsl(${Math.floor(Math.random() * 360)}, ${Math.floor(Math.random() * 100)}%, ${Math.floor(Math.random() * 100)}%)` : 
            `rgba(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, 1)`;
        
        li.style.backgroundColor = color;
        li.textContent = color; 
    });

    target.prepend(clonar);
}