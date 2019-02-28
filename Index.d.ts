export interface RequestOptions {
  method?: string,
  url: string,
  params?: string | any,
  headers?: any
  body?:any;
}

export function makeRequest<T extends {}>(opts: RequestOptions): Promise<T>;