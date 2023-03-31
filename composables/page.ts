import { Page } from '~~/types/contentful'

export const usePage = async () => {
  const { path, matched } = useRoute()
  const matchedPath = matched?.[0]?.path
  const url = computed(
    () =>
      `/api/pages/find?slug=${
        matchedPath !== '/:slug(.*)*' ? matchedPath : path
      }`
  )

  const { data: page } = await useAsyncData<Page>(url.value, () =>
    $fetch(url.value)
  )

  if (!page.value) {
    throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
  }

  useHead({
    title: page.value?.title ?? 'KayMic Media & Entertainment',
  })

  return page
}
