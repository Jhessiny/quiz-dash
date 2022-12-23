const baseURL = import.meta.env.VITE_API_URL as string

export const makeApiUrl = (route: string) => `${baseURL}/${route}`

export const urlWithParamsFactory = (route: string) => {
  return (params: Record<string, string | number>) => {
    let routeWithParams = route

    for (const key in params) {
      routeWithParams = routeWithParams.replace(`{${key}}`, params[key].toString())
    }
    return `${baseURL}/${routeWithParams}`
  }
}
