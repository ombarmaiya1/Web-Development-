function StatsCard({ value, title, description, color }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-center w-60 hover:-translate-y-1 transition">
      <h2 className={`text-5xl font-bold ${color}`}>
        {value}
      </h2>

      <h3 className="text-xl font-semibold mt-3">
        {title}
      </h3>

      <p className="text-gray-600 text-sm mt-2 py-3 w-50">
        {description}
      </p>
    </div>
  );
}

export default StatsCard;