// import React, { useEffect, useState } from "react";
// import CardPokemon from "../cardPokemon/cardpokemon.jsx"; // Assuming CardPokemon component is used to display each Pokemon
// import "./favoritePokemons.scss";

// const FavPokemon = () => {
//   const [favoritePokemons, setFavoritePokemons] = useState([]);

//   // Fetch favorites from localStorage when the component mounts
//   useEffect(() => {
//     const savedFavorites = JSON.parse(localStorage.getItem("favoritePokemons")) || [];
//     setFavoritePokemons(savedFavorites);
//   }, []);

//   // Function to remove a Pokémon from favorites
//   const removeFromFavorites = (name) => {
//     const updatedFavorites = favoritePokemons.filter(pokemon => pokemon.name !== name);
//     setFavoritePokemons(updatedFavorites);
//     localStorage.setItem("favoritePokemons", JSON.stringify(updatedFavorites));
//   };

//   return (
//     <div className="favorite-pokemon-container">
//       <h2>Favorite Pokémon</h2>
//       {favoritePokemons.length === 0 ? (
//         <p>No favorite Pokémon yet!</p>
//       ) : (
//         <div className="favorite-pokemon-list">
//           {favoritePokemons.map((pokemon, idx) => (
//             <CardPokemon
//               key={idx}
//               name={pokemon.name}
//               sprites={pokemon.sprites}
//               weight={pokemon.weight}
//               types={pokemon.types}
//               abilities={pokemon.abilities}
//               removeFromFavorites={removeFromFavorites} // Pass the remove function to CardPokemon
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default FavPokemon;





import React, { useContext } from "react";
import { FavoriteContext } from "../../context/context";
 import CardPokemon from "../cardPokemon/cardpokemon";
import "./FavPokemon.scss";
 const FavoritesPage = () => {
  const { favoritePokemons } = useContext(FavoriteContext);

  return (
    <div className="favorites-container">
      <h2>Your Favorite Pokémons</h2>
      {favoritePokemons.length === 0 ? (
        <p>No favorites added yet.</p>
      ) : (
        <div className="favorites-grid">
          {favoritePokemons.map((poke, index) => (
            <CardPokemon
              key={poke.name}
              idx={index}
              name={poke.name}
              sprites={poke.sprites}
              weight={poke.weight}
              types={poke.types}
              abilities={poke.abilities}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;

