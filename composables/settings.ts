import { Settings, SocialPlatform } from '~~/types/contentful'

const settings = reactive<Partial<Settings>>({})

export const useSiteSettings = () => {
  const init = async () => {
    const { data } = await useFetch('/api/settings')
    Object.assign(settings, data.value)
  }

  const logo = computed(() => settings.logo)

  const email = computed(() => settings.email!)

  const navigationItems = computed(
    () => settings.navigationCollection?.items ?? []
  )

  const footerNavigationItems = computed(
    () => settings.footerNavigationCollection?.items ?? []
  )

  const socialPlatforms = computed(
    () => settings.socialPlatformsCollection?.items ?? []
  )

  const sidebarItems = computed(() => settings.sidebarCollection?.items ?? [])

  const homeImages = computed(() => settings.homeImagesCollection?.items ?? [])

  return {
    init,
    settings,
    logo,
    email,
    socialPlatforms,
    navigationItems,
    footerNavigationItems,
    sidebarItems,
    homeImages,
  }
}
