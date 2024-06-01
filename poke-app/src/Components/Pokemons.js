import { useState } from "react";
import axios from "axios";
import { Btn } from "./Btn";
import { PokemonData } from "./PokemonData";
import { usePokeApiSemiPersistentState } from "./utils/apiPersistentState";
import { PokemonCard } from "./PokemonCard";
import { Header } from "./Header";

export const Pokemons = () => {
  const randomNumWhenLoad = () => {
    return Math.floor(Math.random() * 1000);
  };

  const handleRandomGeneration = () => {
    const random = Math.floor(Math.random() * 1000);
    setRandNum(random);
  };

  const handleIncreaseLimit = () => {
    setLimit(limit + 1);
  };

  const [limit, setLimit] = useState(5);
  const [randNum, setRandNum] = useState(randomNumWhenLoad);
  const [selectedPokemon, setSelectedPokemon] = useState();
  const [pokemons] = usePokeApiSemiPersistentState(
    [],
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${randNum}`
  );

  let index = randNum;

  const handlePokeNameClick = async (pokemonName) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        setSelectedPokemon(response.data)
      })
      .catch(console.log("Error"));
  };

  return (
    <div>
      <Header></Header>
      <div className="pokemon-container">
        {pokemons.map((pokemon) => (
          <PokemonCard
            id={(index += 1)}
            key={index}
            name={pokemon.name}
            handlePokeNameClick={handlePokeNameClick}
          ></PokemonCard>
        ))}
      </div>
      <div className="btn-parent">
        <Btn
          size={"lg"}
          variant={"outline-success"}
          onClick={handleIncreaseLimit}
          string={"Increase Pokemon Limit"}
        ></Btn>
        <Btn
          className="refresh"
          size={"lg"}
          variant={"outline-primary"}
          onClick={handleRandomGeneration}
          string={"Refresh Pokemon List"}
        ></Btn>
      </div>
      <div className="pokemon-data">
        {selectedPokemon && <PokemonData pokemon={selectedPokemon} />}
      </div>
    </div>
  );
};
