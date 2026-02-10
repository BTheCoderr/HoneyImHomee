import React, { useState } from 'react';

/**
 * Artisanal Menu Card - mimics IG menu flyers
 * Includes: Price Badge ($12 or 3 for $40), descriptive header (e.g. "Worth the Wait"),
 * layout for high-quality food photography
 */
const ArtisanalMenuCard = ({ meal, price, portionSize, addToCart }) => {
  const [imageError, setImageError] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      ...meal,
      price: parseFloat(price),
      portionSize,
    });
  };

  const encodedImageSrc = meal.image
    ? meal.image
        .split('/')
        .map((part, index, arr) =>
          index === arr.length - 1 ? encodeURIComponent(part) : part
        )
        .join('/')
    : '';

  return (
    <article
      className="group bg-white rounded-2xl overflow-hidden border border-honey-rose-muted shadow-soft hover:shadow-cozy-lg transition-all duration-400 card-hover-lift flex flex-col"
    >
      {/* Photo area - IG flyer style, emphasis on food */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-honey-rose-muted to-honey-sage-muted">
        {imageError ? (
          <div className="w-full h-full flex items-center justify-center text-honey-sage-deep font-serif">
            <span className="text-lg">Meal Photo</span>
          </div>
        ) : (
          <img
            src={encodedImageSrc}
            alt={meal.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImageError(true)}
            loading="lazy"
          />
        )}
        {/* Price badge - corner like IG flyer */}
        <div className="absolute top-4 right-4 flex flex-col items-end gap-1">
          <span className="bg-honey-rose text-white px-4 py-2 rounded-lg font-bold text-lg shadow-md">
            ${price || '12'}
          </span>
          {meal.dealText && (
            <span className="bg-honey-sage text-white px-3 py-1.5 rounded-md text-sm font-semibold">
              {meal.dealText}
            </span>
          )}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        {/* Descriptive header - Serif, dish name */}
        <h3 className="font-serif text-2xl font-bold text-honey-charcoal mb-2">
          {meal.name}
        </h3>
        <p className="text-honey-charcoal-light text-sm leading-relaxed mb-4 flex-grow">
          {meal.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {meal.tags?.map((tag) => (
            <span
              key={tag}
              className="bg-honey-sage-muted text-honey-sage-deep px-3 py-1 rounded-full text-xs font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>

        {meal.allergens?.length > 0 && (
          <p className="text-honey-rose-deep text-xs mb-4 flex items-center gap-1">
            <span aria-hidden="true">⚠</span> Contains: {meal.allergens.join(', ')}
          </p>
        )}

        <button
          onClick={handleAddToCart}
          className="mt-auto w-full bg-honey-sage hover:bg-honey-sage-deep text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-sage focus:outline-none focus:ring-2 focus:ring-honey-sage focus:ring-offset-2"
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
};

export default ArtisanalMenuCard;
