"use client";

import { useEffect, useState } from "react";
import { EyeIcon } from "lucide-react";
import { incrementSiteViews } from "@/sanity/lib/actions";

export function SiteViewTracker({ initialViews }: { initialViews: number }) {
  const [views, setViews] = useState(initialViews);

  useEffect(() => {
    incrementSiteViews().then(setViews);
  }, []);

  return (
    <div className="flex items-center justify-center gap-2 font-mono text-xs sm:text-sm text-stone-500">
      <EyeIcon size={14} strokeWidth={1.5} />
      <span>
        you are the <span className="text-[#d4a574]">{views}</span> visitor
      </span>
    </div>
  );
}
