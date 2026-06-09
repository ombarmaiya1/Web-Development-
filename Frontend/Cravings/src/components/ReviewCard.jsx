function ReviewCard({
  title,
  review,
  name,
  initials,
  avatarColor,
}) {
  return (
    <div className="bg-[#f7f1eb] rounded-xl shadow-md p-6 w-80">
      
      {/* Stars */}
      <div className="text-xl text-yellow-500 mb-4">
        ⭐⭐⭐⭐⭐
      </div>

      {/* Review Title */}
      <h3 className="text-2xl font-semibold mb-4">
        {title}
      </h3>

      {/* Review Text */}
      <p className="text-gray-700 text-base leading-relaxed mb-8">
        "{review}"
      </p>

      {/* User */}
      <div className="flex items-center gap-4">
        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl ${avatarColor}`}
        >
          {initials}
        </div>

        <div>
          <h4 className="font-semibold text-base">
            {name}
          </h4>

          <p className="text-gray-600">
            Verified Buyer
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;