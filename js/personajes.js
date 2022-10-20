
let status= ""

let pagina = 1;
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');

btnSiguiente.addEventListener('click', () => {
	if(pagina < 1000){
		pagina += 1;
		cargarJuegos();
	}
});

btnAnterior.addEventListener('click', () => {
	if(pagina > 1){
		pagina -= 1;
		cargarJuegos();
	}
});


const cargarJuegos = async ()=> {
    try {
        const respuesta = await fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}&status=${status}`);
        const datos = await respuesta.json();
        console.log(datos);

        let personajes = ""
        datos.results.forEach(personaje => {
            personajes += `
            <div class="personaje">
                    <img class="poster" src="${personaje.image} " alt="">
						<h3 class="nombre">${personaje.name}</h3>
					</div>
            `
        })

        document.getElementById("contenedor").innerHTML = personajes;
    
    } catch {
        console.log("esto es un error");
    }
}

cargarJuegos();