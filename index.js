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

async function obtenerPokemon(id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
  const respuesta = await fetch(url);
  const pokemon = await respuesta.json();
  asignarDescripcion(pokemon);
  crearTarjetaPokemon(pokemon);
}

function asignarDescripcion(pokemon) {
  if (pokemon.name === "ivysaur") {
    pokemon.description = "Ivysaur puede verse durmiendo bajo la luz del sol brillante. Hay una semilla en su espalda. Absorbiendo los rayos del sol, la semilla crece progresivamente más grande.";
  } else if (pokemon.name === "charmander") {
    pokemon.description = "La llama que arde en la punta de su cola es una indicación de sus emociones. La llama fluctúa cuando Charmander se divierte. Si el Pokémon se enfurece, la llama arde con fuerza.";
  } else if (pokemon.name === "squirtle") {
    pokemon.description = "La concha de Squirtle no solo se utiliza para protección. La forma redondeada de la concha y las hendiduras en su superficie ayudan a minimizar la resistencia en el agua, permitiendo a este Pokémon nadar a alta velocidad.";
  } else if (pokemon.name === "bulbasaur") {
    pokemon.description = "Bulbasaur puede verse durmiendo bajo la luz del sol brillante. Hay una semilla en su espalda. Absorbiendo los rayos del sol, la semilla crece progresivamente más grande.";
  } else if (pokemon.name === "charmeleon") {
    pokemon.description = "Charmeleon destruye sin piedad a sus enemigos usando sus garras afiladas. Si se encuentra con un oponente fuerte, se vuelve agresivo. En este estado emocionado, la llama en la punta de su cola brilla con un color blanco azulado.";
  } else if (pokemon.name === "venusaur") {
    pokemon.description = "Venusaur tiene una flor en su espalda que captura la energía solar para convertirla en nutrición. Se dice que la flor desprende un aroma tranquilizador que apacigua los ánimos en combate.";
  } else if (pokemon.name === "charizard") {
    pokemon.description = "Charizard vuela por el cielo en busca de oponentes poderosos. Escupe fuego tan caliente que puede derretir rocas. Se dice que cuando Charizard exhala una llama de color azul-blanco, es una señal de que está en plena batalla.";
  } else if (pokemon.name === "wartortle") {
    pokemon.description = "La cola de Wartortle es grande y cubierta con una piel rica y gruesa. La cola se vuelve cada vez más profunda en color a medida que Wartortle envejece. Los arañazos en su caparazón son evidencia de la resistencia de este Pokémon como luchador.";
  } else if (pokemon.name === "blastoise") {
    pokemon.description = "Blastoise tiene cañones de agua que sobresalen de su caparazón. Los cañones de agua son muy precisos. Pueden disparar balas de agua con suficiente precisión para golpear latas vacías desde una distancia de más de 160 pies.";
  } else if (pokemon.name === "caterpie") {
    pokemon.description = "Caterpie tiene un apetito voraz. Puede devorar hojas más grandes que su cuerpo justo frente a tus ojos. Desde sus antenas, este Pokémon libera un olor terriblemente fuerte.";
  } else if (pokemon.name === "metapod") {
    pokemon.description = "La cáscara que cubre el cuerpo de este Pokémon es tan dura como una losa de hierro. Metapod no se mueve mucho. Se queda quieto porque está preparando sus partes blandas para la evolución dentro de la cáscara dura.";
  } else if (pokemon.name === "butterfree") {
    pokemon.description = "Butterfree tiene una habilidad superior para buscar miel deliciosa en las flores. Incluso puede buscar, extraer y transportar miel de flores que están floreciendo a más de seis millas de su nido.";
  } else if (pokemon.name === "weedle") {
    pokemon.description = "Weedle tiene un sentido del olfato extremadamente agudo. Es capaz de distinguir sus hojas favoritas de aquellas que no le gustan solo oliendo con su largo y rojo probóscide (nariz).";
  } else if (pokemon.name === "kakuna") {
    pokemon.description = "Kakuna permanece virtualmente inmóvil mientras se aferra a un árbol. Sin embargo, en el interior, está extremadamente ocupado preparándose para su próxima evolución. Esto es evidente por lo caliente que se vuelve la cáscara al tacto.";
  } else if (pokemon.name === "beedrill") {
    pokemon.description = "Beedrill es extremadamente territorial. Nadie debería acercarse a su nido, esto es por su propia seguridad. Si se enfadan, atacarán en un enjambre furioso.";
  } else if (pokemon.name === "pidgey") {
    pokemon.description = "Pidgey tiene un sentido extremadamente agudo de la dirección. Es capaz de regresar a casa sin fallar, sin importar cuán lejos esté de sus alrededores familiares.";
  } else if (pokemon.name === "pidgeotto") {
    pokemon.description = "Pidgeotto reclama un gran área como su propio territorio. Este Pokémon vuela alrededor, patrullando su espacio vital. Si su territorio es violado, no muestra piedad al castigar a fondo al enemigo con sus garras afiladas.";
  } else if (pokemon.name === "pidgeot") {
    pokemon.description = "Pidgeot es conocido por imitar el vuelo. Es un Pokémon muy resistente, capaz de despegar en cualquier tipo de terreno. Se utiliza para reconocimiento y soldados.";
  } else if (pokemon.name === "rattata") {
    pokemon.description = "Rattata es extremadamente cauteloso. Incluso mientras duerme, constantemente escucha moviendo sus orejas. No es exigente con el lugar donde vive, hará su nido en cualquier parte.";
  } else if (pokemon.name === "raticate") {
    pokemon.description = "Los colmillos resistentes de Raticate crecen constantemente. Para mantenerlos desgastados, roe rocas y troncos. Incluso puede masticar las paredes de las casas.";
  } else if (pokemon.name === "spearow") {
    pokemon.description = "Spearow tiene un grito muy fuerte que se puede escuchar a más de media milla de distancia. Si se escucha su agudo y largo grito resonando por todos lados, es una señal de que se están advirtiendo mutuamente de peligro.";
  } else if (pokemon.name === "fearow") {
    pokemon.description = "Fearow es reconocido por su largo cuello y pico alargado. Están convenientemente formados para atrapar presas en suelo o agua. Mueve hábilmente su largo y delgado pico para atrapar presas.";
  } else if (pokemon.name === "ekans") {
    pokemon.description = "Ekans se enrosca en una espiral mientras descansa. Adoptar esta posición le permite responder rápidamente a una amenaza desde cualquier dirección con una mirada desde su cabeza levantada.";
  } else if (pokemon.name === "arbok") {
    pokemon.description = "Arbok es un Pokémon aterrador que atacará ferozmente a cualquier oponente que encuentre mientras use su vientre feroz como un repelente. Este Pokémon no es exigente con el lugar donde vive, hará su nido en cualquier parte.";
  } else if (pokemon.name === "pikachu") {
    pokemon.description = "Cada vez que Pikachu se encuentra con algo nuevo, lo golpea con una descarga de electricidad. Si encuentras una baya carbonizada, es evidencia de que este Pokémon confundió la intensidad de su carga.";
  } else if (pokemon.name === "raichu") {
    pokemon.description = "Si los sacos eléctricos se cargan excesivamente, Raichu planta su cola en el suelo y descarga. Se encontrarán parches quemados en el suelo cerca del nido de este Pokémon.";
  } else if (pokemon.name === "sandshrew") {
    pokemon.description = "Sandshrew tiene una piel dura y gruesa. Cuando se siente amenazado, se enrolla en una bola para protegerse. La piel de su espalda se vuelve más dura y rígida a medida que evoluciona.";
  } else if (pokemon.name === "sandslash") {
    pokemon.description = "Sandslash tiene unas garras afiladas que son ideales para cavar en suelos duros y encontrar alimentos. Se entierra bajo tierra durante el día para evitar el calor extremo.";
  } else if (pokemon.name === "nidoran-f") {
    pokemon.description = "Nidoran ♀ tiene una habilidad de percepción muy aguda. Puede sentir la más mínima vibración en el aire y el agua para prever el tiempo que va a hacer.";
  } else if (pokemon.name === "nidorina") {
    pokemon.description = "Nidorina posee una docilidad extrema. Está dispuesta a llevar a cabo cualquier tipo de trabajo siempre y cuando se le recompense adecuadamente. Su nariz es tan sensible que puede oler una aguja a una milla de distancia.";
  } else if (pokemon.name === "nidoqueen") {
    pokemon.description = "Nidoqueen tiene una piel resistente. Cuando entra en combate, rota su cuerpo como una esfera, luego embiste y ataca con sus cuernos duros como el diamante.";
  } else if (pokemon.name === "nidoran-m") {
    pokemon.description = "Nidoran ♂ tiene grandes colmillos que siempre están creciendo. Para evitar que se vuelvan demasiado largos, los roe sin parar. Si se quedan sin alimentos, el estómago de Nidoran ♂ comenzará a retumbar violentamente.";
  } else if (pokemon.name === "nidorino") {
    pokemon.description = "Nidorino tiene cuernos que contienen veneno muy potente. Estos cuernos son bastante blandos cuando nacen. Se endurecen rápidamente con la exposición al aire.";
  } else if (pokemon.name === "nidoking") {
    pokemon.description = "Nidoking tiene un temperamento feroz. Lanza embestidas con sus cuernos afilados cuando está enojado. Estos cuernos son tan duros como el diamante.";
  } else if (pokemon.name === "clefairy") {
    pokemon.description = "Clefairy es una criatura nocturna. No es raro ver a este Pokémon bailando bajo la luz de la luna. La luz brillante de la luna induce un crecimiento más rápido de sus orejas.";
  } else if (pokemon.name === "clefable") {
    pokemon.description = "Clefable es un Pokémon raro que se dice que trae buena suerte a quienes lo ven. Su lunar en la frente brilla con una luz dorada cuando está en la luna llena.";
  } else if (pokemon.name === "vulpix") {
    pokemon.description = "Vulpix nace con una cola blanca que se divide en seis a medida que crece. Las seis colas son un símbolo de buena salud y longevidad.";
  } else if (pokemon.name === "ninetales") {
    pokemon.description = "Ninetales posee nueve colas que brillan con una luz dorada. Cada cola tiene su propio poder místico y puede conceder un deseo si se atrapa.";
  } else if (pokemon.name === "jigglypuff") {
    pokemon.description = "Jigglypuff canta una dulce melodía que puede hacer dormir a cualquiera que la escuche. Sin embargo, cuando se enfada, infla su cuerpo y canta una canción que hace que los oyentes caigan en un sueño profundo.";
  } else if (pokemon.name === "wigglytuff") {
    pokemon.description = "Wigglytuff tiene una voz increíblemente fuerte que puede escucharse desde una gran distancia. A menudo se le ve cantando y bailando en la luna llena.";
  } else if (pokemon.name === "zubat") {
    pokemon.description = "Zubat se mueve ágilmente en la oscuridad de las cavernas. Utiliza su eco para determinar la ubicación de las paredes y los obstáculos.";
  } else if (pokemon.name === "golbat") {
    pokemon.description = "Golbat tiene una visión excepcionalmente aguda en la oscuridad. Es capaz de detectar incluso el movimiento más mínimo de su presa.";
  } else if (pokemon.name === "oddish") {
    pokemon.description = "Oddish emite un aroma dulce y relajante. Este aroma se vuelve más fuerte por la noche para atraer a los Pokémon que duermen.";
  } else if (pokemon.name === "gloom") {
    pokemon.description = "Gloom emite un hedor nauseabundo. Sin embargo, su aroma tiene el efecto secundario de hacer que las plantas crezcan más rápidamente.";
  } else if (pokemon.name === "vileplume") {
    pokemon.description = "Vileplume tiene un aroma dulce y agradable que atrae a muchos Pokémon. Sin embargo, su aroma también es muy pegajoso y puede atrapar a los oponentes.";
  } else if (pokemon.name === "paras") {
    pokemon.description = "Paras lleva un hongo parásito en la espalda. Este hongo libera esporas que tienen un aroma dulce y atraen a otros Pokémon.";
  } else if (pokemon.name === "parasect") {
    pokemon.description = "Parasect ha sido completamente poseído por el hongo parásito en su espalda. El hongo controla sus movimientos y libera esporas en la dirección que elige.";
  } else if (pokemon.name === "venonat") {
    pokemon.description = "Venonat tiene grandes ojos compuestos que le permiten ver en la oscuridad. Es muy activo por la noche, cuando sale a buscar alimentos.";
  } else if (pokemon.name === "venomoth") {
    pokemon.description = "Venomoth emite un polvo escamoso de su cuerpo que induce el sueño en su presa. Una vez que la presa está dormida, Venomoth se alimenta de ella con su aguijón venenoso.";
  } else if (pokemon.name === "diglett") {
    pokemon.description = "Diglett pasa la mayor parte de su vida bajo tierra. Se sabe que causa terremotos al salir repentinamente a la superficie.";
  } else if (pokemon.name === "dugtrio") {
    pokemon.description = "Dugtrio es un trío de Diglett que siempre están juntos. Se dice que son capaces de cavar un túnel de 60 millas en una sola noche.";
  } else if (pokemon.name === "meowth") {
    pokemon.description = "Meowth es conocido por su amor por las monedas brillantes. Se sabe que roba monedas y joyas para hacerse un tesoro.";
  } else if (pokemon.name === "persian") {
    pokemon.description = "Persian es extremadamente ágil y rápido. Puede correr a velocidades increíbles para atrapar a su presa.";
  } else if (pokemon.name === "psyduck") {
    pokemon.description = "Psyduck tiene dolores de cabeza constantes que alivian sumergiéndose en el agua. Cuando se le agarra de un dolor de cabeza, puede liberar un poder psíquico increíble.";
  } else if (pokemon.name === "golduck") {
    pokemon.description = "Golduck es un nadador experto que puede nadar con gracia en cualquier tipo de agua. Es conocido por su velocidad y agilidad en el agua.";
  } else if (pokemon.name === "mankey") {
    pokemon.description = "Mankey se enfada fácilmente y ataca cualquier cosa que se mueva. Es muy territorial y defenderá su territorio con ferocidad.";
  } else if (pokemon.name === "primeape") {
    pokemon.description = "Primeape es extremadamente violento cuando está enfadado. Ataca todo lo que ve y no se detiene hasta que se calma.";
  } else if (pokemon.name === "growlithe") {
    pokemon.description = "Growlithe es un compañero leal que protege a su entrenador con fiereza. Tiene un excelente sentido del olfato que utiliza para encontrar personas y Pokémon perdidos.";
  } else if (pokemon.name === "arcanine") {
    pokemon.description = "Arcanine es conocido por su velocidad y ferocidad. Puede correr a velocidades increíbles y es un compañero fiel y valiente.";
  } else if (pokemon.name === "poliwag") {
    pokemon.description = "Poliwag tiene un estómago transparente que permite ver sus órganos internos. Se cree que los patrones en su estómago cambian con el clima.";
  } else if (pokemon.name === "poliwhirl") {
    pokemon.description = "Poliwhirl es un excelente nadador que puede nadar en cualquier tipo de agua. Los patrones en su estómago cambian con la fase lunar.";
  } else if (pokemon.name === "poliwrath") {
    pokemon.description = "Poliwrath es conocido por su fuerza y ​​destreza en la lucha. Es un luchador formidable que puede derrotar a oponentes mucho más grandes.";
  } else if (pokemon.name === "abra") {
    pokemon.description = "Abra tiene poderes psíquicos desde el momento en que nace. Es extremadamente tímido y se teletransporta para escapar del peligro.";
  } else if (pokemon.name === "kadabra") {
    pokemon.description = "Kadabra emite ondas alfa cuando está en reposo. Estas ondas causan dolor de cabeza a quienes están cerca y pueden incluso romper el vidrio.";
  } else if (pokemon.name === "alakazam") {
    pokemon.description = "Alakazam tiene un coeficiente intelectual extremadamente alto. Es capaz de resolver problemas matemáticos complejos en segundos.";
  } else if (pokemon.name === "machop") {
    pokemon.description = "Machop tiene una gran fuerza y resistencia. Puede levantar objetos extremadamente pesados ​​con facilidad.";
  } else if (pokemon.name === "machoke") {
    pokemon.description = "Machoke es extremadamente musculoso y fuerte. Entrena levantando objetos pesados ​​para aumentar aún más su fuerza.";
  } else if (pokemon.name === "machamp") {
    pokemon.description = "Machamp es capaz de lanzar mil golpes en un segundo. Sus músculos son tan fuertes que pueden derribar un edificio con un solo puñetazo.";
  } else if (pokemon.name === "bellsprout") {
    pokemon.description = "Bellsprout tiene un tallo largo y delgado que se dobla y retuerce para capturar presas. Este tallo se vuelve más grueso y fuerte a medida que evoluciona.";
  } else if (pokemon.name === "weepinbell") {
    pokemon.description = "Weepinbell tiene un aroma dulce y pegajoso que atrae a los insectos. Una vez que la presa está atrapada, Weepinbell la devora con sus mandíbulas afiladas.";
  } else if (pokemon.name === "victreebel") {
    pokemon.description = "Victreebel tiene una trampa de hojas extremadamente grande y afilada. Cuando una presa cae en su trampa, se cierra rápidamente y la devora.";
  } else if (pokemon.name === "tentacool") {
    pokemon.description = "Tentacool flota en el agua mientras flota en las olas. Su cuerpo gelatinoso puede cambiar de forma para camuflarse con su entorno.";
  } else if (pokemon.name === "tentacruel") {
    pokemon.description = "Tentacruel tiene largos tentáculos que puede extender y contraer a voluntad. Utiliza estos tentáculos para atrapar y paralizar a su presa.";
  } else if (pokemon.name === "geodude") {
    pokemon.description = "Geodude tiene una piel dura como la roca que lo protege de los ataques. Su cuerpo está cubierto de pequeñas piedras que se desprenden cuando se golpean.";
  } else if (pokemon.name === "graveler") {
    pokemon.description = "Graveler es conocido por rodar colina abajo a gran velocidad. Puede romper cualquier obstáculo que se interponga en su camino.";
  } else if (pokemon.name === "golem") {
    pokemon.description = "Golem tiene una capa dura de roca que lo protege de los ataques. Se dice que es capaz de resistir una explosión nuclear.";
  } else if (pokemon.name === "ponyta") {
    pokemon.description = "Ponyta tiene una crin de fuego que arde con una llama brillante. Cuando corre, su melena se agita y brilla con una luz deslumbrante.";
  } else if (pokemon.name === "rapidash") {
    pokemon.description = "Rapidash puede correr a velocidades increíbles. Su melena de fuego brilla con una luz deslumbrante cuando corre a toda velocidad.";
  } else if (pokemon.name === "slowpoke") {
    pokemon.description = "Slowpoke es conocido por su lentitud y su capacidad para dormir profundamente. Se le suele ver descansando en la orilla del agua sin preocuparse por su entorno.";
  } else if (pokemon.name === "slowbro") {
    pokemon.description = "Slowbro tiene un cuerpo lento y pesado que le impide moverse rápidamente. Sin embargo, su cola está unida a un Shellder que lo impulsa y le da una fuerza increíble.";
  } else if (pokemon.name === "magnemite") {
    pokemon.description = "Magnemite es un Pokémon magnético que flota en el aire. Puede atraer objetos metálicos hacia sí mismo con su campo magnético.";
  } else if (pokemon.name === "magneton") {
    pokemon.description = "Magneton es una combinación de tres Magnemite unidos por poderosos imanes. Este trío es extremadamente poderoso y puede generar campos magnéticos muy fuertes.";
  } else if (pokemon.name === "farfetchd") {
    pokemon.description = "Farfetch'd lleva un puerro en la mano que utiliza como arma. Es muy protector con su puerro y no lo soltará por nada del mundo.";
  } else if (pokemon.name === "doduo") {
    pokemon.description = "Doduo tiene dos cabezas que piensan y actúan independientemente. Corre a velocidades increíbles y es muy difícil de atrapar.";
  } else if (pokemon.name === "dodrio") {
    pokemon.description = "Dodrio tiene tres cabezas que piensan y actúan independientemente. Puede correr a velocidades extremadamente altas y es muy difícil de atrapar.";
  } else if (pokemon.name === "seel") {
    pokemon.description = "Seel tiene una piel gruesa y una capa de grasa que lo protege del frío del agua. Se puede ver descansando en las playas soleadas.";
  } else if (pokemon.name === "dewgong") {
    pokemon.description = "Dewgong tiene un pelaje grueso y una capa de grasa que lo protege del frío del agua. Se puede ver flotando en el agua y jugando en las olas.";
  } else if (pokemon.name === "grimer") {
    pokemon.description = "Grimer tiene una sustancia pegajosa que cubre todo su cuerpo. Se alimenta de basura y desechos que encuentra en la ciudad.";
  } else if (pokemon.name === "muk") {
    pokemon.description = "Muk tiene una masa viscosa que cubre todo su cuerpo. Se alimenta de basura y desechos que encuentra en la ciudad.";
  } else if (pokemon.name === "shellder") {
    pokemon.description = "Shellder tiene una concha dura y afilada que puede cerrarse firmemente para protegerse de los depredadores. Se puede encontrar en mares fríos y profundos.";
  } else if (pokemon.name === "cloyster") {
    pokemon.description = "Cloyster tiene una concha dura y afilada que puede cerrarse firmemente para protegerse de los depredadores. Es extremadamente difícil de abrir una vez que se cierra.";
  } else if (pokemon.name === "gastly") {
    pokemon.description = "Gastly es un Pokémon fantasma compuesto principalmente de gas. Puede cambiar de forma y pasar a través de objetos sólidos.";
  } else if (pokemon.name === "haunter") {
    pokemon.description = "Haunter es un Pokémon fantasma que disfruta asustando a la gente. Puede atravesar paredes y desaparecer en la oscuridad.";
  } else if (pokemon.name === "gengar") {
    pokemon.description = "Gengar es un Pokémon fantasma extremadamente travieso. Disfruta asustando a la gente y se alimenta de la energía de sus miedos.";
  } else if (pokemon.name === "onix") {
    pokemon.description = "Onix es un Pokémon serpiente de roca extremadamente grande. Puede cavar túneles subterráneos y moverse a gran velocidad.";
  } else if (pokemon.name === "drowzee") {
    pokemon.description = "Drowzee se alimenta de los sueños de la gente mientras duerme. Puede hipnotizar a sus presas y hacer que caigan en un sueño profundo.";
  } else if (pokemon.name === "hypno") {
    pokemon.description = "Hypno tiene poderes hipnóticos extremadamente fuertes. Puede controlar los sueños de la gente y hacer que hagan cosas que normalmente no harían.";
  } else if (pokemon.name === "krabby") {
    pokemon.description = "Krabby tiene una pinza afilada que puede cortar cualquier cosa que se interponga en su camino. Es un excelente nadador y puede nadar en cualquier tipo de agua.";
  } else if (pokemon.name === "kingler") {
    pokemon.description = "Kingler tiene una pinza extremadamente fuerte que puede cortar incluso las rocas más duras. Es conocido por su habilidad para atrapar y comer presas grandes.";
  } else if (pokemon.name === "voltorb") {
    pokemon.description = "Voltorb es una bola de energía pura que puede explotar en cualquier momento. Se dice que su forma redonda se debe a la acumulación de energía eléctrica.";
  } else if (pokemon.name === "electrode") {
    pokemon.description = "Electrode es una esfera de energía pura que puede explotar en cualquier momento. Se sabe que provoca apagones cuando explota cerca de una planta de energía.";
  } else if (pokemon.name === "exeggcute") {
    pokemon.description = "Exeggcute es un grupo de huevos que actúan como un solo organismo. Se dice que los huevos están unidos por una energía psíquica que les permite comunicarse entre sí.";
  } else if (pokemon.name === "exeggutor") {
    pokemon.description = "Exeggutor es un grupo de huevos que ha crecido hasta convertirse en un árbol gigante. Se dice que los huevos son extremadamente nutritivos.";
  } else if (pokemon.name === "cubone") {
    pokemon.description = "Cubone lleva un cráneo de hueso de su madre fallecida. Es extremadamente protector con su cráneo y se enfurece si alguien trata de quitárselo.";
  } else if (pokemon.name === "marowak") {
    pokemon.description = "Marowak lleva un cráneo de hueso de su madre fallecida. Utiliza el hueso como arma y lo lanza contra sus oponentes con gran precisión.";
  } else if (pokemon.name === "hitmonlee") {
    pokemon.description = "Hitmonlee es un luchador experto que usa sus piernas largas y flexibles para lanzar poderosos golpes de karate. Es extremadamente ágil y puede esquivar ataques fácilmente.";
  } else if (pokemon.name === "hitmonchan") {
    pokemon.description = "Hitmonchan es un luchador experto que usa sus puños como si fueran balas. Es capaz de lanzar una ráfaga de golpes en cuestión de segundos.";
  } else if (pokemon.name === "lickitung") {
    pokemon.description = "Lickitung tiene una lengua extremadamente larga que puede enrollar alrededor de los objetos y atrapar a sus presas. También puede usar su lengua para lamer cosas y detectar su sabor.";
  } else if (pokemon.name === "koffing") {
    pokemon.description = "Koffing emite un gas venenoso que puede ser mortal si se inhala en grandes cantidades. Se le puede ver flotando en el aire y emitiendo nubes de gas tóxico.";
  } else if (pokemon.name === "weezing") {
    pokemon.description = "Weezing es una masa de gas venenoso que puede ser mortal si se inhala en grandes cantidades. Se dice que es el resultado de la fusión de dos Koffing.";
  } else if (pokemon.name === "rhyhorn") {
    pokemon.description = "Rhyhorn es extremadamente fuerte y puede correr a gran velocidad. Es conocido por su piel gruesa y resistente que lo protege de los ataques.";
  } else if (pokemon.name === "rhydon") {
    pokemon.description = "Rhydon tiene una piel extremadamente gruesa y resistente que lo protege de los ataques. Se sabe que carga a toda velocidad y destruye todo lo que se interpone en su camino.";
  } else if (pokemon.name === "chansey") {
    pokemon.description = "Chansey es conocido por su naturaleza cariñosa y su capacidad para cuidar a los demás. Se dice que su huevo es muy nutritivo y puede curar cualquier enfermedad.";
  } else if (pokemon.name === "tangela") {
    pokemon.description = "Tangela tiene un cuerpo cubierto de enredaderas que puede envolver a sus oponentes y atraparlos. Es extremadamente difícil de atrapar una vez que se enreda.";
  } else if (pokemon.name === "kangaskhan") {
    pokemon.description = "Kangaskhan es una madre extremadamente protectora que protege a sus crías con fiereza. Puede lanzar golpes poderosos con su cola.";
  } else if (pokemon.name === "horsea") {
    pokemon.description = "Horsea es un nadador experto que puede nadar a velocidades increíbles. Es extremadamente tímido y se esconde en las grietas de las rocas para evitar a los depredadores.";
  } else if (pokemon.name === "seadra") {
    pokemon.description = "Seadra tiene una cola en forma de látigo que puede lanzar con gran precisión. Se dice que el látigo es tan afilado como una cuchilla.";
  } else if (pokemon.name === "goldeen") {
    pokemon.description = "Goldeen es un excelente nadador que puede nadar en cualquier tipo de agua. Su aleta dorsal es extremadamente afilada y puede cortar a través del agua con facilidad.";
  } else if (pokemon.name === "seaking") {
    pokemon.description = "Seaking es conocido por su agresividad y su capacidad para derrotar a oponentes mucho más grandes. Su cuerno es extremadamente afilado y puede atravesar incluso la armadura más gruesa.";
  } else if (pokemon.name === "staryu") {
    pokemon.description = "Staryu tiene un núcleo de cristal en su centro que puede brillar con una luz deslumbrante. Es extremadamente difícil de atrapar debido a su velocidad y agilidad.";
  } else if (pokemon.name === "starmie") {
    pokemon.description = "Starmie tiene un núcleo de cristal en su centro que puede brillar con una luz deslumbrante. Es extremadamente rápido y ágil en el agua.";
  } else if (pokemon.name === "mr-mime") {
    pokemon.description = "Mr. Mime es un experto en pantomima que puede crear objetos con sus manos sin usar materiales. Es muy divertido y le gusta hacer reír a la gente.";
  } else if (pokemon.name === "scyther") {
    pokemon.description = "Scyther es un cazador experto que puede cortar a través de la armadura más gruesa con sus cuchillas afiladas. Es extremadamente rápido y ágil en el aire.";
  } else if (pokemon.name === "jynx") {
    pokemon.description = "Jynx es conocido por su belleza y su capacidad para hipnotizar a la gente con su baile. Puede predecir el futuro leyendo la mente de las personas.";
  } else if (pokemon.name === "electabuzz") {
    pokemon.description = "Electabuzz tiene un cuerpo cubierto de electricidad que puede lanzar en forma de rayos. Es extremadamente rápido y puede esquivar ataques fácilmente.";
  } else if (pokemon.name === "magmar") {
    pokemon.description = "Magmar tiene un cuerpo cubierto de llamas que puede lanzar en forma de bolas de fuego. Es extremadamente caliente y puede derretir incluso la roca más sólida.";
  } else if (pokemon.name === "pinsir") {
    pokemon.description = "Pinsir tiene una mandíbula extremadamente fuerte que puede cortar a través de la madera más dura. Es un cazador experto que puede atrapar a su presa con facilidad.";
  } else if (pokemon.name === "tauros") {
    pokemon.description = "Tauros es extremadamente fuerte y agresivo. Es conocido por su habilidad para embestir a sus oponentes y derribarlos con facilidad.";
  } else if (pokemon.name === "magikarp") {
    pokemon.description = "Magikarp es un pescado débil que es fácilmente presa de otros Pokémon. Sin embargo, se dice que puede evolucionar y convertirse en un poderoso Gyarados.";
  } else if (pokemon.name === "gyarados") {
    pokemon.description = "Gyarados es conocido por su temperamento volátil y su capacidad para destruir ciudades enteras con sus olas de choque. Es extremadamente poderoso y difícil de controlar.";
  } else if (pokemon.name === "lapras") {
    pokemon.description = "Lapras es conocido por su amabilidad y su capacidad para llevar a las personas a través del océano en su espalda. Es extremadamente raro y se dice que es un presagio de buena suerte.";
  } else if (pokemon.name === "ditto") {
    pokemon.description = "Ditto puede cambiar de forma para adaptarse a cualquier situación. Es extremadamente raro y se dice que es un presagio de buena suerte.";
  } else if (pokemon.name === "eevee") {
    pokemon.description = "Eevee tiene una capacidad única para evolucionar en diferentes Pokémon dependiendo de su entorno y condiciones de vida.";
  } else if (pokemon.name === "vaporeon") {
    pokemon.description = "Vaporeon es un Pokémon acuático extremadamente poderoso. Puede crear olas de agua con su cola y nadar a velocidades increíbles.";
  } else if (pokemon.name === "jolteon") {
    pokemon.description = "Jolteon es un Pokémon eléctrico extremadamente rápido. Puede lanzar rayos eléctricos desde su piel y correr a velocidades increíbles.";
  } else if (pokemon.name === "flareon") {
    pokemon.description = "Flareon es un Pokémon de fuego extremadamente poderoso. Puede crear bolas de fuego con su cola y lanzarlas a sus oponentes.";
  } else if (pokemon.name === "porygon") {
    pokemon.description = "Porygon es un Pokémon artificial creado por humanos. Está hecho completamente de código de computadora y puede cambiar de forma para adaptarse a cualquier situación.";
  } else if (pokemon.name === "omanyte") {
    pokemon.description = "Omanyte es un Pokémon antiguo que se extinguió hace mucho tiempo. Se cree que su caparazón se convirtió en una roca después de su muerte.";
  } else if (pokemon.name === "omastar") {
    pokemon.description = "Omastar es un Pokémon antiguo que se extinguió hace mucho tiempo. Se cree que era un depredador marino que cazaba en los océanos antiguos.";
  } else if (pokemon.name === "kabuto") {
    pokemon.description = "Kabuto es un Pokémon antiguo que se extinguió hace mucho tiempo. Se cree que vivía en mares poco profundos y se alimentaba de algas marinas.";
  } else if (pokemon.name === "kabutops") {
    pokemon.description = "Kabutops es un Pokémon antiguo que se extinguió hace mucho tiempo. Se cree que era un depredador marino que cazaba en los océanos antiguos.";
  } else if (pokemon.name === "aerodactyl") {
    pokemon.description = "Aerodactyl es un Pokémon antiguo que se extinguió hace mucho tiempo. Se cree que era un depredador volador que cazaba en los cielos antiguos.";
  } else if (pokemon.name === "snorlax") {
    pokemon.description = "Snorlax es conocido por su apetito voraz y su capacidad para dormir profundamente. Puede dormir durante días enteros y se despierta solo para comer.";
  } else if (pokemon.name === "articuno") {
    pokemon.description = "Articuno es un pájaro legendario que puede controlar el hielo y la nieve. Se dice que su aparición es un presagio de fuertes nevadas.";
  } else if (pokemon.name === "zapdos") {
    pokemon.description = "Zapdos es un pájaro legendario que puede controlar la electricidad. Se dice que su aparición es un presagio de tormentas eléctricas.";
  } else if (pokemon.name === "moltres") {
    pokemon.description = "Moltres es un pájaro legendario que puede controlar el fuego. Se dice que su aparición es un presagio de incendios forestales.";
  } else if (pokemon.name === "dratini") {
    pokemon.description = "Dratini es un Pokémon serpiente extremadamente raro. Se dice que es un presagio de buena suerte y fortuna.";
  } else if (pokemon.name === "dragonair") {
    pokemon.description = "Dragonair es un Pokémon serpiente extremadamente raro. Se dice que es un presagio de buena suerte y fortuna.";
  } else if (pokemon.name === "dragonite") {
    pokemon.description = "Dragonite es un dragón extremadamente poderoso que puede volar a altas velocidades. Se dice que es un presagio de buena suerte y fortuna.";
  } else if (pokemon.name === "mewtwo") {
    pokemon.description = "Mewtwo es un Pokémon legendario creado mediante manipulación genética. Es extremadamente poderoso y posee habilidades psíquicas que superan a cualquier otro Pokémon.";
  } else if (pokemon.name === "mew") {
    pokemon.description = "Mew es un Pokémon legendario conocido como el 'Pokémon del ADN'. Se cree que contiene la esencia de todos los Pokémon, y es extremadamente raro y difícil de encontrar.";
  }






}

obtenerPokemons();

// click en pokemon

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

  elementoPokemon.addEventListener('click', () => {
    mostrarEstadisticasEnModal(pokemon);
  });
}

function mostrarEstadisticasEnModal(pokemon) {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  const imagen = pokemon.sprites.front_default;

  modal.innerHTML = `
    <div class="modal-contenido">
      <span class="modal-cerrar" onclick="cerrarModal()">&times;</span>
      <img class="modal-imagen" src="${imagen}" alt="${pokemon.name}."/>
      <h2>Descripción:</h2>
      ${pokemon.description ? `<p class="modal-descripcion">${pokemon.description}</p>` : ''}
      <h2>Tipos:</h2>
      <ul>
        ${pokemon.types.map(tipo => `<li>${tipo.type.name}</li>`).join('')}
      </ul>
      <h2>Habilidades:</h2>
      <ul>
        ${pokemon.abilities.map(habilidad => `<li>${habilidad.ability.name}</li>`).join('')}
      </ul>
      <h2>Estadísticas de ${pokemon.name}</h2>
      <p>Altura: ${pokemon.height}</p>
      <p>Peso: ${pokemon.weight}</p>
      <p>Experiencia base: ${pokemon.base_experience}</p>
      <h3>Estadísticas:</h3>
      <ul>
        <li>HP: ${pokemon.stats[0].base_stat}</li>
        <li>Ataque: ${pokemon.stats[1].base_stat}</li>
        <li>Defensa: ${pokemon.stats[2].base_stat}</li>
        <li>Velocidad: ${pokemon.stats[5].base_stat}</li>
      </ul>
    </div>
  `;
  document.body.appendChild(modal);
}

function cerrarModal() {
  const modal = document.querySelector('.modal');
  modal.remove();
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

document.addEventListener("DOMContentLoaded", function () {
  const cookieDialog = document.getElementById("cookie-dialog");
  const acceptButton = document.querySelector("#cookie-dialog button:first-of-type");
  const rejectButton = document.querySelector("#cookie-dialog button:last-of-type");

  // Mostrar el diálogo de cookies si no se ha aceptado/rechazado previamente
  if (!localStorage.getItem("cookiesAccepted")) {
    cookieDialog.style.display = "block";
  }

  // Función para aceptar las cookies
  function acceptCookies() {
    localStorage.setItem("cookiesAccepted", true);
    cookieDialog.style.display = "none";
  }

  // Función para rechazar las cookies
  function rejectCookies() {
    localStorage.removeItem("cookiesAccepted");
    cookieDialog.style.display = "none";
    // Aquí puedes agregar código adicional para manejar el rechazo de cookies
  }

  // Asociar las funciones a los botones
  acceptButton.addEventListener("click", acceptCookies);
  rejectButton.addEventListener("click", rejectCookies);
});