// Icons
import { RiShoppingCartLine, RiStarFill } from "@remixicon/react";

// Components
import Button from "../atom/Button";

type CardProductProps = {
  title: string;
  price: number;
  image: string;
  rating: number;
  ratingCount?: number;
  onAddToCart?: () => void;
};
export default function CardPrduct({
  title,
  price,
  image,
  rating,
  ratingCount,
  onAddToCart,
}: CardProductProps) {
  return (
    <article className="flex flex-col rounded-xl bg-white p-3 shadow-xs transition hover:shadow-md md:p-4">
      {/* Gambbar  */}
      <div className="mb-6 flex h-40 w-full items-center justify-center overflow-hidden md:h-48">
        <img
          src={image}
          alt=""
          className="h-full object-contain transition hover:scale-105"
        />
      </div>

      {/* Content */}
      <div>
        {/* Rating */}
        <div className="mb-2 flex items-center gap-2 text-sm">
          {/* Wrap Start Rating */}
          <div className="flex gap-1.5">
            <div>
              <RiStarFill size={20} color="#fdc700" />
            </div>
            <div>
              <RiStarFill size={20} color="#fdc700" />
            </div>
            <div>
              <RiStarFill size={20} color="#fdc700" />
            </div>
            <div>
              <RiStarFill size={20} color="#fdc700" />
            </div>
            <div>
              <RiStarFill size={20} color="#fdc700" />
            </div>
          </div>
          {/* End Wrap Start Rating */}
          <p className="text-lg text-gray-900">{rating}</p>
        </div>
        {/* End Rating */}

        {/* Title */}
        <h3 className="mb-4 line-clamp-3 text-sm font-semibold text-gray-900 md:text-base lg:text-xl">
          {title}
        </h3>

        <div className="flex items-center justify-between">
          {/* Price */}
          <p className="mb-2 text-lg font-bold text-gray-500">Rp. {price}</p>

          {/* Cart Button */}
          <Button
            variant="secondary"
            onClick={onAddToCart}
            icons={<RiShoppingCartLine size={20} color="#fff" />}
          >
            Cart
          </Button>
        </div>
      </div>
      {/* End Content */}
    </article>
  );
}
