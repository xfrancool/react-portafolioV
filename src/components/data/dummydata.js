import {
  Settings,
  CropRotate,
  ViewInAr,
  PieChart,
  Code,
  BarChart,
  CloudOutlined,
  FavoriteBorder,
  Public,
  PersonOutlined,
  AddLocationAltOutlined,
  PhoneIphone,
  EmailOutlined,
  Facebook,
  Instagram,
  GitHub,
  WhatsApp,
} from "@mui/icons-material";

export const navlink = [
  {
    url: "/",
    text: "Inicio",
  },
  {
    url: "/about",
    text: "Acerca de mi",
  },
  {
    url: "/services",
    text: "Servicios",
  },
  {
    url: "/portfolio",
    text: "Portfolio",
  },
  /* {
    url: "/testimonials",
    text: "Testimonials",
  },
  {
    url: "/blog",
    text: "Blog",
  }, */
  {
    url: "/contact",
    text: "Contacto",
  },
];
export const home = [
  {
    text: "Hola soy Fran",
    name: "Front-end Developer",
    post: "SEO",
    design: "Responsive DESIGNER",
    desc: "Diariamente busco aprender nuevas herramientas tecnológicas o afianzar las que ya domino incluyendo nuevos lenguajes de programación. ",
  },
];
export const about = [
  {
    desc: "Poseo experiencia con proyectos personales y otros pedidos de clientes. En dónde aplico todo mi dominios sobre las herramientas abajo mencionadas.Estoy capacitandome de forma autodidacta y con cursos intensivos como desarrolador avanzado JavasCript para luego trabajar en proyectos grandes escalables y optimos gracias a todos sus framework.",

    cover: "./images/man.png",
  },
];
export const services = [
  {
    id: 1,
    icon: <Settings />,
    title: "Creative Design",
    desc: "Buscando la creatividad en cada producción",
  },
  {
    id: 2,
    icon: <CropRotate />,
    title: "Clean Code",
    desc: "Ultilizando buenas prácticas de organización en el código",
  },
  {
    id: 3,
    icon: <ViewInAr />,
    title: "Responsive Design",
    desc: "Diseño adaptado a todos los móviles",
  },
  {
    id: 4,
    icon: <PieChart />,
    title: "Material UI	",
    desc: "Colores y fuentes acordes al tu negocio",
  },
  {
    id: 5,
    icon: <Code />,
    title: "Material UI Icons",
    desc: "Librerias de React",
  },
  {
    id: 6,
    icon: <BarChart />,
    title: "Awesome",
    desc: "Iconos de librerias",
  },
];
export const project = [
  {
    id: 1,
    icon: <CloudOutlined />,
    num: "89",
    title: "HAPPY CLIENTS",
  },
  {
    id: 2,
    icon: <FavoriteBorder />,
    num: "231",
    title: "PROJECTS COMPLEATED",
  },
  {
    id: 3,
    icon: <Public />,
    num: "108",
    title: "FILES DOWNLOADED",
  },
  {
    id: 4,
    icon: <PersonOutlined />,
    num: "1446",
    title: "LIENS OF CODE",
  },
];
export const portfolio = [
  {
    id: 1,
    cover: "../images/port/port7.jpg",
    name: "Personal",
    category: "Portafolio",
    title: "Portafolio",
    url: "https://portafolio-jobs.netlify.app/",
  },
  {
    id: 2,
    cover: "https://xfrancool.github.io/imgit/play.jpg",
    name: "Reproductor",
    category: "Otros",
    title: "MP3",
    url: "https://xfrancool6.github.io/",
  },
  {
    id: 3,
    cover: "https://xfrancool.github.io/imgit/notasjs.jpg",
    name: "Js",
    category: "Organizacón",
    title: "Notas",
    url: "https://notas-js.netlify.app/",
  },
  {
    id: 4,
    cover: "https://xfrancool.github.io/imgit/traductor.jpg",
    name: "Idiomas",
    category: "API REST",
    title: "Traductor",
    url: "https://traductor-js.netlify.app/",
  },
  {
    id: 5,
    cover: "https://xfrancool.github.io/imgit/pomodoro.jpg",
    name: "Estudio",
    category: "Organizacón",
    title: "Pomodoro",
    url: "https://study-time.netlify.app/",
  },
  {
    id: 6,
    cover: "https://xfrancool.github.io/imgit/api.jpg",
    name: "Imágenes",
    category: "API REST",
    title: "API",
    url: "https://banco-imagen.netlify.app/",
  },
  {
    id: 7,
    cover: "https://xfrancool.github.io/imgit/list3v.jpg",
    name: "Anotar",
    category: "Organizacón",
    title: "Tareas",
    url: "https://lista-tareas3.netlify.app/",
  },
  {
    id: 8,
    cover: "https://xfrancool.github.io/imgit/write.jpg",
    name: "Texto a voz",
    category: "API REST",
    title: "API",
    url: "https://write-listen.netlify.app/",
  },
  {
    id: 9,
    cover: "https://xfrancool.github.io/imgit/qr.jpg",
    name: "Generar",
    category: "Otros",
    title: "QR",
    url: "https://generator-qr.netlify.app/",
  },
];
export const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/testimonials/team-1.png",
    name: "Alamin Musa",
    post: "Front End Developer",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/testimonials/team-2.png",
    name: "Alex Ander",
    post: "Back End Developer",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/testimonials/team-3.png",
    name: "GorkCoder",
    post: "React Developer",
  },
];
export const blog = [
  {
    id: 1,
    title: "Master These Awesome",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "./images/blog/b1.png",
  },
  {
    id: 2,
    title: "Best Design Items to Appeal",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "./images/blog/b2.png",
  },
  {
    id: 3,
    title: "The 20 Best Lightroom Presets",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "./images/blog/b3.png",
  },
];
export const contact = [
  {
    icon: <AddLocationAltOutlined />,
    text1: "Córdoba, Capital",
    /* text2: "Seattle, WA, 98101", */
  },
  {
    icon: <PhoneIphone />,
    text1: "3515195090",
  },
  {
    icon: <EmailOutlined />,
    text1: "xfrancoo6@gmail.com",
    /*    text2: "inf0@brex-theme.io", */
  },
];
export const social = [
  {
    icon: <Facebook />,
    src: "https://www.facebook.com/franco.ortega2/",
  },
  {
    icon: <WhatsApp />,
    src: "https://api.whatsapp.com/send?phone=+5493513532478&text=Hola%20Franco!%20Mire%20tus%20trabajos%20de%20desarrollo%20web%20y%20estoy%20interesado%20en%20dialogar%20contigo,%20asi%20concretamos%20juntos%20un%20proyecto%20nuevo...",
  },
  {
    icon: <Instagram />,
    src: "https://www.instagram.com/franco.ortega2/?hl=es",
  },
  {
    icon: <GitHub />,
    src: "https://github.com/xfrancool",
  },
];
