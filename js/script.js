let contenedor = document.getElementById("character-list");
let pagina = 1
rickymorty(pagina) 

function rickymorty (pagina) { 
fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}`)
.then ((respuesta) => respuesta.json())
.then ((data) => { const personajes = data.results;
    personajes.forEach(elemento => {
    let mostrarPersonajes = `<div class="rickymorty">
    <img src="${elemento.image}" alt="${elemento.name}"/>
    <p>Name: ${elemento.name}</p>
    <p>Species: ${elemento.species}</p>
    </div>`
    contenedor.innerHTML += mostrarPersonajes   
    })
})}




document.getElementById("next-page").addEventListener('click', restarUno);
document.getElementById("prev-page",).addEventListener('click', sumarUno);

function sumarUno () {
contenedor.innerHTML =""
pagina=pagina-1;
rickymorty(pagina);

}

function restarUno () {
contenedor.innerHTML =""
pagina=pagina+1;
rickymorty(pagina);

}
