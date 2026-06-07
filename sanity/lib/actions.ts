"use server";

import { writeClient } from "./write-client";

export async function incrementViews(postId: string): Promise<number> {
  const updated = await writeClient
    .patch(postId)
    .setIfMissing({ views: 0 })
    .inc({ views: 1 })
    .commit();

  return (updated as { views?: number }).views ?? 0;
}
