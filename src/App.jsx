import React, { useState, useContext } from "react";
import "./cardPokemon.scss";
import { FavoriteContext } from "../../context/context";

const CardPokemon = ({ idx, name, sprites, weight, types, abilities }) => {
  const [skillsPokemon, setSkillsPokemon] = useState(false);
  const { favoritePokemons, updateFavoritePokemon } = useContext(FavoriteContext);

  const redHeart = "https://cdn-icons-png.flaticon.com/512/929/929417.png";
  const blackHeart = "https://cdn-icons-png.flaticon.com/512/25/25451.png";

  const isFavorite = favoritePokemons.some((poke) => poke.name === name);
  const heart = isFavorite ? redHeart : blackHeart;

  const addPokemonToFavorite = (e) => {
    e.stopPropagation();
    updateFavoritePokemon({
      name,
      sprites,
      weight,
      types,
      abilities,
      idx
    });
  };

  const pokemonSprite = sprites?.other?.home?.front_default || "defaultSprite.png";

  return (
    <>
      {/* Main card */}
      <div className="pokemon-card">
        <img src={pokemonSprite} alt={name} width={100} />
        <h3>{name}</h3>
        <p>Weight: {weight}</p>
        <div>
          {types.map((t) => (
            <span key={t.type.name}>{t.type.name} </span>
          ))}
        </div>
        <button onClick={addPokemonToFavorite}>
          <img src={heart} alt="Favorite" width={20} />
        </button>
      </div>

      {/* Favorite Cards */}
      <h3>Favorites</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {favoritePokemons.map((poke) => (
          <div className="pokemon-card" key={poke.name}>
            <img
              src={poke.sprites?.other?.home?.front_default || "defaultSprite.png"}
              alt={poke.name}
              width={100}
            />
            <h4>{poke.name}</h4>
            <p>Weight: {poke.weight}</p>
            <div>
              {poke.types.map((t) => (
                <span key={t.type.name}>{t.type.name} </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardPokemon;
