export type PageProps<
  Params = Record<string, string>,
  SearchParams = Record<string, string>
> = {
  params: Params
  searchParams: SearchParams
}

export type PageStoreSearchParams = {
  search?: string
  category?: string
}

export type PageProductParams = {
  id: number
}
