import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const GeneralReviews = () => {
  const ratings = [
    { label: "FIVE", count: 989 },
    { label: "FOUR", count: 4500 },
    { label: "THREE", count: 50 },
    { label: "TWO", count: 16 },
    { label: "ONE", count: 8 },
  ];

  const reviews = [
    {
      name: "Robert Karmazov",
      text: "Auctor magnis proin vitae laoreet ultrices ultricies diam. Sed duis mattis cras lacus donec.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      stars: 4,
    },
    {
      name: "Jane Smith",
      text: "Sed duis mattis cras lacus donec. Aliquam erat volutpat donec suscipit.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      stars: 5,
    },
    {
      name: "David Miller",
      text: "Aliquam erat volutpat donec suscipit. Auctor magnis proin vitae laoreet ultrices ultricies.",
      image: "https://randomuser.me/api/portraits/men/41.jpg",
      stars: 4,
    },
  ];

  return (
    <div className="bg-gradient-to-r bg-white min-h-screen p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 text-gray-800">
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 max-w-6xl mx-auto">
        
        {/* Rating Summary */}
        <div className="grid md:grid-cols-2 gap-5 xs:gap-6 sm:gap-8">
          <div>
            {ratings.map((r, i) => (
              <div key={i} className="flex items-center mb-2 xs:mb-3">
                <span className="w-12 xs:w-14 sm:w-16 text-xs xs:text-sm font-medium">{r.label}</span>
                <FaStar className="text-yellow-400 mx-1 text-xs xs:text-sm" />
                <div className="flex-1 h-2 bg-gray-200 rounded mx-1 xs:mx-2">
                  <div
                    className="h-2 bg-yellow-400 rounded"
                    style={{ width: `${Math.min((r.count / 4500) * 100, 100)}%` }}
                  ></div>
                </div>
                <span className="text-xs xs:text-sm w-8 xs:w-10 text-right">{r.count}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-center items-center bg-yellow-50 rounded-lg xs:rounded-xl p-4 xs:p-5 sm:p-6 mt-4 xs:mt-5 md:mt-0">
            <h2 className="text-3xl xs:text-4xl font-bold text-yellow-500">4.3</h2>
            <div className="flex my-1 xs:my-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-lg xs:text-xl" />
              ))}
            </div>
            <p className="text-xs xs:text-sm text-gray-600">50 Ratings</p>
          </div>
        </div>

        {/* Feedback & Review Form */}
        <div className="grid md:grid-cols-2 gap-6 xs:gap-7 sm:gap-8 mt-8 xs:mt-10 sm:mt-12">
          
          {/* Recent Feedbacks */}
          <div>
            <h3 className="text-lg xs:text-xl font-semibold mb-3 xs:mb-4">Recent Feedbacks</h3>
            <div className="space-y-3 xs:space-y-4">
              {reviews.map((review, i) => (
                <div key={i} className="flex items-start space-x-3 xs:space-x-4 p-3 xs:p-4 bg-gray-50 rounded-lg shadow-sm">
                  <Image
                    src={review.image}
                    alt={review.name}
                    className="w-10 h-10 xs:w-12 xs:h-12 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <h4 className="font-semibold text-sm xs:text-base">{review.name}</h4>
                    <div className="flex">
                      {[...Array(5)].map((_, j) => (
                        <FaStar
                          key={j}
                          className={`${
                            j < review.stars ? "text-yellow-400" : "text-gray-300"
                          } text-xs xs:text-sm`}
                        />
                      ))}
                    </div>
                    <p className="text-xs xs:text-sm text-gray-600 mt-1 line-clamp-2">{review.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Add Review */}
          <div>
            <h3 className="text-lg xs:text-xl font-semibold mb-3 xs:mb-4">Add a Review</h3>
            <form className="space-y-3 xs:space-y-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    className="text-gray-300 hover:text-yellow-400 cursor-pointer text-lg xs:text-xl" 
                  />
                ))}
              </div>
              <input
                type="text"
                placeholder="Name *"
                className="w-full p-2 xs:p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm xs:text-base"
              />
              <input
                type="email"
                placeholder="Email *"
                className="w-full p-2 xs:p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm xs:text-base"
              />
              <textarea
                placeholder="Write Your Review *"
                rows="3"
                className="w-full p-2 xs:p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm xs:text-base"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#1e518e] to-[#0061b0ee] text-white py-2 xs:py-3 rounded-lg font-semibold hover:opacity-90 transition text-sm xs:text-base"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralReviews;