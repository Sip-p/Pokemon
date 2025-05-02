 

// import React, { useContext, useState, useEffect, useMemo } from "react";
// import "./pokedex.scss";
// import CardPokemon from "../cardPokemon/cardpokemon";
// import Spinner from "../spinner/spinner";
// import { SearchValue } from "../../context/searchbarContext";
// import ComparisionModel from "../ComparisionModel/ComparisionModel";
// const allTypes = [
//   "normal", "fire", "water", "grass", "electric", "ice", "fighting", "poison",
//   "ground", "flying", "psychic", "bug", "rock", "ghost", "dragon", "dark", "steel", "fairy"
// ];

// export default function Pokedex({ pokemons, loading }) {
//   const { searchValue } = useContext(SearchValue);
//   const [sortOption, setSortOption] = useState("id");
//   const [selectedTypes, setSelectedTypes] = useState([]);
//   const [showFav, setShowFav] = useState(false);
//   const [favoritePokemons, setFavoritePokemons] = useState([]);
//   const [selectedPokemon1, setSelectedPokemon1] = useState(null);
//   const [selectedPokemon2, setSelectedPokemon2] = useState(null);
//   const [showComparison, setShowComparison] = useState(false);
  
//   // Load favorites from local storage on component mount
//   useEffect(() => {
//     const savedFavorites = JSON.parse(localStorage.getItem("favoritePokemons")) || [];
//     setFavoritePokemons(savedFavorites);
//   }, []);

//   // Function to update favorites
//   const updateFavoritePokemon = (name) => {
//     setFavoritePokemons((prevFavorites) => {
//       const updatedFavorites = prevFavorites.includes(name)
//         ? prevFavorites.filter((fav) => fav !== name) // Remove from favorites
//         : [...prevFavorites, name]; // Add to favorites

//       localStorage.setItem("favoritePokemons", JSON.stringify(updatedFavorites));
//       return updatedFavorites; // Update state immediately
//     });
//   };

//   const handleSortChange = (e) => {
//     setSortOption(e.target.value);
//   };

//   const handleTypeToggle = (type) => {
//     setSelectedTypes((prev) =>
//       prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
//     );
//   };
//   const handleComparePokemon = (pokemon) => {
//     if (!selectedPokemon1) {
//       setSelectedPokemon1(pokemon);
//     } else {
//       setSelectedPokemon2(pokemon);
//       setShowComparison(true);
//     }
//   };
  
//   // Render the modal inside Pokedex
//   {showComparison && (
//     <ComparisionModel
//       pokemon1={selectedPokemon1}
//       pokemon2={selectedPokemon2}
//       closeModal={() => {
//         setSelectedPokemon1(null);
//         setSelectedPokemon2(null);
//         setShowComparison(false);
//       }}
//     />
//   )}
  
//   const sortPokemons = (a, b) => {
//     if (sortOption === "name-asc") return a.name.localeCompare(b.name);
//     if (sortOption === "name-desc") return b.name.localeCompare(a.name);
//     return a.id - b.id;
//   };

//   const filterBySearchAndType = (pokemonList) => {
//     return pokemonList
//       .filter((p) => !searchValue || p.name.toLowerCase().includes(searchValue.toLowerCase()))
//       .filter((p) =>
//         selectedTypes.length === 0 ||
//         selectedTypes.some((type) => p.types.map((t) => t.type.name).includes(type))
//       )
//       .sort(sortPokemons);
//   };

//   const displayedPokemons = useMemo(() => {
//     const filteredList = showFav
//       ? pokemons.filter((poke) => favoritePokemons.includes(poke.name))
//       : pokemons;

//     return filterBySearchAndType(filteredList);
//   }, [showFav, pokemons, favoritePokemons, searchValue, selectedTypes, sortOption]);

//   const toggleShowFavorites = () => {
//     setShowFav((prev) => !prev);
//   };

//   return (
//     <div>
//       <header className="header">
//         <h1 className="header__title">Pokedex</h1>
//       </header>

//       <div className="filters">
//         <div className="filters__sort">
//           <label>Sort By:</label>
//           <select onChange={handleSortChange} value={sortOption}>
//             <option value="id">ID</option>
//             <option value="name-asc">Name (A-Z)</option>
//             <option value="name-desc">Name (Z-A)</option>
//           </select>
//         </div>

//         <div className="filters__types">
//           <label>Filter By Types:</label>
//           <div className="type-checkboxes">
//             {allTypes.map((type) => (
//               <label key={type}>
//                 <input
//                   type="checkbox"
//                   checked={selectedTypes.includes(type)}
//                   onChange={() => handleTypeToggle(type)}
//                 />
//                 {type}
//               </label>
//             ))}
//           </div>
//         </div>
//       </div>

//       <button className="show-fav-btn" onClick={toggleShowFavorites}>
//         {showFav ? "Show All Pokémon" : "Show Favorites"}
//       </button>

//       {loading ? (
//         <Spinner />
//       ) : (
//         <div className="pokedex">
//           {displayedPokemons.length > 0 ? (
//             displayedPokemons.map((pokemon, idx) => (
//               <CardPokemon
//                 key={pokemon.name || idx}
//                 name={pokemon.name}
//                 sprites={pokemon.sprites}
//                 types={pokemon.types}
//                 abilities={pokemon.abilities}
//                 stat={pokemon.stat}
//                 weight={pokemon.weight}
//                 url={pokemon.url}
//                 idx={pokemon.id || idx}
//                 updateFavoritePokemon={updateFavoritePokemon}
//                 isFavorite={favoritePokemons.includes(pokemon.name)}
//               />
//             ))
//           ) : (
//             <p>{showFav ? "No favorite Pokémon added yet!" : "No Pokémon found."}</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }



import React, { useContext, useState, useEffect, useMemo } from "react";
import "./pokedex.scss";
import CardPokemon from "../cardPokemon/cardpokemon";
import Spinner from "../spinner/spinner";
import { SearchValue } from "../../context/searchbarContext";
import ComparisionModel from "../ComparisionModel/ComparisionModel";

const allTypes = [
  "normal", "fire", "water", "grass", "electric", "ice", "fighting", "poison",
  "ground", "flying", "psychic", "bug", "rock", "ghost", "dragon", "dark", "steel", "fairy"
];

export default function Pokedex({ pokemons, loading }) {
  const { searchValue } = useContext(SearchValue);
  const [sortOption, setSortOption] = useState("id");
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [showFav, setShowFav] = useState(false);
  const [favoritePokemons, setFavoritePokemons] = useState([]);
  const [selectedPokemon1, setSelectedPokemon1] = useState(null);
  const [selectedPokemon2, setSelectedPokemon2] = useState(null);
  const [showComparison, setShowComparison] = useState(false);
  
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favoritePokemons")) || [];
    setFavoritePokemons(savedFavorites);
  }, []);

  const updateFavoritePokemon = (name) => {
    setFavoritePokemons((prevFavorites) => {
      const updatedFavorites = prevFavorites.includes(name)
        ? prevFavorites.filter((fav) => fav !== name)
        : [...prevFavorites, name];
      localStorage.setItem("favoritePokemons", JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleTypeToggle = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleComparePokemon = (pokemon) => {
    if (!selectedPokemon1) {
      setSelectedPokemon1(pokemon);
    } else {
      setSelectedPokemon2(pokemon);
      setShowComparison(true);
    }
  };

  const sortPokemons = (a, b) => {
    if (sortOption === "name-asc") return a.name.localeCompare(b.name);
    if (sortOption === "name-desc") return b.name.localeCompare(a.name);
    return a.id - b.id;
  };

  const filterBySearchAndType = (pokemonList) => {
    return pokemonList
      .filter((p) => !searchValue || p.name.toLowerCase().includes(searchValue.toLowerCase()))
      .filter((p) =>
        selectedTypes.length === 0 ||
        selectedTypes.some((type) => p.types.map((t) => t.type.name).includes(type))
      )
      .sort(sortPokemons);
  };

  const displayedPokemons = useMemo(() => {
    const filteredList = showFav
      ? pokemons.filter((poke) => favoritePokemons.includes(poke.name))
      : pokemons;

    return filterBySearchAndType(filteredList);
  }, [showFav, pokemons, favoritePokemons, searchValue, selectedTypes, sortOption]);

  const toggleShowFavorites = () => {
    setShowFav((prev) => !prev);
  };

  return (
    <div>
      <header className="header">
        <h1 className="header__title">Pokedex</h1>
      </header>

      <div className="filters">
        <div className="filters__sort">
          <label>Sort By:</label>
          <select onChange={handleSortChange} value={sortOption}>
            <option value="id">ID</option>
            <option value="name-asc">Name (A-Z)</option>
            <option value="name-desc">Name (Z-A)</option>
          </select>
        </div>

        <div className="filters__types">
          <label>Filter By Types:</label>
          <div className="type-checkboxes">
            {allTypes.map((type) => (
              <label key={type}>
                <input
                  type="checkbox"
                  checked={selectedTypes.includes(type)}
                  onChange={() => handleTypeToggle(type)}
                />
                {type}
              </label>
            ))}
          </div>
        </div>
      </div>

      <button className="show-fav-btn" onClick={toggleShowFavorites}>
        {showFav ? "Show All Pokémon" : "Show Favorites"}
      </button>

      {loading ? (
        <Spinner />
      ) : (
        <div className="pokedex">
          {displayedPokemons.length > 0 ? (
            displayedPokemons.map((pokemon, idx) => (
              <CardPokemon
                key={pokemon.name || idx}
                name={pokemon.name}
                sprites={pokemon.sprites}
                types={pokemon.types}
                abilities={pokemon.abilities}
                stat={pokemon.stat}
                weight={pokemon.weight}
                url={pokemon.url}
                idx={pokemon.id || idx}
                updateFavoritePokemon={updateFavoritePokemon}
                isFavorite={favoritePokemons.includes(pokemon.name)}
                handleCompare={() => handleComparePokemon(pokemon)}
              />
            ))
          ) : (
            <p>{showFav ? "No favorite Pokémon added yet!" : "No Pokémon found."}</p>
          )}
        </div>
      )}

      {showComparison && selectedPokemon1 && selectedPokemon2 && (
        <ComparisionModel
          pokemon1={selectedPokemon1}
          pokemon2={selectedPokemon2}
          closeModal={() => {
            setSelectedPokemon1(null);
            setSelectedPokemon2(null);
            setShowComparison(false);
          }}
        />
      )}
    </div>
  );
}
