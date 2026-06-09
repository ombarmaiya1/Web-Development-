import StatsCard from "./StatsCard";

function StatsSection() {
  const stats = [
    {
      value: "2.5M+",
      title: "Deliveries",
      description: "Orders delivered with care and precision",
      color: "text-orange-700",
    },
    {
      value: "500K+",
      title: "Happy Customers",
      description: "Satisfied users enjoying delicious food",
      color: "text-pink-500",
    },
    {
      value: "5K+",
      title: "Partner Restaurants",
      description: "Restaurants serving amazing cuisine",
      color: "text-orange-700",
    },
    {
      value: "1K+",
      title: "Active Delivery Partners",
      description: "Riders ensuring quick and safe delivery",
      color: "text-pink-500",
    },
  ];

  return (
    <section className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-orange-900">
            Cravings by the Numbers
          </h2>

          <p className="text-2xl text-gray-600 mt-3">
            Trusted by food lovers across the city
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default StatsSection;