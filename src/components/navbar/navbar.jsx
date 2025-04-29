import React from "react";
import { FavoriteContext } from "../../context/context";
import { motion } from "framer-motion";
import "./navbar.scss";

const { useContext } = React;

const navbarVariants = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const imgVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: "easeInOut" } },
};

const sparkleVariants = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: [0.3, 1, 0.3], scale: [0.8, 1.5, 0.8], transition: { repeat: Infinity, duration: 2, ease: "easeInOut" } },
};

export default function Navbar() {
  const { favoritePokemons } = useContext(FavoriteContext);
  console.log(favoritePokemons);

  const imgBrand = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  const imgPoke = "https://cdn-icons-png.flaticon.com/128/188/188932.png";

  return (
    <motion.nav
      className="navbar"
      variants={navbarVariants}
      initial="initial"
      animate="animate"
    >
      {/* Sparkles */}
      <div className="navbar__sparkle-container">
        {[...Array(20)].map((_, i) => (  // Increase the number of sparkles here
          <motion.div
            key={i}
            className="navbar__sparkle"
            variants={sparkleVariants}
            initial="initial"
            animate="animate"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <picture>
        <motion.img
          src={imgBrand}
          alt="pokeApi-logo"
          className="navbar__brand"
          variants={imgVariants}
        />
      </picture>

      <picture>
        <motion.img
          src={imgPoke}
          alt="pokebola"
          className="navbar__pokebola"
          variants={imgVariants}
        />
        <span className="navbar__favorites-counter">{favoritePokemons.length}</span>
      </picture>
    </motion.nav>
  );
}
