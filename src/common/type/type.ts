export type StatusType = 'loading' | 'received' | 'rejected' | 'idle'

export type APIResponseType =  {
    flags: {
        svg: string
        png: string
    }
    name: string
    population: number
    region: string
    capital: string
}

export type CountriesType =  {
    status: StatusType
    error: string | null
    list: APIResponseType[]
}