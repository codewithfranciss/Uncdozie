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

export async function incrementSiteViews(): Promise<number> {
  await writeClient.createIfNotExists({
    _id: "siteStats",
    _type: "siteStats",
    totalViews: 0,
  });

  const updated = await writeClient
    .patch("siteStats")
    .inc({ totalViews: 1 })
    .commit();

  return (updated as { totalViews?: number }).totalViews ?? 0;
}
