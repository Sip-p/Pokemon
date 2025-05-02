import React from "react";
import "./Comparision.scss";  // If you have styles for the modal

const ComparisionModel = ({ pokemon1, pokemon2, closeModal }) => {
  if (!pokemon1 || !pokemon2) return null;

  return (
    <div className="comparison-modal">
      <h2>Pokémon Comparison</h2>
      <table>
        <thead>
          <tr>
            <th>Stat</th>
            <th>{pokemon1.name}</th>
            <th>{pokemon2.name}</th>
          </tr>
        </thead>
        <tbody>
          {pokemon1.stats.map((stat, index) => (
            <tr key={stat.stat.name}>
              <td>{stat.stat.name}</td>
              <td
                className={stat.base_stat > pokemon2.stats[index].base_stat ? "highlight" : ""}
              >
                {stat.base_stat}
              </td>
              <td
                className={pokemon2.stats[index].base_stat > stat.base_stat ? "highlight" : ""}
              >
                {pokemon2.stats[index].base_stat}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={closeModal}>Close</button>
    </div>
  );
};

export default ComparisionModel;
