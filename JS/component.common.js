const Welcome = () => {
  return (
    <div className="p-6 text-center">
      <h1 className="text-blue-900 text-7xl font-bold m-5">FutSite</h1>
      <img
        src="../IMAGENES/PÁGINA/camisetas.jpeg"
        alt="camisetas"
        loading="lazy"
        className="mx-auto mb-4 rounded-lg shadow-md w-1/2 m-7"
      />
      <p className="text-gray-700 text-4xl m-7">
        ¡FutSite te oferece las mejores camisetas y ropas de equipos de fútbol más actuales!
      </p>
    </div>
  );
};

const Navigation = () => {
  return (
      <nav style={{ backgrounColor: "#F0B941" }} className="p-4">
        <img src="../IMAGENES/PÁGINA/logo.jpeg"/>
        <ul className="flex space-x-4 justify-center">
          <li>
            <a href="../HTML/index.html" className="text-white hover:text-blue-400">
              Inicio
            </a>
          </li>
          <li>
            <a href="../HTML/products.html" className="text-white hover:text-blue-400">
              Productos
            </a>
          </li>
          <li>
            <a href="../HTML/contacto.html" className="text-white hover:text-blue-400">
              Contacto
            </a>
          </li>
          <li>
            <a href="../HTML/about.html" className="text-white hover:text-blue-400">
              Nosotros
            </a>
          </li>
          <li>
            <a href="../HTML/novedades.html" className="text-white hover:text-blue-400">
              Novedades
            </a>
          </li>
        </ul>
      </nav>
  );
};

const Footer = () => {
  return (
    <footer
      style={{ backgrounColor: "#E7C886" }}
      className="text-black p-4 text-center"
    >
      <p className="text-sm">
      <h4>NAVEGACIÓN:</h4>
      <ul>
        <li><a href="../HTML/index.html">Inicio</a></li>
        <li><a href="../HTML/about.html">Nosotros</a></li>
        <li><a href="../HTML/contacto.html">Contacto</a></li>
        <li><a href="../HTML/alltshirts.html">Productos</a></li>
      </ul>
        <p><span>UBÍCANOS EN:</span> Av. La Molina</p>
      </p>
    </footer>
  );
};

const About = () => {
  return (
    <body className="items-center">
      <h1 className="text-blue-900 text-4xl font-bold m-5">NOSOTROS</h1>
      <div className="text-gray-700 text-lg m-6 text-justify w-2/3">
      <p className="py-3">
        En FutSite, somos apasionados por el fútbol y sabemos que cada camiseta es el significado de una historia. Desde las equipaciones más icónicas de clubes hasta de selecciones nacionales que nos hacen vibrar en cada partido. </p>

        <p className="py-3">Por ello, nuestro objetivo es ofrecerte una ran variedad de camisetas con una buena calidad, para que no te quedes sin la que más te guste y desees. Con la ayuda de nuestros proveedores, trabajamos para que las camisetas no solo se vean bien, sino que también estén fabricadas con los mejores materiales para que te sientes cómodo a la hora de alentar o jugar un partidos con tus amigos.</p>

        <p className="py-3">No importa si eres un hincha apasionado o un nuevo aficionado del fútbol, en FutSite encontrarás lo adecuado para alentar al equipo de tus amores.</p>

        <p className="py-3">Nos esforzamos para que tu pasión no tenga límites y tengas una experiencie futbolera inolvidable.</p>

        <p className="py-3">¡Vístete con los colores que te enorgullecen en FutSite!
        </p>
        </div>
        <h1 className="text-blue-900 text-3xl font-bold m-5">UBÍCANOS EN</h1>
        <img src="../IMAGENES/PÁGINA/ubicacion.jpeg" className="mx-auto mb-10 rounded-lg shadow-md w-1/2"/>
    </body>
  );
}

const Novedades = () => {
  return (
  <main class="flex-grow p-4">
  <h1 class="text-blue-900 text-4xl font-bold m-5">Últimas Camisetas</h1>
  <ul className="list-disc pl-6 list-none text-center">
      <li className="text-lg font-bold py-3">FC Barcelona Tercer equipación 2024 - S/250
        <img 
        src="../IMAGENES/NOVEDADES/barcelona-verde.jpeg"
        className="mx-auto mb-4 rounded-lg shadow-md w-1/2 m-7"
        />
      </li>
      <li className="py-8 text-lg font-bold">Alianza Lima Mes morado 2024 - S/220
        <img
        src="../IMAGENES/NOVEDADES/alianzalima.jpg"
        className="mx-auto mb-4 rounded-lg shadow-md w-1/2 m-7 py-0"
        />
      </li>
      <li className="text-lg font-bold">Bayern Munich Primera Equipación 2024 - S/250
        <img
        src="../IMAGENES/NOVEDADES/bayern.jpg"
        className="mx-auto mb-4 rounded-lg shadow-md w-1/2 m-7"
        />
      </li>
  </ul>
</main>
);
}