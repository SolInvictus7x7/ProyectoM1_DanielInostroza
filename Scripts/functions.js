function toastPop(message) {
    const container = document.getElementById('toast-box');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

function rgbToHex(color) {
    const temp = document.createElement("div");
    temp.style.color = color;
    document.body.appendChild(temp);
    const styles = window.getComputedStyle(temp).color;
    temp.remove();

    const rgb = styles.match(/\d+/g).map(Number);
    const hex = rgb.slice(0, 3).map(x => {
        const h = x.toString(16);
        return h.length === 1 ? "0" + h : h;
    }).join("");

    return `#${hex}`.toUpperCase();
}

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
        const colorBase = tipoColor ? 
            `hsl(${Math.floor(Math.random() * 360)}, ${Math.floor(Math.random() * 100)}%, ${Math.floor(Math.random() * 100)}%)` : 
            `rgba(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, 1)`;
        
        const hex = rgbToHex(colorBase);
        
        li.style.backgroundColor = colorBase;
        li.textContent = `${colorBase} | ${hex}`;

        li.addEventListener('click', () => {
            navigator.clipboard.writeText(hex);
            toastPop(`Copiado HEX: ${hex}`); 
        });
    });

    target.prepend(clonar);
    toastPop("Paleta generada");
}