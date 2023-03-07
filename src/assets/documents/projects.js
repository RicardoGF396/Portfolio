const projects = [
  {
    id: "01",
    name: "Cochos Burger",
    type: "Web-App Quiosco",
    technologies: "React JS, Next JS, Prisma, Tailwind, MySQL",
    date: "2023",
    description:
      "Este proyecto consiste en hacer un Quiosco virtual para un negocio de comida rápido que se encuentra cerca de donde vivo. El objetivo principal de esta app es que los meseros en vez de escribir el pedido de los clientes, puedan directamente hacer más rápido el proceso usando la app tanto en tablet como en computadora. Adicional a esto, los pedidos que se vayan haciendo llegarán directamente a otro usuario en tiempo real donde el personal de cocina recibirá el pedido para comenzar a hacerlo. Quiero aclarar que el proyecto no lo vendí a la tienda y que se quedó únicamente como una aplicación personal. Gracias a este proyecto logré entender la creación de aplicaciones en tiempo real, estructura de un proyecto y el uso de Next Js.",
      challenges: "Este fue uno de los primeros proyectos que considero me ayudaron a aprender de manera más general lo que es React. Es un proyecto muy completo en el cuál tuve algunos problemas con el despliegue de la App hacia un hosting gratuito. Tuve algunas dificultados con el uso de useContext(), sin embargo una vez entendí la dinámica de como funciona para pasar información o estados dentro de la aplicación se volvió algo muy sencillo de comprender.",
      repository: "https://github.com/RicardoGF396/cochos-burger",
    site: "https://cochos-burger.up.railway.app/",
    images: [
      "/projects_img/burger_01.png",
      "/projects_img/burger_02.png",
      "/projects_img/burger_03.png",
      "/projects_img/burger_04.png",
      "/projects_img/burger_05.png",
    ],
    colors: [
      "#FFA30C",
      "#000000",
      "#FFF2DC",
    ]
  },
  {
    id: "02",
    name: "Gumroad",
    type: "Landing Page",
    technologies: "React JS, Tailwind",
    date: "2023",
    description: "Este proyecto consistió en hacer una réplica exacta de la compañia Gumroad, tengo que adminitar que seguí un tutorial para entender como funcionaba Tailwind, especialmente para lo que es el apartado responsivo. De modo que este proyecto fue más una práctica que finalmente se vió muy bien y me gustó mucho el resultado, porque apesar de ser una Landing Page, cuenta con muchos detalles, algo de código implementado en la barra de navegación así como imágenes personalizadas para este proyecto.",
    challenges: "El mayor desafío en este proyecto fue el sentirme agusto usando clases ya definidas por Tailwind, que si bien al inicio fue algo complicado, después de las 3 primeras secciones logré entender perfactamente como funcionaba. Gracias a esto indentifiqué mejor los estilos, aprendí a leer la documentación y se volvió uno de mis frameworks favoritos.",
    repository: "https://github.com/RicardoGF396/Gumroad",
    site: "https://gumroad-rgf.netlify.app/",
    images: [
      "/projects_img/gumroad_01.png",
      "/projects_img/gumroad_02.png",
      "/projects_img/gumroad_03.png",
      "/projects_img/gumroad_04.png",
      "/projects_img/gumroad_05.png",
    ],
    colors: [
      "#FF90E8",
      "#FCC900",
      "#000000",
    ]
  },
  {
    id: "03",
    name: "Dental Care",
    type: "Web App",
    technologies: "React JS, Tailwind",
    date: "2023",
    description: "Este proyecto se junta con otros 3, que por el momento no están terminados, sin embargo el diseoño ya está listo y puedes verlo en mi página de Behance o en el link que se encuentra en la página de Inicio que dice 'Diseño UI / UX'. La idea es planteada desde un consultorio dental que ya existe, sin embargo lo que hice fue un rediseño completo y cambié los logos. El concepto es minimalista. Además las imágenes, figuras y los detalles que están en el proyecto fueron todos hechos por mí usando Photoshop, Illustrator, Figma y un software de IA  para mejorar la calidad de las imágenes. Es uno de mis proyectos favoritos porque con este siento que di el siguiente paso a la creación de web apps usando React JS.",
    challenges: "Es un proyecto que lo estoy haciendo con amigo, sin embargo el diseñador gráfico y no se dedicó a nada de la programación ni al diseño, todo fue hecho por mí. Debido a los tiempos en los que tenemos tiempo de vernos, el proyecto se aplazó mucho, la mayor parte está terminado, sin embargo sigo trabajando en un formulario dinámico que se encuentra en el apartado de 'Agendar'.",
    repository: "https://github.com/RicardoGF396/dentalcare",
    site: "https://dentalcare-rido.netlify.app/",
    images: [
      "/projects_img/dentalcare_01.png",
      "/projects_img/dentalcare_02.png",
      "/projects_img/dentalcare_03.jpg",
      "/projects_img/dentalcare_04.png",
      "/projects_img/dentalcare_05.png",
    ],
    colors: [
      "#CF3C34",
      "#DFDFDF",
      "#000000",
    ]
  },
  {
    id: "04",
    name: "Cripto API",
    type: "Web App",
    technologies: "React JS, Tailwind, Fetch API",
    date: "2023",
    description: "Este proyecto consiste en la llamada de una API en la que se consultan el valor de las criptomonedas que el usuario haya decidido verificar. Apesar de que es un proyecto muy simple, en él se ven la consulta de varios métodos para traer la información desde una API, así como modificar su estructura para consumir solo los datos necesarios. Con este proyecto logré entender como funcionaban las llamadas hacia una API de forma básica, utilizando React JS.",
    challenges: "Al ser el primer proyecto que implicaba consumir una API usando React, me tardé un poco más de lo normal para completar el proyecto, pero sinceramente no fue nada díficl y los conceptos que ya tenía aprendidos usando unicamente Javascript, son casi iguales que usando React JS.",
    repository: "https://github.com/RicardoGF396/CriptoAPI-",
    site: "https://criptoapi.netlify.app/",
    images: [
      "/projects_img/cripto_01.png",
      "/projects_img/cripto_02.png",
      "/projects_img/cripto_03.png",
      "/projects_img/cripto_04.png",
      "/projects_img/cripto_05.png",
    ],
    colors: [
      "#cafc01",
      "#747474",
      "#151515",
    ]
  },
];

export default projects;
