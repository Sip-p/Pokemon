// /* eslint-disable jsx-a11y/anchor-is-valid */
// import React from "react";
// import "./cardPokemon.scss"
// import { useState, useContext } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
// import { FavoriteContext } from "../../context/context";


// const CardPokemon = ({ idx, name, sprites, weight, types, abilities }) => {
//   const [skillsPokemon, setSkillsPokemon] = useState(false)
//   const cardModel = skillsPokemon ? "skills-model" : ""
//   const pokemonType = types
//   const { favoritePokemons, updateFavoritePokemon } = useContext(FavoriteContext)
//   const redHearth = "https://cdn-icons-png.flaticon.com/512/929/929417.png";
//   const blackhearth = "https://cdn-icons-png.flaticon.com/512/25/25451.png";
//   const hearth = favoritePokemons.includes(name) ? redHearth : blackhearth;

//   const addPokemonTofavorite = (e) => {
//     e.preventDefault()
//     updateFavoritePokemon(name)
//   }
//   const style = {
//     animationDelay: `${idx * 100}ms`,
//     transformOrigin: "left"
//   }
//   function datesPokemonToSkills() {
//     setSkillsPokemon(!skillsPokemon)
//   }
//   return (
//     <div className={`pokedex__pokemon-card card-${cardModel}`} style={style} onClick={() => console.log(idx)} >
//       {/*Conditional render card  */}
//       {!skillsPokemon
//         ?
//         <button className="pokemon-card__skills-btn" onClick={datesPokemonToSkills}>Skills</button>
//         :
//         <button className="pokemon-card__skills-btn" onClick={datesPokemonToSkills}><FontAwesomeIcon className="closed-modal-skills" icon={faXmarkCircle} /> </button>
//       }
//       <div className="pokemon-card__img">
//         <img src={sprites.other.home.front_default} className="pokemon-card_pokemon-sprite" alt={`Pokemon Sprite${name}`} />
//       </div>

//       <div className={` ${skillsPokemon ? "pokemon-card__cont-colum skills" : "pokemon-card__cont-colum hiddenSkills"}`}>

//         {/* name id  */}
//         <div className="pokemon-card__datos">
//           <div><span className="pokemon-card__id-pokemon">
//             <span>weight: {weight}</span></span>
//           </div>

//           <div><h4 className="pokemon-card__name-pokemon">{name}</h4></div>
//           <div><span className="pokemon-card__id-pokemon">#{idx + 1}</span></div>
//         </div>

//         {/* chateristics */}
//         <div className="pokemon-card__caracteristicas-pokemon">
//           {pokemonType.map((type, idx) => {
//             return <div className={`button-type bg-${type.type.name}`} key={idx + 1}>{type.type.name}</div>
//           })}
//           <button className="pokemon-card__btn-favorite" onClick={addPokemonTofavorite}><img src={hearth} className="caracteristica__life-icon" alt="" /></button>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default CardPokemon





/* eslint-disable jsx-a11y/anchor-is-valid */
// import React, { useState, useContext } from "react";
// import "./cardPokemon.scss";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
// import { FavoriteContext } from "../../context/context";

// const CardPokemon = ({ idx, name, sprites, weight, types, abilities }) => {
//   const [skillsPokemon, setSkillsPokemon] = useState(false);
//   const { favoritePokemons, updateFavoritePokemon } = useContext(FavoriteContext);

//   const redHeart = "https://cdn-icons-png.flaticon.com/512/929/929417.png";
//   const blackHeart = "https://cdn-icons-png.flaticon.com/512/25/25451.png";
//   const heart = favoritePokemons.includes(name) ? redHeart : blackHeart;

//   const toggleSkills = (e) => {
//     e.stopPropagation();
//     setSkillsPokemon(!skillsPokemon);
//   };

//   const toggleFavorite = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     updateFavoritePokemon(name);
//   };

//   const pokemonType = types || [];
//   const pokemonSprite =
//     sprites?.other?.home?.front_default ||
//     sprites?.front_default ||
//     "https://via.placeholder.com/100";

//   const style = {
//     animationDelay: `${idx * 100}ms`,
//     transformOrigin: "left",
//   };

//   return (
//     <div
//       className={`pokedex__pokemon-card card-${skillsPokemon ? "skills-model" : ""}`}
//       style={style}
//     >
//       <button className="pokemon-card__skills-btn" onClick={toggleSkills}>
//         {skillsPokemon ? (
//           <FontAwesomeIcon className="closed-modal-skills" icon={faXmarkCircle} />
//         ) : (
//           "Skills"
//         )}
//       </button>

//       <div className="pokemon-card__img">
//         <img
//           src={pokemonSprite}
//           className="pokemon-card_pokemon-sprite"
//           alt={`${name} sprite`}
//         />
//       </div>

//       <div
//         className={`${
//           skillsPokemon ? "pokemon-card__cont-colum skills" : "pokemon-card__cont-colum hiddenSkills"
//         }`}
//       >
//         {/* Name & ID */}
//         <div className="pokemon-card__datos">
//           <div>
//             <span className="pokemon-card__id-pokemon">
//               <span>Weight: {weight}</span>
//             </span>
//           </div>
//           <div>
//             <h4 className="pokemon-card__name-pokemon">{name}</h4>
//           </div>
//           <div>
//             <span className="pokemon-card__id-pokemon">#{idx}</span>
//           </div>
//         </div>

//         {/* Characteristics */}
//         <div className="pokemon-card__caracteristicas-pokemon">
//           {pokemonType.map((type) => (
//             <div className={`button-type bg-${type.type.name}`} key={type.type.name}>
//               {type.type.name}
//             </div>
//           ))}
//           <button className="pokemon-card__btn-favorite" onClick={toggleFavorite}>
//             <img
//               src={heart}
//               className="caracteristica__life-icon"
//               alt="Favorite icon"
//             />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardPokemon;



import React, { useState, useContext } from "react";
import "./cardPokemon.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { FavoriteContext } from "../../context/context";

const CardPokemon = ({
  idx,
  name,
  sprites,
  weight,
  types,
  abilities,
  handleComparePokemon,
}) => {
  const [skillsPokemon, setSkillsPokemon] = useState(false);
  const { favoritePokemons, updateFavoritePokemon } = useContext(FavoriteContext);

  const redHeart = "https://cdn-icons-png.flaticon.com/512/929/929417.png";
  const blackHeart = "https://cdn-icons-png.flaticon.com/512/25/25451.png";
  const heart = favoritePokemons.includes(name) ? redHeart : blackHeart;

  const toggleSkills = (e) => {
    e.stopPropagation();
    setSkillsPokemon(!skillsPokemon);
  };

  const toggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    updateFavoritePokemon(name);
  };

  const pokemonType = types || [];
  const pokemonSprite =
    sprites?.other?.home?.front_default ||
    sprites?.front_default ||
    "https://via.placeholder.com/100";

  const style = {
    animationDelay: `${idx * 100}ms`,
    transformOrigin: "left",
  };

  const handleCompare = (e) => {
    e.stopPropagation(); // Prevent triggering the parent click event
    handleComparePokemon({ name, sprites, types, weight });
  };

  return (
    <div
      className={`pokedex__pokemon-card card-${skillsPokemon ? "skills-model" : ""}`}
      style={style}
    >
      <button className="pokemon-card__skills-btn" onClick={toggleSkills}>
        {skillsPokemon ? (
          <FontAwesomeIcon className="closed-modal-skills" icon={faXmarkCircle} />
        ) : (
          "Skills"
        )}
      </button>

      <div className="pokemon-card__img">
        <img
          src={pokemonSprite}
          className="pokemon-card_pokemon-sprite"
          alt={`${name} sprite`}
        />
      </div>

      <div
        className={`${
          skillsPokemon ? "pokemon-card__cont-colum skills" : "pokemon-card__cont-colum hiddenSkills"
        }`}
      >
        {/* Name & ID */}
        <div className="pokemon-card__datos">
          <div>
            <span className="pokemon-card__id-pokemon">
              <span>Weight: {weight}</span>
            </span>
          </div>
          <div>
            <h4 className="pokemon-card__name-pokemon">{name}</h4>
          </div>
          <div>
            <span className="pokemon-card__id-pokemon">#{idx}</span>
          </div>
        </div>

        {/* Characteristics */}
        <div className="pokemon-card__caracteristicas-pokemon">
          {pokemonType.map((type) => (
            <div className={`button-type bg-${type.type.name}`} key={type.type.name}>
              {type.type.name}
            </div>
          ))}
          <button className="pokemon-card__btn-favorite" onClick={toggleFavorite}>
            <img
              src={heart}
              className="caracteristica__life-icon"
              alt="Favorite icon"
            />
          </button>

          {/* Add Compare Button */}
          <button className="pokemon-card__btn-compare" onClick={handleCompare}>
            Compare
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPokemon;

