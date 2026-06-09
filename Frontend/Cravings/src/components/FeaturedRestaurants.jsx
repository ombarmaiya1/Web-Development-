import RestaurantsCard from "./RestaurantsCard";

function FeaturedRestaurants() {
  const restaurants = [
    {
      image:
        "https://res.cloudinary.com/dpl3xwf1z/image/upload/v1775671325/restaurants/69c58f340d577beee548c195/njneiftngfspzpn2wdig.avif",
      name: "Under The Mango Tree",
      description:
        "Enjoy the thrill of grill and barbecue at Under The Mango Tree restaurant at Jehan Numa Palace, Bhopal.",
      cuisines: ["Indian", "Chinese", "Italian"],
     
    },
    {
      image:
        "https://res.cloudinary.com/dpl3xwf1z/image/upload/v1774557305/restaurants/69c58f4b0d577beee548c198/fpdlv1viy4gucm1vrh7u.webp",
      name: "Raj Darbar",
      description:
        "Raj Darbar is a one-of-a-kind Indian restaurant that offers a unique dining experience.",
      cuisines: ["Indian", "Chinese", "Italian"],
     
    },
    {
      image:
        "https://res.cloudinary.com/dpl3xwf1z/image/upload/v1774557446/restaurants/69c590150d577beee548c19b/htwjijdrr2gbjdaf355s.webp",
      name: "Countryside Culture",
      description:
        "A hidden gem away from the city, offering lush green meadows and peaceful walking paths.",
      cuisines: ["Indian", "Chinese"],
    
    },
  ];

  return (

    <div className="py-10 px-35 bg-gradient-to-b from-[#d15a32] via-[#ec824a] to-[#fffffe]">
        <h1 className="text-3xl font-bold flex justify-start text-white">Featured Restaurants</h1>
        <p className="py-1 text-white">3 restaurants available</p>
        
        <div className="flex flex-wrap gap-8 justify-center py-8">
      {restaurants.map((restaurant, index) => (
        <RestaurantsCard
          key={index}
          image={restaurant.image}
          name={restaurant.name}
          description={restaurant.description}
          cuisines={restaurant.cuisines}
        />
      ))}
    </div>
    </div>
    
  );
}

export default FeaturedRestaurants;