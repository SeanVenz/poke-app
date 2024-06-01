export const PokemonCard = (props) => {
  const { id, name, handlePokeNameClick } = props;

  return (
    <div className="pokemons ma1 tc dib">
      <img
        className="pokeimage"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt=""
        width="160px"
        height="160px"
        onClick={() => handlePokeNameClick(name)}
      />
      <br />
      <div className="pokenames tc dib pa1">{name}</div>
    </div>
  );
};
