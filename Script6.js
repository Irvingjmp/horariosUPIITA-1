const pesados = document.getElementById('pesados');
const svgPesados = document.getElementById('Capa_aulasPesados')

let aulas = ['_x5F_101', '_x5F_102', '_x5F_103', '_x5F_104', '_x5F_01', '_x5F_02', '_x5F_03', '_x5F_04']; //+3

let isDragging = false;
let startPositionX = 0;
let startPositionY = 0;

// Variables para pesados
let scale = 1;
let translateX = 0;
let translateY = 0;

let dataM;
let dataP;

function redirect() {
    window.location.href = 'index.html'; // Reemplaza con la URL a la que quieres redirigir
}

document.getElementById('resetZoomButton').addEventListener('click', resetZoom);

function resetZoom() {
    // Restablecer escala y transformación a los valores iniciales
    scale = 1;
    translateX = 0;
    translateY = 0;
    pesados.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
}


pesados.addEventListener('mousedown', (event) => {
    isDragging = true;
    startPositionX = event.clientX - translateX;
    startPositionY = event.clientY - translateY;
    pesados.classList.add('dragging');
});

pesados.addEventListener('mouseup', () => {
    isDragging = false;
    pesados.classList.remove('dragging');
});

pesados.addEventListener('mousemove', (event) => {
    if (isDragging) {
        const currentX = event.clientX - startPositionX;
        const currentY = event.clientY - startPositionY;
        translateX = currentX;
        translateY = currentY;
        pesados.style.transform = `translate(${currentX}px, ${currentY}px) scale(${scale})`;

    }
});

// Evento de rueda para pesados
pesados.addEventListener('wheel', (event) => {
    // Escala y transformación aquí (sin event.preventDefault())
    scale += event.deltaY * -0.001;
    scale = Math.min(Math.max(0.8, scale), 8);
    pesados.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
});

const fondoBlanco1 = document.createElementNS("http://www.w3.org/2000/svg", "rect");

fondoBlanco1.setAttribute("x", 270);
fondoBlanco1.setAttribute("y", 16);
fondoBlanco1.setAttribute("width", "40%");
fondoBlanco1.setAttribute("height", "6%");
fondoBlanco1.setAttribute("rx", 4)
fondoBlanco1.setAttribute("fill", "#fff4db"); // Color de fondo blanco
fondoBlanco1.setAttribute("stroke", "black"); // Color del borde
fondoBlanco1.setAttribute("stroke-width", "1");
//svgPesados.appendChild(fondoBlanco1);

const textoSVG = document.createElementNS("http://www.w3.org/2000/svg", "text");
textoSVG.setAttribute("x", 450);
textoSVG.setAttribute("y", 75); 
textoSVG.setAttribute("text-anchor", "middle");  
textoSVG.setAttribute('class', 'nombreEdP'); 
textoSVG.textContent = "PLANTA ALTA";
svgPesados.appendChild(textoSVG);


const fondoBlanco2 = document.createElementNS("http://www.w3.org/2000/svg", "rect");

fondoBlanco2.setAttribute("x", 270);
fondoBlanco2.setAttribute("y", 16+507+20);
fondoBlanco2.setAttribute("width", "40%");
fondoBlanco2.setAttribute("height", "6%");
fondoBlanco2.setAttribute("rx", 4)
fondoBlanco2.setAttribute("fill", "#fff4db"); // Color de fondo blanco
fondoBlanco2.setAttribute("stroke", "black"); // Color del borde
fondoBlanco2.setAttribute("stroke-width", "1");
//svgPesados.appendChild(fondoBlanco2);


const textoSVG2 = document.createElementNS("http://www.w3.org/2000/svg", "text");
textoSVG2.setAttribute("x", 450);
textoSVG2.setAttribute("y", 570+20); 
textoSVG2.setAttribute("text-anchor", "middle");  
textoSVG2.setAttribute('class', 'nombreEdP'); 
textoSVG2.textContent = "PLANTA BAJA";
svgPesados.appendChild(textoSVG2);


function agregarDes(pos,x,y,texto,textoM,textoP){
    const textoSVG = document.createElementNS("http://www.w3.org/2000/svg", "text");
    // const textoSVGM = document.createElementNS("http://www.w3.org/2000/svg", "text");
    const fondoBlanco = document.createElementNS("http://www.w3.org/2000/svg", "rect");

    fondoBlanco.setAttribute("x", x-22+3);
    fondoBlanco.setAttribute("y", y-41+2-15);
    fondoBlanco.setAttribute("width", "7.5%");
    fondoBlanco.setAttribute("height", "2.5%");
    fondoBlanco.setAttribute("rx", 4)
    fondoBlanco.setAttribute("fill", "#C4E6EF"); // Color de fondo blanco
    fondoBlanco.setAttribute("stroke", "black"); // Color del borde
    fondoBlanco.setAttribute("stroke-width", "1");
    svgPesados.appendChild(fondoBlanco);

    textoSVG.setAttribute("x", x-11+26);
    textoSVG.setAttribute("y", y-27+2-8);
    //textoSVG.setAttribute("font-family", "Arial");
    textoSVG.setAttribute("text-anchor", "middle"); 
    textoSVG.setAttribute("font-size", "20");
    textoSVG.setAttribute("fill", "black");
    textoSVG.setAttribute("font-weight", "bold");
    textoSVG.textContent = texto; 
    svgPesados.appendChild(textoSVG);


    
      // Dividir textoM en dos partes basadas en la longitud máxima permitida para la primera línea
    const maxLengthFirstLine = 20; //Nombre de materia
    let primeraParte = '';
    let segundaParte = '';

    if (textoM.length > maxLengthFirstLine) {
        let words = textoM.split(' ');
        let currentLineLength = 0;

        for (let i = 0; i < words.length; i++) {
            let word = words[i];
            let wordLength = word.length;

            if (currentLineLength + wordLength <= maxLengthFirstLine) {
                primeraParte += word + ' ';
                currentLineLength += wordLength + 1;
            } else {
                segundaParte = words.slice(i).join(' ');
                break;
            }
        }

        // Eliminar el espacio en blanco adicional al final de la primera parte
        primeraParte = primeraParte.trim();
    } else {
        primeraParte = textoM;
    }


    // console.log(primeraParte);
    // console.log(segundaParte);

     // Crear y configurar el primer elemento <text> para la primera parte del texto
    const textoSVGM1 = document.createElementNS("http://www.w3.org/2000/svg", "text");
    textoSVGM1.setAttribute("x", x +15);
    textoSVGM1.setAttribute("y", y + 50); // Ajusta la posición vertical según tus necesidades
    textoSVGM1.setAttribute("text-anchor", "middle");  
    textoSVGM1.setAttribute('class', 'resaltadoP'); 
    textoSVGM1.textContent = primeraParte;
    svgPesados.appendChild(textoSVGM1);

    // Crear y configurar el segundo elemento <text> para la segunda parte del texto si existe
    if (segundaParte !== '') {
        const textoSVGM2 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        textoSVGM2.setAttribute("x", x + 15);
        textoSVGM2.setAttribute("y", y + 70); // Ajusta la posición vertical según tus necesidades
        textoSVGM2.setAttribute("text-anchor", "middle");    
        textoSVGM2.setAttribute('class', 'resaltadoP'); 
        textoSVGM2.textContent = segundaParte;
        svgPesados.appendChild(textoSVGM2);
    }

    //Dividir nombre de profe.
    // Dividir textoM en dos partes basadas en la longitud máxima permitida para la primera línea
    const maxLengthFirstLine2 = 14; //Nombre de profe
    let primeraParte2 = '';
    let segundaParte2 = '';

    if (textoP.length > maxLengthFirstLine2) {
        let words = textoP.split(' ');
        let currentLineLength = 0;

        for (let i = 0; i < words.length; i++) {
            let word = words[i];
            let wordLength = word.length;

            if (currentLineLength + wordLength <= maxLengthFirstLine2) {
                primeraParte2 += word + ' ';
                currentLineLength += wordLength + 1;
            } else {
                segundaParte2 = words.slice(i).join(' ');
                break;
            }
        }

        // Eliminar el espacio en blanco adicional al final de la primera parte
        primeraParte2 = primeraParte2.trim();
    } else {
        primeraParte2 = textoP;
    }


    // console.log(primeraParte2);
    // console.log(segundaParte2);

     // Crear y configurar el primer elemento <text> para la primera parte del texto
    const textoSVGM3 = document.createElementNS("http://www.w3.org/2000/svg", "text");
    textoSVGM3.setAttribute("x", x +15);
    textoSVGM3.setAttribute("y", y -12); // Ajusta la posición vertical según tus necesidades
    textoSVGM3.setAttribute("text-anchor", "middle");  
    textoSVGM3.setAttribute('class', 'resaltadoP'); 
    textoSVGM3.textContent = primeraParte2;
    svgPesados.appendChild(textoSVGM3);

    // Crear y configurar el segundo elemento <text> para la segunda parte del texto si existe
    if (segundaParte2 !== '') {
        const textoSVGM4 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        textoSVGM4.setAttribute("x", x + 15);
        textoSVGM4.setAttribute("y", y +5); // Ajusta la posición vertical según tus necesidades
        textoSVGM4.setAttribute("text-anchor", "middle");      
        textoSVGM4.setAttribute('class', 'resaltadoP');    
        textoSVGM4.textContent = segundaParte2;
        svgPesados.appendChild(textoSVGM4);
    }
    
}

document.addEventListener('DOMContentLoaded', function() {
    const fecha = new Date();
    let diaSemana = fecha.getDay();
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();
    let horaVi = 9;
    diaSemana = 2;
    hora = 13;

    // console.log(`DHM`, diaSemana, hora, minutos);  

    let horaC = hora + minutos / 60 + segundos / 3600;

    // Cargar todos los datos JSON
    Promise.all([
        fetch('aulasM.json').then(response => response.json()),
        fetch('aulasP.json').then(response => response.json()),
        fetch('aulasG.json').then(response => response.json())
    ])
    .then(([dataM, dataP, dataG]) => {
        // console.log(dataM);
        // console.log(dataP);
        // console.log(dataG);

        
        if(horaC >= 7 && horaC < 8.5) {
            horaVi = 0;
        } else if(horaC >= 8.5 && horaC < 10) {
            horaVi = 1;
        } else if(horaC >= 10 && horaC < 11.5) {
            horaVi = 2;
        } else if(horaC >= 11.5 && horaC < 13) {
            horaVi = 3;
        } else if(horaC >= 13 && horaC < 14.5) {
            horaVi = 4;
        } else if(horaC >= 14.5 && horaC < 16) {
            horaVi = 5;
        } else if(horaC >= 16 && horaC < 17.5) {
            horaVi = 6;
        } else if(horaC >= 17.5 && horaC < 19) {
            horaVi = 7;
        } else if(horaC >= 19 && horaC < 20.5) {
            horaVi = 8;
        }

        if(diaSemana === 0 || diaSemana === 6 || horaC < 7 || horaC > 22) {
            for (let i = 0; i < 8; i++) {
                // console.log(aulas[i]);
                let elementoHtml = document.getElementById(aulas[i]);
                //elementoHtml.style.fill = 'gray';
            }
        } else {
            for (let i = 0; i < 8; i++) {
                let elemento = dataG[i + 58][horaVi][diaSemana - 1];
                let elementoM = dataM[i + 58][horaVi][diaSemana - 1];
                let elementoP = dataP[i + 58][horaVi][diaSemana - 1];

                // console.log(`Min`, horaC); 
                // console.log(aulas[i]);
                // console.log(`dia`, diaSemana);
                let elementoHtml = document.getElementById(aulas[i]);
                const bbox = elementoHtml.getBBox();
                const x = bbox.x + bbox.width / 2 - 15;
                const y = bbox.y - 5; 
                // console.log(`dia`, diaSemana);
                if (elementoHtml) {
                    if (elemento === 'None' || typeof elemento === 'undefined') {
                        elementoHtml.style.fill = 'green';
                        // console.log(`La posición [${i + 11}]${horaVi}${diaSemana - 1} es null o undefined. Cambiando color.`);
                    } else {
                        elementoHtml.style.fill = 'red';
                        // console.log(`La posición [${i + 11}]${horaVi}${diaSemana - 1} tiene el valor:`, elemento);
                        agregarDes(bbox, x, y, elemento, elementoM, elementoP);
                    }
                } else {
                    console.log(`No se encontró el elemento con la ID ${aulas[i]}.`);
                }
            }
        }
    })
    .catch(error => {
        console.error('Error al cargar los archivos JSON:', error);
    });
});