export type NavigationLink = {
    label: string,
    url: string
}

export type NavigationLinkDetails = {
    links: NavigationLink[],
    isSettingsEnabled: boolean,
    isLogoutEnabled: boolean,
    isLogoPresent: boolean,
    isMainMenu: boolean
}