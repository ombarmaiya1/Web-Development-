import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <>
      <div
        className="
        // min-h-[calc(75vh-68px)]
        bg-[url('https://cravings.ricr.in/assets/bgImage4-L1QELaMd.jpg')]
        bg-cover
        bg-center
        bg-no-repeat
        flex
        items-start
        justify-center
        px-4
        md:px-20
      "
      >
        <div className="flex flex-col p-20 gap-8">
          <h1 className="text-5xl text-center text-white font-extrabold">
            Your Favorite Food,
            <br />
            Delivered Fast
          </h1>
          <p className="text-white  text-xl font-normal">
            Order from thousands of restaurants and get it delivered to your
            doorstep
          </p>
          <div className="flex justify-center gap-10">
            <Link to={'/register'} className="bg-[#B83D0F] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition">
              Sign Up
            </Link>
            <Link to={'/order-now'} className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition">
              Order Now
            </Link>
          </div>
          <div class="flex items-center  rounded-lg px-4 py-3 w-full mx-auto bg-white">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class=" text-xl mr-3"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M456.69 421.39 362.6 327.3a173.81 173.81 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3zM97.92 222.72a124.8 124.8 0 1 1 124.8 124.8 124.95 124.95 0 0 1-124.8-124.8z"></path>
            </svg>
            <input
              placeholder="Search restaurants or dishes...."
              class=" w-full outline-none bg-white text-black text-xl "
              type="text"
              value=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
