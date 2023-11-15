const contenedor = document.getElementById("character-list");


const rickymorty = fetch("https://rickandmortyapi.com/api/character/?page=1")
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
})


