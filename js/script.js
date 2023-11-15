
const rickymorty = fetch("https://rickandmortyapi.com/api/character/?page=1")
.then ((respuesta) => respuesta.json())
// .then ((data) => {console.log(data.results[0].name)})
.then ((data) => { const personajes = data.results;
    personajes.forEach(element => {
    
        console.log(element.name)
    })
})

// console.log(rickymorty())

// rickymorty.forEach((personaje) => console.log(personaje));

