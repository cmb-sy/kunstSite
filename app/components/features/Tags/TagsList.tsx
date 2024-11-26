"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Tags } from "@/app/lib/types/tags";

const TagLists = () => {
  const [_, setSelectedTag] = useState<string | null>(null);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const tag = e.target.value;
    setSelectedTag(tag);
    router.push(`/tags/${tag}/1`);
  };

  return (
    <select
      className="w-full max-w-md px-4 py-2 mt-5 rounded bg-white text-gray-800 dark:bg-darkModeItemBg dark:text-darkModeFontColor"
      onChange={handleChange}
      defaultValue=""
    >
      <option value="" disabled>
        タグ
      </option>
      {Tags.map((tag, index) => (
        <option key={index} value={tag}>
          {tag}
        </option>
      ))}
    </select>
  );
};

export default TagLists;
