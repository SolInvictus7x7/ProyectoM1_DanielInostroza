Manual de Usuario

    1. Selección de Formato: Utiliza el interruptor (switch) superior para alternar entre códigos de color RGBA o HSL.

    2. Configuración de Cantidad: Elige cuántos colores deseas en tu paleta (6, 8 o 9) usando el selector segmentado.

    3. Generación: Haz clic en el botón "Generar Paletas!". La nueva paleta aparecerá al inicio de la sección inferior con una animación de entrada.

    4. Copiar al Portapapeles: Haz clic directamente sobre cualquier barra de color para copiar su código. Un mensaje (toast) confirmará la acción.

Manual Técnico

    - Manipulación del DOM: Se utiliza el elemento <template> para clonar de forma eficiente la estructura de las paletas sin saturar el HTML inicial.

    - Lógica de Color: Generación dinámica mediante Math.random() con redondeo de valores para garantizar códigos limpios y legibles.

    - Estilos Dinámicos: El diseño es completamente responsivo utilizando unidades relativas (rem, em, %) y CSS Grid con auto-fill para adaptarse a cualquier pantalla sin medidas fijas en píxeles.

Descarga y Ejecución Local

    1. Clonar o Descargar: Descarga los archivos del proyecto en una carpeta local, o copia desde github usando git:
    https://github.com/SolInvictus7x7/ProyectoM1_DanielInostroza

    2. Servidor Local: Debido al uso de ES Modules, el archivo index.html debe ejecutarse mediante un servidor.

        -Si usas VS Code, instala la extensión Live Server, abre el archivo y haz clic en "Go Live".

    3. Acceso: Abre tu navegador en la dirección http://127.0.0.1:5500 (o el puerto indicado).

Despliegue
Para subir esta aplicación a producción (por ejemplo, en GitHub Pages o Vercel):

    1. Asegúrate de que la estructura de carpetas sea correcta (los scripts deben estar en ./Scripts/).

    2. Sube los archivos al repositorio.

    3. Configura la rama principal como fuente de despliegue.