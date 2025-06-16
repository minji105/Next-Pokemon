"use client";
import { useEffect, useState } from "react";
import Card from "@/components/Card";

export default function Home() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    fetch("/api/pokemon")
      .then((res) => res.json())
      .then((data) => setPokemonData(data))
      .catch((err) => console.error(err));
  }, []);

  if (!pokemonData)
    return (
      <div className="my-[80px] flex justify-center text-5xl">Loading...</div>
    );

  return (
    <div className="grid grid-cols-2 gap-[2px] bg-black md:grid-cols-4 lg:grid-cols-6">
      {pokemonData.map((el) => (
        <Card key={el.id} pokemon={el} />
      ))}
    </div>
  );
}
