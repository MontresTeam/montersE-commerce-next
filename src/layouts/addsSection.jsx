import React from "react";
import WatchNew from "../assets/30193.jpg";
import Image from "next/image";

const WatchImages = () => {
  return (
    <div className="bg-gray-100 min-h-[100px] py-8">
      <div className="max-w-[1536px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* LEFT IMAGE */}
          <div className="flex items-center justify-center">
            <Image
              src={WatchNew}
              alt="Classic Watch"
              className="w-full h-auto max-h-[70vh] object-contain drop-shadow-lg"
            />
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex items-center justify-center relative">
            <Image
              src={WatchNew}
              alt="Luxury Watch"
              className="w-full h-auto max-h-[70vh] object-contain drop-shadow-xl"
            />

            {/* Floating Gold Coin Decorations */}
            <div className="absolute top-8 left-8 w-12 h-12 bg-yellow-500 rounded-full opacity-70 blur-xl"></div>
            <div className="absolute top-20 right-20 w-16 h-16 bg-yellow-600 rounded-full opacity-60 blur-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchImages;
