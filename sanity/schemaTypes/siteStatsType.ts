import { defineField, defineType } from 'sanity'

export const siteStatsType = defineType({
  name: 'siteStats',
  title: 'Site Stats',
  type: 'document',
  fields: [
    defineField({
      name: 'totalViews',
      title: 'Total Views',
      type: 'number',
      initialValue: 0,
    }),
  ],
})
