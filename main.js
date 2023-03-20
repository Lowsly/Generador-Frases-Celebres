/*GENERADOR DE FRASES*/
// Paso #1 Declaro mi arreglo de elementos con la información de las frases
const frases = [
    { frase: "El conocimiento es poder", autor: "~ Francis Bacon", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Francis_Bacon%2C_Viscount_St_Alban_from_NPG_%282%29.jpg/1200px-Francis_Bacon%2C_Viscount_St_Alban_from_NPG_%282%29.jpg" },
    { frase: "La peor lucha es la que no se hace", autor: "~ Karl Marx", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Karl_Marx_001.jpg/1200px-Karl_Marx_001.jpg" },
    { frase: "El corazón tiene razones que la razón ignora", autor: "~ Blaise Pascal", imagen: "https://media.sciencephoto.com/c0/23/76/89/c0237689-800px-wm.jpg" },
    { frase: " Exígete mucho a ti mismo y espera poco de los demás. Así te ahorrarás disgustos", autor: "~ Confuncio", imagen: "https://www.xlsemanal.com/wp-content/uploads/sites/3/2011/04/Conocer-historia-confucio-1-1024x952.jpg" },
    { frase: "La vida es un viaje, no un destino", autor: "~ Ralph Waldo Emerson", imagen: "https://cdn.britannica.com/56/65056-050-9E0FABF2/Ralph-Waldo-Emerson-1860.jpg" },
    { frase: "Pocas veces pensamos en lo que tenemos; pero siempre en lo que nos falta", autor: "~ Schopenhauer", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Arthur_Schopenhauer_colorized.jpg/800px-Arthur_Schopenhauer_colorized.jpg" },
    { frase: "Nuestra vida siempre expresa el resultado de nuestros pensamientos dominantes", autor: "~ Søren Kierkegaard", imagen: "https://upload.wikimedia.org/wikipedia/commons/7/70/Kierkegaard_1902_by_Luplau_Janssen.jpg" },
    { frase: "El secreto de la felicidad no es hacer siempre lo que se quiere, sino querer siempre lo que se hace", autor: "~ Tolstoi", imagen: "https://www.biografiasyvidas.com/biografia/t/fotos/tolstoi_leon.jpg" },
    { frase: "Hace falta una vida para aprender a vivir", autor: "~ Séneca", imagen: "https://i.em.com.br/X0sT5EucnwNMxntMD0w7W2HEI1Q=/876x1024/smart/imgsapp.em.com.br/app/noticia_127983242361/2022/11/02/1416291/the-dying-seneca-pintura-de-peter-paul-rubens_1_81451.jpg" },
    { frase: "La vida es muy simple, pero insistimos en hacerla complicada", autor: "~ Confucio", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Konfuzius-1770.jpg/640px-Konfuzius-1770.jpg" },
    { frase: " Nadie debería creerse perfecto, ni preocuparse demasiado por el hecho de no serlo ", autor: "~ Bertrand Russell", imagen: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Bertrand_Russell_cropped.jpg"},
    { frase: "Los grandes resultados requieren grandes ambiciones", autor: "~ Heráclito", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Heraclitus_Rijksmuseum_SK-A-2784.jpeg/800px-Heraclitus_Rijksmuseum_SK-A-2784.jpeg"},
    { frase: "El sabio no dice nunca todo lo que piensa, pero siempre piensa todo lo que dice", autor: "~ Aristóteles", imagen: "https://aeternaimperoblog.files.wordpress.com/2017/04/aristoteles-a.jpg?w=640"},
    { frase: "De humanos es errar y de necios permanecer en el error", autor: "~ Marco Tulio Cicerón", imagen: "https://www.alejandradeargos.com/images/articulos/Filosof%C3%ADa/Cicer%C3%B3n-02.jpg"},
    { frase: "Si quieres cambiar al mundo, cámbiate a ti mismo", autor: "~ Mahatma Gandhi", imagen: "https://www.selasar.com/wp-content/uploads/2020/07/Mahatma-Gandhi.jpg"},
  ];
  // Paso #2 Crear una función que me genere una frase de forma aleatoria
    function generaFrase() {
    // Calcular de forma aleatoria el indice para cada arreglo de frases
    const posicion = Math.floor(Math.random() * frases.length);
    // Hacemos que mi función devuelva la frase generada
    return frases[posicion];
    }
    // Paso #3 Crear una función que me muestre la frase en el HTML
    function colocaFrase() {
    const frase = generaFrase();
    document.getElementById("frase").innerHTML = frase.frase;
    document.getElementById("autor").innerHTML = frase.autor;
    document.getElementById("imagen").src = frase.imagen;
    }
    colocaFrase();