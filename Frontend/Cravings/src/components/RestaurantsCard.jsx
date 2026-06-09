function RestaurantsCard({
  image,
  name,
  description,
  cuisines,
}) {
  return (
    <div className="bg-white flex flex-col justify-evenly rounded-2xl shadow-lg overflow-hidden w-[360px]">
      
      {/* Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-50 object-cover"
      />

      {/* Content */}
      <div className="p-2">
        <h2 className="text-l font-bold mb-1">
          {name}
        </h2>

        <p className="text-gray-700 mb-2">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {cuisines.map((cuisine, index) => (
            <span
              key={index}
              className="bg-amber-100 px-3 py-1 rounded-md"
            >
              {cuisine}
            </span>
          ))}
        </div>
        <div className="flex items-end"><button className="w-full  bg-orange-700 text-white py-1 rounded-xl hover:bg-orange-800 transition">
          Explore Menu
        </button></div>
      </div>
    </div>
  );
}

export default RestaurantsCard;