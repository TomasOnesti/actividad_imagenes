const imagenes = document.querySelectorAll(".imagen");
const visor = document.getElementById("visor");
const zoom = document.getElementById("imgZoom");
const derecha = document.getElementById("der");
const izquierda = document.getElementById("izq");
const cerrar = document.getElementById("cerrar");

let indice = 0;

//Zoom a la imagen
imagenes.forEach((img, index)=>{
    img.addEventListener("click", ()=>{
        visor.style.display = "flex";
        zoom.src = img.src;
        indice = index
    });
});
//Quitar zoom
cerrar.addEventListener("click", () => {
    visor.style.display = "none"; 
});
//Derecha
derecha.addEventListener("click", () => {
    indice = (indice + 1) % imagenes.length;
    zoom.src = imagenes[indice].src;
});

izquierda.addEventListener("click", () => {
    indice = (indice - 1 + imagenes.length) % imagenes.length;
    zoom.src = imagenes[indice].src;
});