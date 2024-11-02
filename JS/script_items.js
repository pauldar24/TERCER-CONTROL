const movieGrid = document.getElementById("product-grid");
const genreFilter = document.getElementById("productFilter");
const modal = document.getElementById("productModal");
const modalContent = document.getElementById("productContent");
const closeBtn = document.getElementsByClassName("close")[0];
const movies = [
  {
    title: "FC Barcelona",
    description:
      "Camiseta Local FC Barcelona 24/25",
    genre: "Barcelona",
    image: "IMAGENES/BARCELONA/barcelona.jpeg",
  },
  {
    title: "Deadpool & Wolverine",
    description:
      "Película con comedia y acción protagonizada por Ryan Reynolds y Hugh Jackman.",
    genre: "Action",
    image: "images/Deadpool.webp",
  },
  {
    title: "Pelé",
    description:
      "Película que trata sobre la vida de la leyenda brasilera Pelé.",
    genre: "Sport",
    image: "images/Pelé.webp",
  },
  {
    title: "It ends with us",
    description:
      "Lily Bloom se enamora de un neurocirujano tras mudarse a Boston con el objetivo de abrir su propio negocio. Sin embargo, el primer amor de su vida retoma el contacto con ella, y Lily ahora no sabe qué hacer.",
    genre: "Romantic",
    image: "images/IEWU.webp",
  },
  {
    title: "Alice in terrorland",
    description:
      "Tras la muerte de sus padres, la adolescente Alice va a vivir a la casa de su abuela, una morada aislada en medio del bosque. Poco a poco, Alice descubre que hay siniestras fuerzas oscuras ejerciendo allá su poder.",
    genre: "Horror",
    image: "images/alice.webp",
  },
];

function displayMovies(filter = "all") {
  movieGrid.innerHTML = "";
  movies.forEach((movie) => {
    if (filter === "all" || movie.genre === filter) {
      const movieCard = document.createElement("div");
      movieCard.classList.add("movie-card");
      movieCard.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}">
        <h3>${movie.title}</h3>
        <button class="favorite-btn">Favorite</button>
      `;
      movieCard
        .querySelector(".favorite-btn")
        .addEventListener("click", toggleFavorite);
      movieCard.addEventListener("click", () => showMovieDetails(movie));
      movieGrid.appendChild(movieCard);
    }
  });
}
function toggleFavorite(e) {
  e.stopPropagation();
  const button = e.target;
  button.textContent =
    button.textContent === "Favorite" ? "Favorited" : "Favorite";
  button.style.backgroundColor =
    button.textContent === "Favorited" ? "#dc3545" : "#007bff";
}
function showMovieDetails(movie) {
  modalContent.innerHTML = `
    <h2>${movie.title}</h2>
    <img src="${movie.image}" alt="${movie.title}" style="width: 200px; height: 300px; object-fit: cover;">
    <p>${movie.description}</p>
    <p>Genre: ${movie.genre}</p>
  `;
  modal.style.display = "block";
}
closeBtn.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
function populateGenreFilter() {
  const genres = [...new Set(movies.map((movie) => movie.genre))];
  genres.forEach((genre) => {
    const option = document.createElement("option");
    option.value = genre;
    option.textContent = genre;
    genreFilter.appendChild(option);
  });
}
genreFilter.addEventListener("change", (e) => {
  displayMovies(e.target.value);
});
populateGenreFilter();
displayMovies();