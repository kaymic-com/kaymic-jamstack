import { defineNuxtModule, addPrerenderRoutes } from '@nuxt/kit'
// import { graphqlClient } from '../server/utils/graphql'
// import { Query } from '~~/types/contentstack'

// const contentTypes: (keyof Query)[] = [
// ]

export default defineNuxtModule({
  async setup(_options, nuxt) {
    if (true) return // disabled for now
    // if (nuxt.options.dev) return

    // console.log('Adding Contentstack Page-Like routes...')

    // const data = await graphqlClient<
    //   Record<string, { total: number; items: { url: string }[] }>
    // >({
    //   query: query(contentTypes),
    // })

    // const paths = Object.entries(data)
    //   .flatMap(([_k, v]) => v.items)
    //   .map((i) => i.url)

    // addPrerenderRoutes(paths)
  },
})

/**
 *
 * @param cts
 * @returns
 */
function query(cts: string[]): string {
  return [
    //
    `query {`,
    ...cts.map((c) => `${c} { total items { url } }`),
    `}`,
  ].join(' ')
}
