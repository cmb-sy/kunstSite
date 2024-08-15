import React from "react";
import Image from "next/image";

const ProfileCard = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto">
      <div className="flex justify-center">
        <Image
          src="/profile.jpg"
          alt="Profile"
          className="rounded-full"
          width={72}
          height={72}
          priority
        />
      </div>
      <h2 className="text-2xl font-semibold text-center mt-4 text-gray-800">
        kunst
      </h2>
      <p className="text-gray-600 text-center mt-2">暇人の極み</p>
    </div>
  );
};

export default ProfileCard;
