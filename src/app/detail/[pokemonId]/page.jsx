"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import FavoriteButton from "@/components/FavoriteButton";

export default function Detail({ params }) {
  const [pokemon, setPokemon] = useState(null);
  const [flipped, setFlipped] = useState(false);
  const pokemonId = Number(params.pokemonId);

  useEffect(() => {
    if (!pokemonId) return;
    console.log(pokemonId);

    fetch(`/api/pokemon/${pokemonId}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data))
      .catch((err) => console.error(err));
  }, [pokemonId]);

  if (!pokemon)
    return (
      <div className="my-[80px] flex justify-center text-5xl">Loading...</div>
    );

  return (
    <div className="relative grid md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr]">
      <div className="basis-1/2 p-12 flex flex-col items-center border-b-2 md:border-b-0 md:border-r-2 border-black">
        <FavoriteButton position={"top-4 left-4"} />
        <div className="w-full perspective-800">
          <div
            className={`relative w-full aspect-square transition-transform duration-500 transform-style preserve-3d transform-3d ${
              flipped ? "rotate-y-180" : ""
            }`}
          >
            <Image
              fill
              className="w-full backface-hidden"
              src={pokemon.front}
              alt={`${pokemon.name} front`}
            />
            <Image
              fill
              className="w-full absolute top-0 backface-hidden rotate-y-180"
              src={pokemon.back}
              alt={`${pokemon.name} back`}
            />
          </div>
        </div>

        <button
          className="w-min bg-black py-2 px-4 text-white text-2xl rounded-3xl border-2 border-black
                      hover:bg-transparent hover:text-black active:bg-yellow-300"
          onClick={() => setFlipped((prev) => !prev)}
        >
          click
        </button>
      </div>

      <div className="basis-1/2 px-4">
        <p className="border-b-2 border-black py-4 text-xl font-semibold">
          전국: <span className="text-2xl font-thin">{pokemon.id}</span>
        </p>
        <p className="border-b-2 border-black py-4 text-xl font-semibold">
          이름: {pokemon.name}
        </p>
        <p className="border-b-2 border-black py-4 text-xl font-semibold">
          분류: {pokemon.genera}
        </p>
        <div className="py-4">
          {pokemon.description.map((line, i) => (
            <p key={i} className="text-xl font-semibold">
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
