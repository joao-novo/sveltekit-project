import type { PageLoad } from "./$types"

export const load = (() => {
  return {
    snippets: [
      {
        title: 'My Snippet',
        language: 'html',
        code: '<div>This is a div</div>',
        favorite: false
      }
    ]
  }
}) satisfies PageLoad;
