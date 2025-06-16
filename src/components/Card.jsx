import { useEffect, useState, memo } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

function Card({ pokemon }) {
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!pokemon.front) setLoaded(false);
  }, [pokemon.front]);

  return (
    <section
      className="px-2 flex flex-col flex-grow items-center bg-[#f2f6f8] hover:bg-teal-100 hover:cursor-pointer"
      onClick={() => router(`/detail/${pokemon.id}`)}
    >
      <div className="w-full h-12 flex items-center justify-center text-3xl font-black border-b-2 border-black">
        NO.{(pokemon.id + "").padStart(3, "0")}
      </div>
      <div className="w-full h-12 flex items-center justify-center text-xl font-black border-b-2 border-black">
        {pokemon.name}
      </div>
      <div className="relative m-4 w-full h-40">
        {!loaded && (
          <div className="absolute top-0 left-0 w-full h-full bg-gray-200 animate-pulse rounded" />
        )}
        {pokemon.front && (
          <Image
            fill
            className={`w-full h-full object-contain transition-opacity duration-200 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
            src={pokemon.front}
            onLoad={() => setLoaded(true)}
            alt="Pokemon"
          />
        )}
      </div>
    </section>
  );
}

export default memo(Card);
