import { NextResponse } from "next/server";
import { fetchPokemonsById } from "@/utils/fetchPokemon";

export async function GET() {
  try {
    const numArr = Array.from({ length: 151 }, (_, i) => i + 1);
    const results = await Promise.all(numArr.map(fetchPokemonsById));

    return NextResponse.json(results);
  } catch (error) {
    return NextResponse.json(
      { error: "포켓몬 데이터를 불러오는 데 실패했습니다." },
      { status: 500 }
    );
  }
}
