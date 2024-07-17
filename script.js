const svg = document.getElementById('CapaBusca')
const aulas01 = document.getElementById('Aulas1');
const aulas02 = document.getElementById('Aulas2');
const aulas03 = document.getElementById('Aulas3');
const aulas04 = document.getElementById('Aulas4');
const Laboratorios = document.getElementById('Laboratorios');
const Epesados = document.getElementById('Epesados');

let isDragging = false;
let startPositionX = 0;
let startPositionY = 0;


let scale = 1;
let translateX = 0;
let translateY = 0;

const mapa = document.getElementById('mapa');


mapa.addEventListener('mousedown', (event) => {
    isDragging = true;
    startPositionX = event.clientX - translateX;
    startPositionY = event.clientY - translateY;
    mapa.classList.add('dragging');
});

mapa.addEventListener('mouseup', () => {
    isDragging = false;
    mapa.classList.remove('dragging');
});

mapa.addEventListener('mousemove', (event) => {
    if (isDragging) {
        const currentX = event.clientX - startPositionX;
        const currentY = event.clientY - startPositionY;
        translateX = currentX;
        translateY = currentY;
        mapa.style.transform = `translate(${currentX}px, ${currentY}px) scale(${scale})`;
    }
});

mapa.addEventListener('wheel', (event) => {
    event.preventDefault();
    scale += event.deltaY * -0.001;
    scale = Math.min(Math.max(0.7, scale), 3); // Limitar el zoom entre 0.5 y 3
    mapa.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
});



// Función para cargar dinámicamente el contenido de otra página
function cargarNuevaPagina() {
    window.location.href = 'pagAulas1.html';
}

// Evento click para cambiar la página
document.getElementById('Aulas1').addEventListener('click', cargarNuevaPagina);

document.getElementById('Aulas2').addEventListener('click', function() {
    window.location.href = 'pagAulas2.html';
});

document.getElementById('Aulas3').addEventListener('click', function() {
    window.location.href = 'pagAulas3.html';
});

document.getElementById('Aulas4').addEventListener('click', function() {
    window.location.href = 'pagAulas4.html';
});

document.getElementById('Laboratorios').addEventListener('click', function() {
    window.location.href = 'pagLabs.html';
});

document.getElementById('Epesados').addEventListener('click', function() {
    window.location.href = 'pagPesados.html';
});


// Manejar el evento popstate para volver a la página original al presionar el botón atrás del navegador
window.addEventListener('popstate', (event) => {
    // Revertir al contenido original si existe un estado en el historial
    window.location.href = 'Prueba1.html';
});

const textoSVGM = document.createElementNS("http://www.w3.org/2000/svg", "text");
let bbox = aulas01.getBBox();
let x = bbox.x + bbox.width / 2 -1;
let y = bbox.y + 53; 
textoSVGM.setAttribute("x", x);
textoSVGM.setAttribute("y", y); // Ajusta la posición vertical según tus necesidades
textoSVGM.setAttribute("text-anchor", "middle");  
textoSVGM.setAttribute('class', 'nombreMapa'); 
textoSVGM.textContent = 'Aulas 1';
svg.appendChild(textoSVGM);

const textoSVGM2 = document.createElementNS("http://www.w3.org/2000/svg", "text");
bbox = aulas02.getBBox();
x = bbox.x + bbox.width / 2 -1;
y = bbox.y + 53; 
textoSVGM2.setAttribute("x", x);
textoSVGM2.setAttribute("y", y-15); // Ajusta la posición vertical según tus necesidades
textoSVGM2.setAttribute("text-anchor", "middle");  
textoSVGM2.setAttribute('class', 'nombreMapa'); 
textoSVGM2.textContent = 'Aulas 2';
svg.appendChild(textoSVGM2);

const textoSVGM3 = document.createElementNS("http://www.w3.org/2000/svg", "text");
bbox = aulas03.getBBox();
x = bbox.x + bbox.width / 2 -1;
y = bbox.y + 53; 
textoSVGM3.setAttribute("x", x);
textoSVGM3.setAttribute("y", y-3); // Ajusta la posición vertical según tus necesidades
textoSVGM3.setAttribute("text-anchor", "middle");  
textoSVGM3.setAttribute('class', 'nombreMapa'); 
textoSVGM3.textContent = 'Aulas 3';
svg.appendChild(textoSVGM3);

const textoSVGM4 = document.createElementNS("http://www.w3.org/2000/svg", "text");
bbox = aulas04.getBBox();
x = bbox.x + bbox.width / 2 -1;
y = bbox.y + 53; 
textoSVGM4.setAttribute("x", x);
textoSVGM4.setAttribute("y", y-13); // Ajusta la posición vertical según tus necesidades
textoSVGM4.setAttribute("text-anchor", "middle");  
textoSVGM4.setAttribute('class', 'nombreMapa'); 
textoSVGM4.textContent = 'Aulas 4';
svg.appendChild(textoSVGM4);

const textoSVGM5 = document.createElementNS("http://www.w3.org/2000/svg", "text");
bbox = Laboratorios.getBBox();
x = bbox.x + bbox.width / 2 -1;
y = bbox.y + 53; 
textoSVGM5.setAttribute("x", x+2);
textoSVGM5.setAttribute("y", y-15); // Ajusta la posición vertical según tus necesidades
textoSVGM5.setAttribute("text-anchor", "middle");  
textoSVGM5.setAttribute('class', 'nombreMapa'); 
textoSVGM5.textContent = 'Laboratorios';
svg.appendChild(textoSVGM5);

const textoSVGM5_1 = document.createElementNS("http://www.w3.org/2000/svg", "text");
bbox = Laboratorios.getBBox();
x = bbox.x + bbox.width / 2 -1;
y = bbox.y + 53; 
textoSVGM5_1.setAttribute("x", x+2);
textoSVGM5_1.setAttribute("y", y+10); // Ajusta la posición vertical según tus necesidades
textoSVGM5_1.setAttribute("text-anchor", "middle");  
textoSVGM5_1.setAttribute('class', 'nombreMapa'); 
textoSVGM5_1.textContent = 'Edificio central';
svg.appendChild(textoSVGM5_1);

const textoSVGM6 = document.createElementNS("http://www.w3.org/2000/svg", "text");
const textoSVGM6_2 = document.createElementNS("http://www.w3.org/2000/svg", "text");
const textoSVGM6_3 = document.createElementNS("http://www.w3.org/2000/svg", "text");
bbox = Epesados.getBBox();
x = bbox.x + bbox.width / 2 -1;
y = bbox.y + 53; 
textoSVGM6.setAttribute("x", x+3);
textoSVGM6.setAttribute("y", y-15); // Ajusta la posición vertical según tus necesidades
textoSVGM6.setAttribute("text-anchor", "middle");  
textoSVGM6.setAttribute('class', 'nombreMapa'); 
textoSVGM6.textContent = 'Edificio';
svg.appendChild(textoSVGM6);

textoSVGM6_2.setAttribute("x", x+3);
textoSVGM6_2.setAttribute("y", y+5); // Ajusta la posición vertical según tus necesidades
textoSVGM6_2.setAttribute("text-anchor", "middle");  
textoSVGM6_2.setAttribute('class', 'nombreMapa'); 
textoSVGM6_2.textContent = 'de';
svg.appendChild(textoSVGM6_2);

textoSVGM6_3.setAttribute("x", x+3);
textoSVGM6_3.setAttribute("y", y+25); // Ajusta la posición vertical según tus necesidades
textoSVGM6_3.setAttribute("text-anchor", "middle");  
textoSVGM6_3.setAttribute('class', 'nombreMapa'); 
textoSVGM6_3.textContent = 'pesados';
svg.appendChild(textoSVGM6_3);


