export interface RequestOptions {
  method?: string,
  url: string,
  params?: string | any,
  headers?: any
}

export function makeRequest<T extends {}>(opts: RequestOptions): Promise<T>;