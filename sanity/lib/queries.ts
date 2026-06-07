import { defineQuery } from "next-sanity";

export const POSTS_QUERY = defineQuery(`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    subtitle,
    "slug": slug.current,
    publishedAt,
    views
  }
`);

export const POST_QUERY = defineQuery(`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    subtitle,
    "slug": slug.current,
    publishedAt,
    views,
    body
  }
`);

export const POST_SLUGS_QUERY = defineQuery(`
  *[_type == "post"] { "slug": slug.current }
`);
