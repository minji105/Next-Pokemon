import { NextResponse } from "next/server";
import { fetchPokemonsById } from "@/utils/fetchPokemon";

export async function GET(_, { params }) {
  const id = Number(params.pokemonID);

  try {
    const pokemon = await fetchPokemonsById(id);

    return NextResponse.json(pokemon);
  } catch (error) {
    return NextResponse.json(
      { error: "포켓몬 데이터를 불러오는 데 실패했습니다." },
      { status: 500 }
    );
  }
}
