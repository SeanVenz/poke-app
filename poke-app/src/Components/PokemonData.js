export const PokemonData = ({ pokemon }) => {
  const { types, abilities, height } = pokemon;

  return (
    <div className="poke-data">
      <h1>Pokemon Data</h1>
      <h2>{pokemon.name}</h2>
      <h3>Types:</h3>
      <ul>
        {types.map((type, index) => (
          <li key={index}>{type.type.name}</li>
        ))}
      </ul>
      <h3>Abilities:</h3>
      <ul>
        {abilities.map((ability, index) => (
          <li key={index}>{ability.ability.name}</li>
        ))}
      </ul>
      <h3>Height:</h3>
      <p>{height}</p>
    </div>
  );
};
