// import { FaStar } from "react-icons/fa";

function ProductCard({
  title,
  price,
  description,
  category,
  image,
  rating,
}) {
  return (
   <div className="flex justify-center items-center">
     <div className="w-80 bg-sky-100 rounded-xl">
     
      <div className="h-70 p-4 bg-sky-300">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="p-5">
        <span className="inline-block px-3 py-1 text-sm font-medium bg-amber-300 text-black rounded-full mb-3">
          {category}
        </span>

        <h2 className="font-bold text-lg  mb-3">
          {title}
        </h2>

        <p className="text-black text-sm mb-4">
          {description}
        </p>

        <div className=" items-center justify-between mb-4">
          <span className="text-2xl font-bold text-sky-500">
            ${price}
          </span>

          <div className="">
            {/* <FaStar className="text-yellow-400" /> */}
            <span>{rating.rate}</span>
            <span className="text-gray-400 text-sm">
              ({rating.count})
            </span>
          </div>
        </div>

        <button className="w-full py-3 bg-sky-500 hover:bg-sky-800 text-white rounded-lg font-medium transition">
          Add to Cart
        </button>
      </div>
    </div>
   </div>
  );
}

export default ProductCard;