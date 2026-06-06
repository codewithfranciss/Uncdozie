import { defineQuery } from "next-sanity";

export const POSTS_QUERY = defineQuery(`
  *[_type == "post"] | order(publishedAt desc) {
    title,
    subtitle,
    "slug": slug.current,
    publishedAt
  }
`);

export const POST_QUERY = defineQuery(`
  *[_type == "post" && slug.current == $slug][0] {
    title,
    subtitle,
    "slug": slug.current,
    publishedAt,
    body
  }
`);

export const POST_SLUGS_QUERY = defineQuery(`
  *[_type == "post"] { "slug": slug.current }
`);
