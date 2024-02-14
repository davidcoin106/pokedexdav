// TOOLTIP

const icono_de_ayuda = document.querySelector(".icono-de-ayuda");
const tooltip = document.querySelector(".tooltip");

icono_de_ayuda.addEventListener("mouseover", () => {
  tooltip.style.visibility = 'visible';
});

icono_de_ayuda.addEventListener("mouseleave", () => {
  tooltip.style.visibility = 'hidden';
});


// POKEDEX

const contenedor = document.getElementById("contenedor-de-pokemon");
const numero_de_pokemons = 151;
const colores_de_tipos = {
  fire: '#fd7d24',
  grass: '#9bcc50',
  electric: '#EED535',
  water: '#4592C4',
  ground: '#AB9842',
  rock: '#D5D5DA',
  fairy: '#fdb9e9',
  poison: '#B97FC9',
  bug: '#729F3f',
  dragon: '#97B3E6',
  psychic: '#F366B9',
  flying: '#BDB9B8',
  fighting: '#D56723',
  normal: '#a4acaf'
};

const tipos_principales = Object.keys(colores_de_tipos);

async function obtenerPokemons() {
  for (let i = 1; i <= numero_de_pokemons; i++) {
    await obtenerPokemon(i);
  }
}

async function obtenerPokemon(id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
  const respuesta = await fetch(url);
  const pokemon = await respuesta.json();
  crearTarjetaPokemon(pokemon);
}

obtenerPokemons();

function crearTarjetaPokemon(pokemon) {
  const elementoPokemon = document.createElement('div');
  elementoPokemon.classList.add('pokemon');

  const nombre = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const tipos = pokemon.types.map(el => el.type.name);
  const tipo = tipos_principales.find(tipo => tipos.indexOf(tipo) > -1);
  const color = colores_de_tipos[tipo];

  elementoPokemon.style.borderBottom = '14px solid' + color;

  const contenidoHTML =
    `
  <div class="tarjeta">
    <figure class="contenedor-de-imagen">
      <img class="imagen-de-pokemon" src="${pokemon.sprites.front_default}" alt="${nombre}."/>
    </figure>
    <div class="informacion-de-tarjeta">
      <span class="id-de-pokemon">#${pokemon.id.toString().padStart(3, '0')}</span>
      <h2 class="nombre-de-pokemon">${nombre}</h2>
      <p class="tipo-de-pokemon">Tipo: ${tipo}</p>
    </div>
  </div>
  `;

  elementoPokemon.innerHTML = contenidoHTML;
  contenedor.appendChild(elementoPokemon);
}

// BARRA DE BÚSQUEDA

const formulario = document.querySelector(".formulario-de-busqueda")
formulario.addEventListener("keyup", (e) => {
  const palabraClave = e.target.value.toLowerCase();
  const arrayDeNombres = document.querySelectorAll(".nombre-de-pokemon");

  e.preventDefault()
  Array.from(arrayDeNombres).forEach((nombre) => {
    const nombrePokemon = nombre.textContent;
    if (nombrePokemon.toLowerCase().indexOf(palabraClave) !== -1) {
      nombre.parentElement.parentElement.parentElement.style.display = "block";
    } else {
      nombre.parentElement.parentElement.parentElement.style.display = "none";
    }
  })

})

// FILTRO DE SELECCIÓN

const seleccion = document.getElementById("tipos-de-pokemon");
tipos_principales.sort();

tipos_principales.forEach(tipo => {
  let opcion = document.createElement("option");
  seleccion.appendChild(opcion);
  opcion.innerText = tipo[0].toUpperCase() + tipo.slice(1);
});

seleccion.addEventListener("change", (e) => {
  const tiposDePokemon = document.querySelectorAll(".tipo-de-pokemon");
  opcion = e.target.value.toLowerCase();

  e.preventDefault()
  Array.from(tiposDePokemon).forEach((tipo) => {
    const tipoPokemon = tipo.textContent;
    if (tipoPokemon.indexOf(opcion) !== -1) {
      tipo.parentElement.parentElement.parentElement.style.display = "block";
    } else {
      tipo.parentElement.parentElement.parentElement.style.display = "none";
    }
  })

})
