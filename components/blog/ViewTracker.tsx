"use client";

import { useEffect, useState } from "react";
import { EyeIcon } from "lucide-react";
import { incrementViews } from "@/sanity/lib/actions";

export function ViewTracker({
  postId,
  initialViews,
}: {
  postId: string;
  initialViews: number;
}) {
  const [views, setViews] = useState(initialViews);

  useEffect(() => {
    incrementViews(postId).then(setViews);
  }, [postId]);

  return (
    <div className="flex items-center justify-center gap-2 font-mono text-xs sm:text-sm text-stone-500">
      <EyeIcon size={14} strokeWidth={1.5} />
      <span>
        you are the{" "}
        <span className="text-[#d4a574]">{views}</span>{" "}
        {views === 1 ? "visitor" : "visitors"}
      </span>
    </div>
  );
}
