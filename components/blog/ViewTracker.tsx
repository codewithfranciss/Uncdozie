"use client";

import { useEffect, useState } from "react";
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
    <div className="font-mono text-xs text-stone-600">{views}</div>
  );
}
