"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Header() {
  const router = useRouter();
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(headerRef.current.getBoundingClientRect().top === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      ref={headerRef}
      className="grid sticky top-0 bg-[#f2f6f8] z-50 border-b-2 border-black
                  md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_2fr]"
    >
      <div className="col-span-1 flex justify-center items-center border-b-2 md:border-b-0 md:border-r-2 border-black">
        <h1 className="p-2 text-7xl font-black">
          <Link href="/" onClick={handleScrollTop}>
            pokemon
          </Link>
        </h1>
      </div>
      <div className="flex flex-col text-2xl md:text-3xl lg:text-3xl">
        <div className="px-4 py-2 md:py-4 lg:py-4 flex-grow flex items-center justify-end border-b-2 border-black">
          <Link href="/favorite" className="hover:underline">
            Go to Wishlist →
          </Link>
        </div>
        <div className="px-4 py-2 md:py-4 lg:py-4 flex-grow flex gap-4 justify-between items-center ">
          Search
          <input
            type="text"
            className="w-full bg-transparent border-b-2 border-black outline-none font-jersey text-xl"
            onChange={(e) => router(`/search?pokemon=${e.target.value}`)}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
