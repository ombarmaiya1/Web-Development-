import ReviewCard from "./ReviewCard";

function ReviewSection() {
  const reviews = [
    {
      title: "Amazing Service!",
      review:
        "The food arrived hot and fresh. The delivery was incredibly fast. Highly impressed with Cravings' service!",
      name: "Arun J.",
      initials: "AJ",
      avatarColor: "bg-orange-700",
    },
    {
      title: "Best App Ever!",
      review:
        "Easy to use interface, wide variety of restaurants, and quick delivery. I order from Cravings every week!",
      name: "Sneha P.",
      initials: "SP",
      avatarColor: "bg-pink-500",
    },
    {
      title: "Excellent Choices",
      review:
        "Love the variety of restaurants available. Found my new favorite spot through Cravings. Definitely worth it!",
      name: "Raj Kumar",
      initials: "RK",
      avatarColor: "bg-orange-700",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-orange-900">
            What Our Customers Say
          </h2>

          <p className="text-xl text-gray-600 mt-4">
            Real feedback from real food lovers
          </p>
        </div>

        {/* Reviews */}
        <div className="flex flex-wrap justify-center gap-8">
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              {...review}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default ReviewSection;