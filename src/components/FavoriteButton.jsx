import { useState } from "react";

function FavoriteButton({ pokemonId, position }) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <button
      className={`w-7 absolute z-30 ${position}`}
      onClick={(e) => {
        e.stopPropagation();
        setIsFavorite((prev) => !prev);
      }}
    >
      {isFavorite ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 20 20"
          fill="red"
          className="fill-red-500 stroke-black"
          data-mds="IcBoldLikeFilled"
        >
          <path
            d="M9.79493 16.3061C9.91046 16.4154 10.0895 16.4154 10.2051 16.3061C11.1045 15.4553 14.7235 12.0265 16.25 10.5C16.8895 9.85325 17.5 8.75 17.5 7.5C17.5 5.34156 15.8342 3.5 13.75 3.5C11.9105 3.5 11 4.99545 10 6.25C9 4.99545 8.08947 3.5 6.25 3.5C4.16579 3.5 2.5 5.34156 2.5 7.5C2.5 8.75 3.11053 9.85325 3.75 10.5C5.27651 12.0265 8.89549 15.4553 9.79493 16.3061Z"
            fill=""
            stroke=""
            className="stroke-red fill-red"
            strokeMiterlimit="10"
            data-mds="IcBoldLikeFilled"
            vectorEffect="non-scaling-stroke"
          ></path>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 20 20"
          fill="none"
          className=""
          data-mds="IcBoldLike"
        >
          <path
            d="M9.79493 16.3061C9.91046 16.4154 10.0895 16.4154 10.2051 16.3061C11.1045 15.4553 14.7235 12.0265 16.25 10.5C16.8895 9.85325 17.5 8.75 17.5 7.5C17.5 5.34156 15.8342 3.5 13.75 3.5C11.9105 3.5 11 4.99545 10 6.25C9 4.99545 8.08947 3.5 6.25 3.5C4.16579 3.5 2.5 5.34156 2.5 7.5C2.5 8.75 3.11053 9.85325 3.75 10.5C5.27651 12.0265 8.89549 15.4553 9.79493 16.3061Z"
            strokeWidth="1.4"
            strokeMiterlimit="10"
            className="stroke-black"
            data-mds="IcBoldLike"
            vectorEffect="non-scaling-stroke"
          ></path>
        </svg>
      )}
    </button>
  );
}

export default FavoriteButton;
