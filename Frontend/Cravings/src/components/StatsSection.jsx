import StatsCard from "./StatsCard";
import { stats } from "../data/statsData";
function StatsSection() {
  


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