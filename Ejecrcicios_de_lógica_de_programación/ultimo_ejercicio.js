/** 
27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes 
datos: id de la película en IMDB, titulo, director, año de estreno, 
país o países de origen, géneros y calificación en IMBD.

  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras 
    y los 7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

    Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, 
    Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, 
    Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, 
    Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
*/
class Pelicula {

  /**
    Pasamos de forma destructurada los datos que estamos solicitando 
    en el constructor
  */
  constructor({id, titulo, director, estreno, pais, generos, calificacion}) {
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.estreno = estreno;
    this.pais = pais;
    this.generos = generos;
    this.calificacion = calificacion;

    this.validarIMDB(id);
    this.validarTitulo(titulo);
    this.validarDirector(director);
    this.validarEstreno(estreno);
    this.validarPais(pais);
    this.validarGeneros(generos);
    this.validarCalificacion(calificacion);
  }

  static get listaGeneros () {
    return ["Action", "Adult", "Adventure", "Animation", "Biography", 
    "Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy", 
    "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", 
    "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", 
    "Sport", "Talk-Show", "Thriller", "War", "Western"];
  }

  static generosAceptados() {
    return console.info(`Los genéros aceptados son: ${Pelicula.listaGeneros.join(",")}`)
  }

  /**
    Esta funcion validara que el tipo de dato que se este ingrese
    sea de tipo string cuando sea llamada
  */
  validarCadena (propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacío.`);

    if (typeof valor !== "string") return console.error(`${propiedad} "${valor}",
    ingresado NO es una cadena de texto`);

    return true;
  }

  /**
    Esta funcion validara la longitud de la cadena de txt ingresada
  */
  validarLongitudCadena (propiedad, valor, longitud) {
    if (valor.length > longitud) return console.error(`${propiedad} "${valor}"
    excede el némero de caracteres permitidos (${longitud})`);

    return true;
  }

  validarIMDB (id) {
    if(this.validarCadena("IMDB id", id)) {
      if(!(/^([a-z]){2}([0-9]){7}$/.test(id))) {

        return console.error(`IMDB id "${id}" no es valido, debe tener
        9 caracteres, los 2 primeros letras minúsculas, los 7 restantes
        números`);
      }
    }
  }

  /**
    Esta funcion validara la longitud de la cadena de txt ingresada
  */
  validarTitulo (titulo) {
    if(this.validarCadena("Titulo", titulo))
      this.validarLongitudCadena("Titulo", titulo, 100);
  }

  /**
    Esta funcion validara la longitud de la cadena de txt ingresada
  */
  validarDirector (director) {
    if(this.validarCadena("Director", director))
      this.validarLongitudCadena("Director", director, 50);
  }

  /**
    Esta funcion validara que los datos ingresados sean números
  */
  validarNumero(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacío`);

    if (typeof valor !== "number") return console.error(`${propiedad} "${valor}"
    ingresado, NO es un número`);

    return true;
  }

  validarEstreno (estreno) {
    if (this.validarNumero("Año de Estreno", estreno)) {
      if (!(/^([0-9]){4}$/.test(estreno)))

      return console.error(`Año de Estreno "${estreno}" no es valido, 
      debe ser un número de 4 digitos`);
    }
  }

  /**
    Esta funcion validara que el arreglo no este vacío 
  */
  validarArreglo (propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacío`);

    if (valor.length === 0) return console.error(`${propiedad} "${valor}" no tiene datos`);

    for (let cadena of valor) {
      if (typeof cadena !== "string") return console.error(`El valor "${cadena}"
      ingresado, NO es una cadena de texto`);
    }

    return true;
  }

  validarPais(pais) {
    this.validarArreglo("Pais", pais);
  }

  validarGeneros(generos) {
    if (this.validarArreglo("Géneros", generos));
    for (let genero of generos) {
      (generos, Pelicula.listaGeneros.includes(genero));

      if (!Pelicula.listaGeneros.includes(genero)) {
          console.error(`Genero(s) incorrector "${generos.join(", ")}"`);
          Pelicula.generosAceptados();
      }
    }

  }

  validarCalificacion (calificacion) {
    if (this.validarNumero("Calificación", calificacion)) {
      return(calificacion < 0 || calificacion > 10)
      ?console.error("La calificacion tiene que ser en un rango entre 0 - 10 digitos")
      :this.calificacion = calificacion.toFixed(1);
    }
  }

  fichaTecnica() {
    console.info(`~Ficha técnica~
    Título:"${this.titulo}
    Director:"${this.director}
    Años:"${this.estreno}"
    País:"${this.pais.join(", ")}"
    Géneros: "${this.generos.join(", ")}
    Calificación "${this.calificacion}"
    IMDB id: ${this.id}`);
  }
}

// Instancia de la Class Pelicula
const misPelis = [
  {
    id: "tt9140554",
    titulo: "Loki",
    director: "Marvel Studios",
    estreno: 2021,
    pais: ["USA"],
    generos: ["Action", "Adventure", "Fantasy"],
    calificacion: 8.4
  },
  {
    id: "tt6741278",
    titulo: "Invincible",
    director: "Robert Kirkman",
    estreno: 2021,
    pais: ["USA"],
    generos: ["Animation", "Action", "Adventure"],
    calificacion: 8.7
  },
  {
    id: "tt1236197",
    titulo: "La Liga de la Justicia de Zack Snyder",
    director: "Zack Snyder",
    estreno: 2021,
    pais: ["USA", "UK"],
    generos: ["Action", "Adventure", "Fantasy"],
    calificacion: 8.1
  }
]

misPelis.forEach(el => new Pelicula(el).fichaTecnica());