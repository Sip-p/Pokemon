import React, { createContext, useEffect, useState } from "react";

export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favoritePokemons, setFavoritePokemons] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false); // State to toggle favorite view

  // Load from localStorage on initial render
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favoritePokemons");
    if (storedFavorites) {
      setFavoritePokemons(JSON.parse(storedFavorites));
    }
  }, []);

  // Save to localStorage whenever the favorites change
  useEffect(() => {
    if (favoritePokemons.length > 0) {
      localStorage.setItem("favoritePokemons", JSON.stringify(favoritePokemons));
    }
  }, [favoritePokemons]);

  // Add or remove Pokemon from favorites
  const updateFavoritePokemon = (pokemon) => {
    const isAlreadyFavorite = favoritePokemons.some(
      (fav) => fav.name === pokemon.name
    );

    if (isAlreadyFavorite) {
      setFavoritePokemons((prev) =>
        prev.filter((fav) => fav.name !== pokemon.name)
      );
    } else {
      setFavoritePokemons((prev) => [...prev, pokemon]);
    }
  };

  // Toggle show favorites
  const toggleShowFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  return (
    <FavoriteContext.Provider value={{ favoritePokemons, updateFavoritePokemon, showFavorites, toggleShowFavorites }}>
      {children}
    </FavoriteContext.Provider>
  );
};
